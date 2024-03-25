import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse = {
  data?: any;
  error?: TError;
};

export type TGenericResponse<T> = {
  data?: T;
  error?: TError;
};

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TResponseRedux<T> = TGenericResponse<T> & BaseQueryApi;
