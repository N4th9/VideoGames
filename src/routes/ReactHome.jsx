import React from 'react';
import '/src/styles/index.css'
import { useLoaderData, NavLink } from "react-router-dom";
import { ViewGame } from "../components/ReactHome/ViewGame.jsx";
import { NavBar } from "../components/ReactHome/NavBar.jsx";

export async function loader() {
    try {
        const response = await fetch('http://localhost:3001/games');
        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}

export function ReactHome(){
    const { data } = useLoaderData();
    return(
        <div>
            <NavBar/>
            <div className="displayGames">
                {data.map((gameData) => {
                    return (
                        <div>
                            <NavLink to={`/game/${gameData.id}`}>
                                <ViewGame data={gameData}/>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}