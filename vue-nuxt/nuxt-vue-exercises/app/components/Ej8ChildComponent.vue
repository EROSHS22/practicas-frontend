<template>
  <div class="p-5 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <h3 class="text-lg font-bold text-slate-800 mb-3">Componente Hijo (Injector)</h3>
    
    <p class="text-slate-600">
      Mensaje inyectado: 
      <strong class="text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
        {{ injectedMessage }}
      </strong>
    </p>
  </div>
</template>

<script setup>
const injectedMessage = inject('secretMessage', 'No se recibió ningún mensaje')
</script>