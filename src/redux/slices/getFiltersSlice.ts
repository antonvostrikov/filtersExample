import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BrandsFilter, CountriesFilter, Filters } from "../../types/typeWatch";

import axios from "axios";

const initialState: Filters = {
  brands: [],
  countries: []
}

export const getBrands = createAsyncThunk<BrandsFilter[]>(
  'brands/getBrands',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/brands')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getCountries = createAsyncThunk<CountriesFilter[]>(
  'countries/getCountries',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/countries')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const getFiltersSlice = createSlice({
  initialState,
  name: 'filters',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload
    })
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload
    })
  }
})

export default getFiltersSlice.reducer