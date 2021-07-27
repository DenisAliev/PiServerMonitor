using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace PiServerMonitor.Services.Authentication
{
    public class JwtService: IJwtService
    {
        private readonly int _hours;
        private readonly SymmetricSecurityKey _securityKey;
        public JwtService(string key, int hours)
        {
            _securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key));;
            _hours = hours;
        }
        public JwtResponse GetToken(JwtUser user)
        {
            var identity = GetIdentity(user);
            var now = DateTime.UtcNow;
            var credentials = new SigningCredentials(_securityKey, SecurityAlgorithms.HmacSha256Signature);
            var jwt = new JwtSecurityToken(
                issuer: JwtOptions.ISSUER,
                audience: JwtOptions.AUDIENCE,
                notBefore: now,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromHours(_hours)),
                signingCredentials: credentials
            );
            var encodedToken = new JwtSecurityTokenHandler().WriteToken(jwt);
            return new JwtResponse(encodedToken);
        }
        private ClaimsIdentity GetIdentity(JwtUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login)
            };
            ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }
        
    }
}