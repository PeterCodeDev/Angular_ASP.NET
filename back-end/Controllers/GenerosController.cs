using back_end.Entidades;
using back_end.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Route("api/generos")]
    public class GenerosController: ControllerBase
    {
        private readonly iRepositorio repositorio;
        public GenerosController(iRepositorio repositorio) {
        this.repositorio = repositorio;
        }
        [HttpGet] //api/generos
        [HttpGet("listado")] //api/generos/listado
        [HttpGet("/listadogeneros")] // /listadogeneros
        public List<Genero> Get()
        {
            return repositorio.ObtenerTodosLosGeneros();
        }

        [HttpGet("{Id:int}/{nombre=Roberto}")] //api/generos/ejemplo
        public Genero Get(int Id, string nombre)
        {
            var genero = repositorio.ObtenerPorId(Id);

            if (genero == null)
            {
                //return NotFound();
            }

            return genero;
        }

        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put()
        {
        }

        [HttpDelete]
        public void Delete()
        {

        }
    }
}
