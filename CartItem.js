import React from 'react'

class CartItem extends React.Component {

    render() {
        const { price, title, qty } = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity } = this.props;

        return ( <
            div className = "cart-item" >
            <
            div className = "left-block" >
            <
            img style = { styles.image }
            src = { product.img }
            />  <
            /div >  <
            div className = "right-block" >
            <
            div style = {
                { fontSize: 25 }
            } > { title } <
            /div>  <
            div style = {
                { color: '#ccc' }
            } > Rs: { price } <
            /div>  <
            div style = {
                { color: '#ccc' }
            } > Qty: { qty } <
            /div>  <
            div className = "cart-item-action" >
            <
            img alt = 'Increase'
            className = 'action-icons'
            src = 'https://cdn-icons-png.flaticon.com/512/992/992651.png'
            onClick = {
                () => onIncreaseQuantity(product)
            }
            />  <
            img alt = 'Decrease'
            className = 'action-icons'
            src = 'https://cdn-icons-png.flaticon.com/512/1828/1828906.png'
            onClick = {
                () => onDecreaseQuantity(product)
            }
            />  <
            img alt = 'Delete'
            className = 'action-icons'
            src = 'https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'
            onClick = {
                () => onDeleteQuantity(product.id)
            }
            />  <
            /div >  <
            /div>  <
            /div >
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#777'
    }
}

export default CartItem;