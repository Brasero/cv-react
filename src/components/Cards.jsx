import colors from "../utils/styles/color";
import styled from "styled-components";

const CardWrapper = styled.div`
        min-height: 350px;
        max-width: 350px;
        min-width: 350px;
        max-width: 350px;
        display: flex;
        justify-content: center;
        border-radius: 30px;
        text-align: center;
        padding: 20px 25px;
        padding-left: 30px;
        padding-bottom: 30px;
        margin-top: -5px;
        box-shadow: 1px 1px 10px 1px black;
        background-color: ${colors.primary};
        margin-bottom: 10px;
        color: ${colors.backgroundLight};
        cursor: pointer;
        &:hover .card-content {
            display: block;
        }
        &:hover h1 {
            display: none;
        }
`

const ContentContainer = styled.h2`
        color: ${colors.secondary};
        display: none;
        align-self: flex-end;
`

function Cards({title, content, color}) {

    

    return (

        <>
            <CardWrapper>
                <h1>
                    {title}
                </h1>
                {color ? (
                    <ContentContainer $isColor className="card-content">
                        {content}
                    </ContentContainer>
                ) : (
                    <ContentContainer $isColor={false} className="card-content">
                        {content}
                    </ContentContainer>
                )}
                
            </CardWrapper>
        </>
    )
}

export default Cards