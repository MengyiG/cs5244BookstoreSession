<template>
  <div class="cart-view">
    <h1>Your Shopping Cart</h1>
    <button class="hero-button">
      <router-link to="../checkout">
        <span>Proceed to Checkout</span>
      </router-link>
    </button>
    <cart-table></cart-table>
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
</style>
