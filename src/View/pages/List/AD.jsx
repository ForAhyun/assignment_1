import styled from "styled-components";
import adImg from "../../../assets/ad.png"

const AD = () => {
    return (
        <ADContainer>
            <a href="https://thingsflow.com/ko/home">
                <ADItem>
                    <img src={adImg} alt="ad"/>
                </ADItem>
            </a>
        </ADContainer>
    )
};

export default AD;

const ADContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin: 0 auto 15px;
    max-width: 768px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        width: 350px;
    }
    
`;

const ADItem = styled.div`

    width: 100%;
    img {
        width: 768px;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        img {
            width: 500px;
            height: auto;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            width: 350px;
            height: auto;
        }
    }
`;