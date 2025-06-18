<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_174_283)">
      <path
        d="M41.0312 37.375V49.5625C41.0312 50.4563 40.3 51.1875 39.4062 51.1875H4.46875C3.575 51.1875 2.84375 50.4563 2.84375 49.5625V2.4375C2.84375 1.54375 3.575 0.8125 4.46875 0.8125H25.5125L41.0312 15.5188V27.625"
        stroke="#757575"
        stroke-width="2.5"
      />
      <path
        d="M41.0312 16.1688H27.2188C26.325 16.1688 25.5938 15.4375 25.5938 14.5438V1.625"
        stroke="#757575"
        stroke-width="2.5"
      />
      <path d="M7 14.625H17.5625" stroke="#BE0505" stroke-width="2.5" />
      <path d="M7 34.75H26.5" stroke="#757575" stroke-width="2.5" />
      <path d="M7 40.625H20.8125" stroke="#BE0505" stroke-width="2.5" />
      <path
        d="M24.7812 48.75L27.95 41.1125L44.4438 24.6188C44.7688 24.2938 45.3375 24.2938 45.7437 24.6188L48.9125 27.7875C49.2375 28.1125 49.2375 28.6813 48.9125 29.0875L32.4187 45.5813L24.7812 48.75Z"
        stroke="#757575"
        stroke-width="2.5"
        stroke-linejoin="round"
      />
      <path
        d="M42.575 26.5688L46.9625 30.9563"
        stroke="#757575"
        stroke-width="2.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_174_283">
        <rect width="52" height="52" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
const { width, height, fillColor } = defineProps({
  width: {
    type: Number,
    default: 52
  },
  height: {
    type: Number,
    default: 52
  },
  fillColor: {
    type: String,
    default: '#4A4B4D'
  }
})
</script>
