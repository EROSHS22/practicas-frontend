<template>
  <div class="p-6 border-2 border-emerald-100 rounded-xl bg-emerald-50">
    <h2 class="text-xl font-bold text-emerald-900 mb-4">Componente Padre (Provider)</h2>
    
    <div class="mb-4">
      <label class="block text-sm font-medium text-emerald-700 mb-1">Escribe un mensaje para inyectar:</label>
      <input 
        v-model="providedMessage" 
        type="text" 
        class="w-full p-2 border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <Ej8ChildComponent />
  </div>
</template>

<script setup>


const providedMessage = ref('Mensaje desde el padre ')

provide('secretMessage', providedMessage)
</script>