<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
    <nav class="bg-slate-800 text-white p-4 shadow-md">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xl font-bold">Menú</h2>
      </div>
    </nav>

    <main class="grow">
      <slot />
    </main>

    <footer class="bg-slate-200 text-slate-700 p-6 text-center border-t border-slate-300">
      <h2 class="font-bold text-lg mb-2">Footer</h2>
      <p class="text-sm">Registro de Ejercicios Nuxt 3</p>
    </footer>
  </div>
</template>