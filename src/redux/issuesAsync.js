import { fetchIssues } from "../api/githubapi";
import { setIssues, setLoading, setError } from "./issuesSlice";

export const fetchIssuesAsync = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const issues = await fetchIssues();
        dispatch(setIssues(issues));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};
