import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import {useState} from 'react'
import FoodBox from './components/FoodBox';
import { Row} from'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
const [foodList, setFoodList] = useState(foods)
const [foodData, setFoodData] = useState(foods)

const addNewFood = food => {
  const foodCopy=[...foodList, food]
  setFoodList(foodCopy)
}

const searchFoods = str => {
  let searchResult = foodData.filter(food => { 
    return food.name.toLowerCase().startsWith(str.toLowerCase())
    
  })

  setFoodList(searchResult)
}

  const deleteFood =name => {
    const toDeleteFood = foodList.filter(food => {
      return food.name !== name
    })

  setFoodList(toDeleteFood)
  
}

return (
    <div className="App">
      <Row>
        <AddFoodForm addNewFood={addNewFood}/>
        <Search searchFood={searchFoods}/>
      </Row>
      <Row> 
      {
        foodList.map((food,index) => {
          return(
            <FoodBox food={food} deleteFood={ deleteFood} />
            )  
            })
           }
          </Row>
    </div>
    
  );
}

export default App;
