<template>
    <div class="mt-1 text-center"> 
          <button class="m-1 px-2 rounded-md shadow-md" 
          :class="darkMode ? 'bg-[#ffffff] text-[#374858]' : 'bg-[#374858] text-white'"
          @click.prevent="prevPage" :disabled="currentPage === 1"> < </button>
          <span :class="darkMode ? 'text-[#374858]' : 'text-white'">Page {{ currentPage }} of {{ totalPages }}</span>
          <button class="m-1 px-2 rounded-md shadow-md" 
          :class="darkMode ? 'bg-[#ffffff] text-[#374858]' : 'bg-[#374858] text-white'"
          @click.prevent="nextPage" :disabled="currentPage === totalPages"> > </button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useDarkModeStore } from '../store/DarkModeStore';

const darkModeStore = useDarkModeStore();
const darkMode = ref(darkModeStore.darkMode);
darkModeStore.$subscribe(() => {
    darkMode.value = darkModeStore.darkMode
})

defineProps({
    currentPage: Number,
    prevPage: Function,
    nextPage: Function,
    totalPages: Number,
})
</script>

<style scoped>

</style>