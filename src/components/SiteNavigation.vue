<template>
   <header class="sticky top-0 bg-weather-primary shadow-lg">
      <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py6">
         <router-link :to="{
            name: 'home'
         }">
            <div class="flex items-center gap-3">
               <font-awesome-icon icon="fa-solid fa-sun text" class="text-2xl" />
               <p class="text-2xl">The Local Weather</p>
            </div>
         </router-link>

         <div class="flex gap-3 flex-1 justify-end">
            <font-awesome-icon icon="fa-solid fa-circle-info"
               class="text-xl hover:text-weather-secondary duration-150 cursor-pointer" />
            <font-awesome-icon icon="fa-solid fa-plus"
               class="text-xl hover:text-weather-secondary duration-150 cursor-pointer" />
         </div>
         <BaseModal>
            <div class="text-black">
               <h1 class="text-2xl mb-1">About:</h1>
               <p class="mb-4">
                  The Local Weather allows you to track the current and
                  future weather of cities of your choosing.
               </p>
               <h2 class="text-2xl">How it works:</h2>
               <ol class="list-decimal list-inside mb-4">
                  <li>
                     Search for your city by entering the name into the
                     search bar.
                  </li>
                  <li>
                     Select a city within the results, this will take
                     you to the current weather for your selection.
                  </li>
                  <li>
                     Track the city by clicking on the "+" icon in the
                     top right. This will save the city to view at a
                     later time on the home page.
                  </li>
               </ol>

               <h2 class="text-2xl">Removing a city</h2>
               <p>
                  If you no longer wish to track a city, simply select
                  the city within the home page. At the bottom of the
                  page, there will be am option to delete the city.
               </p>
            </div>
         </BaseModal>
      </nav>
   </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BaseModal from './BaseModal.vue'
</script>