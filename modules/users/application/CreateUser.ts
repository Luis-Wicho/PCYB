import { User } from "../domain/user.entity"
import { UserRepository } from "../domain/users.repository"

export class CreateUser {
  constructor(private repository: UserRepository) {}

  async execute(user: Omit<User, "id_usuario">): Promise<User> {
    return this.repository.create(user)
  }
}