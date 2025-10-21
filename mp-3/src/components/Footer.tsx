import styled from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.footer`
    background-color: #1e3a8a;
    color: #ffffff;

    @media screen and (max-width: 750px){
        font-size: calc(2px + 1vw);
    }
`;

const StyledCredit = styled.span`
    color: gold;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Shrey Jain <Link to={`/`}><StyledCredit>Credits</StyledCredit></Link> &copy;</p>
        </StyledFooter>
    )
}