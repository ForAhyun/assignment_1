import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({issueItem, isDetailPage}) => {

    const navigate = useNavigate();

    const {
        number,
        user,
        title,
        created_at,
        comments,
    } = issueItem;

    const date = new Date(created_at);

    const onDetailPage = (number) => {
        navigate(`/detail/${number}`);
    };

    return (
                <CardContainer onClick={() => onDetailPage(number)}>

                    {isDetailPage && <ProfileImg src={user?.avatar_url} alt='avatar'></ProfileImg>}

                    <LeftCotainer>
                        <TitleItem>#{number} {title}</TitleItem>
                        <ItemInfo> 
                            작성자 : {user?.login} 작성일 : {date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일
                        </ItemInfo>
                    </LeftCotainer>
                    
                    <RightCotainer>
                        <Comment> 코멘트 : {comments}</Comment>
                    </RightCotainer>
                    
                </CardContainer>

    )
};

export default Card;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
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

const LeftCotainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and (max-width: 480px) {
    width: 75%;
}
`;

const RightCotainer = styled.div``;

const TitleItem = styled.div`
    display: flex;
    align-items: center;
`;

const ItemInfo = styled.div`
    font-size: 12px;

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`;

const Comment = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;

    @media screen and (max-width: 480px) {
        font-size: 11px;
    }
`;

const ProfileImg = styled.img`
    width: 50px;
    margin-right: 10px;

    @media screen and (max-width: 480px) {
        width: 40px;
        margin-right: 5px;
    }
`;
