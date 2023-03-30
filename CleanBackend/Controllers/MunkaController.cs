using CleanBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using Microsoft.Win32;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using MySqlX.XDevAPI;
using System.Threading.Tasks;

namespace CleanBackend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MunkaController : ControllerBase
    {
        [HttpGet("{uId}")]
        public async Task<IActionResult> Get(string uId)
        {
            if (Program.LoggedInUsers.ContainsKey(uId) && Program.LoggedInUsers[uId].Rank >= 5)
            {
                using (var context = new cleanContext())
                {
                    try
                    {
                        //List<Munka> munkas = new List<Munka>(context.Munkas);
                        return Ok(await context.Munkas.ToListAsync());
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }
                }
            }
            else
            {
                return BadRequest("Nincs bejelentkezve/jogosultsága!");
            }
        }

        [HttpPost]
        public IActionResult Post(Munka munka)
        {

            using (var context = new cleanContext())
            {
                try
                {
                    munka.Allapot = 0;
                    munka.Datum = DateTime.Now.ToString();
                    munka.Ar = null;
                    munka.Idopont = null;
                    context.Munkas.Add(munka);
                    context.SaveChanges();
                    Program.SendEmail(munka.MunkaEmail, "Sikeres adatrögzítés", "Adatait sikeresen rögzítettük! Munkatársunk hamarosan felveszi önnel a kapcsolatot.\nNév:" + munka.MunkaTeljesNev);
                    return Ok("Sikeres adatrögzítés.");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }

        [HttpPut("{uId}")]
        public IActionResult Put(string uId, Munka munka)
        {
            if (Program.LoggedInUsers.ContainsKey(uId) && Program.LoggedInUsers[uId].Rank >= 5)
            {
                using (var context = new cleanContext())
                {
                    try
                    {
                        context.Munkas.Update(munka);
                        context.SaveChanges();
                        return Ok("Adatok módosítva.");
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }
                }
            }
            else
            {
                return BadRequest("Nincs bejelentkezve/jogosultsága!");
            }
        }

        [HttpDelete("{uId}")]
        public IActionResult Delete(string uId, int id)
        {
            if (Program.LoggedInUsers.ContainsKey(uId) && Program.LoggedInUsers[uId].Rank >= 5)
            {
                using (var context = new cleanContext())
                {
                    try
                    {
                        Munka munka = new Munka();
                        munka.MunkaId = id;
                        context.Munkas.Remove(munka);
                        context.SaveChanges();
                        return Ok("Adatok törölve.");
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }
                }
            }
            else
            {
                return BadRequest("Nincs bejelentkezve/jogosultsága!");
            }
        }

        [HttpGet]
        [Route("Feldolgozas/{uId}")]
        public IActionResult GetFeldolgozas(string uId)
        {
            if (Program.LoggedInUsers.ContainsKey(uId) && Program.LoggedInUsers[uId].Rank >= 5)
            {
                using (var context = new cleanContext())
                {
                    try
                    {
                        List<Munka> munkas = new List<Munka>(context.Munkas.Where(m => m.Allapot == 0));
                        return Ok(munkas);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }
                }
            }
            else
            {
                return BadRequest("Nincs bejelentkezve/jogosultsága!");
            }
        }

        [HttpGet]
        [Route("Egyeztetve/{uId}")]
        public IActionResult GetEgyeztetve(string uId)
        {
            if (Program.LoggedInUsers.ContainsKey(uId) && Program.LoggedInUsers[uId].Rank >= 5)
            {
                using (var context = new cleanContext())
                {
                    try
                    {
                        List<Munka> munkas = new List<Munka>(context.Munkas.Where(m => m.Allapot == 1));
                        return Ok(munkas);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }
                }
            }
            else
            {
                return BadRequest("Nincs bejelentkezve/jogosultsága!");
            }
        }

        [HttpGet]
        [Route("Kesz/{uId}")]
        public IActionResult GetKesz(string uId)
        {
            if (Program.LoggedInUsers.ContainsKey(uId) && Program.LoggedInUsers[uId].Rank >= 5)
            {
                using (var context = new cleanContext())
                {
                    try
                    {
                        List<Munka> munkas = new List<Munka>(context.Munkas.Where(m => m.Allapot == 2));
                        return Ok(munkas);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }
                }
            }
            else
            {
                return BadRequest("Nincs bejelentkezve/jogosultsága!");
            }
        }
    }
}
