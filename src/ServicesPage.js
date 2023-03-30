import React, { useState, useEffect } from 'react';


export function ServicesPage() {
return(
    <div>


{/* SZOLGÁLTATÁSAINK */}
<h1 className="cim">Szolgáltatásaink</h1>
<div style={{padding: '20px'}}>
  <div className="container">
    <div className="row p-4">
      <div className="col-sm-5">
        <div><img src="images/img-4.webp" className="img-fluid" /></div>
      </div>
      <div className="col-sm-7" style={{margin: 'auto'}}>
        <h1 className="sotet">Vasalás</h1>
        <p className="sotet">A vasalás rendkívül idő és energia igényes. Egy nagyobb mosás esetén akár 3-4 órát is igénybe vehet a textíliák vasalása. Bizonyos ruhaneműknél speciális eszközökkel lehet csak végrehajtani. Minden tisztítási szolgáltatás tartalmazza a vasalást. Így nyújtva teljes körű megoldást a ruhatisztításra fokozva az Ön kényelmét. Válassza Ön is a teljes körű tisztítási szolgáltatásunkat! Fordítsa idejét fontosabb dolgokra!</p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-7" style={{margin: 'auto'}}>
        <h1 className="sotet">Porszívózás</h1>
        <p className="sotet">Általában 2 munkanap alatt vállaljuk gépi gyártású szőnyegek (normál rövidszőrű, hosszúszőrű shaggy szőnyegek) sík-mélymosását, faliszőnyegek, rongyszőnyegek, gyapjűszőnyegek egyedi mosását, valamint kézi csomózású szőnyegek, kézi szőttes szőnyegek és keleti szőnyegek egyedi mosását, vagy kézi tisztítását, valamint antik szőnyegek kézi tisztítását!</p>
      </div>
      <div className="col-sm-5">
        <div><img src="images/img-5.webp" className="img-fluid" /></div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-5">
        <div><img src="images/img-6.webp" className="img-fluid" /></div>
      </div>
      <div className="col-sm-7" style={{margin: 'auto'}}>
        <h1 className="sotet">Ablaktisztítás</h1>
        <p className="sotet">Mindenki szeret tisztán látni, de elfáradni annál kevésbé.
Kollégáink a napi rutinnak megfelelően, szakszerűen és gyorsan végzik munkájukat. Az ablak és üvegfelületek tisztításánál a legkorszerűbb technológiákat és vegyszereket használjuk, legyen szó modern, vagy régi ablakokról az eredmény tartós és szép lesz.
Az ablaktisztítás során a keretek takarításáért nem számolunk fel külön árat.</p>
      </div>
    </div>
    <div className="row p-4">
      <div className="col-sm-7" style={{margin: 'auto'}}>
        <h1 className="sotet">Mosás</h1>
        <p className="sotet">A ruhákat kis kapacitású gépeken jó minőségű környezetkímélő mosószerekkel és adalékanyagokkal mossuk. Mindvégig szem előtt tartjuk a textília jellemzőit és ennek megfelelően választjuk ki, a használt mosószereket, illetve a mosás és szárítás hőmérsékletét. Az alapos mosás után gondos kézi vasalás következik, amely során minden apró gyűrődést igyekszünk kisimítani. Az elkészült textíliákat higiénikus csomagolásban tároljuk és adjuk át tulajdonosaiknak.</p>
      </div>
      <div className="col-sm-5">
        <div><img src="images/img-7.webp" className="img-fluid" /></div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-5">
        <div><img src="images/kep.webp" className="img-fluid " /></div>
      </div>
      <div className="col-sm-7" style={{margin: 'auto'}}>
        <h1 className="sotet">Nagytakarítás</h1>
        <p className="sotet">Egy átlagos háztartásban évente kétszer ajánlott a nagytakarítást megejteni. Nagyjából ez a 6 hónap az az időintervallum, ami alatt összegyűlik annyi por és szennyeződés a lakásban aminek a száműzéséhez már egy általános takarítás kevés. Nem csak a szabadon álló helyeket portalanítjuk le és töröljük tisztára, mint a napi (rutin) takarítás alkalmával, hanem minden tárgyat, bútort elmozdítunk a helyéről és alatta is, mögötte is kitakarítunk. Könyves polcok esetében lepakoljuk a polc teljes tartalmát (könyveket és a polcon található többi tárgyat), a könyveket leportalanítjuk, a csecsebecséket áttöröljük, majd a szekrény minden oldalát (beleértve a tetejét, alját és az összes polcot) megtisztítjuk.</p>
      </div>
    </div>
    <div className="row p-4">
      <div className="col-sm-7" style={{margin: 'auto'}}>
        <h1 className="sotet">Általános takarítás</h1>
        <p className="sotet">Ha keveset volt otthon a héten, és egy hosszú munkanap után néha az utolsó dolog amit tenni akarunk, hogy körbe takarítsuk a lakást. De mi készségesen segítségedre leszünk a takarításban, így neked csak élvezned kell a csodás tisztaságot, amit magunk után hagyunk.</p>
      </div>
      <div className="col-sm-5">
        <div><img src="images/alt.webp" className="img-fluid szolgkep" /></div>
      </div>
    </div>
  </div>
</div>
{/* SZOLGÁLTATÁSAINK vége */}
</div>
)
}

export default ServicesPage;