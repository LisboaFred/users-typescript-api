import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Fred",
        lastName: "Lisboa",
        email: "testeLisboa@test.com",
        password: "123",
      },
    ];
  }
}
