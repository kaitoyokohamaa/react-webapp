import React,{ Component } from "react";
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
const INGREDIENT_PRICES ={
    salad:20,
    bacon:20,
    cheese:40,
    meat:70
}
class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state = {
        ingredients: null,
        totalPrice:50,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
    }
    componentDidMount(){
        console.log(this.props)
        axios.get('https://react-web-app-135d6.firebaseio.com/orders/ingredients.json')
            .then(response =>{
                this.setState({ingredients:response.data})
            })
            .catch(error =>{
                this.setState({error:true})
            })
    }
    updatePurchaseState(ingredients){
        const sum =Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((sum,el) =>{
            return sum + el;
        },0);
        this.setState({purchasable:sum >0})
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
        this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler=()=>{
       this.setState({purchasing:true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
     }

     purchaseContinueHandler= () =>{
        //  this.setState({loading:true})
        // const order = {
        //     ingredients :this.state.ingredients,
        //     price :this.state.totlaPrice,
        //     customer:{
        //         name:'kaito yokohama',
        //         address:{
        //             street:'Teststreet 1',
        //             zipCode:'41351',
        //             country:'Japan'
        //         },
        //         email:'test@test.com'
        //     },
        //     deliveryMethod:'fastest'
        // }
        // axios.post('/orders.json',order)
        // .then(response =>{
        //     this.setState({loading:false ,purchasing:false})
        // })
        // .catch(error =>{
        //     this.setState({loading:false,purchasing:false})
        // }) 
        //ここでクエリーパラメーターをいじくってるということが判明した。
        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' +encodeURIComponent(this.state.ingredients[i]))
        }
        
        const queryString=queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',　　　　　　　　　　　　
            search:'?' +queryString
        });
     }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0
            console.log(disabledInfo[key])
        }
        let orderSummary =null
    let burger =this.state.error?<p>Ingredients can't be loaded!</p>:<Spinner />
        if (this.state.ingredients){
            burger =(
                <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemove={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                orderd={this.purchaseHandler}
                price={this.state.totalPrice} 
                />
                 </Aux>
            );
             orderSummary = <OrderSummary 
                ingredients={this.state.ingredients} 
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}/>
        }
        if(this.state.loading){
            orderSummary= <Spinner />
        }

        //{salad:ture,meat:false, ...}
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}
export default withErrorHandler(BurgerBuilder,axios);