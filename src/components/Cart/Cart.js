import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your cart
      <Link to="/" className={classes.link}>
        start adding some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdate={handleUpdateCartQty}
              handleRemove={handleRemoveCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetais}>
        <Typography variant="h6">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <Button
          className={classes.emptyButton}
          onClick={handleEmptyCart}
          size="large"
          type="button"
          variant="contained"
          color="secondary"
        >
          Empty Cart
        </Button>
        <Button
          className={classes.checkoutButton}
          component={Link}
          to="/checkout"
          size="large"
          type="button"
          variant="contained"
          color="primary"
        >
          Checkout
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading ...";

  return (
    <Container fullWidth={true}>
      <div className={classes.toolbar} />
      <Typography variant="h5" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.subtotal.formatted_with_symbol === "€0.00" ? (
        <EmptyCart />
      ) : (
        <FilledCart />
      )}
    </Container>
  );
};

export default Cart;
