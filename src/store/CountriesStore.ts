import { defineStore } from "pinia";
import axios from "axios";
import { allCountries } from "../services/endpoints";
import { Countries } from "../interfaces/countries";

export const useCountriesStore = defineStore("countries", {
  state: () => ({
    countries: [] as Countries[],
  }),
  actions: {
    async getCountries() {
      try {
        const response = await axios.get(allCountries);
        this.countries = response.data;
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
