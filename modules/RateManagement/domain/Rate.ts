export interface Rate {
  id_tarifa: number;
  monto_base: number;
  amount?: number; // El ? indica que es opcional
  name?: string;   // El ? indica que es opcional
}