<template>
  <div class="cart-table">
    <ul>
      <li class="table-heading">
        <div class="heading-book">Book</div>
        <div class="heading-price">Price</div>
        <div class="heading-quantity">Quantity</div>

        <div class="heading-subtotal">Amount</div>
      </li>

      <template v-for="item in $store.state.cart.items">
        <li :key="item.book.bookId">
          <div class="cart-book-image">
            <img
              :src="
                require('@/assets/images/books/' + bookImageFileName(item.book))
              "
              :alt="item.book.title"
            />
          </div>
          <div class="cart-book-title">{{ item.book.title }}</div>
          <div class="cart-book-price">
            {{ item.book.price | asDollarsAndCents }}
          </div>
          <div class="cart-book-quantity">
            <button
              class="icon-button dec-arrow-button"
              @click="updateCart(item.book, item.quantity - 1)"
            >
              <i class="fas fa-chevron-left fa-xl"></i>
            </button>

            &nbsp;<span class="quantity">{{ item.quantity }}</span
            >&nbsp;

            <button
              class="icon-button inc-arrow-button"
              @click="updateCart(item.book, item.quantity + 1)"
            >
              <i class="fas fa-chevron-right fa-xl"></i>
            </button>
          </div>
          <div class="cart-book-subtotal">
            {{ item.total | asDollarsAndCents }}
          </div>
        </li>
        <li class="line-sep" :key="item.book.bookId"></li>
      </template>
    </ul>
    <button class="remove-button" @click="clearCart">
      <i class="fa-regular fa-trash-can"></i>&nbsp; Remove All Books
    </button>
  </div>
</template>

<script>
export default {
  name: "CartTable",
  methods: {
    bookImageFileName: function (book) {
      let name = book.title;
      name = name.replace(/[.,/#!$%^&*;:{}=\-_`~'()]/g, "");
      return `${name}.jpeg`;
    },
    addToCart(book) {
      this.$store.dispatch("addToCart", book);
    },
    updateCart(book, quantity) {
      this.$store.dispatch("updateCart", { book, quantity });
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
  },
};
</script>

<style scoped>
.cart-table {
  display: grid;
  /*image, book title, repeat 3 times total 5 columns*/
  grid-template-columns: max-content minmax(10em, 20em) repeat(3, max-content);
  row-gap: 1em;
  width: fit-content;
  margin: 0;
  padding: 0.8rem 0 0 1rem;
}

ul {
  display: contents;
}

ul > li {
  display: contents;
}

.table-heading {
  color: var(--default-text-color);
  font-weight: bold;
  font-size: large;
}

.table-heading > * {
  padding: 0 0 1.5rem 2rem;
  border-bottom: 1px solid #d3cfb8;
}

.heading-book {
  grid-column: 1 / 3;
}

.heading-price {
  grid-column: 3 / 4;
  text-align: right;
}

.heading-quantity {
  grid-column: 4 / 5;
  text-align: center;
  padding-right: 1.5rem;
}

.heading-subtotal {
  text-align: right;
  grid-column: -2 / -1;
  padding-right: 1rem;
}

.cart-book-image {
  padding: 0 1em;
  width: 80pt;
}

.cart-book-image > * {
  margin-left: auto;
  margin-right: 0;
}

.cart-book-title {
  margin-left: -3rem;
}

img {
  display: block;
  width: 100px;
  height: auto;
}

.cart-book-price {
  padding-left: 1em;
  text-align: right;
}

.cart-book-quantity {
  padding-left: 2rem;
  padding-right: 2rem;
}

.cart-book-subtotal {
  text-align: right;
  padding-left: 1em;
  padding-right: 1em;
}

/* Row separators in the table */

.line-sep {
  display: block;
  height: 2px;
  background-color: #d3cfb8;
  grid-column: 1 / -1;
}

/* Increment/decrement buttons */

.icon-button {
  border: none;
  cursor: pointer;
}

/* Chevron buttons */

.dec-arrow-button,
.inc-arrow-button {
  font-size: 1rem;
  color: var(--primary-color);
}

.dec-arrow-button:hover,
.inc-arrow-button:hover {
  color: var(--default-text-color);
}

input[type="number"] {
  width: 4em;
}

select {
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color-dark);
  border-radius: 3px;
}

.remove-button {
  border: none;
  color: var(--default-text-color);
  padding: 1rem 2rem;
  background-color: var(--secondary-background-color);
}

.remove-button:hover,
.remove-button:active {
  color: var(--primary-color);
  cursor: pointer;
}

.fa-trash-can {
  color: var(--neutral-color);
}
</style>
