import React, { useState } from 'react';
import meatImage from '../../assets/burger-icons/meet.png';
import cheeseImage from '../../assets/burger-icons/Cheespng.png';
import beconImage from '../../assets/burger-icons/Becon.png';
import saladImage from '../../assets/burger-icons/Salad.png';
import './App.css'

const App = ()=> {

  let [counter, setCounter] = useState(1);

  const INGREDIENTS: {name: string, price: number, image: string}[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 60, image: saladImage},
    {name: 'Becon', price: 10, image: beconImage},
  ];

  interface Props{
    num?: number;
    name?: string;
    ingredient?: string;
  }
  const Quantity:React.FC<Props> = ({num})=>{
    return(
      <div>
        x{num}
      </div>
    )
  } 

  const Ingredients:React.FC<Props>= ({name})=>{
    return(
      <div className={name}></div>
    )
  }

  const [GreatIngredient, SetGreatIngredient] = useState({meat:[1],cheese: [1],bacon: [1], salad: [1]})
  let meatCopy = GreatIngredient;

  const meatButton = ()=>{
    meatCopy.meat.push(1);
    ingredientButton();
  }

  const baconButton = ()=>{
    meatCopy.bacon.push(1);
    ingredientButton();
  }

  const cheeseButton = ()=>{
    meatCopy.cheese.push(1);
    ingredientButton();
  }

  const saladButton = ()=>{
    meatCopy.salad.push(1);
    ingredientButton();
  }
 
  const ingredientButton = ()=>{
    const counterCopy = counter + 1; 
    setCounter(counterCopy);
    SetGreatIngredient(meatCopy)
  }
  
  const meatDelete = ()=>{
    deleteButton(GreatIngredient.meat)
  }
  const saladDelete = ()=>{
      deleteButton(GreatIngredient.salad)
  }
  const cheeseDelete = ()=>{
    deleteButton(GreatIngredient.cheese)
  }
  const baconDelete = ()=>{
    deleteButton(GreatIngredient.bacon)
  }
  const deleteButton = (ingredient: number[])=>{
    const counterCopy = counter + 1; 
    setCounter(counterCopy);    
    if (ingredient.length > 0) {      
      meatCopy = GreatIngredient;
      ingredient.splice(ingredient.length-1, 1);
      SetGreatIngredient(meatCopy)
      
    }else{
      alert('This ingredient is missing')
    }
  }



  return (
    <div className='container'>
    <div className="ingredients">
      <div className="ingredient">
        <button onClick={meatButton} className="ingredient-button"><img src={INGREDIENTS[0].image} className='button-icon' alt="#" />Meat</button>
        <div className="quantity">
          <Quantity num={GreatIngredient.meat.length}></Quantity>
        </div>
        <button onClick={meatDelete} className="delete-button">delete</button>
      </div>
      <div className="ingredient">
        <button onClick={saladButton} className="ingredient-button"><img src={INGREDIENTS[2].image} className='button-icon' alt="#" />Salad</button>
        <div className="quantity">
          <Quantity num={GreatIngredient.salad.length}></Quantity>
        </div>
        <button onClick={saladDelete} className="delete-button">delete</button>
      </div>
      <div className="ingredient">
        <button onClick={cheeseButton} className="ingredient-button"><img src={INGREDIENTS[1].image} className='button-icon' alt="#" />Cheese</button>
        <div className="quantity">
          <Quantity num={GreatIngredient.cheese.length}></Quantity>
        </div>
        <button onClick={cheeseDelete} className="delete-button">delete</button>
      </div>
      <div className="ingredient">
        <button onClick={baconButton} className="ingredient-button"><img src={INGREDIENTS[3].image} className='button-icon' alt="#" />Bacon</button>
        <div className="quantity">
          <Quantity num={GreatIngredient.bacon.length}></Quantity>
        </div>
        <button onClick={baconDelete} className="delete-button">delete</button>
      </div>
    </div>
    <div className="burger-main">
    <div className="price">30com</div>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {GreatIngredient.meat.map(()=>{
          return(<Ingredients name='Meat'></Ingredients>)
        })}
        {GreatIngredient.cheese.map(()=>{
          return(<Ingredients name='Cheese'></Ingredients>)
        })}
        {GreatIngredient.bacon.map(()=>{
          return(<Ingredients name='Bacon'></Ingredients>)
        })}
        {GreatIngredient.salad.map(()=>{
          return(<Ingredients name='Salad'></Ingredients>)
        })}
        <div className="BreadBottom"></div>
      </div>
    </div>
    </div>
  )
}

export default App