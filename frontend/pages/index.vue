<template>
  <div>
    <v-btn @click="test">test</v-btn>
  </div>
</template>

<script setup>
const test = () => {
  console.log("test");
};
</script>
