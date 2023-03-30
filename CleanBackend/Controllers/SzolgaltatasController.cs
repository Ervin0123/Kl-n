using CleanBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;

namespace CleanBackend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SzolgaltatasController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            using (var context = new cleanContext())
            {
                try
                {
                    List<Szolgaltata> szolgaltatasok = new List<Szolgaltata>(context.Szolgaltatas);
                    return Ok(szolgaltatasok);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}
