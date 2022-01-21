// import logo from './logo.svg';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
                    price: 99,
                    title: "Watch",
                    qty: 1,
                    img: 'https://m.media-amazon.com/images/I/61FxsUbnavL._SL1500_.jpg',
                    id: 1
                },
                {
                    price: 999,
                    title: "Mobile Phone",
                    qty: 1,
                    img: 'https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg',
                    id: 2
                },
                {
                    price: 9990,
                    title: "Laptop",
                    qty: 1,
                    img: 'https://m.media-amazon.com/images/I/71uOkXZyteL._AC_SS450_.jpg',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products
        })

    }
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty -= 1;
        this.setState({
            products
        })

    }
    handleDeleteQuantity = (id) => {
        const { products } = this.state;
        const item = products.filter((item) => item.id !== id);
        // products[index].qty=0;
        this.setState({
            products: item
        })

    }
    getCartCount = () => {
        const { products } = this.state;

        let count = 0;

        products.forEach((product) => {
            count += product.qty;
        })

        return count;
    }
    getCartTotal = () => {
        const { products } = this.state;
        let total = 0;
        products.forEach((product) => {
            total += (product.qty * product.price);
        })
        return total;
    }

    render() {
        const { products } = this.state;
        return ( <
            div className = "App" >
            <
            Navbar count = { this.getCartCount() }
            />  <
            Cart products = { products }
            onIncreaseQuantity = { this.handleIncreaseQuantity }
            onDecreaseQuantity = { this.handleDecreaseQuantity }
            onDeleteProduct = { this.handleDeleteQuantity }
            />  <
            div style = {
                {
                    padding: 20,
                    backgroundColor: 'grey',
                    fontSize: 20
                }
            } > Total of our Cart = { this.getCartTotal() } < /div>  <
            /div >
        );
    }
}

export default App;