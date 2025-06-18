<template>
  <header class="bg-white py-4 shadow-sm">
    <div class="mx-auto w-full max-w-7xl px-4">
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
            <div class="flex flex-col gap-2 lg:flex-row lg:items-center">
              <p class="m-0 text-base text-gray-600 lg:text-2xl">
                Request Call Back:
              </p>
              <p class="m-0 text-2xl font-bold text-gray-800">024-1234567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import CallBack from '@/assets/icons/caller.vue'
import Logo from '@/assets/icons/canam-logo.vue'
</script>
