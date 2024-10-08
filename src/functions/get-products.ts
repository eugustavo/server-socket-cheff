interface GetProductsProps {
  token: string
}

const productsMock = [
  {
    bcICMS: 0,
    cstCFE: '040',
    descricao: 'Arroz    ',
    favorito: false,
    idItemType: '0',
    id_identificador: 13,
    prc_venda: '15.0000',
    prc_venda_original: '15.0000',
    qtd_atual: '9.0000',
    referencia: '',
    taxaICMS: 0,
    unidade: 'UN',
    vendaFracionada: 'S',
    image_url:
      'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2021/02/04/1572294240-aprenda-como-fazer-um-arroz-dos-deuses-fonte-pinterest-500x500.jpg',
    description:
      'Experimente nossa porção de arroz soltinho, preparado com grãos selecionados e temperado na medida certa. Uma delícia que acompanha perfeitamente todos os pratos do nosso cardápio!',
  },
  {
    bcICMS: 0,
    cstCFE: '040',
    descricao: 'Carne    ',
    favorito: false,
    idItemType: '0',
    id_identificador: 14,
    prc_venda: '15.0000',
    prc_venda_original: '15.0000',
    qtd_atual: '9.0000',
    referencia: '',
    taxaICMS: 0,
    unidade: 'UN',
    vendaFracionada: 'S',
    image_url:
      'https://marettimo.com.br/blog/wp-content/uploads/2023/10/bife-suculento-carne-rara-medio-com-especiarias-e-legumes-grelhados-1-scaled.jpg',
    description:
      'Delicie-se com nossa suculenta porção de carne, grelhada à perfeição e temperada com especiarias exclusivas. Cada pedaço derrete na boca, oferecendo uma explosão de sabor a cada garfada!',
  },
  {
    bcICMS: 100,
    cstCFE: '000',
    descricao: 'Coca-Cola 1l    ',
    favorito: false,
    idItemType: '0',
    id_identificador: 6,
    prc_venda: '12.9900',
    prc_venda_original: '12.9900',
    qtd_atual: '1000.0000',
    referencia: '',
    taxaICMS: 17,
    unidade: 'UN',
    vendaFracionada: 'S',
    image_url:
      'https://nunesbebidas.com.br/wp-content/uploads/2021/05/Nunes-Bebidas-COCA-COLA-GARRAFA-1-LITROS.jpg',
    description:
      'Refresque-se com nossa Coca-Cola de 1 litro, uma clássica bebida gaseificada que combina sabor e efervescência. Perfeita para acompanhar suas refeições ou compartilhar com amigos!',
  },
  {
    bcICMS: 0,
    cstCFE: '040',
    descricao: 'Feijão    ',
    favorito: false,
    idItemType: '0',
    id_identificador: 12,
    prc_venda: '15.0000',
    prc_venda_original: '15.0000',
    qtd_atual: '9.0000',
    referencia: '',
    taxaICMS: 0,
    unidade: 'UN',
    vendaFracionada: 'S',
    image_url:
      'https://cdn.awsli.com.br/1420/1420494/produto/89497775/f1d2fd3cfc.jpg',
    description:
      'Saboreie nosso feijão caseiro, cozido lentamente para realçar seu sabor rico e envolvente. Uma porção reconfortante que complementa perfeitamente qualquer prato do nosso menu!',
  },
]

export async function getProducts({ token }: GetProductsProps) {
  // Busca produto no ClippCheff Desktop

  return { products: productsMock }
}
