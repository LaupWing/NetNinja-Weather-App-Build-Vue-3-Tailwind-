<template>
   <div class="flex flex-col flex-1 items-center">
      <div
         v-if="route.query.preview"
         class="text-white p-4 bg-weather-secondary w-full text-center"
      >
         <p>You are currently previewing this city, click on the "+" icon to start tracking this city</p>
      </div>
      <div class="flex flex-col items-center text-white py-12">
         <h1 class="text-4xl mb-2">
            {{route.params.city}}
         </h1>
         <p class="text-sm mb-12">
            {{
               new Date(weatherData.currentTime).toLocaleDateString(
                  "en-us",
                  {
                     weekday: "short",
                     day: "2-digit",
                     month: "long"
                  }
               )
            }}
            {{
               new Date(weatherData.currentTime).toLocaleDateString(
                  "en-us",
                  {
                     timeStyle: "short"
                  }
               )
            }}
         </p>
         <p class="text-8xl mb-8">
            {{Math.round(weatherData.current.temp)}}&deg;
         </p>
         <p>
            Feels like
            {{Math.round(weatherData.current.feels_like)}} &deg;
         </p>
         <p class="capitalize">
            {{weatherData.current.weather[0].description}}
         </p>
         <img 
            class="w-[150px] h-auto"
            :src="``" 
            alt=""
         >
      </div>
      <hr class="border-white border-opacity-10 w-full"/>
      <div class="max-w-screen-md w-full py-12">
         <div class="mx-8 text-white">
            <h2 class="mb-4">
               Hourly weather
            </h2>
            <div class="flex gap-10 overflow-x-scroll">
               <div
                  v-for="hourData in weatherData.hourly"
                  :key="hourData.dt"
                  class="flex flex-col gap-4 items-center"
               >
                  <p class="whitespace-nowrap text-md">
                     {{
                        new Date(
                           hourData.currentTime
                        ).toLocaleDateString("en-us", {
                           hour: "numeric"
                        })
                     }}
                  </p>
                  <img 
                     :src="``" 
                     alt="" 
                     class="w-auto h-[150px] object-cover"
                  >
                  <p class="text-xl">
                     {{Math.round(hourData.temp)}}&deg;
                  </p>
               </div>
            </div>
         </div>
      </div>
      <hr class="border-white border-opacity-10 w-full"/>
      <div class="max-w-screen-md w-full py-12"></div>
   </div>
</template>

<script setup>
import axios from "axios"
import { useRoute } from "vue-router"

const route = useRoute()
const getWeatherData = async ()=>{
   try{
      const weatherData = await axios.get(`${route.query.lat}${route.query.lng}`)

      const localOffset = new Date().getTimezoneOffset() * 60000
      const utc = weatherData.data.current.dt * 1000 + localOffset
      weatherData.data.currentTime = utc + 1000 * weatherData.data.timezone_offset

      weatherData.data.hourly.forEach(hour =>{
         const utc = hour.dt * 1000 + localOffset
         hour.currentTime = utc + 1000 * weatherData.data.timezone_offset
      })

      return weatherData.data
   }catch(err){
      console.error(err)
   }
}
const weatherData = await getWeatherData()
</script>