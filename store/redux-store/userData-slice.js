import { createSlice } from "@reduxjs/toolkit";

const userDataInitialState = {
  id: "",
  role: "",
  active: null,
  aos: "",
  availability: null,
  cdate: "",
  certificate: null,
  city: "",
  country: "",
  dob: "",
  doctor_verified: "",
  doctorid: "",
  email: "",
  employmentstatus: null,
  firstname: "",
  is_verified: "",
  lastname: "",
  loginid: "",
  name: "",
  npi: "",
  othername: null,
  phone: "",
  profilepicture: "",
  pwp1: null,
  pwp2: null,
  status: "0",
  token: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState: userDataInitialState,
  reducers: {
    resetState(state) {
      return userDataInitialState;
    },
    addUserData(state, action) {
      const userData = action.payload;
      console.log("in the addUserData reducer");
      return { ...state, ...userData};
    },
  },
});

export const userDataActions = userDataSlice.actions;

export default userDataSlice;
