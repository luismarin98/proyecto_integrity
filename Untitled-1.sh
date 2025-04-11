# 1. Crea una carpeta raíz para toda la solución (opcional pero recomendado)
#    Reemplaza 'UserAdminProject' con el nombre que prefieras.
mkdir backend
cd backend

# 2. Crea el archivo de Solución (.sln)
#    Reemplaza 'UserAdmin' si quieres otro nombre para el archivo .sln
dotnet new sln -n UserAdmin

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
dotnet new webapi -n UserAdmin.API -o src/Backend/API
dotnet new classlib -n UserAdmin.Application -o src/Backend/Application
dotnet new classlib -n UserAdmin.Domain -o src/Backend/Domain
dotnet new classlib -n UserAdmin.Infrastructure -o src/Backend/Infrastructure

# 5. Añade los proyectos recién creados al archivo de Solución
dotnet sln UserAdmin.sln add src/Backend/API/UserAdmin.API.csproj
dotnet sln UserAdmin.sln add src/Backend/Application/UserAdmin.Application.csproj
dotnet sln UserAdmin.sln add src/Backend/Domain/UserAdmin.Domain.csproj
dotnet sln UserAdmin.sln add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj

# 6. Establece las referencias entre los proyectos (Dependencias)
#    - API depende de Application
dotnet add src/Backend/API/UserAdmin.API.csproj reference src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj

#    - Application depende de Domain
dotnet add src/Backend/Application/UserAdmin.Application.csproj reference src/Backend/Domain/UserAdmin.Domain.csproj

#    - Infrastructure depende de Application (para implementar interfaces, usar DTOs, etc.)
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj reference src/Backend/Application/UserAdmin.Application.csproj

#    - Infrastructure depende de Domain (para las Entidades, interfaces de Repositorio)
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj reference src/Backend/Domain/UserAdmin.Domain.csproj

# -- Instalacion de paquetes NuGet --
# (Ejemplo: Instalación de AutoMapper y FluentValidation en el proyecto de Aplicación)
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package Microsoft.EntityFrameworkCore
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package Microsoft.EntityFrameworkCore.SqlServer
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package Microsoft.EntityFrameworkCore.Tools
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package AutoMapper
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package AutoMapper.Extensions.Microsoft.DependencyInjection
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package Microsoft.Extensions.Configuration
dotnet add src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj package Microsoft.Extensions.DependencyInjection

# -- Instalación de Swagger en el proyecto API --
dotnet add src/Backend/API/UserAdmin.API.csproj package Swashbuckle.AspNetCore
dotnet add src/Backend/API/UserAdmin.API.csproj package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add src/Backend/API/UserAdmin.API.csproj package Microsoft.AspNetCore.Identity

# --- Opcional: Limpiar archivos de ejemplo de la plantilla WebAPI ---
# (Puedes borrar estos archivos manualmente también)
# Usa 'del' en lugar de 'rm' en Windows cmd/powershell
rm src/Backend/API/Controllers/WeatherForecastController.cs
rm src/Backend/API/WeatherForecast.cs

# --- Fin ---
echo "¡Estructura del proyecto Backend creada exitosamente!"
echo "Ahora puedes abrir 'UserAdmin.sln' con Visual Studio o seguir trabajando desde VS Code."