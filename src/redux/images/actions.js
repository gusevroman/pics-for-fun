import {
  PIC_REQUEST,
  PIC_REQUEST_SUCCESS,
  PIC_REQUEST_FAILURE,
  PIC_FETCH,
  PIC_DELETE,
} from "./types";

export const requestPic = () => {
  return { type: PIC_REQUEST };
};

export const requestPicSuccess = (data) => {
  return { type: PIC_REQUEST_SUCCESS, payload: data };
};

export const requestPicError = () => {
  return { type: PIC_REQUEST_FAILURE };
};

export const fetchPic = () => {
  return { type: PIC_FETCH };
};

export const deletePic = (data) => {
  return { type: PIC_DELETE, payload: data };
};
