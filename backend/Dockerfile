FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copiar los archivos de proyecto y restaurar dependencias
COPY ["src/Backend/API/API.csproj", "src/Backend/API/"]
COPY ["src/Backend/Domain/Domain.csproj", "src/Backend/Domain/"]
COPY ["src/Backend/Infrastructure/Infrastructure.csproj", "src/Backend/Infrastructure/"]
RUN dotnet restore "src/Backend/API/API.csproj"

# Copiar el resto del código
COPY . .

# Publicar la aplicación
RUN dotnet publish "src/Backend/API/API.csproj" -c Release -o /app/publish

# Imagen final
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Exponer el puerto
EXPOSE 80
EXPOSE 443

ENTRYPOINT ["dotnet", "API.dll"]