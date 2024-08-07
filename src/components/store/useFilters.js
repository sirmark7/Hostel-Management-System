
import {HostelsContext,FilterContext} from "../store/AppContext";
import { useContext, useState} from "react";



const useFilters = () => {
  const {hostelData}=useContext(HostelsContext)
const {setFilteredData}=useContext(FilterContext)
const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  const addCategoryFilter = (value, state) => {
    let updatedCategories;

    if (state) {
      // Add the category to the list if it's not already present
      updatedCategories = [...selectedCategories, value];
    } else {
      // Remove the category from the list
      updatedCategories = selectedCategories.filter(category => category !== value);
    }

    setSelectedCategories(updatedCategories);
    filterData(updatedCategories, selectedPriceRanges, searchQuery);
  };

  const addPriceFilter = (value, state) => {
    const [startPrice, endPrice] = value.split(':').map(Number);
    const newPriceRange = { startPrice, endPrice };

    let updatedPriceRanges;

    if (state) {
      // Add the price range to the list if it's not already present
      updatedPriceRanges = [...selectedPriceRanges, newPriceRange];
    } else {
      // Remove the price range from the list
      updatedPriceRanges = selectedPriceRanges.filter(
        range => range.startPrice !== startPrice || range.endPrice !== endPrice
      );
    }

    setSelectedPriceRanges(updatedPriceRanges);
    filterData(selectedCategories, updatedPriceRanges, searchQuery);
  };

  const addSearchQuery = (query) => {
    setSearchQuery(query);
    filterData(selectedCategories, selectedPriceRanges, query);
  };

  const filterData = (categories, priceRanges, query) => {
    let result = hostelData;

    if (categories.length > 0) {
      result = result.filter(room => categories.includes(room.category));
    }

    if (priceRanges.length > 0) {
      result = result.filter(room => {
        return priceRanges.some(range => room.price >= range.startPrice && room.price <= range.endPrice);
      });
    }

    if (query) {
      result = result.filter(room => room.name.toLowerCase().includes(query.toLowerCase()));
    }

    setFilteredData(result);
  };

 


return{
addCategoryFilter,
addPriceFilter,
addSearchQuery,
}
    }

export default useFilters;