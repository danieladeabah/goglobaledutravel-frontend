<template>
  <section class="relative overflow-hidden bg-gray-100 py-16">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div class="max-w-xl flex-1">
          <p class="mb-2 text-lg text-gray-500">
            <span class="border-b-2 border-red-600">Start Your</span> Journey
            with
          </p>
          <h1
            class="font-nomral mb-6 text-2xl leading-tight text-gray-500 md:text-4xl"
          >
            Premium
            <span class="font-bold text-gray-800 underline"
              >Study Abroad Counselling</span
            >
            for Your<br />Dream University
          </h1>
          <p class="mb-8 text-base leading-relaxed text-gray-600">
            From university selection to visa assistance, get expert guidance
            throughout the application journey and beyond. Personalized services
            for undergrad, master's, PhD, and MBA aspirants.
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-2 border-b border-red-600 font-semibold text-red-500 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Free Consultation
            <span class="ml-1">→</span>
          </a>
        </div>
        <div class="flex flex-1 justify-end">
          <Student />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Student from '@/assets/icons/student.vue'
</script>
