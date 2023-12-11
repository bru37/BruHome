import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "./issuesSlice";

const store = configureStore({
    reducer: {
        issues: issuesReducer,
        // ...다른 리듀서들이 있다면 추가
    },
    // ...다른 스토어 설정들
});

export default store;
