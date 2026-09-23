<template>
  <div>
    <Ej3TheTitle>Contador con Límites (Directivas)</Ej3TheTitle>

    <div class="mt-4">
      <p class="text-slate-600">Valor actual: <strong class="text-slate-900 text-lg">{{ count }}</strong></p>
    </div>

    <div class="flex gap-3 mt-4 min-h-[40px]">
      <button v-if="count > 0" @click="decrement" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-medium transition-colors">Decrement</button>
      
      <button v-if="count < 10" @click="increment" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">Increment</button>
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