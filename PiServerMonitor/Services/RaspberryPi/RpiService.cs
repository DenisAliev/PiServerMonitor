using System;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Iot.Device.CpuTemperature;
using Microsoft.Extensions.Configuration;

namespace PiServerMonitor.Services.RaspberryPi
{
    public class RpiService: IRpiService
    {
        private readonly CpuTemperature _cpuTemperature = new CpuTemperature();
        private readonly int _maxTemperature;
        public RpiService(IConfiguration configuration)
        {
            try
            {
                _maxTemperature = int.Parse(configuration["Temperature:MaxTemperature"]);
            }
            catch
            {
                _maxTemperature = 80;
            }
            (new Thread(AutCheckTemplate)).Start();
        }
        public async Task<int> GetTempAsync()
        {
            int res = 0;
            if (_cpuTemperature.IsAvailable)
            {
                await Task.Run(() =>
                {
                    var temperatures = _cpuTemperature.ReadTemperatures();
                    res = (int) temperatures.First().Temperature.DegreesCelsius;
                });
            }
            else
            {
                throw new Exception("CPU temperature is not available");
            }
            return res;
        }

        public async Task ShutDownAsync()
        {
            await ExecuteCommandAsync("sudo shutdown now");
        }
        public async Task RebootAsync()
        {
            await ExecuteCommandAsync("sudo reboot");
        }

        private async Task<string> ExecuteCommandAsync(string cmd)
        {
            var pureCmd = cmd.Replace("\"", "\\\"");
            var process = new Process()
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "/bin/bash",
                    Arguments = $"-c \"{pureCmd}\"",
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                }
            };
            process.Start();
            string result = await process.StandardOutput.ReadToEndAsync();
            await process.WaitForExitAsync();
            return result;
        }

        private async void AutCheckTemplate()
        {
            while (true)
            {
                var temperature = await GetTempAsync();
                if (temperature >= _maxTemperature)
                {
                    await ShutDownAsync();
                }
                Thread.Sleep(TimeSpan.FromSeconds(1));
            }
        }
    }
}