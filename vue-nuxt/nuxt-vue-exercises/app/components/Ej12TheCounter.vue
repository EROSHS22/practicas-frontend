<template>
  <div class="p-6 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <Ej3TheTitle>
      Contador con Estados
      <span 
        class="block text-sm font-medium mt-1"
        :class="{
          'text-red-500': count === 0 || count === 10,
          'text-green-600': count > 0 && count < 10
        }"
      >
        {{ statusMessage }}
      </span>
    </Ej3TheTitle>

    <div class="mt-4 mb-6">
      <p class="text-slate-600">
        Valor actual: <strong class="text-2xl text-slate-900 ml-2">{{ count }}</strong>
      </p>
    </div>

    <div class="flex gap-3">
      <button 
        @click="decrement" 
        :disabled="count === 0"
        class="px-4 py-2 bg-slate-200 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed text-slate-800 rounded font-medium transition-colors"
      >
        Decrement
      </button>
      <button 
        @click="increment" 
        :disabled="count === 10"
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded font-medium transition-colors"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script setup>
const count = ref(0) 

const statusMessage = computed(() => {
  if (count.value === 0) {
    return 'Estás en el valor mínimo'
  } else if (count.value === 10) {
    return 'Estás en el valor máximo'
  } else {
    return 'Estás en los parámetros adecuados'
  }
})

const increment = () => {
  if (count.value < 10) count.value++
}

const decrement = () => {
  if (count.value > 0) count.value--
}
</script>