<template>
  <div class="max-w-6xl mx-auto p-8 font-sans">
    <nav class="mb-8 flex justify-between items-center">
      <NuxtLink to="/" class="inline-block bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 px-6 rounded-lg font-bold transition-colors">
        ← Volver al Home
      </NuxtLink>
    </nav>

    <div class="mb-10 p-6 bg-orange-50 border border-orange-200 rounded-xl">
      <h2 class="text-orange-800 font-bold mb-4">Demostración de Estado Global</h2>
      <Ej14PiniaCounter />
    </div>

    <div class="flex justify-between items-end mb-6">
      <h1 class="text-3xl font-bold text-slate-900">Catálogo de Productos</h1>
      
      <button 
        @click="refresh()" 
        :disabled="pending"
        class="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 disabled:opacity-50 px-4 py-2 rounded-lg font-medium transition-colors"
      >
        {{ pending ? 'Recargando...' : 'Recargar Datos' }}
      </button>
    </div>
    
    <div v-if="pending" class="text-center py-20">
      <div class="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading"></div>
      <p class="mt-4 text-slate-500 font-medium">Cargando productos...</p>
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg my-8">
      <h3 class="font-bold text-lg mb-2">Ocurrió un error al cargar el catálogo</h3>
      <p>{{ error.message }}</p>
    </div>

    <div v-else-if="data" class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mt-8">
      <Ej6ProductCard 
        v-for="item in data.products" 
        :key="item.id" 
        :product="item" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductsResponse } from '~/types/product'

definePageMeta({
  layout: 'catalogo'
})

useSeoMeta({
  title: 'Catálogo de Productos',
  description: 'Explora nuestro catálogo de productos con datos dinámicos obtenidos desde una API.'
})

const { data, pending, error, refresh } = await useFetch<ProductsResponse>(
  'https://dummyjson.com/products?limit=12'
)
</script>