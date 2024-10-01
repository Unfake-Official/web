export const routes = [
  {
    label: 'Home',
    destination: '/',
    key: 'home',
  },
  {
    label: 'Identificar',
    destination: '/classify',
    key: 'classify',
  },
  {
    label: 'Autores',
    destination: '/authors',
    key: 'authors',
  },
  {
    label: 'Sobre o projeto',
    destination: '/about-project',
    key: 'about-project',
  },
]

export const authors = [
  {
    image: '/images/marcos.png',
    name: 'Marcos Godinho Filho',
    description: 'Aluno no Colégio Técnico de Campinas',
    social: {
      github: 'https://github.com/Marcos-Godinho-Filho',
      linkedIn: 'https://linkedin.com/in/marcos-godinho-filho-78b533256',
      instagram: 'https://instagram.com/mcvskfilho',
    },
  },
  {
    image: '/images/eric.png',
    name: 'Éric Carvalho Figueira',
    description: 'Aluno no Colégio Técnico de Campinas',
    social: {
      github: 'https://github.com/eric-figueira',
      linkedIn: 'https://linkedin.com/in/eric-carvalho-figueira',
    },
  },
  {
    image: '/images/guilherme.png',
    name: 'Guilherme Oliveira Macedo',
    description:
      'Orientador do projeto e Professor no Colégio Técnico de Campinas',
  },
  {
    image: '/images/andreia.png',
    name: 'Andréia Cristina de Souza',
    description:
      'Co-orientadora do projeto e Professor no Colégio Técnico de Campinas',
  },
]

export const audios = [
  {
    source: '/audios/audio1.wav',
    inference: true,
    label: true,
  },
  {
    source: '/audios/deepfake.wav',
    inference: false,
    label: false,
  },
  {
    source: '/audios/audio2.wav',
    inference: true,
    label: true,
  },
]

export const aboutNavbarRoutes = [
  {
    label: 'O que é o Unfake',
    destination: '/about-project',
    key: 'what-is-it',
  },
  {
    label: 'O problema',
    destination: '/about-project/the-problem',
    key: 'the-problem',
  },
  {
    label: 'A solução',
    destination: '/about-project/the-solution',
    key: 'the-solution',
  },
  {
    label: 'O que alcançamos',
    destination: '/about-project/what-we-achieved',
    key: 'what-we-achieved',
  },
  {
    label: 'Considerações finais',
    destination: '/about-project/final-thoughts',
    key: 'final-thoughts',
  },
  {
    label: 'Referências Bibliográficas',
    destination: '/about-project/references',
    key: 'references',
  },
]

export const aboutProjectMetadata = {
  // eslint-disable-next-line prettier/prettier
  'problem': {
    title: 'O problema',
    description: 'Entenda o que nos motivou a fazer este projeto.',
  },
  // eslint-disable-next-line prettier/prettier
  'solution': {
    title: 'A solução',
    description: 'Saiba a ideia que tivemos para resolver o problema.',
  },
}

export const github = 'https://github.com/Unfake-Official'
export const huggingFace = 'https://huggingface.co/unfake'
export const gmail = 'unfake.official.contact@gmail.com'
export const baseUrl = 'https://unfake-web.vercel.app'
