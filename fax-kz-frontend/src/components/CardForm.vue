<script setup>
// Импортируем 'ref' из Vue для создания реактивных переменных
import { ref } from 'vue';

// Создаем реактивный объект для хранения всех данных формы.
// ref() делает весь объект отслеживаемым Vue.
// Инициализируем поля пустыми строками.
const formData = ref({
  name: '',       // Имя владельца визитки
  username: '',   // Уникальное имя для URL (только латиница, цифры, дефис)
  title: '',      // Должность
  company: '',    // Компания
  phone: '',      // Телефон
  email: '',      // Email
  website: '',    // Веб-сайт
  photoUrl: '',   // Ссылка на фото
});

// Функция, которая будет вызываться при отправке формы
const handleSubmit = () => {
  // Выводим текущие значения данных формы в консоль браузера.
  // Используем .value для доступа к значению ref-переменной.
  console.log('Данные формы для отправки:', formData.value);

  // TODO: Позже здесь будет код для:
  // 1. Валидации данных (проверка формата email, уникальности username и т.д.)
  // 2. Отправки данных на backend API (axios.post)
  // 3. Обработки ответа от сервера (успех/ошибка)
  // 4. Очистки формы или перенаправления пользователя
};
</script>

<template>
  <!-- Контейнер для формы -->
  <!-- max-w-3xl: Ограничивает макс. ширину на больших экранах -->
  <!-- mx-auto: Центрирует контейнер -->
  <!-- p-6 md:p-8: Внутренние отступы (адаптивные) -->
  <!-- bg-white, rounded-xl, shadow-lg, border: Стилизация контейнера -->
  <div class="card-form-container max-w-3xl mx-auto p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200">

    <!-- Заголовок формы -->
    <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8 pb-4 border-b">
      Создание новой визитки
    </h2>

    <!-- Тег формы. @submit.prevent вызывает handleSubmit при отправке и отменяет перезагрузку страницы -->
    <form @submit.prevent="handleSubmit">
      <!-- Используем grid для расположения полей. -->
      <!-- gap-4 md:gap-6: Расстояние между ячейками грида (адаптивное) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        <!-- Поле Имя -->
        <!-- md:col-span-1: На средних экранах и выше поле занимает 1 колонку -->
        <div class="md:col-span-1">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Имя *</label>
          <input
            type="text"
            id="name"
            v-model.trim="formData.name" 
                                        
            required                    
            placeholder="Как вас зовут?"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
        </div>

        <!-- Поле Уникальное имя (username) -->
        <div class="md:col-span-1">
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Имя для ссылки (username) *</label>
          <input
            type="text"
            id="username"
            v-model.trim="formData.username"
            required
            pattern="[a-zA-Z0-9\-]+"
            title="Только латинские буквы, цифры и дефис"
            placeholder="Например, ivan-petrov"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
           <p class="text-xs text-gray-500 mt-1">Будет использоваться в URL: fax.kz/card/<strong>{{ formData.username || '...' }}</strong></p>
        </div>

        <!-- Поле Должность -->
        <div class="md:col-span-1">
          <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Должность</label>
          <input
            type="text"
            id="title"
            v-model="formData.title"
            placeholder="Кем вы работаете?"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
        </div>

        <!-- Поле Компания -->
        <div class="md:col-span-1">
          <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Компания</label>
          <input
            type="text"
            id="company"
            v-model="formData.company"
            placeholder="Где вы работаете?"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
        </div>

        <!-- Поле Телефон -->
        <div class="md:col-span-1">
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            placeholder="+7 (XXX) XXX-XX-XX"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
        </div>

        <!-- Поле Email -->
        <div class="md:col-span-1">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Ваш рабочий email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
        </div>

        <!-- Поле Веб-сайт -->
        <!-- md:col-span-2: На средних экранах и выше поле занимает 2 колонки -->
        <div class="md:col-span-2">
          <label for="website" class="block text-sm font-medium text-gray-700 mb-1">Веб-сайт</label>
          <input
            type="url"
            id="website"
            v-model="formData.website"
            placeholder="https://example.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
        </div>

        <!-- Поле Ссылка на фото -->
        <div class="md:col-span-2">
          <label for="photoUrl" class="block text-sm font-medium text-gray-700 mb-1">Ссылка на фото (URL)</label>
          <input
            type="url"
            id="photoUrl"
            v-model="formData.photoUrl"
            placeholder="https://..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out placeholder-gray-500 bg-gray-50"
          />
           <p class="text-xs text-gray-500 mt-1">Прямая ссылка на изображение (jpg, png).</p>
        </div>

      </div> <!-- Конец grid -->

      <!-- Кнопка Отправки -->
      <!-- mt-8 md:mt-10: Отступ сверху (адаптивный) -->
      <!-- flex justify-center: Центрирует кнопку -->
      <div class="mt-8 md:mt-10 flex justify-center">
        <button
          type="submit"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105"
        >
          Создать визитку
        </button>
      </div>

    </form>
  </div>
</template>

<!-- <style scoped>
/* Стили для этой формы, если нужны */
input:required:invalid {
  /* Очень простая стилизация невалидных обязательных полей (браузерная) */
  /* border-color: #f87171; /* red-400 */
}
</style> -->