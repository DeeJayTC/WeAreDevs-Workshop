using System.Reflection;
using TCDev.APIGenerator;
using TCDev.APIGenerator.Extension;
using TCDev.APIGenerator.Identity;
using TCDev.APIGenerator.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApiGeneratorIdentity(builder.Configuration);
builder.Services.AddApiGeneratorServices()
                .AddConfig(new ApiGeneratorConfig()
                {
                    DatabaseOptions = new DatabaseOptions()
                    {
                        Connection = "Server=localhost;database=123123123;user=sa;password=Password!23;",
                        DatabaseType = DbType.Sql,
                        EnableAutomaticMigration = true
                    }
                })
                .AddAssemblyWithOdata(Assembly.GetExecutingAssembly())
                .AddDataContextSQL()
                .AddOData()
                .AddSwagger();

builder.Services.AddCors(o =>
    o.AddPolicy("defaultPolicy", builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithExposedHeaders("x-items", "x-items-total", "x-cache");
    })
);


var app = builder.Build();

app.UseCors("defaultPolicy");
app.UseApiGenerator();
app.UseAutomaticApiMigrations(true);

app.UseApiGeneratorAuthentication();

app.MapControllers();

app.Run();
