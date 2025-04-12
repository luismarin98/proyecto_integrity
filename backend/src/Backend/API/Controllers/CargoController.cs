using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserAdmin.Application.Contracts;

namespace UserAdmin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        private readonly ILogger<CargoController> _logger;
        private readonly ICargoContract _cargoContract;

        public CargoController(ILogger<CargoController> logger, ICargoContract cargoContract)
        {
            _logger = logger;
            _cargoContract = cargoContract;
        }

        [HttpGet("ListaCargos")]
        public async Task<ActionResult> getListaCargo()
        {
            var cargos = await _cargoContract.ListCargos();
            if (cargos == null || !cargos.Any())
            {
                return NotFound("No cargos found.");
            }

            return Ok(cargos);
        }
    }
}
