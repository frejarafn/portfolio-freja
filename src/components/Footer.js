export default function Footer() {
    return (
        <footer>
            <h3 className="footerh3">Har du lyst til at vide endnu mere?</h3>
            <div className="footerflex">

                <a className="footerimg" href="https://www.instagram.com/freja_rafn/" target="_blank" rel="noreferrer">
                    <img src="/static/insta.png" alt="Instagram Logo"></img></a>
                <a className="footerimg" href="https://www.linkedin.com/in/freja-van-gilst" target="_blank" rel="noreferrer">

                    <img src="/static/linkedin.png" alt="Linkedin logo"></img>
                </a>
                <a className="footerimg" href="https://www.facebook.com/freja.rafnvangilst/" target="_blank" rel="noreferrer">

                    <img src="/static/facebook.png" alt="Facebook logo"></img>
                </a>
            </div>

            <div >
                <h3>Eller kontakt mig</h3>
                <div className="footergrid">
                    <div>
                        <img className="footericon" src="/static/icon.png" alt="Person icon"></img>
                        <p className="footercontact">Freja Rafn van Gilst</p>
                    </div>
                    <div>
                        <img className="footericon" src="/static/phone.png" alt="Phone icon"></img>
                        <p className="footercontact">+45 42 80 33 70</p>
                    </div>
                    <div>
                        <img className="footericon" src="/static/mail.png" alt="Mail icon"></img>
                        <p className="footercontact">frejavangilst@gmail.com</p>
                    </div>


                </div>


            </div>
            <div>




            </div>
            <div>

            </div>





        </footer>
    );
}
