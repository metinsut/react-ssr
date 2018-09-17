import axios from "axios";

export const FETCH_USER = "fetch_users";

export const fetchUsers = () => async dispatch => {
    const res = await axios.get("https://react-ssr-api.herokuapp.com/users");
    dispatch({
        type: FETCH_USER,
        payload: res
    });
};