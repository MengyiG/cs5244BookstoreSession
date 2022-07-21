<template>
  <div v-if="$store.state.cart.numberOfItems > 0" class="cart-view">
    <div class="cart-page-container">
      <div class="heading"><h1>Your Shopping Cart</h1></div>
      <div>
        <cart-table></cart-table>
      </div>
      <!--    right  order summary section-->
      <div class="order-summary-container">
        <div class="order-summary">
          <!--   order summary-->
          <div class="order-summary-title">Order Summary</div>
          <div class="order-summary-text">
            <template v-if="$store.state.cart.numberOfItems > 1">
              Your cart has {{ $store.state.cart.numberOfItems }} items
            </template>
            <template v-else>
              Your cart has {{ $store.state.cart.numberOfItems }} item
            </template>
          </div>
          <!--        summary tables with figures-->
          <div class="order-summary-line__container">
            <div class="order-summary-line__title">Subtotal</div>
            <div class="order-summary-line__price">
              {{ $store.state.cart.subtotal | asDollarsAndCents }}
            </div>
          </div>
          <div class="order-summary-line__container">
            <div class="order-summary-line__title">Shipping</div>
            <div class="order-summary-line__price">TBD</div>
          </div>
          <div class="order-summary-line__container">
            <div class="order-summary-line__title">Tax (13%)</div>
            <div class="order-summary-line__price">
              {{ ($store.state.cart.subtotal * 0.13) | asDollarsAndCents }}
            </div>
          </div>
          <div class="subtotal__general">
            <div class="subtotal__label">Total</div>
            <div class="subtotal__value">
              {{ ($store.state.cart.subtotal * 1.13) | asDollarsAndCents }}
            </div>
          </div>
        </div>

        <!--two buttons-->
        <div class="buttons">
          <router-link to="../checkout">
            <button class="hero-button checkout">
              <span>Proceed to Checkout </span>
            </button>
          </router-link>
          <div class="button-divider">&nbsp;</div>
          <router-link :to="'../category/' + $store.state.selectedCategoryName">
            <button class="secondary-button continue">Continue Browsing</button>
          </router-link>
        </div>

        <!--        shipping info-->
        <div class="shipping-info">
          <div class="cart-page-header__shipping-container">
            <div class="cart-page-header__shipping-details">
              <fieldset class="cart-shipping-toggle">
                <legend>
                  <h3 class="shipping-toggle__title">
                    How would you like to get your order?
                  </h3>
                </legend>
                <div>
                  <input
                    class="shipping-option"
                    type="checkbox"
                    id="ship"
                    name="interest"
                    value="coding"
                    checked
                  />
                  <label for="coding">&nbsp;Ship to an address</label>
                </div>
                <div>
                  <input
                    class="shipping-option"
                    type="checkbox"
                    id="pickup"
                    name="interest"
                    value="music"
                  />
                  <label for="music">&nbsp;Pick up in store</label>
                </div>
              </fieldset>

              <div class="cart-item-shipping__title">
                <i class="fa-solid fa-truck-arrow-right"></i>
                &nbsp;
                <template v-if="$store.state.cart.numberOfItems > 1">
                  Ship {{ $store.state.cart.numberOfItems }} items
                </template>
                <template v-else>
                  Ship {{ $store.state.cart.numberOfItems }} item
                </template>
                to an address
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="cart-view">
    <h2>
      There is nothing in the cart now.<br />
      Let's start some reading.
      <i class="fa-brands fa-readme"></i>
    </h2>
    <img
      class="image-cart"
      src="../assets/images/site/readcart.jpeg"
      alt="read"
    />
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
.cart-page-container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 1em;
  padding: 0.5rem 4rem 2rem 3rem;
  background-color: white;
  min-width: 800px;
}

.heading {
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 2rem;
}

.cart-view > h1 {
  font-weight: 500;
  letter-spacing: 0.027em;
  line-height: 1.33em;
  background-color: white;
}

.cart-view > h2 {
  font-weight: 500;
  letter-spacing: 0.027em;
  line-height: 2em;
  padding: 1rem 5rem;
  border: 1px solid var(--border-color);
  border-left: none;
  border-right: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.order-summary-container {
  display: grid;
  grid-template-rows: 2fr 1fr 3fr;
  grid-gap: 2em;
  font-family: Helvetica, Arial, Verdana, sans-serif;
  line-height: 20px;
  color: #666;
  background-color: var(--table-background);
  padding: 25px;
  margin-left: 3rem;
  max-width: 550px;
}

.order-summary-line__container {
  -webkit-text-size-adjust: none;
  font-feature-settings: "liga" 0, "cilg" 0;
  margin: 0;
  padding: 0 0 15px 0;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #000;
  font-family: "Gibson Regular", "Helvetica, Arial, Verdana", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
}

.order-summary-title {
  font: 13px/20px Helvetica, Arial, Verdana, sans-serif;
  -webkit-text-size-adjust: none;
  font-feature-settings: "liga" 0, "cilg" 0;
  color: #000;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 40px;
  margin-bottom: 20px;
}

.order-summary-text {
  margin-bottom: 1.5rem;
}

.subtotal__general {
  -webkit-text-size-adjust: none;
  font-feature-settings: "liga" 0, "cilg" 0;
  padding: 20px 0 0 0;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 20px;
  color: #000;
  display: flex;
  font-weight: 600;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: baseline;
  align-items: baseline;
  border-top: 1px solid #d3cfb8;
}

.hero-button {
  background-color: var(--primary-color);
  color: black;
  border: 2px solid black;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 0.3rem 5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s;
  white-space: nowrap;
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

.checkout {
  height: 3rem;
  width: 100%;
}

.button-divider {
  height: 1rem;
}

.continue {
  color: var(--default-text-color);
  white-space: nowrap;
  padding: 0 3rem;
  height: 2.8rem;
  width: 100%;
}

.continue:hover {
  background: var(--primary-background-color);
}

.cart-item-shipping__title {
  margin-top: 1.5rem;
  padding: 0 1rem;
}

.shipping-option {
  margin: 1rem 1rem;
  padding: 0 1rem;
}

.image-cart {
  height: 80vh;
  padding: 1rem 5rem;
  margin-top: 1rem;
  opacity: 95%;
}

@media (max-width: 1210px) {
  .cart-page-container {
    display: flex;
    flex-direction: column;
    min-width: 800px;
  }
}
</style>
