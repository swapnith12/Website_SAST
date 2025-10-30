<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <button @click="showEmojiPopup('my messege')">Show popup</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { showEmojiPopup } from "emoji-popup";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    showEmojiPopup,
  },
};
</script>
