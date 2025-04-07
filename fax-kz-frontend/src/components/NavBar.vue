<script setup>
// Импортируем RouterLink для создания навигационных ссылок
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-white shadow-md"> <!-- Фон, тень для шапки -->
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
      <!-- Левая часть: Логотип или Название -->
      <div>
        <RouterLink
          to="/"
          class="text-xl lg:text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
        >
          Fax.kz Cards
        </RouterLink>
      </div>

      <!-- Правая часть: Ссылки навигации -->
      <div class="space-x-2 sm:space-x-4 lg:space-x-6">
        <RouterLink
          to="/create"
          class="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150"
          active-class="bg-indigo-100 text-indigo-700"
        >
          Создать визитку
        </RouterLink>

        <!-- Временная ссылка для просмотра тестовой карточки (пока у нас нет списка) -->
        <RouterLink
          to="/card/test-user"
          class="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150"
          active-class="bg-indigo-100 text-indigo-700"
        >
          Просмотр (Тест)
        </RouterLink>

        <!-- Сюда позже можно добавить ссылки: "Войти", "Мои визитки" и т.д. -->
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Стили только для NavBar, если понадобятся сверх Tailwind */
/* Пример стиля для активной ссылки, если active-class не сработает или нужен более сложный стиль */
/* .router-link-exact-active {
  background-color: theme('colors.indigo.100');
  color: theme('colors.indigo.700');
  font-weight: 600;
} */
</style>