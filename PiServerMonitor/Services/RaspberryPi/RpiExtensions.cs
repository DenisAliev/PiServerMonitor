using Microsoft.Extensions.DependencyInjection;

namespace PiServerMonitor.Services.RaspberryPi
{
    public static class RpiExtensions
    {
        public static void AddRpiService(this IServiceCollection services)
        {
            services.AddTransient<IRpiService, RpiService>();
        } 
    }
}