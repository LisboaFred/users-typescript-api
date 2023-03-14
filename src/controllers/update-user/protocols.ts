import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUsersRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
