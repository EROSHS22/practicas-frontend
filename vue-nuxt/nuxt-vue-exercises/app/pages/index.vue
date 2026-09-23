<script setup lang="ts">
useSeoMeta({
  title: 'Inicio - Mi Registro de Ejercicios',
  description: 'Página principal de aprendizaje de Nuxt 3 con Vue y Tailwind CSS.'
})
</script>


<template>
  <div class="max-w-3xl mx-auto p-8 font-sans">
    <nav class="mb-8 flex justify-end">
      <NuxtLink to="/catalogo" class="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition-colors">Ver Catálogo de Productos →</NuxtLink>
    </nav>

    <h1 class="text-3xl font-bold mb-4 text-slate-900">Mi Registro de Ejercicios</h1>
    <hr class="mb-8 border-slate-200">

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 2: Uso de Props</h2>
      <Ej2TheTitle propTitle="Título desde Prop" />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 3: Uso de Slots</h2>
      <Ej3TheTitle>Título inyectado a través del Slot</Ej3TheTitle>
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 4: Reactividad y Eventos</h2>
      <Ej4TheCounter />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 5: Directivas Condicionales</h2>
      <Ej5TheCounter />
    </section>
  </div>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 7: Emitir Eventos (Hijo a Padre)</h2>
      <Ej7ParentComponent />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 8: Provide / Inject</h2>
      
      <Ej8ParentComponent />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 9: Composables (Estado Compartido)</h2>
      
      <Ej9CounterTest />
      <Ej9CounterTest />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 10: Estilos Dinámicos</h2>
      
      <Ej10TheCounter />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 11: Propiedades Computadas (computed)</h2>
      
      <Ej11TheCounter />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 12: Computed con Lógica Condicional</h2>
      
      <Ej12TheCounter />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 13: Solución de Errores (Debugging)</h2>
      
      <Ej13Soluciones />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 14: Estado Global con Pinia</h2>
      
      <Ej14PiniaCounter />
    </section>

    <section class="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
      <h2 class="text-slate-700 text-xl font-semibold mb-4">Ejercicio 16: Componentes Dinámicos</h2>
      
      <Ej16DynamicIcons />
    </section>

</template>