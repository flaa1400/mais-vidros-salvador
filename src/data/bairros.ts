export const BAIRROS = [
  "Acupe", "Aeroporto", "Águas Claras", "Alto da Terezinha", "Alto das Pombas", "Alto do Cabrito", 
  "Alto do Coqueirinho", "Amaralina", "Areia Branca", "Arenoso", "Arraial do Retiro", "Bairro da Paz", 
  "Baixa de Quintas", "Barbalho", "Barra", "Barreiras", "Barris", "Beiru Tancredo Neves", "Boa Viagem", 
  "Boa Vista de Brotas", "Boa Vista de São Caetano", "Boca da Mata", "Boca do Rio", "Bom Juá", 
  "Bonfim", "Brotas", "Cabula", "Cabula VI", "Caixa D’Água", "Cajazeiras II", "Cajazeiras IV", 
  "Cajazeiras V", "Cajazeiras VI", "Cajazeiras VII", "Cajazeiras VIII"
];

const preposicoes: Record<string, string> = {
  "Acupe": "no",
  "Aeroporto": "no",
  "Águas Claras": "em",
  "Alto da Terezinha": "no",
  "Alto das Pombas": "no",
  "Alto do Cabrito": "no",
  "Alto do Coqueirinho": "no",
  "Amaralina": "em",
  "Areia Branca": "na",
  "Arenoso": "no",
  "Arraial do Retiro": "no",
  "Bairro da Paz": "no",
  "Baixa de Quintas": "na",
  "Barbalho": "no",
  "Barra": "na",
  "Barreiras": "em",
  "Barris": "no",
  "Beiru Tancredo Neves": "no",
  "Boa Viagem": "na",
  "Boa Vista de Brotas": "na",
  "Boa Vista de São Caetano": "na",
  "Boca da Mata": "na",
  "Boca do Rio": "na",
  "Bom Juá": "no",
  "Bonfim": "no",
  "Brotas": "em",
  "Cabula": "no",
  "Cabula VI": "no",
  "Caixa D’Água": "na",
  "Cajazeiras II": "em",
  "Cajazeiras IV": "em",
  "Cajazeiras V": "em",
  "Cajazeiras VI": "em",
  "Cajazeiras VII": "em",
  "Cajazeiras VIII": "em"
};

export function getSlug(name: string) {
  return name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getPreposicao(name: string) {
  return preposicoes[name] || "em";
}

export function getBairroFormatado(name: string) {
  const prep = getPreposicao(name);
  return `${prep} ${name}`;
}

export function getPreposicaoDe(name: string) {
  const p = getPreposicao(name);
  if (p === "no") return "do";
  if (p === "na") return "da";
  if (p === "nos") return "dos";
  if (p === "nas") return "das";
  return "de";
}

export function getBairroFormatadoDe(name: string) {
  return `${getPreposicaoDe(name)} ${name}`;
}

export function getBairroPageSlug(name: string) {
  const prep = getPreposicao(name);
  const slug = getSlug(name);
  return `vidracaria-${prep}-${slug}`;
}

export function getServiceBairroSlug(serviceSlug: string, bairroName: string) {
  const prep = getPreposicao(bairroName);
  const bairroSlug = getSlug(bairroName);
  return `${serviceSlug}-${prep}-${bairroSlug}`;
}
