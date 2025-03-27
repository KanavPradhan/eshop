import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">All Categories</h2>
      <div class="row">
        {categories.map((category, index) => (
          <Category data={category} key={index} />
        ))}
      </div>
    </div>
  );
};
export default CategoryList;