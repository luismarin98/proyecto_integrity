# Documentación del Proyecto

## Endpoints de la API Backend

### UserController
- **POST /api/User/CreateUser**  
    Crea un nuevo usuario en el sistema. Se espera un objeto `UserDTO` en el cuerpo de la solicitud.  
    **Respuesta:**  
    ```json
    {
        "success": true,
        "message": "Usuario creado exitosamente",
        "data": {
            "id": 1,
            "nombre": "Juan",
            "apellido": "Pérez",
            "correo": "juan.perez@example.com"
        }
    }
    ```

- **DELETE /api/User/DeleteUser/{id}**  
    Elimina un usuario por su ID.  
    **Posibles Respuestas:**  
    - Éxito:  
      ```json
      {
          "success": true,
          "message": "Usuario eliminado exitosamente"
      }
      ```
    - No encontrado:  
      ```json
      {
          "success": false,
          "message": "Usuario no encontrado"
      }
      ```

- **GET /api/User/GetAllUsers**  
    Recupera una lista de todos los usuarios en el sistema.  
    **Respuesta:**  
    ```json
    {
        "success": true,
        "data": [
            {
                "id": 1,
                "nombre": "Juan",
                "apellido": "Pérez",
                "correo": "juan.perez@example.com"
            },
            {
                "id": 2,
                "nombre": "Ana",
                "apellido": "Gómez",
                "correo": "ana.gomez@example.com"
            }
        ]
    }
    ```

- **GET /api/User/GetUserById/{id}**  
    Recupera un usuario específico por su ID.  
    **Posibles Respuestas:**  
    - Éxito:  
      ```json
      {
          "success": true,
          "data": {
              "id": 1,
              "nombre": "Juan",
              "apellido": "Pérez",
              "correo": "juan.perez@example.com"
          }
      }
      ```
    - No encontrado:  
      ```json
      {
          "success": false,
          "message": "Usuario no encontrado"
      }
      ```

- **PUT /api/User/UpdateUser**  
    Actualiza la información de un usuario existente. Se espera un objeto `UserDTO` en el cuerpo de la solicitud.  
    **Respuesta:**  
    ```json
    {
        "success": true,
        "message": "Usuario actualizado exitosamente"
    }
    ```

### DepartamentoController
- **POST /api/Departamento/CreateDepartamento**  
    Crea un nuevo departamento en el sistema. Se espera un objeto `DepartamentoDTO` en el cuerpo de la solicitud.  
    **Respuesta:**  
    ```json
    {
        "success": true,
        "message": "Departamento creado exitosamente",
        "data": {
            "id": 1,
            "nombre": "Recursos Humanos"
        }
    }
    ```

- **DELETE /api/Departamento/DeleteDepartamento/{id}**  
    Elimina un departamento por su ID.  
    **Posibles Respuestas:**  
    - Éxito:  
      ```json
      {
          "success": true,
          "message": "Departamento eliminado exitosamente"
      }
      ```
    - No encontrado:  
      ```json
      {
          "success": false,
          "message": "Departamento no encontrado"
      }
      ```

- **GET /api/Departamento/GetAllDepartamentos**  
    Recupera una lista de todos los departamentos en el sistema.  
    **Respuesta:**  
    ```json
    {
        "success": true,
        "data": [
            {
                "id": 1,
                "nombre": "Recursos Humanos"
            },
            {
                "id": 2,
                "nombre": "Finanzas"
            }
        ]
    }
    ```

- **GET /api/Departamento/GetDepartamentoById/{id}**  
    Recupera un departamento específico por su ID.  
    **Posibles Respuestas:**  
    - Éxito:  
      ```json
      {
          "success": true,
          "data": {
              "id": 1,
              "nombre": "Recursos Humanos"
          }
      }
      ```
    - No encontrado:  
      ```json
      {
          "success": false,
          "message": "Departamento no encontrado"
      }
      ```

- **PUT /api/Departamento/UpdateDepartamento**  
    Actualiza la información de un departamento existente. Se espera un objeto `DepartamentoDTO` en el cuerpo de la solicitud.  
    **Respuesta:**  
    ```json
    {
        "success": true,
        "message": "Departamento actualizado exitosamente"
    }
    ```

### CargoController
- **GET /api/Cargo/ListaCargos**  
    Recupera una lista de todos los cargos (puestos de trabajo) en el sistema.  
    **Respuesta:**  
    ```json
    {
        "success": true,
        "data": [
            {
                "id": 1,
                "nombre": "Gerente"
            },
            {
                "id": 2,
                "nombre": "Analista"
            }
        ]
    }
    ```

---

## Resumen del Frontend

### Pantalla Principal (Gestión de Usuarios)
La pantalla principal del frontend es una interfaz de gestión de usuarios que permite a los administradores realizar operaciones CRUD sobre los usuarios. Las características clave incluyen:

1. **Filtros**  
     - Menús desplegables para filtrar usuarios por departamento y cargo.

2. **Tabla de Usuarios**  
     - Muestra una lista paginada de usuarios con columnas para:
         - Nombre
         - Apellido
         - Departamento
         - Cargo
         - Correo Electrónico
         - Acciones (Editar/Eliminar)

3. **Modal para Crear/Editar Usuario**  
     - Un formulario modal para crear o editar los detalles de un usuario. Los campos incluyen:
         - Primer Nombre
         - Segundo Nombre (opcional)
         - Primer Apellido
         - Segundo Apellido (opcional)
         - Correo Electrónico
         - Departamento
         - Cargo

4. **Paginación**  
     - Permite navegar por la lista de usuarios con botones de "Siguiente" y "Anterior".

5. **Acciones**  
     - **Editar**: Abre el modal prellenado con los datos del usuario seleccionado para editar.
     - **Eliminar**: Elimina al usuario seleccionado después de una confirmación.

### Integración con la API
El frontend se comunica con la API del backend para obtener, crear, actualizar y eliminar usuarios, departamentos y cargos. Utiliza Redux para la gestión del estado y Axios para las solicitudes a la API.

### Estilo
El frontend utiliza Material-UI para un diseño consistente y responsivo. Se utiliza CSS personalizado para el estilo adicional de componentes como el modal y la tabla.

---

## Resumen
Este proyecto proporciona una solución full-stack para la gestión de usuarios, departamentos y cargos. El backend expone APIs RESTful para operaciones CRUD, mientras que el frontend ofrece una interfaz intuitiva para que los administradores gestionen los datos de manera eficiente.

## Scripts de Configuración del Proyecto

### Backend.sh

#### Resumen
Este script Bash automatiza la creación de una estructura de proyecto backend para una solución .NET. Configura una arquitectura limpia con capas separadas para API, Aplicación, Dominio e Infraestructura. Además, configura las dependencias del proyecto, agrega paquetes NuGet y prepara la solución para el desarrollo.

#### Acciones Realizadas
1. Crea un directorio raíz para la solución backend.
2. Inicializa un nuevo archivo de solución `.sln` de .NET.
3. Crea una estructura de carpetas para una arquitectura limpia:
    - `API`: Para el proyecto de la Web API.
    - `Application`: Para la lógica de la aplicación y servicios.
    - `Domain`: Para las entidades del dominio y reglas de negocio.
    - `Infrastructure`: Para el acceso a la base de datos e integraciones externas.
4. Genera proyectos .NET para cada capa utilizando `dotnet new`.
5. Agrega los proyectos al archivo de solución.
6. Establece referencias entre proyectos para definir las dependencias entre capas:
    - `API` depende de `Infrastructure`.
    - `Application` depende de `Domain`.
    - `Infrastructure` depende de `Application` y `Domain`.
7. Instala paquetes NuGet esenciales para Entity Framework Core, AutoMapper, autenticación JWT y Swagger.
8. Elimina archivos de ejemplo del template de la Web API.

#### Cómo Ejecutar
1. Asegúrate de tener Bash instalado (por ejemplo, Git Bash en Windows o un terminal Linux).
2. Haz que el script sea ejecutable:
    ```bash
    chmod +x Backend.sh
    ```
3. Ejecuta el script, opcionalmente proporcionando un nombre de proyecto:
    ```bash
    ./Backend.sh [NombreDelProyecto]
    ```
    Si no se proporciona un nombre de proyecto, el valor predeterminado será `NewDDD_Proyect`.

4. Abre el archivo `.sln` generado en Visual Studio o Visual Studio Code para comenzar el desarrollo.

---

### Frontend.sh

#### Resumen
Este script Bash automatiza la creación de un proyecto frontend utilizando React con TypeScript. Configura un entorno inicial con dependencias esenciales y una estructura de carpetas organizada.

#### Acciones Realizadas
1. Verifica si se proporciona un nombre para el proyecto. Si no, muestra un mensaje de uso y termina la ejecución.
2. Crea un nuevo proyecto React con TypeScript utilizando `npx create-react-app`.
3. Instala dependencias adicionales:
    - `react-router-dom`
    - `@reduxjs/toolkit`
    - `react-redux`
    - `tailwindcss`
    - `axios`
4. Configura Tailwind CSS inicializando su archivo de configuración con `npx tailwindcss init`.
5. Crea una estructura de carpetas dentro de `src` para organizar el código:
    - `Components`: Para componentes reutilizables.
    - `Features`: Para características específicas de la aplicación.
    - `Hooks`: Para hooks personalizados.
    - `Interfaces`: Para definir tipos e interfaces.
    - `Redux`: Para la configuración de Redux.
    - `Utils`: Para utilidades y funciones auxiliares.
    - `Services`: Para servicios de API y lógica de negocio.

#### Cómo Ejecutar
1. Asegúrate de tener Bash instalado.
2. Haz que el script sea ejecutable:
    ```bash
    chmod +x Frontend.sh
    ```
3. Ejecuta el script proporcionando un nombre para el proyecto:
    ```bash
    ./Frontend.sh [NombreDelProyecto]
    ```
4. Una vez completado, navega al directorio del proyecto y comienza el desarrollo.

#### Resultado
El proyecto React estará configurado con TypeScript, Tailwind CSS y una estructura de carpetas lista para el desarrollo. Además, las dependencias esenciales estarán instaladas para facilitar la implementación de funcionalidades avanzadas.
