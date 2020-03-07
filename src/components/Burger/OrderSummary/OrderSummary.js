import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrderSummary =(props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
        return <li><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
    })

 return (
     <Aux>
         <h3>あなたのオーダー</h3>
         <p>あなたの材料は以下の通りよ❤️</p>
         <ul>
            {ingredientSummary}
         </ul>
         <p><strong>会計の値段:{props.price.toFixed(2)}</strong></p>
         <p>会計しますか？</p>
         <Button btnType="Danger" clicked={props.purchaseCancelled}>キャンセル</Button>
         <Button btnType="Success" clicked={props.purchaseContinued}>続ける</Button>
     </Aux>
 )
}
export default OrderSummary;