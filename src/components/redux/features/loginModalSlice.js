import { createSlice } from "@reduxjs/toolkit";
import { fetchPhoneNumber, fetchPhoneOtp } from "../service/service";
import secureLocalStorage from "react-secure-storage";

const initialState = {
  userInputPhoneNumber: "", //verified

  phoneNumberSuccessMessage: "", //verified

  phoneNumberSuccessStatusCode: "", //verified

  userInputOtp: "", //verified

  apiOtpData: "", //verified

  verifyOtpResponseMessage: "", //verified

  isLoggedIn: false, //verified

  isOpen: true, //verified

  socialApiStatus: "",

  phoneNumberLoginToken: "", //verified

  gmailSocialName : ""
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleShowModal: (state, action) => {
      state.isOpen = true;
    },
    handleCloseModal: (state, action) => {
      state.isOpen = false;
    },
    handleLogout: (state, action) => {
      secureLocalStorage.removeItem("user_phn_login_token");
      secureLocalStorage.removeItem("user_gmail_login_token");

      return initialState;
    },
    handleLogin: (state, action) => {
      state.isLoggedIn = true;
    },

    //For updating user input tag phone number(working fine)
    handleUserInputPhoneNumber: (state, action) => {
      state.userInputPhoneNumber = action.payload.phoneNumber;
      console.log(state.userInputPhoneNumber);
    },

    //For updating user input tag otp(working fine)
    handleUserInputOtpNumber: (state, action) => {
      state.userInputOtp = action.payload.otp;
      console.log(state.userInputOtp);
    },

    //handling Social Login
    handleSocialLoginData: (state, action) => {
      state.userLoginData = action.payload;
    },

    //handling and saving token of social login
    handleSocialLoginStatus: (state, action) => {
      state.socialApiStatus = action.payload;
      if (
        parseInt(state.socialApiStatus) === 200 &&
        state.userLoginData.sub > 0
      ) {
        secureLocalStorage.setItem(
          "user_gmail_login_token",
          JSON.stringify(state.userLoginData)
        );
        if (secureLocalStorage.getItem("user_gmail_login_token")) {
          state.gmailSocialName = JSON.parse(secureLocalStorage.getItem("user_gmail_login_token")).name ;
          state.isLoggedIn = true;
        }
      }
    },
  },

  //1st Api for making otp request
  extraReducers: (builder) => {
    builder.addCase(fetchPhoneNumber.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPhoneNumber.fulfilled, (state, action) => {
      state.isLoading = false; //verified
      state.phoneNumberSuccessMessage = action.payload.responseMessage;
      state.phoneNumberSuccessStatusCode = action.payload.statusCode;
      state.apiOtpData = action.payload.result.otp;
      console.log(state.apiOtpData);
      state.otpRequestSuccess = true;
    });

    //verified
    builder.addCase(fetchPhoneNumber.rejected, (state, action) => {
      state.isError = true; //verified
      state.errorType = action.error.name; //verified
      state.phoneNumberSuccessStatusCode = action.error.statusCode;
      state.errorMessage = action.error.message; //verified
    });

    builder.addCase(fetchPhoneOtp.pending, (state, action) => {
      state.isLoading = true;
      state.otpRequestSuccess = false;
    });
    builder.addCase(fetchPhoneOtp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.verifyOtpResponseMessage = action.payload.responseMessage;
      if (state.verifyOtpResponseMessage === "Login successfully") {
        state.phoneNumberLoginToken = action.payload.result.token;
        secureLocalStorage.setItem(
          "user_phn_login_token",
          JSON.stringify(state.phoneNumberLoginToken)
        );
        state.isLoggedIn = true;
      }
    });
    builder.addCase(fetchPhoneOtp.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const {
  handleShowModal,
  handleCloseModal,
  handleLogin,
  handleLogout,
  handleUserInputPhoneNumber,
  handleShowField,
  handleSocialLoginStatus,
  handleSocialLoginData,
  handleUserInputOtpNumber,
  handleVerifyOtp,
} = modalSlice.actions;

export default modalSlice.reducer;
