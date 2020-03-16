import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import  classes from './CheckoutSummary.module.css'
const checkoutSummary =(props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1>we hope it tastes well!</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
            btnType="Danger"
            clicked={props.checkoutCancelled}>止める</Button>
            <Button 
            btnType="Success"
            clicked={props.checkoutContinued}>続けようぜ！</Button>
        </div>
    )
}
export default checkoutSummary;