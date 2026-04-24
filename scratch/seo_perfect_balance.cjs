const fs = require('fs');
const path = require('path');

const dir = 'src/content/servicos';
const servicesInfo = [
  { 
    slug: 'box-para-banheiro', 
    title: 'Box para Banheiro em Salvador', 
    icon: '🚿', 
    order: 1,
    p1: 'Nossa equipe é especialista em transformar banheiros com as melhores soluções de **Box para Banheiro em Salvador** utilizando vidro temperado de alta resistência. Atendemos toda a capital baiana, levando modernidade e funcionalidade para o seu lar com projetos que se adaptam a qualquer tamanho de ambiente.',
    p2: 'Escolher um bom box é essencial para manter a organização e a higiene do seu espaço, evitando que a água se espalhe e cause danos. A **Mais Vidros Salvador** utiliza apenas vidros certificados, garantindo a segurança total para você e sua família durante o banho diário.',
    p3: 'Nossos diferenciais incluem uma instalação limpa e rápida com ferragens de alto padrão que resistem à maresia. Contamos com uma equipe técnica própria que realiza a medição precisa, garantindo que o seu projeto de **Box para Banheiro em Salvador** tenha o fechamento perfeito e durabilidade superior.',
    p4: 'Se você busca por vidraçaria com o melhor custo-benefício e acabamento de luxo, fale com nossos especialistas agora mesmo. Estamos prontos para oferecer um orçamento gratuito para o seu projeto de **Box para Banheiro em Salvador**, transformando seu ambiente com elegância.'
  },
  { 
    slug: 'manutencao-de-vidros', 
    title: 'Manutenção de Vidros em Salvador', 
    icon: '🛠️', 
    order: 2,
    p1: 'A manutenção periódica é o segredo para a longevidade e oferecemos o serviço de **Manutenção de Vidros em Salvador** mais completo da região. Identificamos falhas silenciosas em portas e janelas, prevenindo acidentes e garantindo que tudo funcione com total suavidade no seu dia a dia.',
    p2: 'A maresia da nossa capital exige uma atenção frequente para evitar o travamento de roldanas e ferragens metálicas. A **Mais Vidros Salvador** foca na limpeza profunda dos trilhos, regulagem de molas e substituição de componentes desgastados por peças originais de alta performance.',
    p3: 'Ao contratar nossa **Manutenção de Vidros em Salvador**, você conta com técnicos treinados que seguem as normas da ABNT. Garantimos que sua estrutura recupere a estanqueidade original, valorizando seu imóvel e trazendo muito mais tranquilidade para o seu ambiente residencial.',
    p4: 'Não espere um problema grave acontecer para buscar ajuda especializada. Solicite hoje mesmo uma visita técnica da nossa equipe e garanta que sua vidraçaria esteja sempre em perfeitas condições de uso através de uma **Manutenção de Vidros em Salvador** profissional.'
  },
  { 
    slug: 'vidros-sob-medida', 
    title: 'Vidros Sob Medida em Salvador', 
    icon: '📏', 
    order: 3,
    p1: 'Projetos exclusivos exigem soluções personalizadas e somos especialistas em **Vidros Sob Medida em Salvador** para as necessidades mais complexas. Seja para tampos de mesa ou prateleiras, entregamos precisão milimétrica em cada peça produzida para sua casa.',
    p2: 'A versatilidade do vidro personalizado permite que você aproveite cada centímetro do seu ambiente com sofisticação e leveza visual. A **Mais Vidros Salvador** trabalha com vidros temperados e espelhados, sempre orientando sobre a melhor espessura para garantir a segurança do seu projeto.',
    p3: 'Nossa consultoria em **Vidros Sob Medida em Salvador** auxilia você desde a concepção da ideia até a instalação final no seu endereço. Utilizamos tecnologia de ponta no corte e lapidação, resultando em peças com brilho excepcional e bordas perfeitamente finalizadas.',
    p4: 'Transforme sua ideia em realidade e eleve o padrão de elegância do seu escritório. Entre em contato e peça um orçamento detalhado para começarmos a planejar o seu próximo projeto de destaque com **Vidros Sob Medida em Salvador** de alta qualidade.'
  },
  { 
    slug: 'esquadrias-de-aluminio', 
    title: 'Esquadrias de Alumínio em Salvador', 
    icon: '🪟', 
    order: 4,
    p1: 'As **Esquadrias de Alumínio em Salvador** são a escolha definitiva para quem busca durabilidade e baixo custo de manutenção no clima litorâneo. Fabricamos e instalamos janelas e portas com perfis de alta qualidade e design moderno para sua fachada.',
    p2: 'Além da resistência, esses sistemas oferecem um excelente desempenho acústico e térmico, mantendo o seu ambiente mais fresco. A **Mais Vidros Salvador** oferece diversos tipos de pintura eletrostática, permitindo uma personalização total de acordo com o seu imóvel.',
    p3: 'A precisão na montagem das **Esquadrias de Alumínio em Salvador** é o que nos diferencia no mercado, garantindo vedação perfeita contra chuvas. Nossa equipe cuida de cada detalhe, assegurando que o sistema tenha um manuseio leve e sem ruídos desagradáveis.',
    p4: 'Invista no que há de melhor para a sua construção ou reforma. Fale com nossa equipe agora pelo WhatsApp e descubra como nossas soluções em **Esquadrias de Alumínio em Salvador** podem trazer mais conforto e valorização imediata para o seu patrimônio.'
  },
  { 
    slug: 'manutencao-sacadas-vidro', 
    title: 'Manutenção em Sacadas de Vidro em Salvador', 
    icon: '🏢', 
    order: 5,
    p1: 'Sacadas de vidro sofrem com ventos fortes e a **Manutenção em Sacadas de Vidro em Salvador** é uma questão de segurança vital para prédios altos. Realizamos a revisão completa de sistemas, garantindo que o serviço resulte em painéis seguros e firmes.',
    p2: 'Roldanas travadas exigem atenção imediata para evitar riscos de queda. A **Mais Vidros Salvador** realiza a troca de componentes danificados e reforça a vedação com polímeros resistentes, protegendo sua varanda através de uma **Manutenção em Sacadas de Vidro em Salvador** técnica.',
    p3: 'Atendemos condomínios em toda a cidade, oferecendo planos preventivos eficazes. Utilizamos lubrificantes específicos para o clima salino, garantindo que o serviço proteja os componentes da corrosão por muito mais tempo.',
    p4: 'Garanta o lazer e a segurança da sua varanda com o suporte especializado da nossa vidraçaria. Agende hoje mesmo uma inspeção técnica e tenha a tranquilidade de saber que sua **Manutenção em Sacadas de Vidro em Salvador** foi executada por profissionais qualificados.'
  },
  { 
    slug: 'manutencao-esquadrias-aluminio', 
    title: 'Manutenção em Esquadrias de Alumínio em Salvador', 
    icon: '🔧', 
    order: 6,
    p1: 'Embora o alumínio seja durável, os acessórios precisam de **Manutenção em Esquadrias de Alumínio em Salvador** para não comprometer o uso das janelas. Oferecemos manutenção corretiva e preventiva para todos os tipos de portas na capital baiana.',
    p2: 'É comum que, com o tempo, as janelas exijam atenção para recuperar o isolamento contra ventos. A **Mais Vidros Salvador** realiza a substituição de vedações e o ajuste de fechos, devolvendo a funcionalidade através da **Manutenção em Esquadrias de Alumínio em Salvador**.',
    p3: 'A conservação profissional evita a substituição prematura de estruturas inteiras, gerando economia real. Trabalhamos com peças de primeira linha que garantem que sua **Manutenção em Esquadrias de Alumínio em Salvador** deixe o sistema operando com a leveza necessária.',
    p4: 'Recupere o conforto da sua residência agora mesmo. Entre em contato e peça um orçamento para a sua vidraçaria, com a garantia técnica de quem entende profundamente do assunto em toda a região de Salvador.'
  },
  { 
    slug: 'conserto-box-banheiro', 
    title: 'Conserto de Box de Banheiro em Salvador', 
    icon: '🚿', 
    order: 7,
    p1: 'Um box com defeito é um risco e o **Conserto de Box de Banheiro em Salvador** imediato é fundamental para a segurança da casa. Oferecemos um serviço de reparo rápido, atendendo chamados em toda a cidade para resolver portas travadas ou soltas.',
    p2: 'Muitas vezes, uma roldana quebrada exige atenção para evitar a quebra espontânea do vidro. A **Mais Vidros Salvador** identifica a causa do problema e realiza a troca das peças com precisão no seu serviço de **Conserto de Box de Banheiro em Salvador**.',
    p3: 'Além do reparo, o serviço inclui a renovação da vedação de silicone, eliminando vazamentos. Utilizamos materiais de cura rápida, garantindo um serviço limpo e duradouro para o seu banheiro em qualquer bairro através do nosso **Conserto de Box de Banheiro em Salvador**.',
    p4: 'Não corra riscos com um vidro apresentando problemas e peça ajuda profissional agora. Fale conosco pelo WhatsApp e tenha seu reparo executado com total segurança por técnicos especialistas em vidraçaria de alto padrão.'
  },
  { 
    slug: 'cortina-de-vidro', 
    title: 'Cortina de Vidro em Salvador', 
    icon: '🌇', 
    order: 8,
    p1: 'A **Cortina de Vidro em Salvador**, ou envidraçamento retrátil, é a solução perfeita para integrar a varanda à sala com elegância. Instalamos sistemas modernos que permitem a abertura total dos painéis, proporcionando ventilação e amplitude para o seu imóvel.',
    p2: 'Instalar esse sistema oferece proteção excepcional contra ventos, transformando sua varanda em um novo ambiente útil. A **Mais Vidros Salvador** utiliza vidros laminados que garantem a segurança estrutural exigida na sua **Cortina de Vidro em Salvador** pelas normas vigentes.',
    p3: 'Nosso diferencial está no acabamento refinado que se harmoniza perfeitamente com a arquitetura local. A instalação é executada por especialistas que garantem a estanqueidade do sistema, evitando infiltrações de chuva através da sua nova **Cortina de Vidro em Salvador**.',
    p4: 'Valorize seu apartamento com sofisticação. Solicite um orçamento sem compromisso para o seu projeto e veja como podemos transformar sua varanda com segurança e tecnologia de ponta em vidros de alta performance.'
  },
  { 
    slug: 'envidracamento-sacada', 
    title: 'Envidraçamento de Sacada em Salvador', 
    icon: '🏗️', 
    order: 9,
    p1: 'O **Envidraçamento de Sacada em Salvador** é um dos investimentos que mais agregam valor aos imóveis modernos da nossa capital baiana. Somos especialistas em fechar sua varanda, criando uma barreira protetora sem obstruir a vista privilegiada da cidade.',
    p2: 'Com o fechamento em vidro, você protege seus móveis da maresia e reduz drasticamente o ruído externo. A **Mais Vidros Salvador** utiliza sistemas projetados para resistir às pressões de vento comuns no **Envidraçamento de Sacada em Salvador**, com travas de segurança robustas.',
    p3: 'Nossa equipe responsável cuida de todo o processo conforme as normas do condomínio. Garantimos um sistema de fácil manuseio e limpeza, proporcionando um ambiente muito mais limpo e luxuoso através do seu **Envidraçamento de Sacada em Salvador**.',
    p4: 'Desfrute de uma varanda protegida e elegante. Fale com um de nossos consultores hoje mesmo e peça uma medição gratuita para o seu projeto, garantindo a valorização e segurança do seu patrimônio imobiliário.'
  },
  { 
    slug: 'divisorias-de-vidro', 
    title: 'Divisórias de Vidro em Salvador', 
    icon: '📂', 
    order: 10,
    p1: 'As **Divisórias de Vidro em Salvador** são a escolha inteligente para quem busca separar ambientes sem perder a luminosidade. Projetamos e instalamos sistemas que aliam design contemporâneo com o isolamento necessário para cada espaço da sua residência ou empresa.',
    p2: 'O uso do vidro permite uma comunicação visual fluida no ambiente corporativo, oferecendo privacidade acústica. A **Mais Vidros Salvador** trabalha com opções de vidros incolores no seu projeto de **Divisórias de Vidro em Salvador**, adaptando-se à identidade visual do seu escritório.',
    p3: 'Nossa instalação é rápida e silenciosa, minimizando o impacto na rotina do seu trabalho. Utilizamos sistemas de fixação robustos, que garantem a estabilidade e um acabamento premium que impressiona visitantes pelo bom gosto nas suas **Divisórias de Vidro em Salvador**.',
    p4: 'Modernize seu ambiente com a clareza das soluções transparentes. Entre em contato agora e descubra como podemos otimizar o seu espaço com soluções inovadoras e de alto padrão em vidraçaria para clientes exigentes.'
  },
  { 
    slug: 'fechamento-area-externa-vidro', 
    title: 'Fechamento de Área Externa com Vidro em Salvador', 
    icon: '🏡', 
    order: 11,
    p1: 'O **Fechamento de Área Externa com Vidro em Salvador** permite que você aproveite seu espaço gourmet mesmo em dias de chuva. Somos especialistas nessa solução que une praticidade e sofisticação para as áreas de lazer da sua residência.',
    p2: 'Para um projeto seguro, utilizamos vidros temperados de alta espessura. A **Mais Vidros Salvador** oferece sistemas de fixação reforçados no seu **Fechamento de Área Externa com Vidro em Salvador**, mantendo o ambiente limpo e pronto para receber seus convidados.',
    p3: 'Nosso projeto foca na integração harmoniosa com o jardim da casa. Oferecemos opções móveis, permitindo que você controle a ventilação do ambiente conforme a necessidade com total leveza no seu **Fechamento de Área Externa com Vidro em Salvador**.',
    p4: 'Ganhe mais espaço com segurança. Solicite uma visita técnica agora mesmo e veja como o nosso trabalho pode transformar sua área de lazer em um ambiente de luxo e proteção total contra o vento.'
  },
  { 
    slug: 'guarda-corpo-vidro', 
    title: 'Guarda Corpo de Vidro em Salvador', 
    icon: '🪜', 
    order: 12,
    p1: 'O **Guarda Corpo de Vidro em Salvador** é a união perfeita entre segurança máxima e estética minimalista para escadas e varandas. Instalamos sistemas que protegem contra quedas sem criar barreiras visuais pesadas no seu ambiente arquitetônico moderno.',
    p2: 'Para o seu projeto, utilizamos vidros laminados que garantem a integridade da barreira. A **Mais Vidros Salvador** utiliza fixações com botões de aço inox no seu **Guarda Corpo de Vidro em Salvador**, proporcionando um acabamento limpo e extremamente sofisticado para sua obra.',
    p3: 'Nossa expertise garante uma instalação estável e resistente a impactos mecânicos. O aço inox utilizado no **Guarda Corpo de Vidro em Salvador** resiste à oxidação causada pela maresia, mantendo o brilho por muitos anos na sua fachada ou escada interna.',
    p4: 'Segurança não precisa ser sinônimo de poluição visual; escolha a transparência para proteger quem você ama. Peça agora seu orçamento e tenha a garantia de uma instalação normatizada e com estética de alto padrão.'
  },
  { 
    slug: 'muro-de-vidro', 
    title: 'Muro de Vidro em Salvador', 
    icon: '🧱', 
    order: 13,
    p1: 'O **Muro de Vidro em Salvador** é a solução contemporânea para quem deseja segurança perimetral sem abrir mão da integração com o jardim. Projetamos cercamentos que trazem modernidade imediata para a fachada de residências e condomínios de alto padrão.',
    p2: 'Ao contrário dos tradicionais, o fechamento transparente não obstrui a iluminação e permite uma vigilância natural do ambiente. A **Mais Vidros Salvador** utiliza vidros de alta espessura no seu **Muro de Vidro em Salvador**, capazes de resistir a impactos e ventos frontais intensos.',
    p3: 'O diferencial dessa solução é a valorização imediata do imóvel, conferindo um ar de exclusividade único. Nossas instalações de **Muro de Vidro em Salvador** são planejadas para serem duráveis e de fácil limpeza, mantendo a fachada da sua residência sempre impecável.',
    p4: 'Dê um toque de luxo à sua fachada. Entre em contato agora e descubra como nosso trabalho pode aliar proteção e beleza em um projeto único para a frente da sua residência ou estabelecimento comercial.'
  },
  { 
    slug: 'telhado-de-vidro-cobertura', 
    title: 'Telhado de Vidro ou Cobertura de Vidro em Salvador', 
    icon: '☀️', 
    order: 14,
    p1: 'Um **Telhado de Vidro em Salvador** é ideal para criar ambientes iluminados naturalmente, protegendo contra a chuva com transparência. Executamos projetos com engenharia de precisão para garantir segurança e conforto térmico no seu ambiente externo.',
    p2: 'Para a sua estrutura, utilizamos vidros laminados com películas de controle solar que reduzem o calor. A **Mais Vidros Salvador** calcula o seu **Telhado de Vidro em Salvador** para suportar ventos, garantindo estanqueidade contra vazamentos indesejados.',
    p3: 'Nossas soluções são perfeitas para jardins de inverno ou garagens de luxo. O acabamento das vedações no seu **Telhado de Vidro em Salvador** é feito com materiais de primeira linha, garantindo que a água da chuva seja drenada corretamente sem infiltrações.',
    p4: 'Traga a luz do sol para dentro de casa com segurança. Fale com nossa equipe hoje mesmo e peça um orçamento para o seu projeto, transformando seu espaço com proteção e design inovador de alta vidraçaria.'
  },
  { 
    slug: 'porta-vidro-temperado', 
    title: 'Porta de Vidro Temperado em Salvador', 
    icon: '🚪', 
    order: 15,
    p1: 'A **Porta de Vidro Temperado em Salvador** oferece transparência e um aproveitamento inteligente de espaço para entradas modernas. Instalamos modelos que trazem um toque de sofisticação para residências e empresas de alto padrão em toda a capital.',
    p2: 'Esse tipo de fechamento é até cinco vezes mais resistente que o vidro comum, sendo ideal para segurança. A **Mais Vidros Salvador** oferece puxadores em aço inox na sua **Porta de Vidro Temperado em Salvador**, garantindo um fechamento suave e um visual limpo.',
    p3: 'Nossa instalação foca no ajuste perfeito das dobradiças, evitando barulhos desagradáveis ao abrir. Garantimos a vedação correta na sua **Porta de Vidro Temperado em Salvador**, proporcionando mais privacidade e conforto térmico para o interior do seu espaço.',
    p4: 'Substitua portas tradicionais pela modernidade. Entre em contato agora pelo WhatsApp e peça uma cotação para o seu projeto, com a garantia de instalação rápida e acabamento impecável em toda a região de Salvador.'
  },
  { 
    slug: 'manutencao-cortina-de-vidro', 
    title: 'Manutenção de Cortina de Vidro em Salvador', 
    icon: '🧴', 
    order: 16,
    p1: 'A **Manutenção de Cortina de Vidro em Salvador** especializada é frequente para que os sistemas retráteis não travarem no uso diário. Somos autoridade no conserto e ajuste, devolvendo a leveza original ao abrir e fechar os painéis da sua varanda.',
    p2: 'A maresia intensa exige prevenção para evitar a oxidação de eixos metálicos. A **Mais Vidros Salvador** realiza a limpeza dos trilhos e a troca de vedações na sua **Manutenção de Cortina de Vidro em Salvador**, garantindo proteção contra infiltrações de chuva.',
    p3: 'O alinhamento dos trilhos é fundamental para que o peso dos vidros seja bem distribuído no sistema. Uma **Manutenção de Cortina de Vidro em Salvador** bem feita oferece segurança contra ventos fortes e mantém a valorização do seu imóvel por muito mais tempo.',
    p4: 'Não force seus painéis de vidro se estiverem pesados e peça ajuda agora. Solicite um orçamento técnico para o seu sistema retrátil e garanta a suavidade que sua família merece no uso diário.'
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

console.log('✅ Otimização Final: Máximo de 3 repetições por termo chave e marca em todas as páginas!');
