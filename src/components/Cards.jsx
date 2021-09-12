import colors from "../utils/styles/color";
import styled from "styled-components";

const CardWrapper = styled.div`
        width: 350px;
        height: 350px;
        box-sizing: border-box;
        overflow-wrap: break-word;
        display: flex;
        justify-content: center;
        border-radius: 30px;
        text-align: center;
        padding: 20px 25px;
        padding-left: 30px;
        padding-bottom: 50px;
        margin-top: -5px;
        box-shadow: 1px 1px 10px 1px black;
        ${(props) =>  props.children[1].props.$isColor === "1" && (`background-color: ${colors.primary}; color: ${colors.backgroundLight};`) }
        ${(props) => props.children[1].props.$isColor === "2" && (`background-color: ${colors.tertiary}; color: ${colors.backgroundLight};`)}
        ${(props) => props.children[1].props.$isColor === "3" && (`background-color: ${colors.backgroundLight}; color: ${colors.primary}; & h1 {color: ${colors.tertiary};} border-color: ${colors.primary}`)}
        ${(props) => props.children[1].props.$isColor === "4" && (`background-color: ${colors.tertiary}; color: ${colors.complement}; & h2 {color: ${colors.complement};}`)}
        ${(props) => props.children[1].props.$isColor === "5" && (`background-color: ${colors.complement}; color: ${colors.backgroundLight}; & h2 {color: ${colors.backgroundLight};}`)}
        cursor: pointer;
        &:hover .card-content {
            display: block;
            max-height: 150px;
            margin-top: 150px;
        }
        &:hover h1 {
            display: none;
        }
        &:hover {
            height: 350px;
            width: 350px;
        }
        &::after {  
            content: '';
            display: block;
            padding-bottom: 100%;
        }

        &::-webkit-scrollbar {
            display: none;
        }
        overflow-y: scroll;
        &:hover::-webkit-scrollbar {
            display: block;
            width: 25px;
            height: 8px;
            border-radius: 0 150px 150px 0;
            margin-right: 25px;
            background-color: ${colors.primary};
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 0 150px 150px 0;
            background: ${colors.secondary};
        }
`

const ContentContainer = styled.h2`
        color: ${colors.secondary};
        display: none;
        align-self: flex-end;
        text-transform: capitalize;
        max-height: fit-content;
`

function Cards({title, content, color, index}) {
    

    return (

        <>
            <CardWrapper key={`${title}-${index}`}>
                <h1>
                    {title}
                </h1>
                {color !== undefined && (
                    <ContentContainer $isColor={color} className="card-content">
                        {content.map((data, index) => (
                            <div key={`${title}-${index}`}>
                                {data}
                            </div>
                        ))}
                    </ContentContainer>
                ) }
                
            </CardWrapper>
        </>
    )
}

export default Cards