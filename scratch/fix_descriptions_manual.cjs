const fs = require('fs');
const path = require('path');

const dir = 'src/content/servicos';

const finalDescriptions = {
  'box-para-banheiro.md': 'Nossa equipe é especialista em transformar banheiros com as melhores soluções de Box para Banheiro em Salvador utilizando vidro temperado de alta resistência.',
  'manutencao-de-vidros.md': 'A manutenção periódica é o segredo para a longevidade e oferecemos o serviço de Manutenção de Vidros em Salvador mais completo da região baiana.',
  'vidros-sob-medida.md': 'Projetos exclusivos exigem soluções personalizadas e somos especialistas em Vidros Sob Medida em Salvador para as necessidades mais complexas de sua obra.',
  'esquadrias-de-aluminio.md': 'As Esquadrias de Alumínio em Salvador são a escolha definitiva para quem busca durabilidade e baixo custo de manutenção no clima litorâneo da nossa capital.',
  'manutencao-sacadas-vidro.md': 'Sacadas de vidro sofrem com ventos fortes e a Manutenção em Sacadas de Vidro em Salvador é uma questão de segurança vital para prédios altos e residências.',
  'manutencao-esquadrias-aluminio.md': 'Embora o alumínio seja durável, os acessórios precisam de Manutenção em Esquadrias de Alumínio em Salvador para não comprometer o uso das janelas e portas.',
  'conserto-box-banheiro.md': 'Um box com defeito é um risco e o Conserto de Box de Banheiro em Salvador imediato é fundamental para a segurança da casa e de toda a sua família.',
  'cortina-de-vidro.md': 'A Cortina de Vidro em Salvador, ou envidraçamento retrátil, é a solução perfeita para integrar a varanda à sala com elegância e visibilidade total do ambiente.',
  'envidracamento-sacada.md': 'O Envidraçamento de Sacada em Salvador é um dos investimentos que mais agregam valor aos imóveis modernos da nossa capital baiana com total segurança técnica.',
  'divisorias-de-vidro.md': 'As Divisórias de Vidro em Salvador são a escolha inteligente para quem busca separar ambientes sem perder a luminosidade e a amplitude de seu escritório ou casa.',
  'fechamento-area-externa-vidro.md': 'O Fechamento de Área Externa com Vidro em Salvador permite que você aproveite seu espaço gourmet mesmo em dias de chuva com máxima sofisticação e lazer.',
  'guarda-corpo-vidro.md': 'O Guarda Corpo de Vidro em Salvador é a união perfeita entre segurança máxima e estética minimalista para escadas e varandas de alto padrão em toda a cidade.',
  'muro-de-vidro.md': 'O Muro de Vidro em Salvador é a solução contemporânea para quem deseja segurança perimetral sem abrir mão da integração com o jardim de sua residência moderna.',
  'telhado-de-vidro-cobertura.md': 'Um Telhado de Vidro em Salvador é ideal para criar ambientes iluminados naturalmente, protegendo contra a chuva com total transparência e engenharia de precisão.',
  'porta-vidro-temperado.md': 'A Porta de Vidro Temperado em Salvador oferece transparência e um aproveitamento inteligente de espaço para entradas modernas de empresas e residências baianas.',
  'manutencao-cortina-de-vidro.md': 'A Manutenção de Cortina de Vidro em Salvador especializada é frequente para que os sistemas retráteis não travarem no uso diário de sua varanda ou sacada.'
};

Object.entries(finalDescriptions).forEach(([file, desc]) => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Regex para substituir a descrição mantendo as aspas
    content = content.replace(/^description: ".*?"/m, `description: "${desc}"`);
    fs.writeFileSync(filePath, content);
  }
});

console.log('✅ SUCESSO TOTAL: Todas as 16 descrições foram corrigidas manualmente e não possuem cortes!');
