using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PiServerMonitor.Models;
using PiServerMonitor.Services.RaspberryPi;

namespace PiServerMonitor.Controllers
{
    [ApiController]
    public class RpiController: ControllerBase
    {
        private readonly IRpiService _rpiService;
        private readonly ILogger<RpiController> _logger;
        
        public RpiController(IRpiService rpiService, ILogger<RpiController> logger)
        {
            _logger = logger;
            _rpiService = rpiService;
        }
        
        [HttpGet("/rpi/stats")]
        public async Task<IActionResult> GetStats()
        {
            var stats = new List<Status>()
            {
                new (await _rpiService.GetTempAsync(), "Temperature")
            };
            return Ok(stats);
        }

        [HttpPost("/rpi/shutdown")]
        public async Task<IActionResult> PostShutDown()
        {
            await _rpiService.ShutDownAsync();
            _logger.LogError("RaspberryPi can`t shutdown now");
            return Problem();
        }
        
        [HttpPost("/rpi/reboot")]
        public async Task<IActionResult> PostRestart()
        {
            await _rpiService.RebootAsync();
            _logger.LogError("RaspberryPi can`t reboot");
            return Problem();
        }
    }
}