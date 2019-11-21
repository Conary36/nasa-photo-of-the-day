import React from "react";

const NasaCard = ({date, content, hdurl}) =>{




    return(
        <div>
            <h1>Vision of the Void</h1>
            <p> {date} < /p>
            <div><img src={hdurl} alt='space pic'/></div>
            <p>{content}</p>
        </div>
    )

    
}

export default NasaCard;