<template>
  <div class="p-6 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <Ej3TheTitle>Contador de Colores (Estilos Dinámicos)</Ej3TheTitle>

    <div class="mt-4">
      <p class="text-slate-600">
        Valor actual: 
        <strong 
          class="text-2xl transition-colors duration-300 ml-2"
          :class="count >= 10 ? 'text-green-600' : 'text-slate-900'"
        >
          {{ count }}
        </strong>
      </p>
    </div>

    <div class="flex gap-3 mt-6">
      <button 
        @click="decrement" 
        class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-medium transition-colors"
      >
        Decrement
      </button>
      <button 
        @click="increment" 
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script setup>
const count = ref(0) 

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>