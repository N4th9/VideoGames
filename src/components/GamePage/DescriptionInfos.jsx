import '/src/styles/index.css'
import React from "react";

export function DescriptionInfos({data}){
    return (
        <div className="DescriptionInfos">
            <div>
                <h2 className="descriptionTitleGamePage" >Description :</h2>
                <p className="descriptionGamePage" >{data.infos.description}</p>
            </div>
            <div>
                <h2 className="categoryTitleGamePage" >Catégorie(s) :</h2>
                <p className="categoryGamePage" >{data.infos.categories}</p>
                <h2 className="plateformTitleGamePage" >Platerforme(s) :</h2>
                <p className="plateformGamePage" >{data.infos.platform}</p>
            </div>
        </div>
    )
}