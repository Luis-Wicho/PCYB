//appimport { User } from "../domain/User"
import { User } from "../domain/user.entity"
import { UserRepository } from "../domain/users.repository"

export class GetAllUsers {
  constructor(private repository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.repository.getAll()
  }
}