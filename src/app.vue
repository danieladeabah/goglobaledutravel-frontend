<template>
  <div>
    <UiLoader :loading="isLoading" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { meta } from '@@/meta-config'

useHead(meta)

const isLoading = ref(false)

// Handle route changes to show/hide loader
const router = useRouter()

router.beforeEach(() => {
  isLoading.value = true
  return true
})

router.afterEach(() => {
  // Add a small delay to ensure smooth transitions
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>
