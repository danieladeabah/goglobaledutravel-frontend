<template>
  <footer class="text-md bg-white py-4 text-gray-500">
    <div
      class="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 text-center md:flex-row md:space-y-0 md:text-left"
    >
      <div class="copyright">
        Copyright © 2025 Canam Group All rights reserved.
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <nuxt-link to="/disclaimer" class="text-gray-500 hover:underline"
          >Disclaimer</nuxt-link
        >
        <nuxt-link to="/privacy-policy" class="text-gray-500 hover:underline"
          >Privacy Policy</nuxt-link
        >
        <nuxt-link to="/terms-conditions" class="text-gray-500 hover:underline"
          >Terms & Conditions</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>
