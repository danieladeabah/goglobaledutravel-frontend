<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6 44.4001H10.8333C5.95557 44.4001 2 40.4445 2 35.5667C2 30.689 5.95557 26.7334 10.8333 26.7334H12.6V44.4001Z"
      stroke="#757575"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M46.1666 44.4001H44.3999V26.7334H46.1666C51.0443 26.7334 54.9999 30.689 54.9999 35.5667C54.9999 40.4445 51.0443 44.4001 46.1666 44.4001Z"
      stroke="#757575"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M9.06665 26.7333V21.4333C9.06665 10.7008 17.7675 2 28.5 2C39.2325 2 47.9333 10.7008 47.9333 21.4333V26.7333"
      stroke="#757575"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M47.9334 44.3999V51.4666C47.9334 53.4187 46.3523 54.9999 44.4001 54.9999H39.1001"
      stroke="#757575"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M32.0339 55H35.5673"
      stroke="#757575"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M28.5 42.6335V46.1669"
      stroke="#D9060C"
      stroke-width="2.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M28.5001 39.0999V34.48C28.5001 31.9343 30.0494 29.6464 32.4132 28.7013C35.3848 27.5123 37.3334 24.6344 37.3334 21.4332C37.3334 16.5554 33.3778 12.5999 28.5001 12.5999C23.6223 12.5999 19.6667 16.5554 19.6667 21.4332"
      stroke="#D9060C"
      stroke-width="2.5"
      stroke-miterlimit="10"
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
    default: 57
  },
  fillColor: {
    type: String,
    default: '#4A4B4D'
  }
})
</script>
