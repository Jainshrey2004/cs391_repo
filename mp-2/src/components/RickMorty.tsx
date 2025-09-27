import styled from "styled-components";
import type {Character} from "../interfaces/Characters.ts"

const MainDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: center;
    gap: 7px;
    background-color: #0b0f14;
`;

const IndTileDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: #f5f1d7;
    color: #1e3350;
    border: 3px #b22222 solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;
const Name = styled.h1`
    color: #2de2e6;
    font-size: 2.2vw;`
const Data = styled.p`
  margin: 0;
  color: #355b6a;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
`;

export default function RickAndMorty(props : { data:Character[] } ){
    return (
        <MainDiv >
            {
                props.data.map((char: Character) =>
                    <IndTileDiv key={char.id}>
                        <Name>{char.name}</Name>
                        <Data>Gender: {char.gender}</Data>
                        <Data>Location: {char.location.name}</Data>
                        <Data>Origin: {char.origin.name}</Data>
                        <Img src={char.image} alt={`image of ${char.name}`} />
                    </IndTileDiv>
                )
            }
        </MainDiv>
    );
}