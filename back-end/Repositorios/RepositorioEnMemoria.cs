using back_end.Entidades;

namespace back_end.Repositorios
{
    public class RepositorioEnMemoria: iRepositorio
    {
        
        private List<Genero> _generos;
        private readonly Guid _guid;

        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>()
            {
                new Genero(){Id =1, Nombre ="Comedia"},
                new Genero(){Id = 2, Nombre="Accion"}
            };
            _guid = Guid.NewGuid(); //123456-ASFH-ASAFGA-AFADSDG
        }

        
        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }

        public async Task<Genero> ObtenerPorId(int Id)
        {
            await Task.Delay(1);

            return _generos.FirstOrDefault(x => x.Id == Id);
        }

        public Guid ObtenerGUID()
        {
            return _guid;
        }

        public void CrearGenero(Genero genero)
        {
            genero.Id = _generos.Count() + 1;
            _generos.Add(genero);
        }
    }
}
