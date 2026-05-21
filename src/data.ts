import { Product, Story, Testimonial } from './types';

export const IMAGES = {
  heroSurf: '/src/assets/images/nar_hero_surf_1779295279185.png',
  heroMountain: '/src/assets/images/nar_hero_mountain_1779295294397.png',
  prodSurf: '/src/assets/images/nar_prod_surf_1779295307740.png',
  prodMountain: '/src/assets/images/nar_prod_mountain_1779295325589.png',
  // High quality lifestyle backups from CDN
  surfDetail: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80', // surfing closeup
  mountainDetail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', // peaks
  travelDetail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80', // maps travel
  ambientSea: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80', // sea water
};

export const PRODUCTS: Product[] = [
  {
    id: 'nar-01',
    name: 'WaveBreaker Neo-Windbreaker',
    slogan: 'Nascido nos Recifes do Pacífico',
    category: 'mar',
    price: 890,
    rating: 4.9,
    image: IMAGES.prodSurf,
    colors: [
      { name: 'Azul Abissal', hex: '#0B2545' },
      { name: 'Coral Radiante', hex: '#FF6B6B' },
      { name: 'Areia Mineral', hex: '#EAE6DF' }
    ],
    description: 'Um corta-vento híbrido ultraleve protetor de raios UV e resistente à água do mar. Desenvolvido para transições rápidas entre o drop salgado das ondas e o vento frio do fim de tarde.',
    details: [
      'Tecido térmico de nylon reciclado com polímeros repelentes à água salgada',
      'Costuras seladas a laser para total isolamento hidrodinâmico',
      'Capuz ergonômico ajustável com tensionadores náuticos de carbono',
      'Bolsos utilitários internos selados e 100% à prova d’água'
    ],
    specs: {
      'Material': '80% Poliamida Reciclada, 20% Elastano Premium',
      'Tecnologia': 'HydroShield Pro Max & SPF 50+',
      'Peso': '180g (ultra compactável)',
      'Origem': 'Desenvolvido no Brasil, testado nas águas de Fernando de Noronha'
    },
    isFeatured: true
  },
  {
    id: 'nar-02',
    name: 'Andes Summit Altitude shell',
    slogan: 'Construído para Picos Hostis',
    category: 'terra',
    price: 1350,
    rating: 4.8,
    image: IMAGES.prodMountain,
    colors: [
      { name: 'Laranja Magma', hex: '#E05A47' },
      { name: 'Verde Floresta', hex: '#2A4B42' },
      { name: 'Asfalto Vulcânico', hex: '#1C1C1E' }
    ],
    description: 'Jaqueta hardshell técnica de três camadas com membrana impermeável avançada. Projetada para trilhas de altitude extrema e mudanças súbitas de clima no topo do mundo.',
    details: [
      'Membrana BreathableForce 20k mm de coluna de água',
      'Zíperes de ventilação axial selados com poliuretano fosco',
      'Reforços ripstop nos cotovelos e ombros para atrito com mochilas carregadas',
      'Design articulado que possibilita total amplitude de movimentos com multicamadas'
    ],
    specs: {
      'Material': '100% Poliéster Reciclado Eco-Tech Shell',
      'Resistência': '20,000mm Impermeabilidade / 15,000g Respirabilidade',
      'Peso': '420g',
      'Recursos': 'Sistema de resgate RECCO® integrado na gola'
    },
    isFeatured: true
  },
  {
    id: 'nar-03',
    name: 'Noronha Pro HydroKnit Knit',
    slogan: 'Suavidade Orgânica do Algodão com Elasticidade Oceânica',
    category: 'mar',
    price: 480,
    rating: 4.7,
    image: IMAGES.surfDetail,
    colors: [
      { name: 'Azul Índigo Selvagem', hex: '#1E3A5F' },
      { name: 'Espuma Marinha', hex: '#7FFFD4' }
    ],
    description: 'Suéter de tricô hidrofóbico respirável desenvolvido com algodão orgânico trançado a fibras técnicas marinhas. Ideal para as noites frescas de brisa do mar após o surf.',
    details: [
      'Tecnologia antibacteriana com prata coloidal ativa contra odores',
      'Fibras recuperadas de resíduos de redes de pesca recolhidas do oceano',
      'Punhos elásticos inteligentes reforçados com tecnologia de ancoragem térmica',
      'Secagem duas vezes mais rápida que o tricô convencional'
    ],
    specs: {
      'Composição': '60% Algodão Orgânico BCI, 40% Poliéster Náutico Reciclado',
      'Certificados': 'Oeko-Tex Standard 100, Global Recycled Standard',
      'Toque': 'Extremamente texturizado, macio na pele'
    }
  },
  {
    id: 'nar-04',
    name: 'Nomad Roll-Top Pack 40L',
    slogan: 'O Contêiner Definitivo para sua Jornada',
    category: 'travel',
    price: 950,
    rating: 4.9,
    image: IMAGES.travelDetail,
    colors: [
      { name: 'Obsidiana Mate', hex: '#1C1A1A' },
      { name: 'Areia Kalahari', hex: '#D2B48C' },
      { name: 'Musgo Andino', hex: '#4B5320' }
    ],
    description: 'Mochila técnica roll-top totalmente soldada de alta frequência. Resistente à submersão temporária na água e projetada ergonomicamente para viagens de longa distância e trekkings prolongados.',
    details: [
      'Construção TPU 840D selada sem costuras convencionais',
      'Compartimento flutuante acolchoado para notebook de 16 polegadas acessível pelo exterior',
      'Costado flutuante com canal de ventilação termomoldado 3D AirFlow',
      'Fivelas magnéticas alemãs Fidlock® de tração rápida instantânea'
    ],
    specs: {
      'Capacidade': '35L fechada expansível até 48L',
      'Impermeabilidade': 'Proteção IPX6 (resistente a jatos de água potentes e chuvas torrenciais)',
      'Medidas': '52 x 34 x 18 cm',
      'Garantia': 'Garantia vitalícia contra defeitos de fabricação'
    },
    isFeatured: true
  },
  {
    id: 'nar-05',
    name: 'Andino Trail Thermo-Fleece',
    slogan: 'Calor Confortável Inspirado nos Andes',
    category: 'terra',
    price: 640,
    rating: 4.8,
    image: IMAGES.mountainDetail,
    colors: [
      { name: 'Cinza Monólito', hex: '#4A4E69' },
      { name: 'Terracota Rust', hex: '#A85741' },
      { name: 'Pinheiro Sombra', hex: '#1B4332' }
    ],
    description: 'Fleece térmico de alta densidade feito com lã merino ultrafina e isolamento celular sintético. Excelente relação peso-aquecimento para usar como camada intermediária.',
    details: [
      'Estrutura em colmeia 3D interna que retém canais de calor e ventila o excesso',
      'Inserções reflexivas discretas nos pontos principais de ação cinemática',
      'Gola ergonômica alta ultra-fofa com proteção de queixo anti-atrito'
    ],
    specs: {
      'Isolamento': 'Gramatura 320g/m² de densidade ajustada para frio rigoroso',
      'Controle Humidade': 'Excelente expulsão de vapor térmico corporal',
      'Composição': '45% Lã Merino Premium, 55% Poliéster reciclado'
    }
  },
  {
    id: 'nar-06',
    name: 'Altiplano Merino Tech Tee',
    slogan: 'Regulação de Clima Natural com Fibra Nobre',
    category: 'travel',
    price: 320,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Branco Névoa', hex: '#F0F2F5' },
      { name: 'Petróleo Profundo', hex: '#102A43' },
      { name: 'Ocre Cordilheira', hex: '#D68910' }
    ],
    description: 'Uma camiseta técnica de luxo estruturada com lã merino orgânica neozelandesa super fina. Não acumula odores e regula a temperatura do corpo de forma natural.',
    details: [
      'Fibras de 17.5 mícrons que garantem toque suave de seda sem coceira',
      'Proteção contra estresse solar de até SPF 40',
      'Costuras planas flatlock antialérgicas que evitam qualquer atrito nas trilhas'
    ],
    specs: {
      'Performance': 'Uso contínuo por até 5 dias sem necessidade de lavagem',
      'Composição': '87% Lã Merino Extra-Fine, 13% Nylon Core-Spun para durabilidade superior',
      'Tamanhos': 'XS ao XXL'
    }
  }
];

export const STORIES: Story[] = [
  {
    id: 'st-01',
    title: 'A Travessia Fantasma do Estreito',
    subtitle: 'Reme, sinta e navegue por águas que contam histórias ancestrais.',
    category: 'mar',
    description: 'Equipe de atletas Naruper viajou até a Patagônia Extrema para testar a nova coleção WaveBreaker em caiaques oceânicos em meio a blocos de gelo flutuantes e tempestades subpolares.',
    image: IMAGES.heroSurf,
    date: '12 de Março, 2026',
    author: 'Gabriel Lemos',
    readTime: '6 min de leitura'
  },
  {
    id: 'st-02',
    title: 'Cordilheira de Ventos Selvagens',
    subtitle: 'O sussurro das grandes altitudes e o silêncio da pedra.',
    category: 'terra',
    description: 'Sete dias escalando e dormindo sob o céu estrelado absoluto de Fitz Roy, enfrentando rajadas violentas e a solidão da montanha com o hardshell Andes Summit Altitude.',
    image: IMAGES.heroMountain,
    date: '28 de Abril, 2026',
    author: 'Mariana Scholer',
    readTime: '9 min de leitura'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    name: 'Rodrigo "Koxa" Mendes',
    role: 'Free Surfer & Explorador de Ondas Gigantes',
    quote: 'Navegar e subir montanhas exige peças que não sejam apenas roupa, e sim equipamentos de sobrevivência estética. A Naruper conseguiu criar algo que funciona no frio extremo da Patagônia e no calor úmido das ilhas tropicais.',
    location: 'Saquarema, RJ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-02',
    name: 'Letícia D’Albuquerque',
    role: 'Alpinista de alta altitude & Fotógrafa da National',
    quote: 'O poncho impermeável e as mochilas são espetaculares. É a primeira vez que vejo um design com cortes tão geométricos e artísticos que aguenta nevascas de verdade com maestria poética.',
    location: 'Chamonix, França',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  }
];
