import RickAndMorty from "./components/RickMorty.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Character} from "./interfaces/Characters.ts";

const Maindiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px #0b0f14 solid;
`;

export default function App(){
    const [data, setData] = useState<Character[]>([]);
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://rickandmortyapi.com/api/character");
            const {results} : {results: Character[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("Error: " + e));
    }, [data.length]);

    return(
        <Maindiv>
            <RickAndMorty data={data}/>
        </Maindiv>
    )
}