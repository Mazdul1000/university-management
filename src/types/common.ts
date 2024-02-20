import { JwtPayload } from "jwt-decode";

export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export interface IUserInfo extends JwtPayload {
  role: string;
  userId: string;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type ResponseErrorType = {
  statusCode: number;
  message?: string;
  errorMessages:IErrorMessages[];
};

export type IErrorMessages = {
    path: string | number;
    message: string
};
