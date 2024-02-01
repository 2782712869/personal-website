<template>
  <div class="app">
    <div class="nav">
      <NavBar />
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/nav-bar/index.vue"
</script>

<style scoped lang="less">
.app {
  width: 100%;
  min-width: 1180px;
  background: var(--theme-background-color);
  transition: all .35s ease-in-out;
}
</style>
