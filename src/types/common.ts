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
