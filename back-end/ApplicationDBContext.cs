using back_end.Entidades;
using Microsoft.EntityFrameworkCore;

namespace back_end
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions options): base(options)
        {

        }
        public DbSet<Genero> Generos { get; set; }
        public DbSet<Actor> Actores { get; set; }
        public DbSet<Cine> Cines { get; set; }

    }
}
