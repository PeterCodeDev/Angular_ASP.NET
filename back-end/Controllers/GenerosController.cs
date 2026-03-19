using back_end.Repositorios;

namespace back_end.Controllers
{
    public class GenerosController
    {
        private readonly iRepositorio repositorio;
        public GenerosController(iRepositorio repositorio) {
        this.repositorio = repositorio;
        }
    }
}
