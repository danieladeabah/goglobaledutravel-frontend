<template>
  <header class="bg-white py-4 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-between lg:flex-row">
        <div class="logo">
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>
        </div>
        <div class="contact">
          <div class="flex items-center gap-2.5">
            <span class="text-red-600">
              <CallBack />
            </span>
            <div class="flex items-center gap-2">
              <p class="m-0 text-base text-gray-600 lg:text-2xl">
                Request Call Back:
              </p>
              <p class="m-0 text-2xl font-bold text-gray-800">024-1234-567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import CallBack from '~/assets/icons/caller-icon.vue'
import Logo from '@/assets/icons/canam-logo.vue'
</script>
