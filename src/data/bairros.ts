export const BAIRROS = [
  "Acupe", "Aeroporto", "Águas Claras", "Alto da Terezinha", "Alto das Pombas", "Alto do Cabrito", 
  "Alto do Coqueirinho", "Amaralina", "Areia Branca", "Arenoso", "Arraial do Retiro", "Bairro da Paz", 
  "Baixa de Quintas", "Barbalho", "Barra", "Barreiras", "Barris", "Beiru Tancredo Neves", "Boa Viagem", 
  "Boa Vista de Brotas", "Boa Vista de São Caetano", "Boca da Mata", "Boca do Rio", "Bom Juá", 
  "Bonfim", "Brotas", "Cabula", "Cabula VI", "Caixa D’Água", "Cajazeiras II", "Cajazeiras IV", 
  "Cajazeiras V", "Cajazeiras VI", "Cajazeiras VII", "Cajazeiras VIII", "Cajazeiras X", "Cajazeiras XI", 
  "Calabar", "Calabetão", "Calçada", "Caminho das Árvores", "Caminho de Areia", "Campinas de Pirajá", 
  "Canabrava", "Candeal", "Canela", "Capelinha", "Cassange", "Castelo Branco", "Centro", 
  "Centro Administrativo da Bahia", "Centro Histórico", "Chapada do Rio Vermelho", "Cidade Nova", 
  "Comércio", "Cosme de Farias", "Costa Azul", "Coutos", "Curuzu", "Dom Avelar", "Doron", 
  "Engenho Velho da Federação", "Engenho Velho de Brotas", "Engomadeira", "Fazenda Coutos", 
  "Fazenda Grande do Retiro", "Fazenda Grande I", "Fazenda Grande II", "Fazenda Grande III", 
  "Fazenda Grande IV", "Federação", "Garcia", "Graça", "Granjas Rurais Presidente Vargas", "IAPI", 
  "Ilha de Bom Jesus dos Passos", "Ilha de Maré", "Ilha dos Frades", "Imbuí", "Itacaranha", "Itaigara", 
  "Itapuã", "Itinga", "Jaguaripe I", "Jardim Armação", "Jardim Cajazeiras", "Jardim das Margaridas", 
  "Jardim Nova Esperança", "Jardim Santo Inácio", "Lapinha", "Liberdade", "Lobato", "Luiz Anselmo", 
  "Macaúbas", "Mangueira", "Marechal Rondon", "Mares", "Massaranduba", "Mata Escura", "Monte Serrat", 
  "Moradas da Lagoa", "Mussurunga", "Narandiba", "Nazaré", "Nordeste de Amaralina", "Nova Brasília", 
  "Nova Constituinte", "Nova Esperança", "Nova Sussuarana", "Novo Marotinho", "Ondina", "Palestina", 
  "Paripe", "Patamares", "Pau da Lima", "Pau Miúdo", "Periperi", "Pernambués", "Pero Vaz", "Piatã", 
  "Pirajá", "Pituaçu", "Pituba", "Plataforma", "Porto Seco Pirajá", "Praia Grande", "Resgate", "Retiro", 
  "Ribeira", "Rio Sena", "Rio Vermelho", "Roma", "Saboeiro", "Santa Cruz", "Santa Luzia", "Santa Mônica", 
  "Santo Agostinho", "Santo Antônio", "São Caetano", "São Cristóvão", "São Gonçalo", "São João do Cabrito", 
  "São Marcos", "São Rafael", "São Tomé", "Saramandaia", "Saúde", "Sete de Abril", "Stella Maris", 
  "STIEP", "Sussuarana", "Tororó", "Trobogy", "Vale das Pedrinhas", "Vale dos Lagos", "Valéria", 
  "Vila Canária", "Vila Laura", "Vila Ruy Barbosa Jardim Cruzeiro", "Vitória"
];

export function getSlug(name: string) {
  return name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
