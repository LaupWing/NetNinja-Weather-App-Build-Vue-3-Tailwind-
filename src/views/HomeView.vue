<template>
   <main class="container text-white">
      <div class="pt-4 mb-8 relative">
         <input 
            type="text" 
            @input="getSearchResults"
            v-model="searchQuery"
            placeholder="Search for a city or state"
            class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
         >
      </div>
      <ul 
         class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
         v-if="mapboxSearchResults"
      >
         <p v-if="searchError">Sorry something went wrong, please try again</p>
         <p v-if="mapboxSearchResults.length === 0">No search results</p>
         <template v-else>

            <li
               v-for="searchResult in mapboxSearchResults"
               :key="searchResult.id"
               class="py-2 cursor-pointer"
            >
               {{searchResult.place_name}}
            </li>
         </template>
      </ul>
   </main>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const mapBoxAPIKey = ""
const searchQuery = ref("")
const queryTimeout = ref(null)
const mapboxSearchResults = ref(null)
const searchError = ref(null)

const getSearchResults = () =>{
   clearTimeout(queryTimeout.value)
   queryTimeout.value = setTimeout(async ()=>{
      if(searchQuery.value !== ""){
         try{
            const result = await axios.get(``)
            mapboxSearchResults.value = result.data.features
         }catch {
            searchError.value = true
         }
         return
      }
      mapboxSearchResults.value = null
   },300)
}

</script>

