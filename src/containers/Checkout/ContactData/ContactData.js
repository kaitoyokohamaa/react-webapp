import React ,{Component} from 'react';

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
class ContactData extends Component{
    state ={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
    }

    orderHandler =(event) =>{
        event.preventDefault();
                this.setState({loading:true})
        const order = {
            ingredients :this.state.ingredients,
            price :this.state.totlaPrice,
            customer:{
                name:'kaito yokohama',
                address:{
                    street:'Teststreet 1',
                    zipCode:'41351',
                    country:'Japan'
                },
                email:'test@test.com'
            },
            deliveryMethod:'fastest'
        }
        axios.post('/orders.json',order)
        .then(response =>{
            this.setState({loading:false ,purchasing:false})
        })
        .catch(error =>{
            this.setState({loading:false,purchasing:false})
        }) 
    }

    render (){
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>注文</Button>
                </form>
            </div>
        )
    }
}
export default ContactData;