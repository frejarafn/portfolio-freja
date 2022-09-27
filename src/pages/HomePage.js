// import { useEffect, useState } from "react";
import PortfolioSection from "../components/PortfolioSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



export default function HomePage() {  

     return (
    <section className="page">
        <Header></Header>

        <section>
            <div className="kompetenceoverskrift" >    
                <h2>Mine kompetencer</h2>
                <p>Som multimediedesigner har jeg en bred vifte af kompetencer.</p>
            </div>
           
                <div className="kompetencer">
                    <div>
                    <img className="kompetenceimg" src="/static/web.png" alt=""></img>
                    <h3>Webudvikling</h3>
                    <p>Min største passion er kodning, hvor jeg altid stræber for at opnå den bedst mulige digitale løsning. Dette formår jeg igennem mit kendskab til diverse programmeringssprog som HTML5, CSS3 og JavaScript, som jeg hver dag bliver bedre til at benytte mig af. </p>
                    </div>
                    <div>
                    <img className="kompetenceimg" src="/static/graf.png" alt=""></img>
                    <h3>Grafisk design</h3>
                    <p>En vigtig del af at skabe en god digital løsning er at formå at kunne skabe en sammenhængende visuel identitet gennem brug af forskellige grafiske elementer. Her kan jeg både kreere hele hjemmesider, logoer og andre grafiske elementer som billeder og videoer. Jeg kan bruge disse forskellige designelementer til at skabe en løsning der går hånd i hånd med min kundes ønsker. </p>
                    </div>
                    <div>
                    <img className="kompetenceimg" src="/static/kom.png" alt=""></img>
                    <h3>Kommunikation</h3>
                    <p>For at kunne designe og kode en digital løsning med størst mulig værdi for kunden, er det også en fordel at have kendskab til det forgående arbejde. Dette har jeg gennem min uddannelse også fået stor viden inde for så jeg kan udføre en detaljeret målgruppeanalyse, brugertest og andet der sørger for at mit digitale produkt rammer plet hver gang. </p>
                    </div>


                </div>
            </section>

            <section className="hvemerjeg" >
                <div>  <h2>Hvem er jeg?</h2>
                <p>Jeg hedder Freja van Gilst og jeg er 23 år gammel. Jeg læser multimediedesign på 3. semester på Erhvervsakademi Aarhus, hvor jeg er i gang med at specialisere mig som frontender. Jeg elsker at kode og finde på nye kreative løsninger der kan skabe værdi for virksomheder og mennesker. Jeg drives af lysten til at skabe gode weboplevelser og bliver samtidigt klogere og mere erfaren, hver dag. Er du nysgerrig på at høre mere om mig? 
                Så tryk <Link className="hvemerjeglink" to="/about">her.</Link>
                    
 </p></div>
                
 <img className="hvemerjegimg" src="/static/hvemerjeg.png" alt=""></img>

              
            </section>

            
    
        <PortfolioSection ></PortfolioSection>
<section className="owndesign">
    <h2>
        ... og så har jeg selv designet og kodet mit eget portfolio
    </h2>
    <h3>uden brug af templates</h3>
    <img src="/static/heart.png" alt=""></img>  

    </section>       


        <Footer></Footer>
    </section>
);
}
