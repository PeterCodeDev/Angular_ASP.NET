using back_end.Entidades;

namespace back_end.Repositorios
{
    public interface iRepositorio
    {
        Task<Genero> ObtenerPorId(int Id);
        List<Genero> ObtenerTodosLosGeneros();
    }
}
