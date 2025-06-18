<template>
  <footer class="text-md bg-white py-4 text-gray-500">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 px-4 text-center md:flex-row md:space-y-0 md:text-left"
    >
      <div class="copyright">
        Copyright © 2025 Canam Group All rights reserved.
      </div>
      <div class="flex items-center">
        <nuxt-link to="/disclaimer" class="text-gray-500 hover:underline"
          >Disclaimer</nuxt-link
        >
        <span class="mx-2">|</span>
        <nuxt-link to="/privacy-policy" class="text-gray-500 hover:underline"
          >Privacy Policy</nuxt-link
        >
        <span class="mx-2">|</span>
        <nuxt-link to="/terms-conditions" class="text-gray-500 hover:underline"
          >Terms & Conditions</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>
