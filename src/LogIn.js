import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

export function LogIn(props) {
  var CryptoJS = require("crypto-js");
  const navigate = useNavigate();
  //const [tmpHash, setTmpHash] = useState("");
 

    return ( 
           <div>
           
           <section style={{backgroundColor: '#89CBEB'}}>  
           <div style={{height:'100px'}}></div>     
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '1rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="images/ablak-foto.webp" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={(event) => {
                    event.persist();
                    event.preventDefault();
                    let lekertSalt = "";
                    let username = event.target.elements.felhasznalonev.value;
                    let password = event.target.elements.jelszo.value;
                    let tmpHash = "";
                    let logres = [];
                    //let tmpHash = "";
                    //let hash = CryptoJS.SHA256(CryptoJS.SHA256(password+"T38sNjbuq8HaemE8VUR2oDAzKbXfDAmjnaLEaYGQeSlBAsjp1IVOGTDwuaadLhHw").toString()).toString();
                    //console.log(hash);
                    let sUrl = "https://localhost:6969/Login/SaltRequest/" + username;
                    fetch(sUrl, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        username: event.target.elements.felhasznalonev.value,
                      }),
                    })
                    .then((response) => {
                      if (!response.ok) {
                        // handle non-200 response
                        throw new Error(`HTTP error! status: ${response.status}`);
                      }
                      return response.text();
                    })
                    .then((data) => {
                      //console.log(data);
                      lekertSalt=data;
                      tmpHash = CryptoJS.SHA256(password + lekertSalt).toString();
                      //let hash = CryptoJS.SHA256(tmpHash).toString();
                      //console.log("hash: "+hash);
                      //alert("Salt sikeres!");


                       //2. fetch
                      let url ="https://localhost:6969/Login/web?nev="+username+"&tmpHash="+tmpHash;
                          //console.log(tmpHash);
                          //console.log(url);
                           fetch(url, {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                          })
                            .then((response) => response.json())
                            .then((data) => {
                                logres = data;
                                console.log(logres);
                                if (logres[0]!= ""){
                                  alert("Sikeres bejelentkezés! :)");
                                  //navigate("/");
                                }
                                else{
                                  alert("Sikertelen bejelentkezés! :(");
                                }
                                
                            })
                            .catch(console.log);   
                      })
                      .catch(console.log);
                  }}
                  >

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                          <span className="h1 fw-bold mb-0">SAMIER</span>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="text" name='felhasznalonev' className="form-control form-control-lg" />
                          <label className="form-label" >Felhasználónév</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" name='jelszo' className="form-control form-control-lg" required/>
                          <label className="form-label" >Jelszó</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Bejelentkezés</button>
                        </div>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'100px'}}></div>
      </section>
           
           </div>
          );
}


export default LogIn;