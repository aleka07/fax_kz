<script setup>
// На этом шаге секция <script setup> нам пока не нужна для логики,
// так как все данные будут статичными в шаблоне.
// Позже мы добавим сюда defineProps для получения данных извне.
</script>

<template>
  <!-- Основной контейнер визитки -->
  <!-- Используем градиентный фон, скругление, тень, макс. ширину и центрирование -->
  <!-- Добавляем отступы p-6 (большие) и адаптивные p-8 для больших экранов -->
  <div class="business-card bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 max-w-md mx-auto font-sans">

    <!-- Верхняя секция: Фото/Инициалы и Основная информация -->
    <!-- Используем flex для расположения элементов -->
    <!-- На маленьких экранах (по умолчанию) - колонка (flex-col), текст по центру (text-center) -->
    <!-- На средних экранах (sm:) и выше - строка (sm:flex-row), текст слева (sm:text-left) -->
    <div class="flex flex-col sm:flex-row items-center text-center sm:text-left sm:space-x-6 mb-6">

      <!-- Блок для Фото/Инициалов -->
      <div class="flex-shrink-0 mb-4 sm:mb-0">
        <!-- Заглушка с инициалами -->
        <!-- Позже заменим на <img v-if="photoUrl"> и <div v-else> -->
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-4xl font-bold shadow-md border-4 border-white">
          АП <!-- Статичные инициалы для примера -->
        </div>
        <!-- Пример как будет с фото (закомментировано): -->
        <!-- <img class="w-24 h-24 rounded-full object-cover shadow-md border-4 border-white" src="URL_К_ФОТО" alt="Фото профиля"> -->
      </div>

      <!-- Блок с Именем, Должностью, Компанией -->
      <!-- flex-1: занимает доступное пространство -->
      <!-- min-w-0: нужно для правильного переноса/обрезки текста в flex-контейнере -->
      <div class="flex-1 min-w-0">
        <!-- Имя -->
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 truncate mb-1">
          Айдос Прмантай <!-- Статичное имя -->
        </h1>
        <!-- Должность -->
        <p class="text-md font-medium text-indigo-700">
          Начинающий Веб-Разработчик <!-- Статичная должность -->
        </p>
        <!-- Компания -->
        <p class="text-sm text-gray-600 truncate mt-1">
          Fax.kz Team (Надеюсь!) <!-- Статичная компания -->
        </p>
      </div>
    </div>

    <!-- Секция Контактов -->
    <!-- Добавляем разделитель сверху (border-t), отступ сверху (pt-6) и снизу (mb-6) -->
    <!-- space-y-4: добавляет вертикальный отступ между контактами -->
    <div class="space-y-4 border-t border-gray-200 pt-6 mb-6">

      <!-- Телефон -->
      <!-- Используем flex, items-center для выравнивания иконки и текста -->
      <!-- space-x-3: отступ между иконкой и текстом -->
      <!-- group: помечаем ссылку как группу для изменения стиля иконки при наведении на ссылку -->
      <a href="tel:+77051234567" class="flex items-center space-x-3 text-gray-800 hover:text-indigo-700 transition duration-150 ease-in-out group">
        <!-- Иконка телефона (Heroicons outline) -->
        <svg class="w-6 h-6 text-indigo-400 group-hover:text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        <!-- Текст телефона -->
        <span class="text-base font-medium truncate">
          +7 (705) 123-45-67 <!-- Статичный телефон -->
        </span>
      </a>

      <!-- Email -->
      <a href="mailto:aidos.prmantay@example.com" class="flex items-center space-x-3 text-gray-800 hover:text-indigo-700 transition duration-150 ease-in-out group">
        <!-- Иконка Email -->
        <svg class="w-6 h-6 text-indigo-400 group-hover:text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <!-- Текст Email -->
        <span class="text-base font-medium truncate">
          aidos.prmantay@example.com <!-- Статичный Email -->
        </span>
      </a>

      <!-- Веб-сайт (необязательно) -->
      <a href="https://fax.kz" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 text-gray-800 hover:text-indigo-700 transition duration-150 ease-in-out group">
        <!-- Иконка Ссылки -->
        <svg class="w-6 h-6 text-indigo-400 group-hover:text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
        <!-- Текст Сайта -->
        <span class="text-base font-medium truncate">
          fax.kz <!-- Статичный сайт -->
        </span>
      </a>

      <!-- Сюда можно добавить другие контакты: WhatsApp, Telegram, адрес и т.д. по аналогии -->

    </div>

    <!-- Секция с Кнопкой -->
    <!-- Кнопка пока ничего не делает, но стилизована -->
    <button
      type="button"
      class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
      <span>Сохранить контакт</span>
    </button>

    <!-- Место для QR-кода (добавим позже) -->
    <!-- <div class="mt-6 flex justify-center"> -->
      <!-- <img src="URL_QR_КОДА" alt="QR Code" class="w-32 h-32"> -->
    <!-- </div> -->

  </div>
</template>

<style scoped>
/* Стили специфичные для этого компонента, если Tailwind не хватит */
.business-card {
  /* Можно добавить какие-то кастомные стили сюда, если нужно */
}
</style>