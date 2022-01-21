import React from 'react';

const Navbar = (props) => {
    return ( <
        div style = { styles.nav } >
        <
        div style = { styles.cartIconContainer } >
        <
        img style = { styles.cartIcon }
        src = "https://cdn-icons.flaticon.com/png/128/2838/premium/2838838.png?token=exp=1642741522~hmac=ccdaedfca4de9b54b021ee192402bd1b"
        alt = "cart-icon" / >
        <
        span style = { styles.cartCount } > { props.count } < /span>  <
        /div>  <
        /div>
    );
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};


export default Navbar;