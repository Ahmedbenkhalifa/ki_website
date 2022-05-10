import axios from "axios";
import { SET_LOCAL_LOADING } from "../constants/actionTypes";

export const addPost = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOCAL_LOADING, payload: true });
    const { data } = await axios.post("/api/publication/addPublication", formData);
    dispatch({ type: SET_LOCAL_LOADING, payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_LOCAL_LOADING, payload: false });
  }
};
