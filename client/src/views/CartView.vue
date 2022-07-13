<template>
  <div class="cart-view">
    <h1>Your Shopping Cart</h1>
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
</style>
