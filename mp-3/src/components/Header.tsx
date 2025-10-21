import styled from "styled-components";

const StyledHeader = styled.header`
    background: #1e3a8a;
    color: #ffffff;
    padding: 10px;

    @media screen and (max-width: 750px){
        text-align:center;
    }

`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Shrey Jain</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    )
}