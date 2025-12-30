import { Dispatch, SetStateAction } from "react";

export interface IUser {
  userId: string;
  name: string;
  email: string;
  hasShop: boolean;
  isActive: boolean;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}
