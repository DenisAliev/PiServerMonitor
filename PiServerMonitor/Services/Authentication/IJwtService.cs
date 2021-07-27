namespace PiServerMonitor.Services.Authentication
{
    public interface IJwtService
    {
        public JwtResponse GetToken(JwtUser user);
    }
}