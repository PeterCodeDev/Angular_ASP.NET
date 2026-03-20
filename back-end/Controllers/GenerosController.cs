using back_end.Entidades;
using back_end.Repositorios;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace back_end.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController: ControllerBase
    {
        private readonly iRepositorio repositorio;
        private readonly WeatherForecastController weatherForecastController;
        private readonly ILogger<GenerosController> logger;

        public GenerosController(iRepositorio repositorio ,WeatherForecastController weatherForecastController,
            ILogger<GenerosController> logger
            ) {
        this.repositorio = repositorio;
        this.weatherForecastController = weatherForecastController;
            this.logger = logger;
        }
        [HttpGet] //api/generos
        [HttpGet("listado")] //api/generos/listado
        [HttpGet("/listadogeneros")] // /listadogeneros
        public ActionResult<List<Genero>> Get()
        {
            logger.LogInformation("Vamos a mostrar los generos");
            return repositorio.ObtenerTodosLosGeneros();
        }
        [HttpGet("guid")] // api/generos/guid
        public ActionResult<Guid> GetGUID()
        {
            return Ok(new
            {
                GUID_GenerosController = repositorio.ObtenerGUID(),
                GUID_WeatherForecastController = weatherForecastController.ObtenerGUIDWeatherForecastController()
            });
        }

        [HttpGet("{Id:int}")] // api/generos/3/felipe
        public async Task<ActionResult<Genero>> Get(int Id,[FromHeader] string nombre)
        {

            logger.LogDebug($"Obteniendo un genero por el Id {Id}");

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var genero = await repositorio.ObtenerPorId(Id);

            if (genero == null)
            {
                logger.LogWarning($"No pudimos encontrar el genero del id {Id}");
                return NotFound();
            }
            // return "felipe";

            return genero;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            repositorio.CrearGenero(genero);
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}
