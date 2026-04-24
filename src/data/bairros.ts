export const BAIRROS = [
  "Acupe", "Aeroporto", "Águas Claras", "Alto da Terezinha", "Alto das Pombas", "Alto do Cabrito", 
  "Alto do Coqueirinho", "Amaralina", "Areia Branca", "Arenoso", "Arraial do Retiro", "Bairro da Paz", 
  "Baixa de Quintas", "Barbalho", "Barra", "Barreiras", "Barris", "Beiru Tancredo Neves", "Boa Viagem", 
  "Boa Vista de Brotas", "Boa Vista de São Caetano", "Boca da Mata", "Boca do Rio", "Bom Juá", 
  "Bonfim", "Brotas", "Cabula", "Cabula VI", "Caixa D’Água", "Cajazeiras II", "Cajazeiras IV", 
  "Cajazeiras V", "Cajazeiras VI", "Cajazeiras VII", "Cajazeiras VIII"
];

export function getSlug(name: string) {
  return name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
