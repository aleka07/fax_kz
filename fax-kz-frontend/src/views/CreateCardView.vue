<script setup>
// Импортируем компонент формы, который мы создали ранее
import CardForm from '@/components/CardForm.vue';

</script>

<template>
  <!-- Это контейнер для страницы создания -->
  <div class="create-card-view">
    <!-- Просто отображаем компонент формы -->
    <!-- CardForm сам по себе уже имеет внутренние отступы и стили -->
    <CardForm />
  </div>
</template>

<style scoped>
/* Стили для самой обертки CreateCardView, если они понадобятся */
/* Например, можно добавить отступ сверху, если шапка перекрывает */
/* .create-card-view {
  padding-top: 1rem;
} */
</style>