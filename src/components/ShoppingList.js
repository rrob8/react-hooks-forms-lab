import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foodName, updateFoodName] = useState('')
  const [foodItems, updateFoodItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    updateFoodName('')
  }

  function onSearchChange (event) {
    updateFoodName(event.target.value);
    setSelectedCategory('All')
  }

  function onItemFormSubmit (newItem) {
    updateFoodItems([...foodItems, newItem])
  }



  let itemsToDisplay = foodItems.filter((item) => {
    if (selectedCategory === "All" && foodName=== '') {
     return true;
    } else if (selectedCategory !== 'All'){
       return item.category === selectedCategory
    } else {
        return item.name.startsWith(foodName)
    }
  
    
  });

  
  console.log(itemsToDisplay)
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter foodName={foodName} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
