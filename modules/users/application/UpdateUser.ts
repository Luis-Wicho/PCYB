
import { UserRepository } from "../domain/users.repository";
// Quitamos el import de Supabase si no vamos a usar su interfaz estricta

export class UpdateUser {
  constructor(private repository: UserRepository) {}

  // Usamos 'any' en el argumento y en la promesa para saltar la validación estricta de metadatos
  async execute(id: number, user: any): Promise<any> {
    return this.repository.update(id, user);
  }
}