import { createSlice } from "@reduxjs/toolkit";

const issuesSlice = createSlice({
    name: "issues",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setIssues: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setIssues, setLoading, setError } = issuesSlice.actions;

export default issuesSlice.reducer;
