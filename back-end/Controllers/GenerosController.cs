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
        [HttpGet]
        public List<Genero> Get()
        {
            return repositorio.ObtenerTodosLosGeneros();
        }

        [HttpGet]
        public Genero Get(int Id)
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
