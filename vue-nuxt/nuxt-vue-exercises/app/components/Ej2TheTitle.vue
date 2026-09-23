<template>
  <h1 class="text-2xl font-bold text-slate-800">{{ propTitle }}</h1>
</template>

<script setup>
defineProps({
  propTitle: {
    type: String,
    required: true
  }
})
</script>