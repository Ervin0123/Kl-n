import React, { useState, useEffect } from 'react';


export function AboutPage() {

  const[termekeks,setTermekeks] = useState([]);
  const[isFetchPending, setFetchPending] = useState(false);
  
  useEffect(() => {
      setFetchPending(true);
      fetch("https://localhost:6969/Raktar")
          .then((res) => res.json())
          .then((termekek) => setTermekeks(termekek))
          .catch(console.log)
          .finally(() => {
              setFetchPending(false);
          });
  }, []);

return(
    <div>
     {/* RÓLUNK */}
     <div style={{backgroundColor: 'rgb(236, 252, 255)', padding: '20px'}}>
     <div className="container">
       <div className="row" style={{paddingTop:'30px'}}>
         <div className="col-md-6" style={{padding: '10px'}}>
           <div><img src="images/img-2.webp" className="img-fluid" /></div>
         </div>
         <div className="col-md-6">
           <h1><span>Rólunk </span> </h1>
           <p className="sotet">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>  
         </div>
         <p className="ipsum_text sotet">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
         <p className="ipsum_text sotet">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
         <p className="ipsum_text sotet">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
       </div>
     </div>
   </div>
<div className="product-grid">  
   {/* RÓLUNK vége */}
   
   <h1 className="cim"><span>Mi </span><span style={{color: '#1f1f1f'}}>ezeket a </span><span>termékeket</span> <span style={{color: '#1f1f1f'}}>használjuk</span></h1>
      <div className='container'>
            <div className='row'>
                {termekeks.map((termekek) => (
                
                        <div className="product-card col-sm-3 col-lg-2" key={termekek.rid} style={{textAlign:"center"}}>
                          <h3>{termekek.nev}</h3>   
                          
                          <img src={`data:image/webp;base64, ${termekek.kepfajl}`} className="hell"></img>      
                        </div>
                ))}   
            </div>
      </div>
</div>



</div>
   
   
);

}

export default AboutPage;