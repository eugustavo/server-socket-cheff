interface Product {
  bcICMS: number
  cstCFE: string
  descricao: string
  favorito: boolean
  idItemType: string
  id_identificador: number
  prc_venda: string
  prc_venda_original: string
  qtd_atual: string
  referencia: string
  taxaICMS: number
  unidade: string
  vendaFracionada: string
  image_url: string
  description: string
}

interface NormalizeProductsProps {
  productsRaw: Product[]
}

export function normalizeProducts({ productsRaw }: NormalizeProductsProps) {
  const formatPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  })

  const formattedProducts = productsRaw.map(product => {
    return {
      id: product.id_identificador,
      name: product.descricao,
      price: formatPrice.format(Number(product.prc_venda)),
      image_url: product.image_url,
      description: product.description,
    }
  })

  return { products: formattedProducts }
}
