<template>
  <div class="p-6 border border-slate-200 rounded-lg bg-white shadow-sm mt-4">
    <h3 class="text-xl font-bold text-slate-800 mb-4">Menú de Redes (Componentes Dinámicos)</h3>
    
    <nav class="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
      <a
        v-for="social in socialNetworks"
        :key="social.id"
        :href="social.url"
        class="w-10 h-10 p-2 rounded-full bg-white text-slate-600 shadow-sm border border-slate-200 hover:text-blue-600 hover:border-blue-300 hover:shadow transition-all flex items-center justify-center"
        target="_blank"
        :aria-label="social.name"
      >
        <component :is="social.icon" class="w-full h-full" />
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'

import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconGithub from '~/components/icons/IconGithub.vue'

const socialNetworks = shallowRef([
  {
    id: 1,
    name: 'Twitter',
    url: '#',
    icon: IconTwitter
  },
  {
    id: 2,
    name: 'GitHub',
    url: '#',
    icon: IconGithub
  }
])
</script>