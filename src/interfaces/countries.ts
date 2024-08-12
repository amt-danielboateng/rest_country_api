export interface Countries {
    name: {
        common: string,
        official: string,
        nativeName: object
    },
    tld: Array<string>,
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: object,
    idd: {
        root: string,
        suffixes: Array<string>
    },
    capital: Array<string>,
    altSpellings: Array<string>,
    region: string,
    subregion: string,
    languages: object,
    translations: object,
    latlng: Array<number>,
    landlocked: boolean,
    borders: Array<string>,
    area: number,
    demonyms: object,
    flag: string,
    maps: object,
    population: number,
    gini: object,
    fifa: string,
    car: object,
    timezones: Array<string>,
    continents: Array<string>,
    flags: object,
    coatOfArms: object,
    startOfWeek: string,
    capitalInfo: object,
    postalCode: object
}