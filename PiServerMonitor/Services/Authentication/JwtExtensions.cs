using System;
using Microsoft.Extensions.DependencyInjection;

namespace PiServerMonitor.Services.Authentication
{
    public static class JwtExtensions
    {
        public static void  AddJwtService(this IServiceCollection services, string key, int time)
        {
            services.AddTransient<IJwtService, JwtService>(provider => new JwtService(key, time));
        }
    }
}