import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchIssuesAsync } from "./redux/issuesAsync";
import IssueList from "./components/IssueList";
import IssueDetail from "./components/IssueDetail";
import store from "./redux/store"; // 별도 파일에서 스토어 가져오기

const App = () => {
    const dispatch = useDispatch();
    const issues = useSelector((state) => state.issues.data);
    const loading = useSelector((state) => state.issues.loading);
    const error = useSelector((state) => state.issues.error);

    useEffect(() => {
        dispatch(fetchIssuesAsync());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Provider store={store}>
            <h1>GitHub Issues</h1>
            <IssueList issues={issues} />
            {issues.length > 0 && <IssueDetail issue={issues[0]} />}
        </Provider>
    );
};

export default App;
