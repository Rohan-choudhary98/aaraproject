import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Statistic from './Statistic'
 import Sales from './Sales'

function Dashboard() {
    return (
        <Section>
            <Navbar />
            <div className="grid">
                <div className="grid_1">
                    <Statistic />
                     <Sales  /> 
                </div>
            </div>
        </Section>
    )
}

export default Dashboard
const Section = styled.section `
margin-left: 18vw;
padding: 2rem;
height: 100%;
.grid{
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;
    margin-top: 2rem;
    .grid_1 {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .grid_2 {
        z-index: 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
`