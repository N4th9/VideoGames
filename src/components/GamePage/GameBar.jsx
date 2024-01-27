import React from "react";

export function GameBar({data}){
    return(
        <div>
            <img width="100%" src={data.infos.image}/>
        </div>
    )
}