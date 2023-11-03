export interface Watch {
  id: number
  sex: string
  brand: string
  name: string
  price: number
  country: string
}

export interface BrandsFilter {
  id: number
  filter: string
}

export interface CountriesFilter {
  id: number
  filter: string
}

export interface BrandsFilter {
  id: number
  filter: string
}

export interface Watches {
  watches: Watch[]
}

export interface Filters {
  brands: BrandsFilter[]
  countries: CountriesFilter[]
}