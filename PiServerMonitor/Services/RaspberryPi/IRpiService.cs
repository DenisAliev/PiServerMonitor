using System.Threading.Tasks;

namespace PiServerMonitor.Services.RaspberryPi
{
    public interface IRpiService
    {
        public Task<int> GetTempAsync();
        public Task ShutDownAsync();
        public Task RebootAsync();
    }
}