import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Watches, Watch, CountriesFilter, BrandsFilter } from '../../types/typeWatch'

const initialState: Watches = {
  watches: []
}

type Country = {
  countriesFilters: CountriesFilter[]
  brandsFilters: BrandsFilter[]
  minFilterPrice: number
  maxFilterPrice: number
}

export const getWatches = createAsyncThunk<Watch[], Country>(
  'watches/getWatchesSlice',
  async (params) => {
    const { countriesFilters, brandsFilters, minFilterPrice, maxFilterPrice } = params 

    const countries: string[] = []
    const brands: string[] = []

    countriesFilters.map(country => countries.push(country.filter))
    brandsFilters.map(brand => brands.push(brand.filter))
  
    const country = countries.length === 0 ? '' : `country=${countries.join('&country=')}` 
    const brand = brands.length === 0 ? '' : `&brand=${brands.join('&brand=')}`
    const minPrice = `&price_gte=${minFilterPrice}`
    const maxPrice = maxFilterPrice === 0 ? '' : `&price_lte=${maxFilterPrice}`
    
    try {
      const { data } = await axios.get(`http://localhost:3001/watches?${country}${brand}${minPrice}${maxPrice}`)

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const getWatchesSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWatches.fulfilled, (state, action) => {
      state.watches = action.payload
    })
  }
})

export default getWatchesSlice.reducer