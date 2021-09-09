import NavBar from "../../components/NavBar";
import Cards from "../../components/Cards";
import styled from "styled-components";

const dataOfCard = [
    {
        title: 'A propos de moi',
        content: 'Développeur de passion, Thionville',
        color: false
    },
    {
        title: 'Je code avec',
        content: 'React, Php, JS, MySql',
        color: true
    },
    {
        title: 'Mes hobbies',
        content: 'code, jeux-vidéo, guitare, sciences',
        color: false
    }
]


const CardsWrapper = styled.div`
        display: grid;
        justify-content: space-evenly;
        align-items: center;
        gap: 100px;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 100px;
`

function Home() {

    return (
        <>
            <NavBar />
            <CardsWrapper>
                {dataOfCard.map(({title, content, color}) => (
                    <Cards title={title} content={content} color={color} />
                ))}
            </CardsWrapper>
        </>
    )
}

export default Home