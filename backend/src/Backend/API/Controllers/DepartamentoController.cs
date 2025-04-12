using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserAdmin.Application.Contracts;
using UserAdmin.Domain.DTO;

namespace UserAdmin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartamentoController : ControllerBase
    {
        private readonly IDepartamentoContract _departamentoContract;
        private readonly ILogger<DepartamentoController> _logger;

        public DepartamentoController(IDepartamentoContract departamentoContract, ILogger<DepartamentoController> logger)
        {
            _departamentoContract = departamentoContract;
            _logger = logger;
        }

        [HttpPost("CreateDepartamento")]
        public async Task<IActionResult> CreateDepartamento([FromBody] DepartamentoDTO departamentoDTO)
        {
            if (departamentoDTO == null)
            {
                return BadRequest("Invalid data.");
            }

            var result = await _departamentoContract.CreateDepartamento(departamentoDTO);
            if (result)
            {
                return Ok("Departamento created successfully.");
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error creating departamento.");
            }
        }

        [HttpDelete("DeleteDepartamento/{id}")]
        public async Task<IActionResult> DeleteDepartamento(int id)
        {
            var result = await _departamentoContract.DeleteDepartamento(id);
            if (result)
            {
                return Ok("Departamento deleted successfully.");
            }
            else
            {
                return NotFound("Departamento not found.");
            }
        }

        [HttpGet("GetAllDepartamentos")]
        public async Task<IActionResult> GetAllDepartamentos()
        {
            var departamentos = await _departamentoContract.GetAllDepartamentos();
            if (departamentos == null || !departamentos.Any())
            {
                return NotFound("No departamentos found.");
            }

            return Ok(departamentos);
        }

        [HttpGet("GetDepartamentoById/{id}")]
        public async Task<IActionResult> GetDepartamentoById(int id)
        {
            var departamento = await _departamentoContract.GetDepartamentoById(id);
            if (departamento == null)
            {
                return NotFound("Departamento not found.");
            }

            return Ok(departamento);
        }

        [HttpPut("UpdateDepartamento")]
        public async Task<IActionResult> UpdateDepartamento([FromBody] DepartamentoDTO departamentoDTO)
        {
            if (departamentoDTO == null)
            {
                return BadRequest("Invalid data.");
            }

            var result = await _departamentoContract.UpdateDepartamento(departamentoDTO);
            if (result)
            {
                return Ok("Departamento updated successfully.");
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating departamento.");
            }
        }

/*         [HttpGet("GetAllDepartamentosByUserId/{userId}")]
        public async Task<IActionResult> GetAllDepartamentosByUserId(int userId)
        {
            var departamentos = await _departamentoContract.GetAllDepartamentosByUserId(userId);
            if (departamentos == null || !departamentos.Any())
            {
                return NotFound("No departamentos found for this user.");
            }

            return Ok(departamentos);
        }

        [HttpGet("GetAllDepartamentosByUserIdAndActivo/{userId}/{activo}")]
        public async Task<IActionResult> GetAllDepartamentosByUserIdAndActivo(int userId, bool activo)
        {
            var departamentos = await _departamentoContract.GetAllDepartamentosByUserIdAndActivo(userId, activo);
            if (departamentos == null || !departamentos.Any())
            {
                return NotFound("No departamentos found for this user with the specified status.");
            }

            return Ok(departamentos);
        } */
    }
}
