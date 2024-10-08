import { io } from './app'

import { getProducts } from '@/functions/get-products'
import { normalizeProducts } from '@/functions/normalize-products'

import { existMenu } from '@/utils/exist-menu'
import { verifyToken } from '@/utils/verify-token'
import { verifyMenu } from '@/utils/verify-menu'

io.on('connection', socket => {
  console.log(`SocketID conectado: ${socket.id}`)

  socket.on('connect_clippcheff', async ({ token }) => {
    const tokenExists = await verifyToken(token)

    if (!tokenExists) {
      return socket.emit('connect_clippcheff_response', { connected: false })
    }

    const apiKey = process.env.API_KEY

    socket.join(token)
    io.to(token).emit('connect_clippcheff_response', {
      connected: true,
      apiKey,
    })
  })

  socket.on('send_me_products', async ({ token }) => {
    const tokenExists = await verifyToken(token)

    if (tokenExists) {
      const { products: productsRaw } = await getProducts({ token })
      const { products } = normalizeProducts({ productsRaw })

      socket.join(token)
      io.to(token).emit('products', { products })
    }
  })

  socket.on('verify_exist_menu', async ({ token }) => {
    const tokenExists = await verifyToken(token)

    if (tokenExists) {
      const response = await existMenu(token)

      socket.join(token)
      io.to(token).emit('menu_exist', response)
    }
  })

  socket.on('send_me_menu', async ({ menuToken }) => {
    const { menuExists, menu } = await verifyMenu(menuToken)

    if (menuExists && menu) {
      const { token } = menu
      const { products: productsRaw } = await getProducts({ token })
      const { products } = normalizeProducts({ productsRaw })

      socket.join(menuToken)
      io.to(menuToken).emit('menu', { menu, products })
    }
  })
})
