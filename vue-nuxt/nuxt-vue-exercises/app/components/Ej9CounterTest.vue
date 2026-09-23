<template>
  <div class="p-6 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <h3 class="text-lg font-bold text-slate-800 mb-4">Contador Global (Composable)</h3>
    
    <div class="mb-4">
      <p class="text-slate-600">
        Valor compartido: <strong class="text-2xl text-blue-600 ml-2">{{ count }}</strong>
      </p>
    </div>

    <div class="flex gap-3">
      <button @click="decrement" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-medium transition-colors">
        - Decrementar
      </button>
      
      <button @click="increment" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">
        + Incrementar
      </button>

      <button @click="reset" class="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded font-medium transition-colors ml-auto">
        Resetear
      </button>
    </div>
  </div>
</template>

<script setup>
const { count, increment, decrement, reset } = useCounter()
</script>