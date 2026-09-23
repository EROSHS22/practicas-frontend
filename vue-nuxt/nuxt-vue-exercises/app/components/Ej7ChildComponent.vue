<template>
  <div class="p-5 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <h3 class="text-lg font-bold text-slate-800 mb-3">Componente Hijo</h3>
    
    <button 
      @click="sendGreeting" 
      class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-medium transition-colors"
    >
      Saludar al Padre
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['greet'])

const sendGreeting = () => {
  emit('greet', '¡Hola desde el Componente Hijo!')
}
</script>