<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13L7 13"
      :stroke="fillColor"
      stroke-width="1.5"
      stroke-linecap="square"
    />
    <path
      d="M12 19.5L6 13L12 6.5"
      :stroke="fillColor"
      stroke-width="1.5"
      stroke-linecap="square"
    />
  </svg>
</template>

<script setup lang="ts">
const { width, height, fillColor } = defineProps({
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 26
  },
  fillColor: {
    type: String,
    default: '#4A4B4D'
  }
})
</script>
