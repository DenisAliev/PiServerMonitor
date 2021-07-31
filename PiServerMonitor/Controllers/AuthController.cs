using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PiServerMonitor.Services.Authentication;

namespace PiServerMonitor.Controllers
{
    [ApiController]
    public class AuthController: ControllerBase
    {
        private readonly IJwtService _jwtService;
        private readonly IConfiguration _configuration;
        public AuthController(IJwtService jwtService, IConfiguration configuration)
        {
            _configuration = configuration;
            _jwtService = jwtService;
        }
        [HttpPost("/auth/token")]
        public IActionResult GetToken(JwtUser user)
        {
            if (_configuration["User:Login"] == user.Login
                && _configuration["User:Password"] == user.Password)
            {
                var response = new
                {
                    access_token = _jwtService.GetToken(user).EncodedToken
                };
                return Ok(response);
            }
            return BadRequest();
        }
    }
}