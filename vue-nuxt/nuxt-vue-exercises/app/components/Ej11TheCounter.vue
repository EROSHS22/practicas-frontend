<template>
  <div class="p-6 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <Ej3TheTitle>Contador Base</Ej3TheTitle>
    <p class="text-slate-600 mt-2 mb-6">
      Valor actual: <strong class="text-2xl text-slate-900 ml-2">{{ count }}</strong>
    </p>

    <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg mb-6">
      <h3 class="text-lg font-bold text-purple-900">
        Contador Multiplicado (x2)
      </h3>
      <p class="text-purple-700 mt-1">
        Valor computado: <strong class="text-2xl ml-2">{{ doubledCount }}</strong>
      </p>
    </div>

    <div class="flex gap-3">
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

const doubledCount = computed(() => count.value * 2)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>