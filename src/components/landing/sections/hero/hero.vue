<template>
  <section class="relative overflow-hidden bg-gray-100 py-16">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 z-0">
      <!-- Abstract shapes -->
      <div
        class="absolute left-1/4 top-1/4 h-16 w-16 rotate-45 transform opacity-10"
      >
        <div class="h-full w-full rounded-md bg-blue-500"></div>
      </div>
      <div
        class="absolute right-1/3 top-1/2 h-24 w-24 -rotate-12 transform opacity-10"
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
      <div class="top-1/5 absolute right-1/4 opacity-5">
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
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
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
    <div class="container relative z-10 mx-auto px-4">
      <div
        class="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between"
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
            to="/consultation"
            class="inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Book Free Consultation
            <Arrow class="rotate-180" :fill-color="'#FFFFFF'" />
          </NuxtLink>
        </div>

        <!-- Right Column - Illustration -->
        <div class="w-full max-w-lg">
          <Student class="hidden md:block" />
        </div>
        <LandingSectionsHeroInsights />
      </div>
    </div>
  </section>
</template>

<script setup>
import Arrow from '@/assets/icons/arrow-icon.vue'
import Student from '@/assets/icons/student-icon.vue'
</script>
