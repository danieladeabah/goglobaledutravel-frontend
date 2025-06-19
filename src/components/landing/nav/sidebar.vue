<template>
  <aside
    :class="[
      'z-45 fixed inset-y-0 left-0 z-20 transform overflow-y-auto border-r border-gray-100 bg-white p-4 transition-all duration-300 ease-in-out',
      isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full opacity-0'
    ]"
  >
    <!-- Overlay for mobile -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-opacity-75 transition-opacity lg:hidden"
      @click="$emit('close')"
    ></div>

    <div v-if="isOpen" class="flex h-full flex-col">
      <!-- Sidebar header with close button (mobile only) -->
      <div class="mb-8 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-800">Menu</h2>
        <button
          @click="$emit('close')"
          class="text-gray-500 hover:text-gray-900"
          aria-label="Close sidebar"
        >
          <Icon name="heroicons:x-mark" class="h-5 w-5" />
        </button>
      </div>

      <!-- Sidebar navigation links -->
      <div class="flex-1 space-y-1">
        <div v-for="(item, index) in navigationItems" :key="index" class="py-1">
          <NuxtLink
            :to="item.to"
            class="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            :class="{ 'bg-gray-100 font-medium text-gray-900': item.active }"
          >
            <Icon :name="item.icon" class="mr-3 h-5 w-5" />
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom section with useful links instead of profile/logout -->
      <div class="mt-auto border-t border-gray-200 pt-2">
        <NuxtLink
          to="/contact"
          class="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <Icon name="heroicons:envelope" class="mr-3 h-5 w-5" />
          Contact Us
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <Icon name="heroicons:information-circle" class="mr-3 h-5 w-5" />
          About Us
        </NuxtLink>
        <NuxtLink
          to="/faq"
          class="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <Icon name="heroicons:question-mark-circle" class="mr-3 h-5 w-5" />
          FAQ
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

// Navigation items with icons
const navigationItems = [
  {
    name: 'Study Abroad Steps',
    to: '/study-abroad-steps',
    icon: 'heroicons:academic-cap'
  },
  {
    name: 'Study Destinations',
    to: '/study-destinations',
    icon: 'heroicons:globe-alt'
  },
  {
    name: 'Find a Course',
    to: '/find-course',
    icon: 'heroicons:magnifying-glass'
  },
  { name: 'IELTS', to: '/ielts', icon: 'heroicons:language' },
  {
    name: 'Student Essentials',
    to: '/student-essentials',
    icon: 'heroicons:book-open'
  },
  {
    name: 'Programs',
    to: '/programs',
    icon: 'heroicons:clipboard-document-list'
  },
  { name: 'Schedules', to: '/schedules', icon: 'heroicons:calendar' }
]
</script>
