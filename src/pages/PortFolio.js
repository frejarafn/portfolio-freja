// import { useEffect, useState } from "react";
// import PortfolioSection from "../components/PortfolioSection";

// export default function PortFolio() {  
// const [posts, setPosts] = useState([]);

// useEffect(() => {
//     async function getData() {
//         const response = await fetch("https://portfolio.frejavangilst.com/wp-json/wp/v2/posts?_embed");
//         const data = await response.json();
//        console.log(data);
//         setPosts(data);
//     }
//     getData();
// }, []);

//     return (
//    <section className="page">
//        <h1>Portfolio</h1> <section>
//                 {posts.map(post =>(
//                     <PortfolioSection key={post.id} post={post} />
//                     ))}
//             </section>
            
//     </section>
// );
// }

import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";

export default function PortFolio() {  
    return (
        <>
      <PortfolioSection></PortfolioSection>
      <section className="owndesign">
    <h2>
        ... og så har jeg selv designet og kodet mit eget portfolio
    </h2>
    <h3>uden brug af templates</h3>
    <img src="/static/heart.png" alt=""></img>  

    </section>   
      <Footer></Footer>

        </>
    );
}
