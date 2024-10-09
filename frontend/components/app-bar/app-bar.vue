<template>
  <v-app-bar flat class="app-bar">
    <div class="content">
      <!-- <v-btn class="mr-1" icon><icons-menu /></v-btn> -->
      <logo />
      <!-- <app-bar-navigation class="navigation" /> -->
      <v-spacer />
      <v-btn icon to="/account" :active="false"><icons-account /></v-btn>
      <v-btn icon to="/cart" :active="false"><icons-cart /></v-btn>
    </div>
  </v-app-bar>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-bar {
  padding-top: 2px;
  border-bottom: 1px solid #e5e7eb;

  .content {
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
