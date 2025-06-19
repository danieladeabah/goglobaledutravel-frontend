<template>
  <div class="flex bg-white dark:bg-gray-900">
    <LandingNavSidebar :is-open="isSidebarOpen" @close="closeSidebar" />

    <div
      class="flex-grow transition-all duration-300"
      :class="{ 'ml-64': isSidebarOpen }"
    >
      <LandingNavHeader
        @toggle-sidebar="toggleSidebar"
        :is-sidebar-open="isSidebarOpen"
      />

      <main class="min-h-[calc(100vh-120px)]">
        <slot></slot>
      </main>

      <LandingNavFooter />
    </div>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

// Provide sidebar state to descendants
provide('sidebarState', {
  isSidebarOpen,
  toggleSidebar,
  closeSidebar
})
</script>
