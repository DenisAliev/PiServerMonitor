using System.Threading.Tasks;

namespace PiServerMonitor.Services.RaspberryPi
{
    public interface IRpiService
    {
        public Task<float> GetTempAsync();
        public void ShutDown();
        public void Restart();
    }
}