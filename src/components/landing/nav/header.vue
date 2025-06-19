<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 bg-white/70 py-4 shadow-sm backdrop-blur-md"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button
            @click="$emit('toggle-sidebar')"
            class="mr-3 text-gray-600 hover:text-gray-800"
            aria-label="Toggle sidebar"
          >
            <Icon
              :name="isSidebarOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="h-6 w-6"
            />
          </button>
          <div class="logo">
            <NuxtLink to="/" class="flex text-xl font-bold text-red-600">
              <img
                src="@/assets/icons/goglobal-logo.png"
                alt=""
                class="h-8 w-auto"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="contact">
          <div class="flex items-center gap-2.5">
            <a
              href="tel:0241234567"
              class="text-red-600 transition-colors hover:text-red-700"
            >
              <CallBack class="h-5 w-5 lg:h-auto lg:w-auto" />
            </a>
            <div class="hidden items-center gap-2 sm:flex">
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
  <!-- Spacer to prevent content from hiding under the fixed header -->
  <div class="h-[50px]"></div>
</template>

<script setup>
import CallBack from '~/assets/icons/caller-icon.vue'

defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-sidebar'])
</script>
