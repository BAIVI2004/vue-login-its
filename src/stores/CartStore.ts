import { defineStore } from 'pinia'
import type { Book } from '@/models/Book'

interface CartState {
  items: Book[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
  }),

  actions: {
    addToCart(book: Book) {
      this.items.push(book)
    },

    removeFromCart(id: number) {
      this.items = this.items.filter((b) => b.id !== id)
    },

    clearCart() {
      this.items = []
    },
  },

  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((sum, b) => sum + b.price, 0),
  },
})

