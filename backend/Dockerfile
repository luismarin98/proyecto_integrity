
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY ["src/Backend/API/UserAdmin.API.csproj", "src/Backend/API/"]
COPY ["src/Backend/Domain/UserAdmin.Domain.csproj", "src/Backend/Domain/"]
COPY ["src/Backend/Application/UserAdmin.Application.csproj", "src/Backend/Application/"]
COPY ["src/Backend/Infrastructure/UserAdmin.Infrastructure.csproj", "src/Backend/Infrastructure/"]
RUN dotnet restore "src/Backend/API/UserAdmin.API.csproj"

COPY . .
RUN dotnet publish "src/Backend/API/UserAdmin.API.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "UserAdmin.API.dll"]