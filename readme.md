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

# Documentación para `Untitled-1.sh` y `docker-compose.yml`

## Untitled-1.sh

### Resumen
Este script Bash automatiza la creación de una estructura de proyecto backend para una solución .NET. Configura una arquitectura limpia con capas separadas para API, Aplicación, Dominio e Infraestructura. Además, configura las dependencias del proyecto, agrega paquetes NuGet y prepara la solución para el desarrollo.

### Acciones Realizadas
1. Crea un directorio raíz para la solución backend.
2. Inicializa un nuevo archivo de solución `.sln` de .NET.
3. Crea una estructura de carpetas para una arquitectura limpia:
    - `API`: Para el proyecto de la Web API.
    - `Application`: Para la lógica de la aplicación y servicios.
    - `Domain`: Para las entidades del dominio y reglas de negocio.
    - `Infrastructure`: Para el acceso a la base de datos e integraciones externas.
4. Genera proyectos .NET para cada capa utilizando `dotnet new`.
5. Agrega los proyectos al archivo de solución.
6. Establece referencias entre proyectos para definir las dependencias entre capas.
7. Instala paquetes NuGet esenciales para Entity Framework Core, AutoMapper, Autenticación JWT y Swagger.
8. Elimina archivos de ejemplo del template de la Web API.

### Cómo Ejecutar
1. Asegúrate de tener Bash instalado (por ejemplo, Git Bash en Windows o un terminal Linux).
2. Haz que el script sea ejecutable:
    ```bash
    chmod +x Untitled-1.sh
    ```
3. Ejecuta el script, opcionalmente proporcionando un nombre de proyecto:
    ```bash
    ./Untitled-1.sh [NombreDelProyecto]
    ```
    Si no se proporciona un nombre de proyecto, el valor predeterminado será `UserAdmin`.

4. Abre el archivo `.sln` generado en Visual Studio o Visual Studio Code para comenzar el desarrollo.

---

## docker-compose.yml

### Resumen
Este archivo Docker Compose define una aplicación multicontenedor con tres servicios: `frontend`, `api` y `db`. Configura un entorno de desarrollo para una aplicación full-stack, incluyendo un frontend en React, un backend en .NET y una base de datos SQL Server.

### Acciones Realizadas
1. **Servicio Frontend**:
    - Construye la aplicación frontend desde el directorio `./frontend` utilizando un `Dockerfile`.
    - Expone el frontend en el puerto `3000`.

2. **Servicio API**:
    - Construye la aplicación backend desde el directorio `./backend` utilizando un `Dockerfile`.
    - Expone la API en el puerto `7216`.
    - Configura variables de entorno para el desarrollo y la conexión a la base de datos.

3. **Servicio Base de Datos**:
    - Utiliza la imagen oficial de Docker para SQL Server 2022.
    - Configura la base de datos con una contraseña segura y acepta el EULA.
    - Expone la base de datos en el puerto `1433`.

4. **Redes**:
    - Todos los servicios están conectados a través de una red bridge personalizada (`app-network`).

### Cómo Ejecutar
1. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
2. Navega al directorio que contiene el archivo `docker-compose.yml`.
3. Ejecuta el siguiente comando para construir e iniciar los servicios:
    ```bash
    docker-compose up --build
    ```
4. Accede a los servicios:
    - Frontend: `http://localhost:3000`
    - API: `http://localhost:7216`
    - Base de Datos: Conéctate a través de `localhost:1433` usando un cliente SQL.

5. Para detener los servicios, ejecuta:
    ```bash
    docker-compose down
    ```

### Notas
- Actualiza la variable de entorno `ConnectionStrings__DefaultConnection` en el servicio `api` para que coincida con la configuración de tu base de datos si es necesario.
- Asegúrate de que los directorios `frontend` y `backend` contengan configuraciones válidas de `Dockerfile` para construir los servicios respectivos.
# Documentation for `Untitled-1.sh` and `docker-compose.yml`

## Untitled-1.sh

### Summary
This Bash script automates the creation of a backend project structure for a .NET solution. It sets up a clean architecture with separate layers for API, Application, Domain, and Infrastructure. Additionally, it configures project dependencies, adds NuGet packages, and prepares the solution for development.

### Actions Performed
1. Creates a root directory for the backend solution.
2. Initializes a new .NET solution file (`.sln`).
3. Creates a folder structure for clean architecture:
    - `API`: For the Web API project.
    - `Application`: For application logic and services.
    - `Domain`: For domain entities and business rules.
    - `Infrastructure`: For database access and external integrations.
4. Generates .NET projects for each layer using `dotnet new`.
5. Adds the projects to the solution file.
6. Establishes project references to define dependencies between layers.
7. Installs essential NuGet packages for Entity Framework Core, AutoMapper, JWT Authentication, and Swagger.
8. Removes example files from the Web API template.

### How to Execute
1. Ensure you have Bash installed (e.g., Git Bash on Windows or a Linux terminal).
2. Make the script executable:
    ```bash
    chmod +x Untitled-1.sh
    ```
3. Run the script, optionally providing a project name:
    ```bash
    ./Untitled-1.sh [ProjectName]
    ```
    If no project name is provided, it defaults to `UserAdmin`.

4. Open the generated `.sln` file in Visual Studio or Visual Studio Code to start development.

---

## docker-compose.yml

### Summary
This Docker Compose file defines a multi-container application with three services: `frontend`, `api`, and `db`. It sets up a development environment for a full-stack application, including a React frontend, a .NET backend, and a SQL Server database.

### Actions Performed
1. **Frontend Service**:
    - Builds the frontend application from the `./frontend` directory using a `Dockerfile`.
    - Exposes the frontend on port `3000`.

2. **API Service**:
    - Builds the backend application from the `./backend` directory using a `Dockerfile`.
    - Exposes the API on port `7216`.
    - Configures environment variables for development and database connection.

3. **Database Service**:
    - Uses the official SQL Server 2022 Docker image.
    - Sets up the database with a strong password and accepts the EULA.
    - Exposes the database on port `1433`.

4. **Networking**:
    - All services are connected via a custom bridge network (`app-network`).

### How to Execute
1. Ensure Docker and Docker Compose are installed on your system.
2. Navigate to the directory containing the `docker-compose.yml` file.
3. Run the following command to build and start the services:
    ```bash
    docker-compose up --build
    ```
4. Access the services:
    - Frontend: `http://localhost:3000`
    - API: `http://localhost:7216`
    - Database: Connect via `localhost:1433` using a SQL client.

5. To stop the services, run:
    ```bash
    docker-compose down
    ```

### Notes
- Update the `ConnectionStrings__DefaultConnection` environment variable in the `api` service to match your database configuration if needed.
- Ensure the `frontend` and `backend` directories contain valid `Dockerfile` configurations for building the respective services.