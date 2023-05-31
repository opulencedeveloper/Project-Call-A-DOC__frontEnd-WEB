import { configureStore } from "@reduxjs/toolkit";

import signupSlice from "./signup-slice";
import userDataSlice from "./userData-slice";

const store = configureStore({
  reducer: {
    signUp: signupSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export default store;
