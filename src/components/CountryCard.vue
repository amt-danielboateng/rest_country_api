<template>
  <router-link :to="`/country/${id}`"> 
    <div>
    <div class="bg-[#374858] rounded-lg text-white shadow-md">
      <article class="flex flex-col justify-between">
        <img
          :src="country?.flags.svg"
          alt=""
          class="md:h-64 w-full object-cover rounded-t-lg"
        />
        <div class="p-4" :class="darkMode ? 'bg-[#ffffff] text-[#374858]' : 'bg-[#374858] text-white'">
          <h3 class="font-bold mb-2 text-lg">
            {{ country?.name.common }}
          </h3>
          <ul class="flex flex-col items-start justify-start gap-2">
            <li>Region: {{ country?.region }}</li>
            <li>Population: {{ country?.population.toLocaleString() }}</li>
            <li>Capital: <span v-for="capital in country?.capital" :key="capital">{{ capital }}</span></li>
          </ul>
        </div>
      </article>
    </div>
  </div>
  </router-link>
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

const props = defineProps({
  country: Object,
});

const {country} = props

const id = country?.cca3

</script>

<style scoped></style>
