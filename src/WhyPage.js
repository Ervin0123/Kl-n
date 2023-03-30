import React, { useState, useEffect } from 'react';


export function WhyPage() {
return(
    <div>
           {/* MIÉRT MI */}
      <div style={{backgroundColor: 'rgb(236, 246, 255)', padding: '20px'}}>
        <h1 className="cim" style={{marginBottom: '5px'}}><span>Miért </span><span style={{color: '#1f1f1f'}}>minket válasszon?</span></h1>
        <p className="sotet" style={{textAlign: 'center', width: '100%', paddingBottom: '120px'}}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <h1 className="box-szam">1000+</h1>
                <h4 className="box-szoveg">Ügyfél</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <h1 className="box-szam">980+</h1>
                <h4 className="box-szoveg">Elégedett ügyfél</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <h1 className="box-szam">100+</h1>
                <h4 className="box-szoveg">Támogató</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <h1 className="box-szam">50+</h1>
                <h4 className="box-szoveg">Alkalmazott</h4>
              </div>
            </div>
            <p className="sotet" style={{textAlign: 'center', width: '100%', padding: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
        </div>
      </div>
      {/* MIÉRT MI vége */}
      <h1 className="cim" style={{marginBottom: '5px'}}><span>Néhány </span><span style={{color: '#1f1f1f'}}>referenciánk</span></h1>
      <p className="sotet" style={{textAlign: 'center', width: '100%', paddingBottom: '120px'}}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      
       {/* VIDEÓK */}
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div >
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/WZA5gAYpI5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/ESj9mMTl0UI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <p className="sotet" style={{textAlign: 'center', width: '100%', padding: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
        </div>
      

        {/* KÉPEK */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
                <img src="images/ba1.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
              <img src="images/ba2.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
              <img src="images/ba3.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
<p></p>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
                <img src="images/ba4.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
              <img src="images/ba5.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
              <img src="images/ba6.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
            <p></p>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
                <img src="images/ba7.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
              <img src="images/ba8.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="box-kepek">
              <img src="images/ba9.webp" style={{width:'100%',height:'300px'}}></img>
              </div>
            </div>
          </div>
        </div>
    
    
    
    </div>
)

}

export default WhyPage;