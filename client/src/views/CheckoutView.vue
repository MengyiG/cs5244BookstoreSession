<template>
  <div class="checkout-view">
    <h1>Checkout</h1>

    <router-link to="../cart">
      <button class="secondary-button">
        <span>Back to Cart</span>
      </button>
    </router-link>

    <h2>
      still working on this! sign up for the email notifications to be alerted
      when the content is up! 😅
    </h2>

    <img src="../assets/images/site/jump.jpeg" alt="jump" />
  </div>
</template>

<script>
export default {
  name: "CheckoutView",
};
</script>

<style scoped>
.checkout-view {
  background-color: var(--secondary-background-color);
}
.checkout-view > h1 {
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

.checkout-view > a {
  color: black;
}

.secondary-button {
  margin-left: 4.5rem;
}

.checkout-view > h2 {
  font-weight: 500;
  letter-spacing: 0.027em;
  line-height: 1.33em;
  padding: 1rem 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.checkout-view > img {
  height: 500px;
  padding: 1rem 5rem;
  margin-top: 1rem;
  margin-left: 5rem;
}
</style>
