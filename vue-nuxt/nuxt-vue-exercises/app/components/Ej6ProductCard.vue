<template>
  <article class="flex flex-col border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-200 bg-white">
    <img :src="product.thumbnail" :alt="product.title" class="w-full h-[200px] object-cover bg-slate-100" />
    
    <div class="p-6 flex flex-col grow">
      <span class="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">{{ product.category }}</span>
      <h3 class="m-0 mb-2 text-xl text-slate-900 font-semibold">{{ product.title }}</h3>
      <p class="text-slate-600 text-sm mb-6 grow">{{ product.description }}</p>
      
      <div class="flex justify-between items-center">
        <span class="font-bold text-lg text-blue-700">${{ product.price }}</span>
        <button @click="addToCart" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">Comprar</button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const addToCart = () => {
  alert(`Agregaste ${props.product.title} al carrito`)
}
</script>