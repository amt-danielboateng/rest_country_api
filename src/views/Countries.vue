<template>
  <div>
    <SearchInput :searchQuery="query" @update:search="setQuery" 
    :selectedRegion="selectedRegion" @update:selectedRegion="setRegion"
    />
    <section>
      <main>
        <div
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-7"
        >
          <div v-for="country in paginatedCountries" :key="country.name.common">
            <CountryCard :country="country" />
          </div>
        </div>
        <paginate
          :currentPage="currentPage"
          :prevPage="prevPage"
          :nextPage="nextPage"
          :totalPages="totalPages"
        ></paginate>
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "../components/SearchInput.vue";
import CountryCard from "../components/CountryCard.vue";
import { onMounted, ref, computed, Ref } from "vue";
import { useCountriesStore } from "../store/CountriesStore";
import { Countries } from "../interfaces/countries";
import Paginate from "../components/Paginate.vue";

const countriesStore = useCountriesStore();

const currentPage: Ref<number> = ref(1);
const pageSize: number = 8;

const countries = ref<Countries[]>([]);
const query = ref("");
const selectedRegion = ref("");

const fetchCountries = async (): Promise<void> => {
  try {
    await countriesStore.getCountries();
    countries.value = countriesStore.countries;
  } catch (error) {
    console.log(error);
  }
};

const setQuery = (value: string) => {
  query.value = value;
  currentPage.value = 1;
};

const setRegion = (value: string) => {
  selectedRegion.value = value;
  currentPage.value = 1;
}

const filteredCountries: Ref<Countries[]> = computed(() => {
    let filtered: Countries[] = countries.value;
    if(query.value.trim() !== '') {
        filtered = filtered.filter((country) => {
            return country.name.common
      .toLowerCase()
      .includes(query.value.toLowerCase());
        })
    }

    if(selectedRegion.value !== '') {
        filtered = filtered.filter((country) => {
            return country.region.toLocaleLowerCase() === selectedRegion.value.toLocaleLowerCase();
        })
    }

    return filtered;
});

const paginatedCountries: Ref<Countries[]> = computed(() => {
  const startIndex: number = (currentPage.value - 1) * pageSize;
  return filteredCountries.value.slice(startIndex, startIndex + pageSize);
})

const totalPages: Ref<number> = computed(() => Math.ceil(filteredCountries.value.length/pageSize));

const nextPage = (): void => {
  if(currentPage.value < totalPages.value){
    currentPage.value++;
  }
};

const prevPage = (): void => {
  if(currentPage.value > 1){
    currentPage.value--;
  }
}

onMounted(() => {
  fetchCountries();
});
</script>

