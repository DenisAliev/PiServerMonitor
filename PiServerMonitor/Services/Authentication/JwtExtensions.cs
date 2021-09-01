using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace PiServerMonitor.Services.Authentication
{
    public static class JwtExtensions
    {
        public static void  AddJwtService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IJwtService, JwtService>(provider => new JwtService(configuration["JwtToken:Key"],
                int.Parse(configuration["JwtToken:Lifetime"])));
        }
    }
}