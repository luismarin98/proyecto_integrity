using System;
using UserAdmin.Domain.DTO;

namespace UserAdmin.Application.Contracts;

public interface ICargoContract
{
    public Task<ICollection<CargoDTO>> ListCargos();
}
