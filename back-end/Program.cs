using back_end.Controllers;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using back_end.Filtros;
using back_end;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDBContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection")));

builder.Services.AddCors(options =>
{
    var frontend_url = builder.Configuration.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontend_url).AllowAnyMethod().AllowAnyHeader();
    });
});
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddControllers(options =>
{
    options.Filters.Add(typeof(FiltroDeExcepcion));
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "back_end", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseRouting();

app.UseCors();

app.Use(async (context, next) =>
{
    using (var swapStream = new MemoryStream())
    {
        var respuestaOriginal = context.Response.Body;
        context.Response.Body = swapStream;

        await next.Invoke();

        swapStream.Seek(0, SeekOrigin.Begin);
        string respuesta = new StreamReader(swapStream).ReadToEnd();
        swapStream.Seek(0, SeekOrigin.Begin);

        await swapStream.CopyToAsync(respuestaOriginal);
        context.Response.Body = respuestaOriginal;

        app.Logger.LogInformation(respuesta);
    }
});

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
