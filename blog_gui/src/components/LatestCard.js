import React from 'react';
import {MockData} from "../MockData";
import "../styles/latest_card.css"

function LatestCard(props) {
    return (
        <div className={"latest_card_container"}>
            <div className={"latest_header"}>
                <h4>Latest post</h4>
            </div>

            <div className={"latest_body"}>
                {
                    MockData.map(data =>
                        <div className={"latest_title"}>
                            <a href={""}>{data.title}</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default LatestCard;