import { useContext } from "react";
import { IssueStore } from "../../../Store/store";
import Header from "../../shared/components/Header";
import Card from "../../shared/components/Card";
import InfiniteScroll from 'react-infinite-scroller';
import styled from "styled-components";
import AD from "./AD";


const List = () => {

    const {IssueData, loadItems, hasMore} = useContext(IssueStore);

    const headerTitle = IssueData[0]?.repository_url?.split("https://api.github.com/repos/").join("");

    return (
        <>
            <Header title={headerTitle}/> 

            <InfiniteScroll
                pageStart={0}
                loadMore={loadItems}
                hasMore={hasMore}
                loader={<Loading key={0}>Loading...</Loading>}
            >
            {IssueData?.map((it, index) => {
                return (
                    <>
                    {index === 4 && <AD/> }
                    <div key={index}>
                        <Card issueItem={it} isDetailPage={false}/>
                    </div>
                    </>
                )
            })}
            </InfiniteScroll>
        </>
    )
}

export default List;

const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;