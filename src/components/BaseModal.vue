<template>
   <Transition>
      <div 
         class="fixed bg-black bg-opacity-30 inset-0 flex justify-center px-8"
         v-show="modalActive"
      >
         <Transition>
            <div 
               class="p-4 bg-white self-start mt-32 max-w-screen-md"
               v-if="modalActive"
            >
               <slot/>
               <button 
                  class="text-white mt-8 bg-weather-primary py-2 px-6"
                  @click="$emit('close-modal')"
               >
                  Close
               </button>
            </div>
         </Transition>
      </div>
   </Transition>
</template>

<script setup>
defineEmits(["close-modal"])
defineProps({
   modalActive: {
      type: Boolean,
      default: false
   }
})
</script>