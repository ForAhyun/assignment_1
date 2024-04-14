import styled from "styled-components";

const Header = ({title}) => {
    
    return (
        <HeaderContainer>
            {title}
        </HeaderContainer>
        
    )
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50px;
    font-size: 20px;
`;