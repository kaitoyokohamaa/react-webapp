import React from 'react';
import classes from './Burger.module.css';
import BugerIngredient from './Burgeringredient/Burgeringredient'
import BurgerIngredient from './Burgeringredient/Burgeringredient';
const burger =(props)=>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(isKey =>{
        return [...Array(props.ingredients[isKey])].map((_,i)=>{
           return <BurgerIngredient key={isKey +i} type={isKey} />
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length ===0){
        transformedIngredients=<p>材料を追加してください！なんで追加しないんですか？バカですか？コロナですか？</p>
    }
    console.log(transformedIngredients)
    return (
     <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
      </div>  
    );
}

export default burger;