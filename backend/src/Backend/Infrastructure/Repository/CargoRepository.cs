using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UserAdmin.Application.Contracts;
using UserAdmin.Domain.DTO;
using UserAdmin.Domain.Models;
using UserAdmin.Infrastructure.Context;

namespace UserAdmin.Infrastructure.Repository;

public class CargoRepository : ICargoContract
{
    private readonly ILogger<CargoRepository> _logger;
    private readonly DB_Config _dB_Config;

    public CargoRepository(ILogger<CargoRepository> logger, DB_Config dB_Config)
    {
        _logger = logger;
        _dB_Config = dB_Config;
    }

    public async Task<ICollection<CargoDTO>> ListCargos()
    {
        try
        {
            // Simulate fetching data from a database or other source
            List<CargoModel> lista_cargos = await _dB_Config.Cargo.ToListAsync();

            return lista_cargos.Select(c => new CargoDTO(
                c.Id,
                c.Nombre,
                c.Codigo,
                c.Activo,
                c.IdUsuarioCreacion
            )).ToList();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching cargos");
            throw;
        }
    }
}
