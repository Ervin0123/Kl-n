﻿using System;
using System.Collections.Generic;

#nullable disable

namespace CleanBackend.Models
{
    public partial class Felhasznalo
    {
        public Felhasznalo()
        {
            DolgozoBeoszta = new HashSet<DolgozoBeoszta>();
        }

        public int Id { get; set; }
        public string FelhasznaloNev { get; set; }
        public string TeljesNev { get; set; }
        public string Email { get; set; }
        public string Telefonszam { get; set; }
        public int Iranyitoszam { get; set; }
        public string Telepules { get; set; }
        public string Cim { get; set; }
        public int Rank { get; set; }
        public string Salt { get; set; }
        public string Hash { get; set; }
        public int Aktiv { get; set; }

        public virtual ICollection<DolgozoBeoszta> DolgozoBeoszta { get; set; }
    }
}
