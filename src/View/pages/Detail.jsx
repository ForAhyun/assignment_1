import { useContext, useEffect } from "react";
import {useParams} from "react-router-dom";
import Card from "../shared/components/Card";
import Header from "../shared/components/Header";
import { IssueStore } from "../../Store/store";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Detail = () => {

    const { number } = useParams();
    const { loadDetailItem, detailData } = useContext(IssueStore);
    const { body } = detailData;

    const headerTitle = detailData?.repository_url?.split("https://api.github.com/repos/").join("");

    useEffect(() => {
        if(number) {
            loadDetailItem(number);
        }
        
    }, [loadDetailItem, number]);

    return (
        <>
            <Header title={headerTitle}/>
                <Card issueItem={detailData} isDetailPage={true}/>
                    <Body>
                        <ReactMarkdown remarkPlugins={remarkGfm} rehypePlugins={rehypeRaw}>
                        {body}
                        </ReactMarkdown>
                    </Body>
        </>
    )
}

export default Detail;

const Body = styled.div`
    max-width: 768px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        width: 350px;
    }
`;

