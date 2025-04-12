import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/store';
import { fetchUsers, deleteUser, createUser, updateUser } from './app/users/user.thunk';
import { fetchDepartamentos } from './app/departamento/departamento.thunk';
import { selectAllUsers } from './app/users/user.selector';
import { selectAllDepartamentos } from './app/departamento/departamento.selector';
import './App.css';
import Modal from './components/modal';
import { UserInterface } from './Interfaces/UserInterface';
import { selectAllCargos } from './app/cargo/cargo.selector';
import { fetchCargos } from './app/cargo/cargo.thunk';

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const cargos = useAppSelector(selectAllCargos);
  const departamentos = useAppSelector(selectAllDepartamentos);
  const [selectedDepartamento, setSelectedDepartamento] = useState<number | null>(null);
  const [selectedCargo, setSelectedCargo] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInterface | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Número de items por página

  useEffect(() => {
    dispatch(fetchCargos());
  }, [dispatch]);

  // Manejadores para el modal
  const handleOpenModal = (user = null) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchDepartamentos());
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Está seguro de eliminar este usuario?')) {
      try {
        await dispatch(deleteUser(id));
        dispatch(fetchUsers());
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        // Aquí puedes agregar una notificación de error
      }
    }
  };

  const filteredUsers = users?.filter(user => {
    const matchDepartamento = !selectedDepartamento || user.id_departamento === selectedDepartamento!;
    const matchCargo = !selectedCargo || user.id_cargo === selectedCargo!;
    return matchDepartamento && matchCargo;
  });

  // Cálculos para la paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((filteredUsers?.length || 0) / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (userData: UserInterface) => {
    try {
      if (selectedUser) {
        const { id, ...restUserData } = userData;
        await dispatch(updateUser({ id: selectedUser.id, ...restUserData }));
      } else {
        await dispatch(createUser(userData));
      }
      handleCloseModal();
      dispatch(fetchUsers());
    } catch (error) {
      console.error('Error al guardar usuario:', error);
      // Aquí puedes agregar una notificación de error
    }
  };

  return (
    <div className="App">
      <h1>Administración de usuarios</h1>

      <div className="filters">
        <select
          className="filter-select"
          value={selectedDepartamento!}
          onChange={(e) => setSelectedDepartamento(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Seleccione un Departamento</option>
          {departamentos?.map(dept => (
            <option key={dept.id} value={dept.nombre}>
              {dept.nombre}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={selectedCargo!}
          onChange={(e) => setSelectedCargo(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Seleccione un Cargo</option>
          {cargos?.map(cargo => (
            <option key={cargo.id} value={cargo.id}>
              {cargo.nombre}
            </option>
          ))}
        </select>

        <button className="create-button" onClick={() => handleOpenModal()}>
          Crear nuevo usuario
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Departamento</th>
              <th>Cargo</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((user) => (
              <tr key={user.id}>
                <td>{user.primer_nombre}</td>
                <td>{user.segundo_nombre}</td>
                <td>{user.primer_apellido}</td>
                <td>{user.segundo_apellido}</td>
                <td>{user.id_cargo}</td>
                <td>{user.id_departamento}</td>
                <td>
                  <button className="edit-button">
                    Editar
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user.id!)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="page-info">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;