import React, { useState, useEffect } from 'react';
import './modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: any; // El usuario a editar (null si es creación)
    onSubmit: (userData: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user, onSubmit }) => {
    const [formData, setFormData] = useState({
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        id_cargo: '',
        id_departamento: '',
        email: ''
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{user ? 'Editar Usuario' : 'Crear Usuario'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Primer Nombre:</label>
                        <input
                            type="text"
                            name="primer_nombre"
                            value={formData.primer_nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Segundo Nombre:</label>
                        <input
                            type="text"
                            name="segundo_nombre"
                            value={formData.segundo_nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Primer Apellido:</label>
                        <input
                            type="text"
                            name="primer_apellido"
                            value={formData.primer_apellido}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Segundo Apellido:</label>
                        <input
                            type="text"
                            name="segundo_apellido"
                            value={formData.segundo_apellido}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="save-button">
                            {user ? 'Guardar Cambios' : 'Crear Usuario'}
                        </button>
                        <button type="button" className="cancel-button" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;