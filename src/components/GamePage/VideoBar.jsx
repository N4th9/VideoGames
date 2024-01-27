import '/src/styles/index.css'
import React from "react";

export function VideoBar({data}){
    return(
        <div>
            <iframe className="Video" width="560" height="315" src={"https://www.youtube.com/embed/" + data.infos.VideoId }
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    )
}