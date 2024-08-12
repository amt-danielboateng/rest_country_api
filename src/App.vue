<template>
  <div class="min-h-screen bg-[#202c37]" :class="darkMode ? 'bg-[#ffffff]' : 'bg-[#202c37]'">
    <nav
      class="flex items-center justify-between px-7 py-2 bg-[#374858] text-white shadow-md"
      :class="darkMode ? 'bg-[#ffffff] text-[#374858]' : 'bg-[#374858] text-white'"
    >
      <div :class="darkMode ? 'text-[#374858]' : 'text-white'">Where in the world</div>
      <div class="cursor-pointer" 
      :class="darkMode ? 'text-[#374858]' : 'text-white'"
      @click.prevent="toggleDarkMode">
        <i class="fas fa-moon"></i>
        Dark Mode
      </div>
    </nav>
    <div class="mt-7 pl-7 pr-7">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useDarkModeStore } from "./store/DarkModeStore";

const darkModeStore = useDarkModeStore();
const darkMode = ref(darkModeStore.darkMode); 

const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
  darkMode.value = darkModeStore.darkMode;
};

</script>

<style scoped>

</style>
