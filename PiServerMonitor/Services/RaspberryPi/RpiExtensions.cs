using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace PiServerMonitor.Services.RaspberryPi
{
    public static class RpiExtensions
    {
        public static void AddRpiService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IRpiService, RpiService>(provider => new RpiService(configuration));
        } 
    }
}