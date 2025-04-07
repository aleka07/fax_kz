<script setup>
// Импортируем наш компонент отображения визитки
// @ - это обычно псевдоним (alias) для папки src/, настроенный в vite.config.js
import BusinessCardDisplay from '@/components/BusinessCardDisplay.vue';

// На этом этапе нам больше ничего не нужно в script setup.
// Позже (в Фазе 3) мы добавим сюда логику для получения данных с сервера
// на основе параметра из URL. Например:
// import { useRoute } from 'vue-router';
// const route = useRoute();
// const username = route.params.username; // Получаем 'alihan' из /card/alihan
// console.log('Показать визитку для пользователя:', username);
</script>

<template>
  <!-- Основной контейнер для этой страницы -->
  <div class="card-view">
    <!-- Просто вставляем наш компонент визитки -->
    <!-- Все данные пока статичны внутри BusinessCardDisplay -->
    <BusinessCardDisplay />

    <!-- Сюда можно добавить другие элементы, специфичные для этой страницы просмотра, если они понадобятся. -->
    <!-- Например, кнопки "Поделиться", "Редактировать" (когда будет такая логика) -->
    <!-- <div class="mt-8 flex justify-center space-x-4">
      <button class="px-4 py-2 bg-blue-500 text-white rounded">Поделиться</button>
      <button class="px-4 py-2 bg-gray-300 rounded">Редактировать</button>
    </div> -->
  </div>
</template>

<style scoped>
/* Стили, специфичные только для страницы CardView, если нужны */
.card-view {
  /* Например, можно добавить дополнительный отступ сверху/снизу, если нужно */
  /* padding-top: 2rem; */
}
</style>