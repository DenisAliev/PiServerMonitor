using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using PiServerMonitor.Models;
using PiServerMonitor.Services.RaspberryPi;

namespace PiServerMonitor.Controllers
{
    [ApiController]
    public class RpiController: ControllerBase
    {
        private readonly IRpiService _rpiService;
        private readonly IHostEnvironment _environment;
        private readonly ILogger<RpiController> _logger;
        
        public RpiController(IRpiService rpiService,
            ILogger<RpiController> logger,
            IHostEnvironment environment)
        {
            _logger = logger;
            _rpiService = rpiService;
            _environment = environment;
        }
        
        [Authorize]
        [HttpGet("/rpi/stats")]
        public async Task<IActionResult> GetStats()
        {
            var stats = new List<Status>();
            if (_environment.IsDevelopment())
            {
                stats.Add(new( (new Random().Next(0,100) ), "Temperature","`C"));
            }
            else
            {
               stats.Add( new (await _rpiService.GetTempAsync(), "Temperature", "`C")); 
            }
            return Ok(stats);
        }

        [HttpPost("/rpi/shutdown")]
        public async Task<IActionResult> PostShutDown()
        {
            try
            {
                await _rpiService.ShutDownAsync();
            }
            finally
            {
                _logger.LogError("RaspberryPi can`t shutdown now");
            }
            return Problem();
        }
        
        [HttpPost("/rpi/reboot")]
        public async Task<IActionResult> PostRestart()
        {
            try
            {
                await _rpiService.RebootAsync();
            }
            finally
            {
                _logger.LogError("RaspberryPi can`t shutdown now");
            }
            return Problem();
        }
    }
}