<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="relative shadow-lg rounded-md" >
        <input
          placeholder="Search for a country..."
          type="text"
          class="w-full px-4 py-2 rounded-lg pl-10"
          :class="
            darkMode ? 'bg-[#ffffff] text-[#374858]' : 'bg-[#374858] text-white'
          "
          @input="$emit('update:search', $event.target.value)"
          :value="searchQuery"
        />
        <i
          class="fa fa-search absolute top-3 left-3"
          :class="darkMode ? 'text-[#374858]' : 'text-white'"
          aria-hidden="true"
        ></i>
      </div>
      <div>
        <select
          class="w-full px-4 py-2 rounded-lg cursor-pointer shadow-md"
          :class="darkMode ? 'bg-[#ffffff] text-[#374858]' : 'bg-[#374858] text-white'"
          :value="selectedRegion"
          @change="$emit('update:selectedRegion', $event.target.value)"
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useDarkModeStore } from "../store/DarkModeStore";
import { ref } from "vue";

const darkModeStore = useDarkModeStore();

const darkMode = ref(darkModeStore.darkMode);
darkModeStore.$subscribe(() => {
  darkMode.value = darkModeStore.darkMode;
});

defineProps({
  searchQuery: String,
  selectedRegion: String,
});
</script>

<style scoped></style>
