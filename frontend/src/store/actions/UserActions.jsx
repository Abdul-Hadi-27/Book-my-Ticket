import axios from "../../api/axiosConfig";
import { loaduser, removeuser } from "../reducers/UserSlice";
export const asyncgetusers = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/users");
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("user  not logged in");
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    console.log("user logged out!");
  } catch (error) {
    console.log(error);
  }
};
export const asyncloginuser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    if (data.length > 0) {
      dispatch(loaduser(data[0])); // ✅ redux
      localStorage.setItem("user", JSON.stringify(data[0]));
      return { success: true, user: data[0] }; // <-- IMPORTANT
    } else {
      console.log("Invalid credentials");
      return { success: false }; // <-- IMPORTANT
    }
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const asyncregisteruser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/users", user);
    dispatch(loaduser(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
    return { success: true, user: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const asyncupdateuser = (id, user) => async (dispatch) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);

    localStorage.setItem("user", JSON.stringify(data));
   dispatch(loaduser(data));
     return data;

  } catch (error) {
    console.log(error);
  }
};
export const asyncdeleteuser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/" + id);
    dispatch(asynclogoutuser());
  } catch (error) {
    console.log(error);
  }
};
