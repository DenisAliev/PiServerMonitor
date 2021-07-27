using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace PiServerMonitor.Services.Authentication
{
    public class JwtOptions
    {
        public const string ISSUER = "MyAuthServer";
        public const string AUDIENCE = "MyAuthClient";
    }
}