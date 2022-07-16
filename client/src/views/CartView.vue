<template>
  <div class="cart-view">
    <h1>Your Shopping Cart</h1>
    <div class="cart-page-container">
      <cart-table></cart-table>
      <!--      order summary-->
      <div class="cart-page__order-summary-details-container">
        <div class="order-summary">
          <div class="order-summary-title__text">Order Summary</div>
          <div class="order-summary-line__container">
            <div class="order-summary-line__title">Subtotal</div>
            <div class="order-summary-line__price">$224.98</div>
          </div>
          <div class="order-summary-line__container">
            <div class="order-summary-line__title">Shipping</div>
            <div class="order-summary-line__price">TBD</div>
          </div>
          <div class="order-summary-line__container">
            <div class="order-summary-line__title">Tax (13%)</div>
            <div class="order-summary-line__price">$32.89</div>
          </div>
          <div class="subtotal__general">
            <div class="subtotal__label">Total</div>
            <div class="subtotal__value">$257.87</div>
          </div>
          <div class="order-summary__divider"></div>
        </div>

        <!--two buttons-->
        <button class="hero-button checkout">
          <router-link to="../checkout">
            <span>Proceed to Checkout</span>
          </router-link>
        </button>
        <button class="secondary-button continue">
          <span> Continue Shopping</span>
        </button>

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
                &nbsp;Shipping ???? items to an address
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
  padding: 1.3rem 5rem;
  background-color: white;
}

.cart-page-container {
  display: flex;
  padding: 0 4rem;
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
  margin-left: 1rem;
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
  margin: 1.5rem;
  color: var(--default-text-color);
}

.continue:hover {
  background-color: var(--primary-background-color);
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

@media (max-width: 997px) {
  cart-page-container {
    display: flex;
    flex-direction: column;
  }
}

/*  border: 1px solid #dedede;
  border-left: none;
  border-right: none;*/
</style>
