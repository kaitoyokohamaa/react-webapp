import React from 'react';
import classes from './Burger.module.css';
import BugerIngredient from './Burgeringredient/Burgeringredient'
import BurgerIngredient from './Burgeringredient/Burgeringredient';
const burger =(props)=>{
    const transformedIngredients = Object.keys(props.ingredients)
    .map(isKey =>{
        return [...Array(props.ingredients[isKey])].map((_,i)=>{
           return <BurgerIngredient key={isKey +i} type={isKey} />
        })
    });
    return (
     <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
      </div>  
    );
}

export default burger;