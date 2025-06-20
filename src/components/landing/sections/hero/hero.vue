<template>
  <section class="relative overflow-hidden bg-gray-100 py-16">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 z-0">
      <!-- Abstract shapes -->
      <div
        class="animate-float absolute left-1/4 top-1/4 h-16 w-16 rotate-45 transform opacity-10"
      >
        <div class="h-full w-full rounded-md bg-blue-500"></div>
      </div>
      <div
        class="animate-float-delayed absolute right-1/3 top-1/2 h-24 w-24 -rotate-12 transform opacity-10"
      >
        <div class="h-full w-full rounded-full bg-red-500"></div>
      </div>
      <!-- Subtle grid pattern -->
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image: url(&quot;data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E&quot;);
        "
      ></div>
      <!-- Graduation cap icon -->
      <div class="top-1/5 animate-spin-slow absolute right-1/4 opacity-5">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path
            d="M2 17L12 22L22 17V7L12 2L2 7V17Z"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </div>
      <!-- World map outline (simplified) -->
      <div
        class="animate-pulse-slow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
      >
        <svg
          width="600"
          height="300"
          viewBox="0 0 600 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Simplified world map path -->
          <path
            d="M232.9,23.4c-10.8,1.2-22.3,2.5-32.4,3.5c-13.1,1.4-26.7,3.8-35.9,5.5c-12.6,2.2-19.9,4.5-25.5,12.1
            c-5.2,2.8-8.9,4.5-12.5,6.2c-9.8,4.8-11.8,12.5-13.5,19.2c-1.2,4.8-5.9,12.8-6.9,19.5c-1.2,8.1-2.9,15.8-3.5,22.1
            c-1.5,15.8-2.1,31.2-4.6,48.3c-1.2,8.1-2.5,15.8-3.1,24.2c-1.5,22.1-3.1,38.5-5.6,58.1c-1.2,9.5-3.1,20.5-3.1,29.2
            c0,8.5-1.2,17.2-1.9,25.3c-0.8,8.5-2.1,16.5-2.1,25.9c0,5.8-1.5,11.2-1.5,16.5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container relative mx-auto px-4">
      <div
        class="grid grid-cols-1 gap-0 md:grid-cols-2 md:items-center md:gap-8 lg:gap-4"
      >
        <!-- Left Column - Text Content -->
        <div class="mb-8 max-w-lg md:mb-0 md:pr-8">
          <p class="mb-2 text-base font-medium text-gray-600">
            <span class="border-b-2 border-red-600">Start Your</span> Journey
            with
          </p>
          <h1
            class="mb-4 text-4xl font-medium leading-tight text-gray-900 md:text-5xl"
          >
            <span class="text-gray-400">Premium </span>
            <span class="font-bold text-gray-900 underline">Study Abroad </span>
            <span class="text-gray-400">Counselling </span>
            <span class="text-gray-600">for Your </span>
            <span class="text-gray-400">Dream University</span>
          </h1>
          <p class="mb-8 text-base text-gray-600">
            From university selection to visa assistance, get expert guidance
            throughout the application journey and beyond. Personalized services
            for undergrad, master's, PhD, and MBA aspirants.
          </p>
          <NuxtLink
            to="/landing/consultation?type=default"
            class="animate-button-breath inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Book Your Consultation
            <Arrow class="rotate-180" :fill-color="'#FFFFFF'" />
          </NuxtLink>
        </div>

        <!-- Right Column - Illustration -->
        <div class="w-full">
          <div class="carousel-container overflow-hidden rounded-lg">
            <div class="carousel-slides" ref="carouselRef">
              <div class="carousel-slide">
                <StudentIcon class="h-full w-full" />
              </div>
              <div class="carousel-slide">
                <TeacherIcon class="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
        <LandingSectionsHeroInsights />
      </div>
    </div>
  </section>
</template>

<script setup>
import Arrow from '@/assets/icons/arrow-icon.vue'
import StudentIcon from '@/assets/icons/student-icon.vue'
import TeacherIcon from '~/assets/icons/teacher-icon.vue'

// Carousel functionality
const currentSlide = ref(0)
const carouselRef = ref(null)
let autoplayInterval = null

// Update carousel position
const updateCarousel = () => {
  if (carouselRef.value) {
    const slideWidth = carouselRef.value.clientWidth
    carouselRef.value.style.transform = `translateX(-${currentSlide.value * slideWidth}px)`
  }
}

// Next slide function
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 2
  updateCarousel()
}

// Start autoplay
const startAutoplay = () => {
  stopAutoplay() // Clear any existing interval
  autoplayInterval = setInterval(nextSlide, 5000)
}

// Stop autoplay
const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

// Lifecycle hooks
onMounted(() => {
  updateCarousel()
  startAutoplay()
  window.addEventListener('resize', updateCarousel)
})

onBeforeUnmount(() => {
  stopAutoplay()
  window.removeEventListener('resize', updateCarousel)
})
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translate(0, 0) rotate(45deg);
  }

  50% {
    transform: translate(-10px, -15px) rotate(50deg);
  }

  100% {
    transform: translate(0, 0) rotate(45deg);
  }
}

@keyframes float-delayed {
  0% {
    transform: translate(0, 0) rotate(-12deg);
  }

  50% {
    transform: translate(15px, -10px) rotate(-15deg);
  }

  100% {
    transform: translate(0, 0) rotate(-12deg);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.03;
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    opacity: 0.04;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@keyframes button-breath {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(220, 38, 38, 0.4);
  }

  50% {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 15s ease-in-out infinite;
}

.animate-button-breath {
  animation: button-breath 3s ease-in-out infinite;
}

/* Carousel styles */
.carousel-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
}

.carousel-slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.carousel-dot {
  transition: background-color 0.3s ease;
}

.carousel-dot:hover {
  background-color: #e5e7eb;
}
</style>
