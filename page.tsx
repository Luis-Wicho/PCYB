import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  // AGREGA EL AWAIT AQUÍ:
  const supabase = await createClient(cookies())

  // Ahora 'from' funcionará porque supabase ya no es una promesa
  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo: any) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}