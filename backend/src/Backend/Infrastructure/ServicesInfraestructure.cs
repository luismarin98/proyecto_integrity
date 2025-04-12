using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UserAdmin.Application.Contracts;
using UserAdmin.Application.IUserContract;
using UserAdmin.Infrastructure.Context;
using UserAdmin.Infrastructure.Repository;

namespace UserAdmin.Infrastructure;

public static class AddServicesInfrastructureExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IDepartamentoContract, DepartamentoRepository>();
        services.AddScoped<IUser, UserRepository>();
        services.AddScoped<ICargoContract, CargoRepository>();

        // Add your database context here, e.g.:
        services.AddDbContext<DB_Config>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

        // Add your infrastructure services here
        return services;
    }
}