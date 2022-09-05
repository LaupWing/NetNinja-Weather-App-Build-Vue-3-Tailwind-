<template>
   <div>
      
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

      return weatherData
   }catch(err){
      console.error(err)
   }
}
const weatherData = await getWeatherData()
</script>