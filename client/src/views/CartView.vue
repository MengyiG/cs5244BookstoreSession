<template>
  <div class="cart-view">
    <h1>Your Shopping Cart</h1>
    <div class="cart-page-container">
      <cart-table></cart-table>
      <!--      order summary-->
      <div class="cart-page__order-summary-details-container">
        <div class="order-summary">
          <div class="order-summary-title__text">Order Summary</div>

          <div class="item-count">
            <template v-if="$store.state.cart.numberOfItems > 1">
              Your cart has {{ $store.state.cart.numberOfItems }} items
            </template>
            <template v-else>
              Your cart has {{ $store.state.cart.numberOfItems }} item
            </template>
          </div>

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
          <div class="order-summary__divider"></div>
        </div>

        <!--two buttons-->
        <button class="hero-button checkout">
          <router-link to="../checkout">
            <span>Proceed to Checkout</span>
          </router-link>
        </button>

        <router-link class="go-back-link" to="../category/Classics">
          <button class="secondary-button continue">
            <span> Continue Shopping</span>
          </button>
        </router-link>

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
  padding: 2rem 5rem;
  background-color: white;
}

.cart-page-container {
  display: flex;
  padding: 0.5rem 4rem 2rem 2.5rem;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
}

.cart-page__order-summary-details-container {
  -webkit-text-size-adjust: none;
  display: flex;
  flex-direction: column;
  font-feature-settings: "liga" 0, "cilg" 0;
  font-family: Helvetica, Arial, Verdana, sans-serif;
  line-height: 20px;
  color: #666;
  background-color: var(--table-background);
  padding: 20px;
  width: 350pt;
  height: max-content;
  margin-left: 5rem;
}

.order-summary-title__text {
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

.item-count {
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
  margin-bottom: 10px;
  display: flex;
  font-weight: 600;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: baseline;
  align-items: baseline;
  border-top: 1px solid #d3cfb8;
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

.hero-button {
  background-color: var(--primary-color);
  color: black;
  border: 2px solid black;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 0.3rem 4rem;
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
  margin-top: 2.5rem;
  height: 3rem;
}

.continue {
  color: var(--default-text-color);
  margin: 0;
  padding: 0.5rem 6rem;
  white-space: nowrap;
}

.continue:hover {
  background: var(--primary-background-color);
}

.go-back-link {
  align-self: center;
  margin-top: 1rem;
}

.shipping-info {
  margin-top: 3rem;
}

.cart-item-shipping__title {
  margin-top: 1.5rem;
  padding: 0 1rem;
}

.shipping-option {
  margin: 1rem 1rem;
  padding: 0 1rem;
}

@media (max-width: 1210px) {
  .cart-page-container {
    display: flex;
    flex-direction: column;
  }
}

/*  border: 1px solid #dedede;
  border-left: none;
  border-right: none;*/
</style>
