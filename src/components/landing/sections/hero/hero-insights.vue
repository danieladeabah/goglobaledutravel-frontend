<template>
  <div class="mt-8 py-6">
    <div class="mx-auto flex max-w-[800px] flex-wrap justify-between gap-6">
      <div
        v-for="(insight, index) in insights"
        :key="index"
        class="min-w-[120px] flex-1 rounded-lg bg-white/90 p-4 text-center transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg"
      >
        <div v-if="insight.icon" class="mb-2 text-[#b30101]">
          <component :is="insight.icon" :width="20" :height="20" />
        </div>
        <div class="mb-2 text-[1.8rem] font-bold text-[#b30101]">
          <span ref="counterRefs">0</span>{{ insight.suffix }}
        </div>
        <div class="text-[0.9rem] font-medium text-[#4a4b4d]">
          {{ insight.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InstituteIcon from '@/assets/icons/institute-icon.vue'
import CounsellingIcon from '@/assets/icons/counselling-icon.vue'
import ApplicationIcon from '@/assets/icons/application-icon.vue'

const props = defineProps({
  insights: {
    type: Array,
    default: () => [
      {
        number: 5000,
        suffix: '+',
        label: 'Students counselled',
        icon: CounsellingIcon
      },
      { icon: ApplicationIcon, number: 95, suffix: '%', label: 'Success rate' },
      {
        number: 100,
        suffix: '+',
        label: 'Partner universities',
        icon: InstituteIcon
      },
      { number: 25, suffix: '+', label: 'Countries', icon: null }
    ]
  }
})

const counterRefs = ref([])

onMounted(() => {
  // Use Intersection Observer to start animation when element is in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters()
        observer.unobserve(entry.target)
      }
    })
  })

  if (counterRefs.value.length > 0) {
    observer.observe(counterRefs.value[0])
  }
})

const animateCounters = () => {
  counterRefs.value.forEach((counter, index) => {
    const target = props.insights[index].number
    const duration = 2000
    const startTime = performance.now()

    const updateCounter = currentTime => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = progress * (2 - progress)
      const currentValue = Math.floor(easeOutQuad * target)

      if (counter) {
        counter.textContent = currentValue
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  })
}
</script>
