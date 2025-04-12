using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserAdmin.Application.IUserContract;
using UserAdmin.Domain.DTO;

namespace UserAdmin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser _userContract;
        private readonly ILogger<UserController> _logger;

        public UserController(IUser userContract, ILogger<UserController> logger)
        {
            _userContract = userContract;
            _logger = logger;
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] UserDTO userDTO)
        {
            if (userDTO == null)
            {
                return BadRequest("Invalid data.");
            }

            var result = await _userContract.CreateUser(userDTO);
            if (result)
            {
                return Ok("User created successfully.");
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error creating user.");
            }
        }

        [HttpDelete("DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var result = await _userContract.DeleteUser(id);
            if (result)
            {
                return Ok("User deleted successfully.");
            }
            else
            {
                return NotFound("User not found.");
            }
        }

        [HttpGet("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userContract.GetAllUsers();
            if (users == null || !users.Any())
            {
                return NotFound("No users found.");
            }

            return Ok(users);
        }

        [HttpGet("GetUserById/{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userContract.GetUserById(id);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            return Ok(user);
        }

        [HttpPut("UpdateUser")]
        public async Task<IActionResult> UpdateUser([FromBody] UserDTO userDTO)
        {
            if (userDTO == null)
            {
                return BadRequest("Invalid data.");
            }

            var result = await _userContract.UpdateUser(userDTO);
            if (result)
            {
                return Ok("User updated successfully.");
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating user.");
            }
        }
    }
}
