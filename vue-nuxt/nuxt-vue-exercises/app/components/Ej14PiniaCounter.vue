<template>
  <div class="p-6 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <h3 class="text-xl font-bold text-slate-800 mb-2">Contador Global (Pinia)</h3>
    
    <div class="mt-4">
      <p class="text-slate-600">
        Valor en la Store: 
        <strong class="text-3xl text-orange-600 ml-2">{{ counterStore.count }}</strong>
      </p>
      <p class="text-slate-500 text-sm mt-1">
        Valor multiplicado x2: {{ counterStore.doubledCount }}
      </p>
    </div>

    <div class="flex gap-3 mt-6">
      <button 
        @click="counterStore.decrement" 
        class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-medium transition-colors"
      >
        Decrement
      </button>
      <button 
        @click="counterStore.increment" 
        class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-medium transition-colors"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'

const counterStore = useCounterStore()
</script>