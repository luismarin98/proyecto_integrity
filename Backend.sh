#!/bin/bash

# Verifica si se proporcionó un argumento para el nombre del proyecto
PROJECT_NAME=${1:-NewDDD_Proyect} # Nombre por defecto si no se proporciona uno
# Puedes cambiar 'NewDDD_Proyect' por el nombre que desees para tu proyecto

# 1. Crea una carpeta raíz para toda la solución (opcional pero recomendado)
mkdir backend
cd backend

# 2. Crea el archivo de Solución (.sln)
dotnet new sln -n $PROJECT_NAME

# 3. Crea la estructura de directorios
#    (En Windows cmd/powershell, puedes usar 'md' en lugar de 'mkdir' si prefieres)
mkdir src
mkdir src/Backend
mkdir src/Backend/API
mkdir src/Backend/Application
mkdir src/Backend/Domain
mkdir src/Backend/Infrastructure

# 4. Crea los proyectos .NET dentro de sus carpetas correspondientes
#    - Usamos '-n' para darle un nombre específico al proyecto (y su ensamblado).
#    - Puedes añadir '-f net8.0' (o net7.0, net6.0) si quieres especificar la versión de .NET.
dotnet new webapi -n $PROJECT_NAME.API -o src/Backend/API
dotnet new classlib -n $PROJECT_NAME.Application -o src/Backend/Application
dotnet new classlib -n $PROJECT_NAME.Domain -o src/Backend/Domain
dotnet new classlib -n $PROJECT_NAME.Infrastructure -o src/Backend/Infrastructure

# 5. Añade los proyectos recién creados al archivo de Solución
dotnet sln $PROJECT_NAME.sln add src/Backend/API/$PROJECT_NAME.API.csproj
dotnet sln $PROJECT_NAME.sln add src/Backend/Application/$PROJECT_NAME.Application.csproj
dotnet sln $PROJECT_NAME.sln add src/Backend/Domain/$PROJECT_NAME.Domain.csproj
dotnet sln $PROJECT_NAME.sln add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj

# 6. Establece las referencias entre los proyectos (Dependencias)
#    - API depende de Application
dotnet add src/Backend/API/$PROJECT_NAME.API.csproj reference src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj

#    - Application depende de Domain
dotnet add src/Backend/Application/$PROJECT_NAME.Application.csproj reference src/Backend/Domain/$PROJECT_NAME.Domain.csproj

#    - Infrastructure depende de Application (para implementar interfaces, usar DTOs, etc.)
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj reference src/Backend/Application/$PROJECT_NAME.Application.csproj

#    - Infrastructure depende de Domain (para las Entidades, interfaces de Repositorio)
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj reference src/Backend/Domain/$PROJECT_NAME.Domain.csproj

# -- Instalacion de paquetes NuGet --
# (Ejemplo: Instalación de AutoMapper y FluentValidation en el proyecto de Aplicación)
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package Microsoft.EntityFrameworkCore
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package Microsoft.EntityFrameworkCore.SqlServer
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package Microsoft.EntityFrameworkCore.Tools
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package AutoMapper
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package AutoMapper.Extensions.Microsoft.DependencyInjection
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package Microsoft.Extensions.Configuration
dotnet add src/Backend/Infrastructure/$PROJECT_NAME.Infrastructure.csproj package Microsoft.Extensions.DependencyInjection

# -- Instalación de Swagger en el proyecto API --
dotnet add src/Backend/API/$PROJECT_NAME.API.csproj package Swashbuckle.AspNetCore
dotnet add src/Backend/API/$PROJECT_NAME.API.csproj package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add src/Backend/API/$PROJECT_NAME.API.csproj package Microsoft.AspNetCore.Identity

# --- Opcional: Limpiar archivos de ejemplo de la plantilla WebAPI ---
# (Puedes borrar estos archivos manualmente también)
# Usa 'del' en lugar de 'rm' en Windows cmd/powershell
rm src/Backend/API/Controllers/WeatherForecastController.cs
rm src/Backend/API/WeatherForecast.cs

# --- Fin ---
echo "¡Estructura del proyecto Backend creada exitosamente!"
echo "Ahora puedes abrir '$PROJECT_NAME.sln' con Visual Studio o seguir trabajando desde VS Code."

