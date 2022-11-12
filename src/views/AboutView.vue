<template>
  <div class="about">
    <h1>{{ countStore.count }}</h1>
    <button @click="add">add</button>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const countStore = useCounterStore();
const add = () => {
  countStore.increment();
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
