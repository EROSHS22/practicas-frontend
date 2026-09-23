<template>
  <div class="p-6 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <Ej3TheTitle>Solución de Errores (Ej 13)</Ej3TheTitle>

    <div class="mt-6 mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
      <h3 class="font-bold text-slate-800 mb-2">Lista Segura (v-for sin usar index):</h3>
      <ul class="list-disc pl-5 text-slate-700">
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg">
      <h3 class="font-bold text-slate-800 mb-2">Contador Reactivo (v-if y ref):</h3>
      
      <div class="flex items-center gap-4 mb-4">
        <span class="text-slate-600">Valor actual: <strong class="text-lg text-slate-900">{{ count }}</strong></span>
        <button 
          @click="increment" 
          class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors text-sm"
        >
          Incrementar
        </button>
      </div>

      <p 
        v-if="count === 10" 
        class="text-green-700 bg-green-100 px-3 py-2 rounded-md font-medium"
      >
        Número, {{ count }}
      </p>
    </div>
  </div>
</template>

<script setup>

const items = ref(["Apple", "Banana", "Cherry"]);


const count = ref(0);

const increment = () => {
  count.value++;
};
</script>