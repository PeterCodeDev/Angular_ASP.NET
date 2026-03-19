using back_end.Entidades;

namespace back_end.Repositorios
{
    public interface iRepositorio
    {
        Genero ObtenerPorId(int Id);
        List<Genero> ObtenerTodosLosGeneros();
    }
}
