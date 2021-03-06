import React from 'react';
import {Link} from "react-router-dom";
import "../styles/latest_card.css"

function LatestCard({posts}) {
    return (
        <div className={"latest_card_container"}>
            <div className={"latest_header"}>
                <h4>Latest post</h4>
            </div>

            <div className={"latest_body"}>
                {
                    posts.filter((item, index) => index < 5).map(data =>
                        <div className={"latest_title"} key={data.id}>
                            <Link to={"/posts/" + data.slug}>{data.title}</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default LatestCard;