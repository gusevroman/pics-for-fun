import {
  PIC_REQUEST,
  PIC_REQUEST_SUCCESS,
  PIC_REQUEST_FAILURE,
  PIC_DELETE,
} from "./types";

const initialState = {
  url: "",
  loading: false,
  error: false,
  pics: [],
};

const picsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PIC_REQUEST:
      return { ...state, loading: true };
    case PIC_REQUEST_SUCCESS:
      return {
        ...state,
        url: action.payload.url,
        username: action.payload.username,
        loading: false,
        pics: [...state.pics, action.payload],
      };
    case PIC_REQUEST_FAILURE:
      return { ...state, loading: false, error: true };
    case PIC_DELETE:
      return {
        ...state,
        pics: state.pics.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default picsReducer;
