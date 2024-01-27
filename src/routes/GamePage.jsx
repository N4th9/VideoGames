import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {GameBar} from "../components/GamePage/GameBar";
import {DescriptionInfos} from "../components/GamePage/DescriptionInfos";
import {VideoBar} from "../components/GamePage/VideoBar";
import {Comments} from "../components/GamePage/Comments";
import React from "react";

export function GamePage() {
    const [gameData, setGameData] = useState(undefined)
    const params = useParams()
    useEffect(() => {

        fetch('http://localhost:3001/game/' + params.id)
            .then(response => response.json())
            .then(data => {
                setGameData(data);
            });
    }, []);

    if(gameData == undefined) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <GameBar data = {gameData} />
            <DescriptionInfos data = {gameData} />
            <VideoBar data = {gameData} />
            <Comments data = {gameData}/>
        </div>
    )
}