<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app-wrapper" class="min-h-screen bg-gray-100 font-sans">
    <!-- Это место, куда будут подставляться наши страницы (HomeView, CardView, CreateCardView) -->
    <RouterView />
  </div>
</template>


