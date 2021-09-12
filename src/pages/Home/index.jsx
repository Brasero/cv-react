import NavBar from "../../components/NavBar";
import Cards from "../../components/Cards";
import styled from "styled-components";
import dataOfCard from "../../utils/data/dataOfCard";

const CardsWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px;
        max-width: -webkit-fill-available;
        flex-flow: wrap;
        flex-wrap: wrap;
        padding: 10px 5%;
        margin-top: 50px;
        
`

function Home() {

    return (
        <>
            <NavBar />
            <CardsWrapper>
                {dataOfCard.map(({title, content, color, index}) => (
                    <Cards title={title} content={content} color={color} index={index} />
                ))}
            </CardsWrapper>
        </>
    )
}

export default Home