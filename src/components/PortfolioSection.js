

import PortfolioPost from "./PortfolioPost";
import { useEffect, useState } from "react";

export default function PortfolioSection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch("https://portfolio.frejavangilst.com/wp-json/wp/v2/posts?_embed");
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }

        getData();
    }, []);

    return (
        <section>
            <h2>Portfolio</h2>

            <div  className="portfoliogrid "> {posts.map(post =>(
                    <PortfolioPost key={post.id} post={post} />
                    ))}</div>
               
            </section>
           
    );
}
