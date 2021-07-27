namespace PiServerMonitor.Services.Authentication
{
    public record JwtUser(
        string Login,
        string Password
        );
}