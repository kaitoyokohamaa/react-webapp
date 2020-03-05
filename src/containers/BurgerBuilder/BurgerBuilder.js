import React,{ Component } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENT_PRICES ={
    salad:20,
    bacon:20,
    cheese:40,
    meat:120
}
class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:200
    }

    addIngredientHandler = (type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount +1; 
        console.log(oldCount)
        console.log(updatedCount)
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice =this.state.totalPrice;
        const newPrice=oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
    }

    removeIngredientHandler =(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount=oldCount -1; 
        console.log(oldCount)
        console.log(updatedCount)
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDedaction = INGREDIENT_PRICES[type];
        const oldPrice =this.state.totalPrice;
        const newPrice=oldPrice - priceDedaction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0
            console.log(disabledInfo[key])
        }
        //{salad:ture,meat:false, ...}
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemove={this.removeIngredientHandler}
                disabled={disabledInfo}
                />
            </Aux>
        );
    }
}
export default BurgerBuilder;