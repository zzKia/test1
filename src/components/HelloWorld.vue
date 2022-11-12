<script setup lang="ts">
import { nextTick, ref } from "vue";

defineProps<{
  msg: string;
}>();
const m = ref<string>("");
const messages = ref<string[]>([]);
const div = ref<any>(null);
const addMessage = async () => {
  messages.value.push(m.value);

  await nextTick();
  div.value.scrollTop = div.value.scrollHeight;
  m.value = "";
};
</script>

<template>
  <div class="message" ref="div">
    <div v-for="msg in messages">{{ msg }}</div>
  </div>
  <input
    type="text"
    placeholder="輸入關鍵字"
    v-model.trim="m"
    @keydown.enter="addMessage"
  />
</template>

<style scoped>
.message {
  height: 100px;
  overflow-y: scroll;
}
</style>
