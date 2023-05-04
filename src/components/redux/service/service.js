import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBaseUrl } from "./baseurl";
import axios from "axios";

//Login API ACTION
export const fetchPhoneNumber = createAsyncThunk(
  "fetchPhoneNumber",
  async (obj) => {
    const response = await axiosBaseUrl.post(`user/check_ph_no_and_login`, {
      phno: obj.phnNumber,
    });
    const otpData = response.data;
    return otpData;
  }
);

//LOGIN API ACTION
export const fetchPhoneOtp = createAsyncThunk("fetchPhoneOtp", async (obj) => {
  const response = await axiosBaseUrl.post(`user/check_ph_no_and_login`, {
    phno: obj.phnNumber,
    otp: obj.otp,
  });
  return response.data;
});

//Category Action 
export const fetchCategoryApi = createAsyncThunk(
  "fetchCategoryApi",
  async() =>{
    const response = await axiosBaseUrl.get(
      `category/find_all_category`
    );
    const data = await response.data.result;
    return data ;
  }
);

//Course Action
export const fetchCourseApi = createAsyncThunk("fetchCourseApi", async () => {
  const response = await axiosBaseUrl.get(`course/find_all_course`);
  const data = await response.data.result;
  return data;
});

//Course Product Action
export const fetchProductApi = createAsyncThunk("fetchProductApi", async (id) =>{
  const response = await axiosBaseUrl.get(`course/find_all_course?&_id=${id}`);
  const data = await response.data.result;
  return data ;
});

//Testimonials Action
export const fetchTestimonialApi = createAsyncThunk(
  "fetchTestimonialApi",
  async () => {
    const response = await axiosBaseUrl.get(`testimonial/find_all_testimonial`);
    const data = await response.data.result;
    return data;
  }
);

//Partner Action
export const fetchPartnerApi = createAsyncThunk("fetchPartnerApi", async (_id) => {
  const response = await axiosBaseUrl.get(`partner/find_all_partner`);
  const data = await response.data.result;
  return data;
});

//Pagination Slice Action
export const fetchPaginationApi = createAsyncThunk(
  "fetchPaginationApi",
  async ({ currentPage, limit }) => {
    console.log("currentPage", typeof currentPage);
    console.log("limit", typeof limit);

    const response = await axiosBaseUrl.post(
      `course/show_course_with_pagination`,
      { page: currentPage, limit }
    );
    const totalData = response.data.result.total;
    const data = response.data.result.docs;
    return { data, totalData };
  }
);

//Filter Action
export const fetchFilterApi = createAsyncThunk(
  "fetchFilterApi",
  async (_id) => {
    const filteredData = await axios.get(
      `http://192.168.1.57:5000/api/v1/course/find_course_by_category?category_id=${_id}`
    );
    const data = await filteredData.data.result;
    return data;
  }
);

//Cart Action


