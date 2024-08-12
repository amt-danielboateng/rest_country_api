<template>
  <div
    class="flex flex-col justify-between w-full"
    :class="
      darkMode ? 'bg-[#FAFAFA] text-[#202c37]' : 'bg-[#202c37] text-[#FAFAFA]'
    "
  >
    <router-link
      class="mb-5 p-2 text-center w-[100px] rounded-md shadow-lg"
      :class="
        darkMode ? 'bg-[#ffffff] text-[#374855]' : 'bg-[#374855] text-[#FAFAFA]'
      "
      :to="'/'"
    >
      <i className="fa fa-arrow-left" aria-hidden="true"> </i>
      Back
    </router-link>
    <div class="flex items-center w-full justify-between">
      <div class="min-w-[500px]">
        <img class="rounded-md" :src="country?.flags.svg" :alt="country?.alt" />
      </div>
      <div class="ml-5">
        <p class="mb-5 text-xl">{{ country?.name.common }}</p>
        <div class="flex justify-between w-[600px]" :class="
              darkMode
                ? 'text-[#374858]'
                : 'text-[#FAFAFA]'
            ">
          <div class="leading-1">
            <p>
              Native Name:
              <span class="text-[#858585]">{{ country?.name.official }}</span>
            </p>
            <p>
              Population:
              <span class="text-[#858585]">{{ country?.population }}</span>
            </p>
            <p>
              Region: <span class="text-[#858585]">{{ country?.region }}</span>
            </p>
            <p>
              Sub Region:
              <span class="text-[#858585]">{{ country?.subregion }}</span>
            </p>
            <p v-for="item of country?.capital" :key="item">
              Capital: <span class="text-[#858585]">{{ item }}</span>
            </p>
          </div>
          <div>
            <p v-for="domain in country?.tld" :key="domain">
              Top Level Domain: <span class="text-[#858585]">{{ domain }}</span>
            </p>
            <p v-for="currency in country?.currencies" :key="currency">
              Currencies:
              <span class="text-[#858585]">{{ currency.name }}</span>
            </p>
            <p>
              Languages:
              <span
                v-for="language of country?.languages"
                :key="language"
                class="p-1 m-1 text-[#858585]"
                >{{ language }},</span
              >
            </p>
          </div>
        </div>
        <p class="mt-5">
          Border Countries:
          <span
            v-for="border of country?.borders"
            :key="border"
            class="px-3 py-1 m-1 rounded-md cursor-pointer shadow-md leading-8"
            :class="
      darkMode ? 'text-[#202c37]' : 'bg-[#374858]'
    "
          >
            <router-link :to="`/country/${border}`">
              {{ borderCountryName(border) }}
            </router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from "../store/CountriesStore";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useDarkModeStore } from "../store/DarkModeStore";
import { ref } from "vue";

const darkModeStore = useDarkModeStore();
const darkMode = ref(darkModeStore.darkMode);
darkModeStore.$subscribe(() => {
  darkMode.value = darkModeStore.darkMode;
});

const countriesStore = useCountriesStore();
const route = useRoute();

onMounted(async () => {
  await countriesStore.getCountries();
});

const id = computed(() => route.params.id);

const country = computed(() =>
  countriesStore.countries.find((country) => country.cca3 === id.value)
);

function borderCountryName(cca3) {
  return countriesStore.countries.find((country) => country.cca3 === cca3)?.name
    .common;
}
</script>

<style scoped></style>
