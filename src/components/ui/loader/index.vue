<template>
  <div v-if="loading" class="global-loader"></div>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.global-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  backdrop-filter: blur(3px);
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
}

.dark .global-loader {
  background-color: rgba(0, 0, 0, 0.7);
}

.dark .loader-container {
  background-color: #1e1e1e;
}
</style>
