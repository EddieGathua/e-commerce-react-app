import { useState } from "react";
import { useProduct } from "../../Context/ProductContext";
import "./search.css";

const SearchBar = () => {
  const { productList } = useProduct();
  const [searchInput, setSearchInput] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const searchProducts = () => {
    if (searchInput.length > 0) {
      productList.filter((product) => {
        product.includes(searchInput);
        return product;
      });
    }
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search Products"
      onChange={handleChange}
      value={searchInput}
    />
  );
};

export default SearchBar;
