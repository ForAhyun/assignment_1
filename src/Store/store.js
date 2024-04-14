import { createContext, useState } from "react";
import HttpRequest from "../network/axios";


export const IssueStore =  createContext();
  
export const IssueStoreProvider = ({children}) => {

    const [IssueData, setIssueData] = useState([]);
    const [detailData, setDetailData] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [initialLoad, setInitialLoad] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const loadItems = async (page) => {
            try {
                const response = await HttpRequest(`issues?sort=comments&page=${page}`);
                
                if(initialLoad) {
                    setIssueData(response.data);
                    setInitialLoad(false);
                } else {
                    setIssueData(prevItems => [...prevItems, ...response.data]);
                }

                setPageNum(pageNum + 1);
                setHasMore(response.data.length > 0);
            } catch (error) {
                console.error('Error loading items >>', error);
            }
    };

    const loadDetailItem = async (number) => {
        try {
            const response = await HttpRequest(`issues/${number}`);
            setDetailData(response.data);
        }catch (error) {
            console.error('Error loading detail items >>', error);
        }
    };

    const value = {
        IssueData,
        loadItems,
        hasMore,
        detailData,
        loadDetailItem,
    };

      return (
        <IssueStore.Provider value={value}>
          {children}
        </IssueStore.Provider>
      );
}

