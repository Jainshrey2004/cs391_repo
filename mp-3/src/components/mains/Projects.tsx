import styled from "styled-components";
import { useState, useEffect } from "react";


const StyledMain = styled.main`
    main{
        background-color: #f8fafc;
        height: 100vh;
        width: 70%;
        padding: 1%;
        @media screen and (max-width: 750px){
            width: 100%}
    }`;

const StyledH2 = styled.h2`
    text-align: center;
    color: #1e3a8a;
    @media screen and (max-width: 750px){
    text-align: center;}
    `;

const StyledH3 = styled.h3`
    margin-top: 10px;`;

// const StyledP = styled.p`
// margin-top: 4px`;

const StyledLi = styled.li`
    margin-top: 4px`;

const StyledCalculator = styled.div`
    font-family: Inter, Arial, sans-serif;
    max-width: 560px;
    margin: 20px auto;
    padding: 16px 18px;
    border: 1px solid #d1d5db;
    background: #ffffff;
    border-radius: 8px;
    text-align: center;
`;

const StyledCalculatorHeading = styled.h2`
    font-size: calc(18px + 0.4vw);
    margin-bottom: 6px;
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    max-width: 360px;
    margin: 0 auto 12px;
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background: #fff;
    color: #111827;
`;

const StyledLabel = styled.label`
    display: block;
    margin: 10px 0 4px;
    font-weight: 600;
`;

const StyledOperations = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const StyledButton = styled.button`
    border: 1px solid #374151;
    background: #eee;
    color: #111;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 700;
    font-size: calc(14px + 0.6vw);
`;

const StyledOutput = styled.h2<{ isNegative?: boolean }>`
    width: 100%;
    max-width: 420px;
    margin: 14px auto 0;
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background: #fafafa;
    font-size: calc(16px + 0.6vw);
    color: ${(props) => (props.isNegative ? "red" : "white")};
`;

export default function Projects() {
    const [numOne, setnumOne] = useState("");
    const [numTwo, setnumTwo] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        if (numOne !== "" && numTwo !== "" && operation) {
            const one = Number(numOne);
            const two = Number(numTwo);

            let out = "";
            switch (operation) {
                case "+": out = (one + two).toString(); break;
                case "-": out = (one - two).toString(); break;
                case "*": out = (one * two).toString(); break;
                case "/": out = two !== 0 ? (one / two).toString() : "NaN"; break;
                case "**": out = (one ** two).toString(); break;
                default: out = "";
            }
            setResult(out);
        } else {
            setResult("");
        }
    }, [numOne, numTwo, operation]);

    const handleClear = () => {
        setnumOne("");
        setnumTwo("");
        setOperation("");
        setResult("");
    };

    return (
        <StyledMain>
            <title>Project | Resume</title>
            <StyledH2>Projects</StyledH2>

            <StyledH3>Ticket Manager - Task Assignment System</StyledH3>
            <ul>
                <StyledLi>Built a React/Node/Mongo tool to track incoming tickets and assignments.</StyledLi>
                <StyledLi>Reduced tracking errors and improved turnaround by introducing a clear workflow.</StyledLi>
            </ul>

            <StyledH3>Vision Crafter - AI-Powered Content Automation</StyledH3>
            <ul>
                <StyledLi>Generated and curated marketing images with an OpenAI-powered pipeline.</StyledLi>
                <StyledLi>Improved design workflow efficiency and page-load times using a CDN.</StyledLi>
            </ul>

            <StyledH3>Calculator - Basic Operations</StyledH3>
            <StyledCalculator>
                <StyledCalculatorHeading>Calculator</StyledCalculatorHeading>
                    <StyledLabel>Give me a number: </StyledLabel>
                    <StyledInput type="number" value={numOne} onChange={(e) => setnumOne(e.target.value)}/>
                    <br/>
                    <StyledLabel>Give me another number: </StyledLabel>
                    <StyledInput type="number" value={numTwo} onChange={(e) => setnumTwo(e.target.value)}/>
                    <br/>
                <StyledOperations>
                    {["+", "-", "*", "/", "**"].map((op) => (
                        <StyledButton key={op} onClick={() => setOperation(op)}>
                            {op}
                        </StyledButton>
                    ))}
                    <StyledButton onClick={handleClear}>Clear</StyledButton>
                </StyledOperations>
                <StyledOutput isNegative={parseFloat(result) < 0}>
                    {result !== "" ? `${result}` : ""}
                </StyledOutput>
            </StyledCalculator>

        </StyledMain>
    )

}