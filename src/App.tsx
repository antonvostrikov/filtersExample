import React from 'react'
import './App.css';

import Dropdown from './components/Dropdown/Dropdown';
import DropdownButton from './components/Dropdown/DropdownButton';
import DropdownContent from './components/Dropdown/DropdownContent';
import DropdownItem from './components/Dropdown/DropdownItem';
import DropdownItemPrice from './components/Dropdown/DropdownItemPrice';
import DropdownList from './components/Dropdown/DropdownList';
import WatchList from './components/Watches/WatchList';
import { getWatches } from './redux/slices/getWatchesSlice';
import { getBrands, getCountries } from './redux/slices/getFiltersSlice';
import { useAppDispatch, useAppSelector } from './hooks/reduxHook';
import { CountriesFilter, BrandsFilter } from './types/typeWatch';

function App() {
  const [countriesFilters, setCountriesFilters] = React.useState<CountriesFilter[]>([])
  const [brandsFilters, setBrandsFilters] = React.useState<BrandsFilter[]>([])
  const [minFilterPrice, setMinFilterPrice] = React.useState(0)
  const [maxFilterPrice, setMaxFilterPrice] = React.useState(0)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getWatches({ countriesFilters, brandsFilters, minFilterPrice, maxFilterPrice}));
    dispatch(getBrands());
    dispatch(getCountries());
  }, [countriesFilters, brandsFilters, minFilterPrice, maxFilterPrice])

  const watches = useAppSelector(state => state.watches.watches)
  const filtersCountries = useAppSelector(state => state.filterCountries.countries)
  const filtersBrands = useAppSelector(state => state.filterCountries.brands)

  return (
    <div className="App">
      <div className="section-filters">
        <Dropdown>
          <DropdownButton>Страна</DropdownButton>
          <DropdownContent>
            <DropdownList>
              { filtersCountries.map(countryFilter => <DropdownItem filtersItems={countriesFilters} filtersItemsHandler={setCountriesFilters} filter={countryFilter.filter} filterID={countryFilter.id}></DropdownItem>) }
            </DropdownList>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <DropdownButton>Бренд</DropdownButton>
          <DropdownContent>
            <DropdownList>
              { filtersBrands.map(brandFilter => <DropdownItem filtersItems={brandsFilters} filtersItemsHandler={setBrandsFilters} filter={brandFilter.filter} filterID={brandFilter.id}></DropdownItem>) }
            </DropdownList>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <DropdownButton>Цена</DropdownButton>
          <DropdownContent>
            <DropdownItemPrice min={minFilterPrice} max={maxFilterPrice} changeMin={setMinFilterPrice} changeMax={setMaxFilterPrice}></DropdownItemPrice>
          </DropdownContent>
        </Dropdown>
      </div>
      <div className="section-watches">
        <WatchList watches={watches}/>
      </div>
    </div>
  );
}

export default App;
