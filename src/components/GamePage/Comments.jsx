import '/src/styles/index.css'
import React from "react";

export function Comments({data}){
    return(
        <div>
            <p className="critiques" >Critiques :</p>
            <textarea className="textareaComment"/>
            <button onSubmit="postComment" type="submit" className="postComment">POST</button>
        </div>
    )
}