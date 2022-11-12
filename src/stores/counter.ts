import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const count2 = ref(1);
    const aa = reactive({
      data: {
        a: 1,
        b: 2,
      },
    });
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
      count2.value++;
    }
    return { count, count2, doubleCount, increment };
  },
  {
    persist: [
      { key: "cc", storage: sessionStorage, paths: ["count2"] },
      {
        key: "bb",
        storage: sessionStorage,
        paths: ["count", "aa"],
        beforeRestore: (ctx) => {
          console.log(ctx);
        },
        afterRestore: (ctx) => {
          console.log(ctx);
        },
      },
    ],
  }
);
