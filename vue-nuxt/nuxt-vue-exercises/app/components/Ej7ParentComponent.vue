<template>
  <div class="p-6 border-2 border-indigo-100 rounded-xl bg-indigo-50">
    <h2 class="text-xl font-bold text-indigo-900 mb-4">Componente Padre</h2>
    
    <div v-if="receivedMessage" class="mb-4 p-4 bg-indigo-200 text-indigo-900 rounded-lg">
      Mensaje recibido: <span class="font-bold">{{ receivedMessage }}</span>
    </div>

    <Ej7ChildComponent @greet="handleGreeting" />
  </div>
</template>

<script setup>
const receivedMessage = ref('')

const handleGreeting = (message) => {
  receivedMessage.value = message
}
</script>