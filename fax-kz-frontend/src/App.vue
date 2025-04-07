

<script setup>
// Оставляем только нужный импорт RouterView
import { RouterView } from 'vue-router';
// Импортируем наш компонент NavBar
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div id="app-wrapper" class="min-h-screen bg-gray-100 font-sans">
    <!-- Вставляем компонент NavBar здесь -->
    <NavBar />

    <!-- Основное содержимое страницы будет отображаться здесь -->
    <main class="container mx-auto p-4 md:p-8"> <!-- Добавил container mx-auto и для main -->
      <RouterView />
    </main>

    <!-- Сюда можно будет добавить подвал (Footer) по аналогии -->

  </div>
</template>



