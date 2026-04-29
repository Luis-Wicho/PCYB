import { User } from "./user.entity";

export interface UserRepository {
  getAll(): Promise<User[]>
  getById(id: number): Promise<User | null>
  create(user: Omit<User, "id_usuario">): Promise<User>
  
  // CAMBIO AQUÍ: Permitimos que devuelva 'any' o un 'User' parcial 
  // para que no exija los metadatos de Supabase que no tienes.
  update(id: number, user: any): Promise<any> 
  
  delete(id: number): Promise<void>
}