import React, { Navigate, useState, useEffect } from 'react';


export function ContactPage() {

  /*const [Services, setServices] = useState([]);
  const [isFetchPending, setFetchPending] = useState([false]);

  useEffect(() => {
    setFetchPending(true);
    fetch("https://localhost:44339/Munka")
        .then((res) => res.json())
        .then((servicek) => setServices(servicek))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
}, []);*/

return(
    <div>
          {/* Kapcsolat */}
         
      <div className='hatter'>
        <div className="container">
          <div className="row"><p></p>
            <h1 className="col-12 kapcsolat-szöveg">Kapcsolat</h1>
            <div className="col-8 m-auto">
              <form onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:6969/Munka`, {
              method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },

                body: JSON.stringify({
                MunkaTeljesNev: event.target.elements.teljesnev.value,
                MunkaEmail: event.target.elements.email.value,
                MunkaTelefonszam: event.target.elements.telefonszam.value,
                MunkaIranyitoszam: event.target.elements.iranyitoszam.value,
                MunkaTelepules: event.target.elements.telepules.value,
                MunkaCim: event.target.elements.cim.value,
                SzId: event.target.elements.szid.value,
                MunkaLeiras: event.target.elements.leiras.value
            }),
            })

                .then(() =>
                {
                alert("Kész")
                })
                .catch(console.log);
                }}>

              <div>
                <input type="text" className="kapcsolat-input" placeholder="Név" name="teljesnev" maxLength={50}/>
                <input type="text" className="kapcsolat-input" placeholder="Email" name="email" maxLength={100}/>
                <input type="text" className="kapcsolat-input" placeholder="Telefonszám" name="telefonszam" maxLength={11}/>
                <input type="text" className="kapcsolat-input" placeholder="Irányítószám" name="iranyitoszam" maxLength={4}/>
                <input type="text" className="kapcsolat-input" placeholder="Település" name="telepules" maxLength={50}/>
                <input type="text" className="kapcsolat-input" placeholder="Lakcím" name="cim" maxLength={150}/>
                <label type="text" placeholder="Szolgáltatás" name="szolgaltatasok"/>
                <select style={{width:'100%',height: 'auto',padding: '20px 15px 10px 15px'}} name="szid" id="services">
                <option value="1">Porszívózás</option>
                <option value="2">Ablaktisztítás</option>
                <option value="3">Vasalás</option>
                <option value="4">Mosás</option>
                </select>
                <textarea className="kapcsolat-uzenet" placeholder="megjegyzés / rövid leírás" rows={5} id="comment" name="leiras" defaultValue={""} maxLength={300}/>
                <div className="kapcsolat-button col"><button type='submit'>Küld</button></div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Kapcsolat vége */}
    </div>
)

}

export default ContactPage;