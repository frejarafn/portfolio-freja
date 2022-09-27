

export default function AboutSection() {
    
    return (
        <section>
         <section className="aboutIntro">
            <div>
                <h1>Hvem er jeg?</h1>
            <h3>Freja Rafn van Gilst</h3>
            <h4>Multimediedesigner // Frontend // Nytænkende // Kreativ // Nørdet koder</h4>
            </div> 
            <div>
 <img className="aboutintroimg" src="/static/abouttop.png" alt=""></img>

            </div> 
         
         </section>


        <section className="salepitch">
            <br></br>
        <h2>
                Jeg arbejder hver dag på at blive dygtigere og klogere. Min nysgerrighed på verden og mennesker omkring mig sikrer at jeg kan skabe digitale løsninger der skaber mest mulig værdi for de virksomheder jeg udfører opgaver for.

            </h2>
            <h3>
                Og så elsker jeg at programmere dagen lang for at perfektionere min kode!
            </h3>
            <br></br>


            </section>


         <section className="aboutgrid">
            <div>
                <h2>Multimediedesigner på 3. semester, Frontend Developer</h2>
 <img className="aboutintroimg" src="/static/firepiger.png" alt=""></img>  
            </div>
       
         
         <p>Som man nok efterhånden har set hedder jeg Freja van Gilst, men hvem er jeg egentligt og hvad kan jeg inden for mit fag? Jeg er en pige på 23 år, som studerer multimediedesign på 3. semester på Erhvervsakademi Aarhus, hvor jeg er ved at specialisere mig inden for frontend udvikling.
                Jeg bor på kollegie, da jeg elsker at være sammen med andre mennesker. Her bor jeg både sammen med danske og internationale studerende og har derfor en bred og broget menneskemængde omkring mig på alle tidspunkter af døgnet. Jeg trives i at bo på kollegie sammen med mange andre, da jeg altid har nogen
                at snakke med om alt eller intet. Derudover holder vi mange arrangementer sammen, både i form af lektielæsning, kreative aftener eller fester. 

                <br></br>
                <br></br>

                Jeg kommer oprindeligt fra en mindre by i Syddanmark, Give, hvor jeg er vokset op med mine forældre og tre søstre. Jeg har altid været meget kreativt på flere forskellige måder. Jeg har både tegnet og malet siden børnehaven, og så har jeg spillet klaver siden folkeskolen. Denne kreativitet og skaberglæde har
                jeg altså haft med i rygsækken i gennem en lang årrække. Jeg har konkluderet det er også er én af de helt store grunde til jeg trives så godt som multimediedesigner. På min uddannelse kan jeg nemlig kombinere min kreative side med min nysgerrige i en blanding af design og programmering. Min allerfornemmeste opgave er at løse 
                udfordringer gennem sammenhængende og veludførte æstetiske digitale løsninger. Dette formår jeg gennem et veludarbejdet sammenspil mellem UX, design og især programmering. Dette gør jeg gennem brugen af værktøjer som Adobes programmer og programmeringssprog i form af HTML, CSS og Javascript. 
           
           
                <br></br>
                <br></br>

                Men hvordan arbejder jeg egentligt, og hvordan finder jeg frem til de bedst mulige digitale løsninger? Jeg er altid klar på en udfordring og formår at løse den både igennem selvstændigt arbejde eller hvis jeg er en del af et team. Jeg lærer meget af de mennesker omkring mig, og elsker derfor at høre inputs og ideer til mit eget arbejde. 
                Jeg er god til at kommunikere i gruppearbejde og vil hellere lytte på andres kreative tanker end at trumfe igennem med mine egne. Jeg har nemlig erfaret at jeg let modtager konstruktiv kritik, så jeg kan udvikle mig som multimediedesigner. Det er altså altid et plus for mig at lære af mine medmennesker, men arbejder lige så godt alene. For når jeg
                sætter mig selv et mål, formår jeg altid at nå mine deadlines og skabe et digitalt produkt, der er baseret på min brede baggrundsviden om både UX, design og programmering.  
           
            </p>
         </section>


         <section className="tilbyd">
         <h2 className="center">Hvad kan jeg tilbyde dig?</h2>
        <div className="aboutgrid">
        <p>
                - Jeg kan arbejde selvstændigt, struktureret og målrettet
                <br></br>
                <br></br>
                - Jeg er ansvarsbevidst og kan overholde en deadlines
                <br></br>
                <br></br>
                - Jeg trives i et ambitiøst og dynamisk miljø som del af et team 
                <br></br>
                <br></br>
                - Jeg er kreativ, nysgerrig og idérig
                <br></br>
                <br></br>
                - Jeg brænder efter at skabe gennemtænkte æstetiske digitale løsninger
                <br></br>
                <br></br>
                - Jeg er et godt match for dig!
           
            </p>
 <img className="tilbydimg" src="/static/tilbyd.png" alt=""></img>  

        </div>
        
        
         </section>

         <section className="cv">
            <h2>
                Er din nysgerrighed stadig ikke stillet?
            </h2>
 <img className="cvimg" src="/static/freja.png" alt=""></img>  

        <h3>Hent mit {""}
            <a href="/static/Cv.png" rel="noreferrer" target="_blank">
            cv eller 
            </a>
             
            
        <div onClick={() => {document.body.scrollIntoView(false)}}> kontakt mig!</div>
            
            
            </h3>
        </section>



            </section>
           
    );
}
