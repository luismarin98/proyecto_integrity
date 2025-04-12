using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UserAdmin.Application.Contracts;
using UserAdmin.Domain.DTO;
using UserAdmin.Domain.Models;
using UserAdmin.Infrastructure.Context;

namespace UserAdmin.Infrastructure.Repository;

public class DepartamentoRepository : IDepartamentoContract
{
    private readonly DB_Config _context;
    private readonly ILogger<DepartamentoRepository> _logger;

    public DepartamentoRepository(DB_Config context, ILogger<DepartamentoRepository> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<bool> CreateDepartamento(DepartamentoDTO departamentoDTO)
    {
        try
        {
            DepartamentoModel departamento = new DepartamentoModel
            (
                id: 0, // Assuming 0 or a default value for the 'id' field
                nombre: departamentoDTO.Nombre,
                codigo: departamentoDTO.Codigo,
                activo: departamentoDTO.Activo,
                idUsuarioCreacion: departamentoDTO.IdUsuarioCreacion
            );

            await _context.Departamento.AddAsync(departamento);
            await _context.SaveChangesAsync();

            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating departamento");
            return false;
        }
    }

    public async Task<bool> DeleteDepartamento(int id)
    {
        try
        {
            var departamento = await _context.Departamento.FindAsync(id);
            if (departamento == null)
            {
                return false;
            }

            _context.Departamento.Remove(departamento);
            await _context.SaveChangesAsync();

            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting departamento");
            return false;
        }
    }

    public async Task<ICollection<DepartamentoDTO?>> GetAllDepartamentos()
    {
        try
        {
            List<DepartamentoModel> departamentos = await _context.Departamento.ToListAsync();
            return departamentos.Select(d => d == null ? null : new DepartamentoDTO(
                d.Id,
                d.Nombre,
                d.Codigo,
                d.Activo,
                d.IdUsuarioCreacion
            )).ToList();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving all departamentos");
            return null!;
        }
    }

    public async Task<DepartamentoDTO?> GetDepartamentoById(int id)
    {
        try
        {
            var departamento = await _context.Departamento.FindAsync(id);
            if (departamento == null)
            {
                return null;
            }

            return new DepartamentoDTO(
                id: departamento.Id,
                nombre: departamento.Nombre,
                codigo: departamento.Codigo,
                activo: departamento.Activo,
                idUsuarioCreacion: departamento.IdUsuarioCreacion
            );
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving departamento by id");
            return null;
        }
    }

    public async Task<bool> UpdateDepartamento(DepartamentoDTO departamentoDTO)
    {
        try
        {
            var departamento = await _context.Departamento.FindAsync(departamentoDTO.Id);
            if (departamento == null)
            {
                return false;
            }

            departamento.Nombre = departamentoDTO.Nombre;
            _context.Departamento.Update(departamento);
            await _context.SaveChangesAsync();

            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating departamento");
            return false;
        }
    }
}
