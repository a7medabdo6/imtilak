import React from 'react'
// Common Component
import DarkBtn from '../common/DarkBtn';
// Local Components
import TypeFilterItem from "./TypeFilterItem";
import LocationFilterItem from "./LocationFilterItem";
import PriceSpaceFilterItem from "./PriceSpaceFilterItem";

function FiltersList() {
 return (
  <div>
   <TypeFilterItem />
   <LocationFilterItem />
   <PriceSpaceFilterItem />
   <DarkBtn text={'Search'} />
  </div>
 )
}

export default FiltersList