using CleanBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace CleanBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DolgBeosztController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post(DolgozoBeoszta dolgozoBeoszta)
        {

            using (var context = new cleanContext())
            {
                try
                {
                    context.DolgozoBeosztas.Add(dolgozoBeoszta);
                    context.SaveChanges();
                    return Ok("Sikeres adatrögzítés.");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}
