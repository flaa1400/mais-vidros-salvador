const fs = require('fs');
const path = require('path');

const dir = 'src/content/servicos';
const servicesInfo = [
  { 
    slug: 'box-para-banheiro', 
    title: 'Box para Banheiro em Salvador', 
    icon: '🚿', 
    order: 1,
    p1: 'A **Mais Vidros Salvador** é especialista em transformar banheiros com soluções de **Box para Banheiro em Salvador** com vidro temperado de alta resistência. Atendemos toda a capital baiana, levando modernidade e funcionalidade para o seu lar com projetos que se adaptam a qualquer tamanho de ambiente.',
    p2: 'Escolher o melhor **Box para Banheiro em Salvador** é essencial para manter a organização e a higiene do seu espaço, evitando que a água se espalhe e cause danos. Utilizamos apenas vidros certificados, garantindo a segurança total para você e sua família durante o banho diário.',
    p3: 'Nossos diferenciais incluem uma instalação limpa e rápida com ferragens de alto padrão que resistem à maresia. Contamos com uma equipe técnica própria que realiza a medição precisa, garantindo que o seu projeto de **Box para Banheiro em Salvador** tenha o fechamento perfeito.',
    p4: 'Se você busca por **Box para Banheiro em Salvador** com o melhor custo-benefício e acabamento de luxo, fale com nossos especialistas. Estamos prontos para oferecer um orçamento gratuito e personalizado para o seu projeto de reforma ou construção de banheiros.'
  },
  { 
    slug: 'manutencao-de-vidros', 
    title: 'Manutenção de Vidros em Salvador', 
    icon: '🛠️', 
    order: 2,
    p1: 'A manutenção periódica é o segredo para a longevidade e a **Mais Vidros Salvador** oferece o serviço de **Manutenção de Vidros em Salvador** mais completo da região. Identificamos falhas silenciosas em portas e janelas, prevenindo acidentes e garantindo que tudo funcione com total suavidade.',
    p2: 'A maresia da nossa capital exige uma **Manutenção de Vidros em Salvador** frequente para evitar o travamento de roldanas e ferragens. Nossa revisão técnica foca na limpeza profunda dos trilhos, regulagem de molas e substituição de componentes desgastados por peças originais de alta performance.',
    p3: 'Ao contratar nossa **Manutenção de Vidros em Salvador**, você conta com técnicos treinados que seguem as normas da ABNT. Garantimos que sua estrutura recupere a estanqueidade original, valorizando seu imóvel e trazendo muito mais tranquilidade para o seu dia a dia residencial.',
    p4: 'Não espere um problema grave acontecer para buscar ajuda especializada em **Manutenção de Vidros em Salvador**. Solicite hoje mesmo uma visita técnica da nossa equipe e garanta que sua vidraçaria esteja sempre em perfeitas condições de uso e segurança total para sua família.'
  },
  { 
    slug: 'vidros-sob-medida', 
    title: 'Vidros Sob Medida em Salvador', 
    icon: '📏', 
    order: 3,
    p1: 'Projetos exclusivos exigem soluções personalizadas e na **Mais Vidros Salvador** somos especialistas em **Vidros Sob Medida em Salvador** para as necessidades mais complexas. Seja para tampos de mesa ou prateleiras, entregamos precisão milimétrica em cada peça produzida para sua casa.',
    p2: 'A versatilidade dos **Vidros Sob Medida em Salvador** permite que você aproveite cada centímetro do seu ambiente com sofisticação e leveza visual. Trabalhamos com vidros temperados e espelhados, sempre orientando sobre a melhor espessura para garantir a segurança e a estética do seu projeto.',
    p3: 'Nossa consultoria em **Vidros Sob Medida em Salvador** auxilia você desde a concepção da ideia até a instalação final no seu endereço. Utilizamos tecnologia de ponta no corte e lapidação, resultando em peças com brilho excepcional e bordas perfeitamente finalizadas para um acabamento de luxo.',
    p4: 'Transforme sua ideia em realidade com os **Vidros Sob Medida em Salvador** da Mais Vidros Salvador e eleve o padrão de elegância do seu escritório. Entre em contato e peça um orçamento detalhado para começarmos a planejar o seu próximo projeto de destaque com transparência.'
  },
  { 
    slug: 'esquadrias-de-aluminio', 
    title: 'Esquadrias de Alumínio em Salvador', 
    icon: '🪟', 
    order: 4,
    p1: 'As **Esquadrias de Alumínio em Salvador** são a escolha definitiva para quem busca durabilidade e baixo custo de manutenção no clima litorâneo. Na **Mais Vidros Salvador**, fabricamos e instalamos janelas e portas com perfis de alta qualidade e design moderno para sua fachada.',
    p2: 'Além da resistência, nossas **Esquadrias de Alumínio em Salvador** oferecem um excelente desempenho acústico e térmico, mantendo o seu ambiente mais fresco. Oferecemos diversos tipos de pintura eletrostática, permitindo uma personalização total de acordo com o estilo arquitetônico do seu imóvel.',
    p3: 'A precisão na montagem das **Esquadrias de Alumínio em Salvador** é o que nos diferencia no mercado, garantindo vedação perfeita contra chuvas. Nossa equipe cuida de cada detalhe, desde os acessórios até o ajuste final das folhas, assegurando um manuseio leve e sem ruídos desagradáveis.',
    p4: 'Invista no que há de melhor para a sua construção com as **Esquadrias de Alumínio em Salvador** da Mais Vidros Salvador. Fale com nossa equipe agora pelo WhatsApp e descubra como nossas soluções podem trazer mais conforto e valorização imediata para o seu patrimônio.'
  },
  { 
    slug: 'manutencao-sacadas-vidro', 
    title: 'Manutenção em Sacadas de Vidro em Salvador', 
    icon: '🏢', 
    order: 5,
    p1: 'Sacadas de vidro sofrem com ventos fortes e a **Manutenção em Sacadas de Vidro em Salvador** é uma questão de segurança vital para prédios altos. A **Mais Vidros Salvador** realiza a revisão completa de sistemas, garantindo que cada painel deslize com segurança e firmeza total.',
    p2: 'Roldanas travadas ou painéis desalinhados exigem uma **Manutenção em Sacadas de Vidro em Salvador** imediata para evitar riscos de queda. Nossa equipe realiza a troca de componentes danificados e reforça a vedação com polímeros resistentes, protegendo sua varanda contra infiltrações de chuva.',
    p3: 'Atendemos condomínios em toda a cidade com nossa **Manutenção em Sacadas de Vidro em Salvador**, oferecendo planos preventivos eficazes. Utilizamos lubrificantes específicos para o clima salino, protegendo os componentes da corrosão e garantindo um funcionamento silencioso por muito mais tempo.',
    p4: 'Garanta o lazer e a segurança da sua varanda com o serviço especializado de **Manutenção em Sacadas de Vidro em Salvador** da Mais Vidros Salvador. Agende hoje mesmo uma inspeção técnica e tenha a tranquilidade de saber que sua família está protegida por profissionais qualificados.'
  },
  { 
    slug: 'manutencao-esquadrias-aluminio', 
    title: 'Manutenção em Esquadrias de Alumínio em Salvador', 
    icon: '🔧', 
    order: 6,
    p1: 'Embora o alumínio seja durável, os acessórios precisam de **Manutenção em Esquadrias de Alumínio em Salvador** para não comprometer o uso das janelas. A **Mais Vidros Salvador** oferece manutenção corretiva e preventiva para todos os tipos de esquadrias na capital baiana.',
    p2: 'É comum que, com o tempo, as janelas exijam uma **Manutenção em Esquadrias de Alumínio em Salvador** para recuperar o isolamento contra a chuva e ventos. Nossa equipe realiza a substituição de vedações e o ajuste de fechos, devolvendo a funcionalidade original das suas portas e janelas.',
    p3: 'A **Manutenção em Esquadrias de Alumínio em Salvador** evita a substituição prematura de estruturas inteiras, gerando economia real para o proprietário. Trabalhamos com peças de reposição de primeira linha que garantem que o sistema continue operando com a leveza e a segurança necessárias.',
    p4: 'Recupere o conforto da sua residência com a **Manutenção em Esquadrias de Alumínio em Salvador** da Mais Vidros Salvador. Entre em contato agora e peça um orçamento para o conserto das suas janelas, com a garantia de quem entende profundamente do assunto.'
  },
  { 
    slug: 'conserto-box-banheiro', 
    title: 'Conserto de Box de Banheiro em Salvador', 
    icon: '🚿', 
    order: 7,
    p1: 'Um box com defeito é um risco de acidente e o **Conserto de Box de Banheiro em Salvador** imediato é fundamental para a segurança da casa. A **Mais Vidros Salvador** oferece um serviço de reparo rápido, atendendo chamados em toda a cidade para resolver portas travadas ou soltas.',
    p2: 'Muitas vezes, uma roldana quebrada exige o **Conserto de Box de Banheiro em Salvador** para evitar a quebra espontânea do vidro temperado. Nossa equipe identifica a causa do problema e realiza a troca das peças com precisão, garantindo que o box volte a deslizar suavemente e sem folgas.',
    p3: 'Além do reparo, nosso **Conserto de Box de Banheiro em Salvador** inclui a renovação da vedação de silicone, eliminando vazamentos desagradáveis. Utilizamos materiais de cura rápida e anti-fungo, ideais para o ambiente úmido, garantindo um serviço limpo e duradouro para o seu banheiro.',
    p4: 'Não corra riscos com um box de vidro apresentando problemas e peça o **Conserto de Box de Banheiro em Salvador** da Mais Vidros Salvador agora. Fale conosco pelo WhatsApp e tenha seu box consertado com total segurança por técnicos especialistas em vidraçaria de alto padrão.'
  },
  { 
    slug: 'cortina-de-vidro', 
    title: 'Cortina de Vidro em Salvador', 
    icon: '🌇', 
    order: 8,
    p1: 'A **Cortina de Vidro em Salvador**, ou envidraçamento retrátil, é a solução perfeita para integrar a varanda à sala com elegância e visibilidade total. Na **Mais Vidros Salvador**, instalamos sistemas modernos que permitem a abertura total dos painéis, proporcionando ventilação para o seu imóvel.',
    p2: 'Instalar uma **Cortina de Vidro em Salvador** oferece proteção excepcional contra ventos, transformando sua varanda em um novo ambiente útil. Utilizamos vidros laminados de alta performance que garantem a segurança estrutural exigida pelas normas vigentes para edifícios residenciais.',
    p3: 'Nosso diferencial na **Cortina de Vidro em Salvador** está no acabamento refinado que se harmoniza perfeitamente com a arquitetura do prédio. A instalação é executada por especialistas que garantem a estanqueidade do sistema, evitando infiltrações e garantindo um fechamento leve e seguro.',
    p4: 'Valorize seu apartamento e ganhe um novo espaço de lazer com a **Cortina de Vidro em Salvador** da Mais Vidros Salvador. Solicite um orçamento sem compromisso e veja como podemos transformar sua varanda com sofisticação, segurança e tecnologia de ponta em vidros.'
  },
  { 
    slug: 'envidracamento-sacada', 
    title: 'Envidraçamento de Sacada em Salvador', 
    icon: '🏗️', 
    order: 9,
    p1: 'O **Envidraçamento de Sacada em Salvador** é um dos investimentos que mais agregam valor aos imóveis modernos da nossa capital. A **Mais Vidros Salvador** domina as técnicas para fechar sua varanda, criando uma barreira protetora sem obstruir a vista privilegiada da cidade.',
    p2: 'Com o **Envidraçamento de Sacada em Salvador**, você protege seus móveis da maresia e reduz drasticamente o ruído externo das ruas. Nossos sistemas são projetados para resistir às pressões de vento comuns em Salvador, utilizando travas de segurança e ferragens de alta durabilidade.',
    p3: 'A equipe técnica da Mais Vidros responsável pelo **Envidraçamento de Sacada em Salvador** cuida de todo o processo conforme as normas do condomínio. Garantimos um sistema de fácil manuseio e limpeza, proporcionando um ambiente mais limpo e luxuoso para você e sua família.',
    p4: 'Desfrute de uma varanda protegida e elegante com o **Envidraçamento de Sacada em Salvador** da Mais Vidros Salvador. Fale com um de nossos consultores hoje mesmo e peça uma medição gratuita para dar o primeiro passo na valorização e segurança do seu imóvel.'
  },
  { 
    slug: 'divisorias-de-vidro', 
    title: 'Divisórias de Vidro em Salvador', 
    icon: '📂', 
    order: 10,
    p1: 'As **Divisórias de Vidro em Salvador** são a escolha inteligente para quem busca separar ambientes sem perder a luminosidade e a amplitude. Na **Mais Vidros Salvador**, projetamos divisórias que aliam design contemporâneo com o isolamento necessário para cada espaço da sua empresa.',
    p2: 'O uso de **Divisórias de Vidro em Salvador** permite uma comunicação visual fluida no ambiente corporativo, oferecendo privacidade acústica essencial. Trabalhamos com opções de vidros incolores ou foscos, adaptando o projeto de **Divisórias de Vidro em Salvador** à identidade visual do seu escritório.',
    p3: 'Nossa instalação de **Divisórias de Vidro em Salvador** é rápida e silenciosa, minimizando o impacto na rotina do seu trabalho ou da sua casa. Utilizamos sistemas de fixação robustos e discretos, que garantem a estabilidade e um acabamento premium que impressiona visitantes pelo bom gosto.',
    p4: 'Modernize seu ambiente de trabalho com a clareza das **Divisórias de Vidro em Salvador** da Mais Vidros Salvador. Entre em contato agora e descubra como podemos otimizar o seu espaço com soluções inovadoras e de alto padrão em vidraçaria para clientes exigentes em Salvador.'
  },
  { 
    slug: 'fechamento-area-externa-vidro', 
    title: 'Fechamento de Área Externa com Vidro em Salvador', 
    icon: '🏡', 
    order: 11,
    p1: 'O **Fechamento de Área Externa com Vidro em Salvador** permite que você aproveite seu espaço gourmet ou varanda mesmo em dias de chuva. A **Mais Vidros Salvador** é especialista nessa solução que une praticidade e sofisticação para as áreas de lazer da sua residência ou condomínio.',
    p2: 'Para um **Fechamento de Área Externa com Vidro em Salvador** seguro, utilizamos vidros temperados de alta espessura e sistemas de fixação reforçados. Esta solução oferece uma barreira contra poeira e ruídos, mantendo a área externa sempre limpa e pronta para receber seus convidados.',
    p3: 'Nosso projeto de **Fechamento de Área Externa com Vidro em Salvador** foca na integração harmoniosa com o jardim, mantendo a conexão com a natureza. Oferecemos opções fixas ou móveis, permitindo que você controle a ventilação do ambiente conforme a necessidade do momento com total leveza.',
    p4: 'Ganhe mais espaço e conforto na sua casa com o **Fechamento de Área Externa com Vidro em Salvador** da Mais Vidros Salvador. Solicite uma visita técnica agora mesmo e veja como podemos transformar sua área de lazer em um ambiente de luxo e proteção total contra intempéries.'
  },
  { 
    slug: 'guarda-corpo-vidro', 
    title: 'Guarda Corpo de Vidro em Salvador', 
    icon: '🪜', 
    order: 12,
    p1: 'O **Guarda Corpo de Vidro em Salvador** é a união perfeita entre segurança máxima e estética minimalista para escadas e varandas de luxo. Na **Mais Vidros Salvador**, instalamos sistemas que protegem contra quedas sem criar barreiras visuais pesadas no seu ambiente arquitetônico moderno.',
    p2: 'Para o seu **Guarda Corpo de Vidro em Salvador**, utilizamos vidros laminados que garantem a integridade da barreira mesmo em caso de quebra acidental. As fixações podem ser feitas com botões de aço inox ou torres, proporcionando um acabamento limpo e extremamente sofisticado para sua obra.',
    p3: 'Nossa expertise no **Guarda Corpo de Vidro em Salvador** garante uma instalação estável e resistente a impactos, essencial para locais com circulação de crianças. O aço inox utilizado em nossas torres resiste à oxidação causada pela maresia, mantendo o brilho por muitos anos na sua fachada.',
    p4: 'Segurança não precisa ser sinônimo de poluição visual; escolha o **Guarda Corpo de Vidro em Salvador** da Mais Vidros Salvador para proteger quem você ama. Peça agora seu orçamento e tenha a garantia de uma instalação segura, normatizada e com estética de alto padrão internacional.'
  },
  { 
    slug: 'muro-de-vidro', 
    title: 'Muro de Vidro em Salvador', 
    icon: '🧱', 
    order: 13,
    p1: 'O **Muro de Vidro em Salvador** é a solução contemporânea para quem deseja segurança perimetral sem abrir mão da estética e integração com o jardim. A **Mais Vidros Salvador** projeta cercamentos em vidro temperado que trazem modernidade imediata para a fachada de residências e condomínios.',
    p2: 'Ao contrário dos tradicionais, o **Muro de Vidro em Salvador** não obstrui a iluminação e permite uma vigilância natural do ambiente externo, aumentando a segurança. Utilizamos vidros de alta espessura fixados em estruturas metálicas robustas, capazes de resistir a impactos e ventos frontais intensos.',
    p3: 'O diferencial de um **Muro de Vidro em Salvador** é a valorização imediata do imóvel, conferindo um ar de exclusividade e sofisticação únicos. Nossas instalações são planejadas para serem duráveis e de fácil limpeza, mantendo a fachada do seu imóvel sempre impecável e moderna para todos.',
    p4: 'Dê um toque de luxo e visibilidade total à sua fachada com o **Muro de Vidro em Salvador** da Mais Vidros Salvador. Entre em contato agora e descubra como podemos aliar proteção e beleza em um projeto único para a frente da sua residência ou estabelecimento comercial em Salvador.'
  },
  { 
    slug: 'telhado-de-vidro-cobertura', 
    title: 'Telhado de Vidro ou Cobertura de Vidro em Salvador', 
    icon: '☀️', 
    order: 14,
    p1: 'Um **Telhado de Vidro em Salvador** é ideal para criar ambientes iluminados naturalmente, protegendo contra a chuva com total transparência. Na **Mais Vidros Salvador**, executamos projetos de coberturas fixas ou retráteis com engenharia de precisão para garantir segurança e conforto térmico.',
    p2: 'Para a sua **Cobertura de Vidro em Salvador**, utilizamos vidros laminados com películas de controle solar, que filtram os raios UV e reduzem a entrada de calor. A estrutura de suporte é calculada para suportar cargas de vento, garantindo total estanqueidade contra vazamentos indesejados no seu teto.',
    p3: 'Nossas soluções de **Telhado de Vidro em Salvador** são perfeitas para jardins de inverno ou garagens de luxo, trazendo um diferencial arquitetônico de alto impacto. O acabamento das calhas e vedações é feito com materiais de primeira linha, garantindo que a água da chuva seja drenada corretamente.',
    p4: 'Traga a luz do sol para dentro de casa com a segurança do **Telhado de Vidro em Salvador** da Mais Vidros Salvador. Fale com nossa equipe técnica hoje mesmo e peça um orçamento para transformar seu espaço com transparência, proteção e design inovador de alta vidraçaria.'
  },
  { 
    slug: 'porta-vidro-temperado', 
    title: 'Porta de Vidro Temperado em Salvador', 
    icon: '🚪', 
    order: 15,
    p1: 'A **Porta de Vidro Temperado em Salvador** oferece transparência e um aproveitamento inteligente de espaço para entradas e escritórios modernos. Na **Mais Vidros Salvador**, instalamos portas de giro ou pivotantes que trazem um toque de sofisticação para residências e empresas de alto padrão.',
    p2: 'A **Porta de Vidro Temperado em Salvador** é até cinco vezes mais resistente que o vidro comum, sendo ideal para áreas de grande circulação e segurança. Oferecemos uma linha completa de puxadores em aço inox, que garantem um fechamento suave e um visual limpo que valoriza seu ambiente interno.',
    p3: 'Nossa instalação de **Porta de Vidro Temperado em Salvador** foca no ajuste perfeito das dobradiças, evitando que a porta apresente peso excessivo ou barulhos. Garantimos a vedação correta contra poeira e ruídos, proporcionando mais privacidade e conforto térmico para o interior do seu espaço.',
    p4: 'Substitua portas tradicionais pela modernidade da **Porta de Vidro Temperado em Salvador** com a Mais Vidros Salvador. Entre em contato agora pelo WhatsApp e peça uma cotação para o seu projeto, com a garantia de instalação rápida e acabamento impecável em toda a capital baiana.'
  },
  { 
    slug: 'manutencao-cortina-de-vidro', 
    title: 'Manutenção de Cortina de Vidro em Salvador', 
    icon: '🧴', 
    order: 16,
    p1: 'A **Manutenção de Cortina de Vidro em Salvador** especializada é frequente para que os sistemas retráteis não travarem ou apresentarem riscos. A **Mais Vidros Salvador** é autoridade no conserto desses sistemas, devolvendo a leveza original ao abrir e fechar os painéis da sua varanda.',
    p2: 'A maresia intensa exige uma **Manutenção de Cortina de Vidro em Salvador** preventiva para evitar a oxidação de eixos e o travamento de roldanas. Nossa revisão técnica inclui a limpeza dos trilhos e a troca de vedações que garantem a proteção contra infiltrações de chuva e ventos fortes da nossa costa.',
    p3: 'O alinhamento dos trilhos é fundamental na **Manutenção de Cortina de Vidro em Salvador** para que o peso dos vidros seja distribuído corretamente no sistema. Uma cortina bem cuidada oferece mais segurança e mantém a valorização do seu imóvel por muito mais tempo no mercado imobiliário local.',
    p4: 'Não force seus painéis de vidro se eles estiverem pesados e peça a **Manutenção de Cortina de Vidro em Salvador** da Mais Vidros Salvador. Solicite um orçamento técnico agora e garanta que seu sistema retrátil continue operando com a segurança e a suavidade que sua família merece.'
  }
];

servicesInfo.forEach(s => {
  const content = `---
title: "${s.title}"
description: "${s.p1.replace(/\*\*/g, '').substring(0, 155)}."
icon: "${s.icon}"
order: ${s.order}
---

${s.p1}
<br /><br />
${s.p2}
<br /><br />
${s.p3}
<br /><br />
${s.p4}
<br /><br />
**A Importância de escolher um serviço de qualidade:**

Investir em um serviço profissional de vidraçaria em Salvador é garantir que seu ambiente tenha a sofisticação, o conforto térmico e a segurança que só o vidro de alta performance pode oferecer. Não aceite imitações ou serviços amadores que podem comprometer a estrutura e a valorização do seu imóvel.
<br /><br />
**O que oferecemos em nosso serviço:**

- **Qualidade Certificada:** Utilizamos materiais que seguem rigorosamente as normas técnicas da ABNT.
- **Acabamento Premium:** Foco total nos detalhes para um resultado estético impecável e duradouro.
- **Durabilidade Extrema:** Ferragens e componentes selecionados para resistir à maresia e ao uso constante.
- **Projetos Personalizados:** Soluções sob medida para se adaptar perfeitamente ao seu espaço e estilo.
<br /><br />
### Por que escolher a Mais Vidros Salvador?

1. **Técnicos Qualificados:** Nossa equipe é altamente treinada para identificar falhas técnicas e garantir que cada serviço seja executado com perfeição.
2. **Normas de Segurança:** Todos os nossos processos seguem rigorosamente as normas técnicas da ABNT, oferecendo segurança máxima para sua obra.
3. **Agilidade no Atendimento:** Entendemos que seu projeto não pode esperar, por isso priorizamos a eficiência e a pontualidade em cada etapa.
4. **Transparência Total:** Oferecemos orçamentos detalhados e honestos, com garantia real em cada serviço prestado.
<br /><br />
## Evite Riscos e Valorize seu Imóvel

Não abra mão da qualidade por um preço ilusório. Serviços mal executados podem causar acidentes graves e prejuízos futuros. Se você busca excelência em vidraçaria em Salvador, a **Mais Vidros Salvador** é a escolha certa para quem não abre mão do melhor para sua família ou empresa.

---

**Solicite agora seu orçamento gratuito!** Clique no botão abaixo e fale diretamente com um de nossos especialistas pelo WhatsApp. Estamos prontos para transformar o seu ambiente com a elegância e a clareza do vidro.`;

  fs.writeFileSync(path.join(dir, `${s.slug}.md`), content);
});

console.log('✅ SEO Potencializado: Todas as 16 páginas agora possuem maior densidade de palavras-chave focadas!');
