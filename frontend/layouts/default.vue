<template>
  <v-app class="app">
    <app-bar />

    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style>
.app {
  background: rgb(243 244 246) !important;
}
</style>
