using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace PiServerMonitor.Services.RaspberryPi
{
    public class RpiService: IRpiService
    {
        public async Task<int> GetTempAsync()
        {
            var result = "";
            
            //result = new Random().Next(30, 70).ToString() + ".3'C";

            // bash command / opt / vc / bin / vcgencmd measure_temp
            result = await ExecuteCommandAsync("/opt/vc/bin/vcgencmd measure_temp");
            
            var temperatureResult = result.Substring(result.IndexOf('=') + 1, result.IndexOf("'") - (result.IndexOf('=') + 1)).Replace('.', ',');
            float.TryParse(temperatureResult, out float temperature);
            return (int)temperature;
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
    }
}