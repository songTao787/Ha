<template>
  <div>
    <p>clicked: {{ $store.state.count }} times, count is {{ oddOrEven }}</p>
    <div class="btn">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    oddOrEven() {
      return this.$store.getters.oddOrEven;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment"); //dispatch 分发
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style>
p{
  padding: 40px 20px;
}
button{
  padding: 5px;
}
.btn{
  margin: 0 20px;
  padding: 0;
}
</style>
