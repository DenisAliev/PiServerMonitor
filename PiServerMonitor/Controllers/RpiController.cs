using Microsoft.AspNetCore.Mvc;

namespace PiServerMonitor.Controllers
{
    [ApiController]
    [Route("/rpi")]
    public class RpiController: ControllerBase
    {
        [HttpGet("/info")]
        public IActionResult GetInfo()
        {
            return null;
        }
    }
}