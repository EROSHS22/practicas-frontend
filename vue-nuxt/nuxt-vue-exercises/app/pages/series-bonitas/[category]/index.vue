<template>
  <div class="max-w-3xl mx-auto p-8 font-sans">
    <nav class="mb-6">
      <NuxtLink to="/series-bonitas" class="text-slate-500 hover:text-slate-800">
        ← Volver a Series
      </NuxtLink>
    </nav>

    <h1 class="text-3xl font-bold mb-6 text-slate-900">
      Series de la categoría: <span class="text-blue-600 capitalize">{{ route.params.category }}</span>
    </h1>

    <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg">
      <NuxtLink 
        :to="`/series-bonitas/${route.params.category}/spiderman-episodio-1`" 
        class="text-blue-600 hover:text-blue-800 font-medium hover:underline"
      >
        Ver episodio 1 de Spiderman →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
</script>