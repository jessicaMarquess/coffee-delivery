export interface PropsData {
  id: number
  nome: string
  descricao: string
  preco: number
  tags: Array<string>
  src: string
}

const dataCoffee: PropsData[] = [
  {
    id: 1,
    nome: 'Expresso Tradicional',
    descricao: 'O tradicional café feito com água quente e grãos moídos',
    preco: 9.9,
    tags: ['tradicional'],
    src: './src/assets/expresso.png',
  },
  {
    id: 2,
    nome: 'Expresso Americano',
    descricao: 'Expresso diluído, menos intenso que o tradicional',
    preco: 9.9,
    tags: ['tradicional'],
    src: './src/assets/americano.png',
  },
  {
    id: 3,
    nome: 'Expresso Cremoso',
    descricao: 'Café expresso tradicional com espuma cremosa',
    preco: 9.9,
    tags: ['tradicional'],
    src: './src/assets/expresso-cremoso.png',
  },
  {
    id: 4,
    nome: 'Expresso Gelado',
    descricao: 'Bebida preparada com café expresso e cubos de gelo',
    preco: 9.9,
    tags: ['tradicional', 'gelado'],
    src: './src/assets/cafe-gelado.png',
  },
  {
    id: 5,
    nome: 'Café com Leite',
    descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
    preco: 9.9,
    tags: ['tradicional', 'com leite'],
    src: './src/assets/cafe-com-leite.png',
  },
  {
    id: 6,
    nome: 'Latte',
    descricao:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    preco: 9.9,
    tags: ['tradicional', 'com leite'],
    src: './src/assets/latte.png',
  },
  {
    id: 7,
    nome: 'Capuccino',
    descricao:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    preco: 9.9,
    tags: ['tradicional', 'com leite'],
    src: './src/assets/capuccino.png',
  },
  {
    id: 8,
    nome: 'Macchiato',
    descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
    preco: 9.9,
    tags: ['tradicional', 'com leite'],
    src: './src/assets/macchiato.png',
  },
  {
    id: 9,
    nome: 'Mocaccino',
    descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
    preco: 9.9,
    tags: ['tradicional', 'com leite'],
    src: './src/assets/mochaccino.png',
  },
  {
    id: 10,
    nome: 'Chocolate Quente',
    descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
    preco: 9.9,
    tags: ['especial', 'com leite'],
    src: './src/assets/chocolate-quente.png',
  },
  {
    id: 11,
    nome: 'Cubano',
    descricao:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    preco: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    src: './src/assets/cubano.png',
  },
  {
    id: 12,
    nome: 'Havaiano',
    descricao: 'Bebida adocicada preparada com café e leite de coco',
    preco: 9.9,
    tags: ['especial'],
    src: './src/assets/havaiano.png',
  },
  {
    id: 13,
    nome: 'Árabe',
    descricao: 'Bebida preparada com grãos de café árabe e especiarias',
    preco: 9.9,
    tags: ['especial'],
    src: './src/assets/arabe.png',
  },
  {
    id: 14,
    nome: 'Irlandês',
    descricao: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    preco: 9.9,
    tags: ['especial', 'alcoólico'],
    src: './src/assets/irlandes.png',
  },
]

export default dataCoffee
