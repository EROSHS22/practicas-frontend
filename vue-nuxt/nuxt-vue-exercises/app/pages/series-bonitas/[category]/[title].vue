<template>
  <div class="max-w-3xl mx-auto p-8 font-sans">
    <nav class="mb-6">
      <NuxtLink :to="`/series-bonitas/${route.params.category}`" class="text-slate-500 hover:text-slate-800">
        ← Volver a la categoría
      </NuxtLink>
    </nav>

    <div class="p-8 border border-slate-200 rounded-xl bg-white shadow-sm">
      <h1 class="text-2xl font-bold text-slate-800 mb-6">Reproduciendo</h1>
      
      <p class="text-lg text-slate-600">Categoría: <strong class="capitalize">{{ categoryName }}</strong></p>
      <p class="text-lg text-slate-600">Título: <strong class="capitalize">{{ titleName }}</strong></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const categoryName = route.params.category.toString()
const titleName = route.params.title.toString().replace(/-/g, ' ')

if (categoryName !== 'aventuras') {
  throw createError({ 
    statusCode: 404, 
    statusMessage: `La categoría "${categoryName}" no existe en el sistema.`,
    fatal: true 
  })
}


useSeoMeta({
  title: `${titleName} - ${categoryName} | Series Bonitas`,
  description: `Disfruta del episodio ${titleName} de la categoría ${categoryName}.`
})
</script>