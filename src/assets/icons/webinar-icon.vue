<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M59.9219 12.1875H48.75V5.07812H44.6875V12.1875H20.3125V5.07812H16.25V12.1875H5.07812C4.27033 12.1884 3.49589 12.5098 2.9247 13.0809C2.3535 13.6521 2.03219 14.4266 2.03125 15.2344V57.8906C2.03219 58.6984 2.3535 59.4729 2.9247 60.0441C3.49589 60.6152 4.27033 60.9366 5.07812 60.9375H59.9219C60.7297 60.9366 61.5041 60.6152 62.0753 60.0441C62.6465 59.4729 62.9678 58.6984 62.9688 57.8906V15.2344C62.9678 14.4266 62.6465 13.6521 62.0753 13.0809C61.5041 12.5098 60.7297 12.1884 59.9219 12.1875ZM58.9062 56.875H6.09375V16.25H16.25V21.3281H20.3125V16.25H44.6875V21.3281H48.75V16.25H58.9062V56.875Z"
      fill="#757575"
    />
    <path
      d="M30.9 39.7836L23.9956 32.8793L21.123 35.752L30.9 45.5288L46.8472 29.5816L43.9745 26.709L30.9 39.7836Z"
      fill="#C40E0E"
    />
  </svg>
</template>

<script setup lang="ts">
const { width, height, fillColor } = defineProps({
  width: {
    type: Number,
    default: 65
  },
  height: {
    type: Number,
    default: 65
  },
  fillColor: {
    type: String,
    default: '#4A4B4D'
  }
})
</script>
