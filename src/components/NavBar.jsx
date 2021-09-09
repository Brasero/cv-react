import profilPhoto from '../assets/avatar.png'
import styled from 'styled-components'
import colors from '../utils/styles/color'

const NavbarWrapper = styled.div`
        width: -webkit-fill-available;
        padding: 10px 20px;
        border-bottom: 2px solid ${colors.backgroundLight};
        background: ${colors.primary};
        display: flex;
        justify-content: flex-start;
        align-items: center;
`

const ProfilImg = styled.img`
        height: 200px;
        width: 200px;
        border-radius: 250px;
        box-shadow: 1px 1px 10px 1px;
`

const InfoDiv = styled.div`
        font-size: 16px;
        color: ${colors.backgroundLight};
        margin-bottom: 5px;
        height: fit-content;
        ${(props) => (
            props.$isTitle ? `font-size: 64px;` : `font-size: 32px;`
        )}
`
const InfoWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: fit-content;
        margin-left: 50px;
        margin-right: 200px;
`
const ContactWrapper = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
`

const ContactButton = styled.button`
            height: 50px;
            display: flex;
            margin: 10px;
            width: fit-content;
            background-color: transparent;
            border: 1px solid ${colors.backgroundLight};
            border-radius: 10px;
            font-size: 25px;
            padding: 15px 10px;
            text-align: center;
            align-items: center;
            ${(props) => (
                props.$isSecond ? `color: ${colors.secondary}; border-color: ${colors.secondary};` : `color: ${colors.backgroundLight};`
            )}

            &:hover {
                ${(props) => (
                    props.$isSecond ? `background-color: ${colors.backgroundLight}; border-color: ${colors.backgroundLight}; transform: scale(1.1);` : `background-color: ${colors.secondary}; border-color: ${colors.secondary}; transform: scale(1.1);`
                )}
                box-shadow: 1px 1px 5px 1px black;
            }
`


function NavBar () {

    return (
        <NavbarWrapper>
            <ProfilImg src={profilPhoto} alt="avatar de profil" />
            <InfoWrapper>
                <InfoDiv $isTitle>Brandon Ricci</InfoDiv>
                <InfoDiv>Developpeur passioné</InfoDiv>
            </InfoWrapper>
            <ContactWrapper>
                <ContactButton>
                    PDF
                </ContactButton>
                <ContactButton $isSecond>
                    Me Contacter
                </ContactButton>
            </ContactWrapper>
        </NavbarWrapper>
    )
}

export default NavBar