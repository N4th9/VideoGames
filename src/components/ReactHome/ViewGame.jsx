import React from 'react';
import '/src/styles/index.css'

export function ViewGame({data}){
    return(
        <div className="viewGame">
            <h2 className="titleViewGame">{data.infos.name}</h2>
            <img width="100%" src={data.infos.image} />
            <p className="commentViewGame">{data.infos.description}</p>
        </div>
    )
}