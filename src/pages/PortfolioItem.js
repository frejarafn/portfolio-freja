import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import PortfolioItemComponent from "../components/PortfolioItemComponent";

export default function PortFolioItem() {  
    let params = useParams()
    console.log(params)
    return (
        <>
        <PortfolioItemComponent id={params.ItemId}></PortfolioItemComponent>
        <Footer></Footer>
        </>
    );
}
