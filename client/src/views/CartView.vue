<template>
  <div class="cart-view">
    <h1>Your Shopping Cart</h1>
    <div class="cart-page-container">
      <button class="hero-button">
        <router-link to="../checkout">
          <span>Proceed to Checkout</span>
        </router-link>
      </button>
      <cart-table></cart-table>
      <button class="secondary-button">
        <span> Continue Shopping</span>
      </button>
      <router-link to="/">
        <button class="remove-button">&nbsp; Remove All Books</button>
      </router-link>

      <div class="cart-page__order-summary-details-container">
        <div class="order-summary-title__text">Order Summary</div>
        <div
          class="order-summary-line__container"
          data-a8n="order-summary__subtotal"
        >
          <div class="order-summary-line__title">Subtotal</div>
          <div class="order-summary-line__price">$224.98</div>
        </div>
        <div
          class="order-summary-line__container"
          data-a8n="order-summary__shipping-estimate"
        >
          <div class="order-summary-line__title">Shipping</div>
          <div class="order-summary-line__price">TBD</div>
        </div>
        <div
          class="order-summary-line__container"
          data-a8n="order-summary__tax-estimate"
        >
          <div class="order-summary-line__title">Tax</div>
          <div class="order-summary-line__price">$32.89</div>
        </div>
        <div class="subtotal__general" data-a8n="order-summary__total-value">
          <div class="subtotal__label" data-a8n="subtotal__label">Total</div>
          <div class="subtotal__value" data-a8n="subtotal__value">$257.87</div>
        </div>
        <div class="order-summary__divider"></div>
      </div>
      <button class="hero-button">
        <router-link to="../checkout">
          <span>Proceed to Checkout</span>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import CartTable from "@/components/CartTable";

export default {
  name: "CartView",
  components: {
    CartTable,
  },
};
</script>

<style scoped>
.cart-view > h1 {
  font-weight: 500;
  letter-spacing: 0.027em;
  line-height: 1.33em;
  padding: 1rem 5rem;
  border: 1px solid #dedede;
  border-left: none;
  border-right: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.cart-page-container {
  background-color: white;
}
.hero-button {
  background-color: var(--primary-color);
  color: black;
  border: 2px solid black;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.3rem 4rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s;
}

.hero-button:hover {
  background-color: var(--secondary-background-color);
}

.hero-button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  color: var(--default-text-color);
}

.hero-button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -10px;
  transition: 0.5s;
}

.hero-button:hover span {
  padding-right: 25px;
}

.hero-button:hover span:after {
  opacity: 1;
  right: 0;
}

.remove-button {
  background-color: var(--primary-background-color);
  border: none;
  color: var(--default-text-color);
  padding: 0;
}

.remove-button:hover,
.remove-button:active {
  color: var(--primary-color);
}

.cart-page__order-summary-details-container {
  -webkit-text-size-adjust: none;
  font-feature-settings: "liga" 0, "cilg" 0;
  font-family: Helvetica, Arial, Verdana, sans-serif;
  line-height: 20px;
  color: #666;
  background-color: rgba(245, 242, 233, 0.701961);
  padding: 20px;
  width: 350pt;
}

.order-summary-title__text {
  font: 13px/20px Helvetica, Arial, Verdana, sans-serif;
  -webkit-text-size-adjust: none;
  font-feature-settings: "liga" 0, "cilg" 0;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: "Futura Medium",
    "Futura STD, Futura PT, Futura, Helvetica, Arial, Verdana", sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 32px;
  margin-bottom: 15px;
}

.subtotal__general {
  font: 13px/20px Helvetica, Arial, Verdana, sans-serif;
  -webkit-text-size-adjust: none;
  font-feature-settings: "liga" 0, "cilg" 0;
  margin: 0;
  padding: 0;
  font-family: "Gibson SemiBold", "Helvetica, Arial, Verdana", sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 20px;
  color: #000;
  margin-bottom: 10px;
  display: flex;
  font-weight: 600;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: baseline;
  align-items: baseline;
  border-top: 1px solid #d3cfb8;
  padding-top: 13px;
}

.order-summary-line__container {
  font: 13px/20px Helvetica, Arial, Verdana, sans-serif;
  -webkit-text-size-adjust: none;
  font-feature-settings: "liga" 0, "cilg" 0;
  margin: 0;
  padding: 0;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #000;
  font-family: "Gibson Regular", "Helvetica, Arial, Verdana", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.5px;
  padding-bottom: 15px;
}
</style>
