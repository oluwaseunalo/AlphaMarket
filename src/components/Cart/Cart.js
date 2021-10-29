import React from 'react'
import {Container, Grid, Typography, Button} from '@material-ui/core';


import useStyles from './styles'
import CartItem from './CartItem/CartItem';

const Cart = ({cart}) => {
const classes = useStyles();



    const EmptyCart = ()=> (
        <Typography variant='subtitle1'>You have no items in your cart, start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item= {item}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetais} >
                <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
            </div>
            
        </>
    )

if (!cart.line_items) return 'Loading ...'

    return (
        <Container>
             <div className={classes.toolbar}/>
             <Typography className={classes.tittle} variant='h3' gutterBottom> Your Shopping Cart</Typography>
             {cart.line_items.lenght === 0 ? <EmptyCart/> : <FilledCart/>}
            
        </Container>
       
    )
}

export default Cart
