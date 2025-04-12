using System;
using UserAdmin.Domain.DTO;

namespace UserAdmin.Application.IUserContract;

public interface IUser
{
    public Task<bool> CreateUser(UserDTO userDTO);
    public Task<bool> UpdateUser(UserDTO userDTO);
    public Task<bool> DeleteUser(int id);
    public Task<UserDTO?> GetUserById(int id);
    public Task<ICollection<UserDTO?>> GetAllUsers();
}
