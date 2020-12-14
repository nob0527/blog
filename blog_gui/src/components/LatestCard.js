import React from 'react';
import {Mock_BlogList} from "../Mock_BlogList";
import {Link} from "react-router-dom";
import "../styles/latest_card.css"

function LatestCard(props) {
    return (
        <div className={"latest_card_container"}>
            <div className={"latest_header"}>
                <h4>Latest post</h4>
            </div>

            <div className={"latest_body"}>
                {
                    Mock_BlogList.map(data =>
                        <div className={"latest_title"}>
                            <Link to={"/details"}>{data.title}</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default LatestCard;