import { configureStore } from "@reduxjs/toolkit";

//import uiSlice from "./ui-slice";
import signupSlice from "./signup-slice";

const store = configureStore({
    reducer: {
        signUp: signupSlice.reducer
    }
});

export default store;