<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 57 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41.5 37C46.1944 37 50 33.1944 50 28.5C50 23.8056 46.1944 20 41.5 20C36.8056 20 33 23.8056 33 28.5C33 33.1944 36.8056 37 41.5 37Z"
      stroke="#757575"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48 35V54L41.5 51.8889L35 54V35"
      stroke="#757575"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 12H33"
      stroke="#AE0E0E"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 27H29"
      stroke="#AE0E0E"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 20H20"
      stroke="#AE0E0E"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.8462 43H1V1H56V43H47.5385"
      stroke="#757575"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
const { width, height, fillColor } = defineProps({
  width: {
    type: Number,
    default: 57
  },
  height: {
    type: Number,
    default: 55
  },
  fillColor: {
    type: String,
    default: '#4A4B4D'
  }
})
</script>
