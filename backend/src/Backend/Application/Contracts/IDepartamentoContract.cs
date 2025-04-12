using System;
using UserAdmin.Domain.DTO;

namespace UserAdmin.Application.Contracts;

public interface IDepartamentoContract
{
    public Task<bool> CreateDepartamento(DepartamentoDTO departamentoDTO);
    public Task<bool> UpdateDepartamento(DepartamentoDTO departamentoDTO);
    public Task<bool> DeleteDepartamento(int id);
    public Task<DepartamentoDTO?> GetDepartamentoById(int id);
    public Task<ICollection<DepartamentoDTO?>> GetAllDepartamentos();
}
