import React from "react";
import styled from 'styled-components'
import image from '../../assets/images/Laptop-man.png'


const Wrapper = styled.div`
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Reason = styled.div`
    font-weight: 400;
    margin-top: 25px;
`

const RepairImage = styled.img`
    max-width: 300px;
    max-height: 400px;
    
`

const Settings: React.FC = () => {
    return (
        <Wrapper>
            <Reason>
                Sorry, this page is still under development.
                Try to back later.
            </Reason>
            <RepairImage src={image} alt=""/>
        </Wrapper>
    )
}


export default Settings