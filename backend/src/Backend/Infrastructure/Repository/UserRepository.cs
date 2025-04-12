using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UserAdmin.Application.IUserContract;
using UserAdmin.Domain.DTO;
using UserAdmin.Domain.Models;
using UserAdmin.Infrastructure.Context;

namespace UserAdmin.Infrastructure.Repository;

public class UserRepository : IUser
{
    private readonly ILogger<UserRepository> _logger;
    private readonly DB_Config _dbContext;

    public UserRepository(DB_Config dbContext, ILogger<UserRepository> logger)
    {
        _dbContext = dbContext;
        _logger = logger;
    }
    // Implement the methods from IUser interface here

    public async Task<bool> CreateUser(UserDTO userDTO)
    {
        try
        {
            UserModel user = new UserModel(userDTO.Id, userDTO.PrimerNombre, userDTO.SegundoNombre, userDTO.PrimerApellido, userDTO.SegundoApellido, userDTO.ID_Departamento, userDTO.ID_Cargo);
            await _dbContext.Categoria.AddAsync(user);
            await _dbContext.SaveChangesAsync();
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error en metodo SaveSomeDetails - CreateUser controller");
            return false;
        }
        finally
        {
            _logger.LogInformation("Finaliza CreateUser controller - Metodo - SaveSomeDetails");
        }
    }

    public async Task<bool> UpdateUser(UserDTO userDTO)
    {
        try
        {
            UserModel user = new UserModel(userDTO.Id, userDTO.PrimerNombre, userDTO.SegundoNombre, userDTO.PrimerApellido, userDTO.SegundoApellido, userDTO.ID_Departamento, userDTO.ID_Cargo);
            _dbContext.Categoria.Update(user);
            await _dbContext.SaveChangesAsync();
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error en metodo SaveSomeDetails - DetallePedido controller");
            return false;
        }
        finally
        {
            _logger.LogInformation("Finaliza DetallePedido controller - Metodo - SaveSomeDetails");
        }
    }

    public async Task<bool> DeleteUser(int id)
    {
        try
        {
            var user = await _dbContext.Categoria.FindAsync(id);
            if (user == null) return false;
            _dbContext.Categoria.Remove(user);
            await _dbContext.SaveChangesAsync();
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error en metodo SaveSomeDetails - DetallePedido controller");
            return false;
        }
        finally
        {
            _logger.LogInformation("Finaliza DetallePedido controller - Metodo - SaveSomeDetails");
        }
    }

    public async Task<UserDTO?> GetUserById(int id)
    {
        try
        {
            var user = await _dbContext.Categoria.FindAsync(id);
            if (user == null) return null;
            return new UserDTO(user.Id, user.PrimerNombre, user.SegundoNombre, user.PrimerApellido, user.SegundoApellido, user.ID_Departamento, user.ID_Cargo);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error en metodo SaveSomeDetails - DetallePedido controller");
            return null;
        }
        finally
        {
            _logger.LogInformation("Finaliza DetallePedido controller - Metodo - SaveSomeDetails");
        }
    }

    public async Task<ICollection<UserDTO?>> GetAllUsers()
    {
        try
        {
            var users = await _dbContext.Categoria.ToListAsync();
            if (users == null) return new List<UserDTO?>();
            return users.Select(user => user == null ? null : new UserDTO(user.Id, user.PrimerNombre, user.SegundoNombre, user.PrimerApellido, user.SegundoApellido, user.ID_Departamento, user.ID_Cargo)).ToList();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error en metodo SaveSomeDetails - DetallePedido controller");
            return new List<UserDTO?>();
        }
        finally
        {
            _logger.LogInformation("Finaliza DetallePedido controller - Metodo - SaveSomeDetails");
        }
    }
}