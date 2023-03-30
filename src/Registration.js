import React, { useState, useEffect} from 'react';
import { useParams, NavLink, useNavigate, json} from 'react-router-dom';


export function Registration(props) {
  var CryptoJS = require("crypto-js");
  const navigate = useNavigate();
  const [valasz, setValasz] = useState('');
  function GenerateSalt()
    {
    let salt=""
    let possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i=0;i<64;i++)
    {
        salt+=possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return salt
    }


    return ( 
      
           <div>
             {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div className="p-5 bg-image" style={{backgroundColor:'#89CBEB',height: '300px'}} />
        {/* Background image */}
        <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5 text-dark">Regisztráció</h2>

                <form onSubmit={(event) => {
                    event.persist();
                    event.preventDefault();
                    let salt = GenerateSalt();
                    let hash = CryptoJS.SHA256(CryptoJS.SHA256(event.target.elements.jelszo.value+salt).toString()).toString();
                    fetch(`https://localhost:6969/Registry`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            FelhasznaloNev: event.target.elements.felhasznalonev.value,
                            TeljesNev: event.target.elements.teljesnev.value,
                            Email: event.target.elements.email.value,
                            Telefonszam: event.target.elements.telefonszam.value,
                            Iranyitoszam: event.target.elements.iranyitoszam.value,
                            Telepules: event.target.elements.telepules.value,
                            Cim: event.target.elements.cim.value,
                            Hash: hash,
                            Salt: salt,
                        }),
                    })
                    .then(
                      alert("Regisztráció megerősítéséhez kattints az email-ben kapott linkre!")
                    )}}>
                  

                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" name='teljesnev' className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">Teljes név</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" name='felhasznalonev' className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Felhasználónév</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" name='iranyitoszam' className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">Irányítószám</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" name='telepules' className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">Település</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" name='cim' className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">Cím</label>
                      </div>
                    </div>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" name='email' className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email cím</label>
                  </div>


                  <div className='row'>
                  <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" name='telefonszam' className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">Telefonszám</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="password" id="form3Example2" name='jelszo' className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Jelszó</label>
                      </div>
                    </div>
                  </div>
                  
                 
                  {/* Submit button */}
                  <button className="btn btn-dark btn-lg btn-block" type="submit">Regisztráció</button>
                </form>
              </div>
            </div>
          </div>
        </div><br></br>
      </section>
      {/* Section: Design Block */}

           </div>
         
          );
}
export default Registration;