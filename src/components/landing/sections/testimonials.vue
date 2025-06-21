<template>
  <section class="testimonials bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="mb-2 text-center text-3xl font-bold md:text-4xl">
        Testimonials
      </h2>
      <p class="mb-12 text-center text-gray-600">
        What our students say about our services
      </p>

      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <!-- Display testimonials based on current index -->
        <div
          v-for="(testimonial, index) in visibleTestimonials"
          :key="index"
          class="flex h-full flex-col justify-between rounded-lg bg-gray-50 p-6"
        >
          <div class="testimonial-content">
            <div class="mb-4 font-serif text-4xl text-red-500">"</div>
            <p class="mb-6">
              {{ testimonial.content }}
            </p>
          </div>
          <div class="user-info mt-auto">
            <div class="flex items-center">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="mr-4 h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p class="font-bold">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-600">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <div class="mt-10 flex justify-center space-x-4">
        <button
          @click="previousSlide"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100"
          :disabled="currentIndex === 0"
          :class="{ 'cursor-not-allowed opacity-50': currentIndex === 0 }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100"
          :disabled="currentIndex >= testimonials.length - visibleCount"
          :class="{
            'cursor-not-allowed opacity-50':
              currentIndex >= testimonials.length - visibleCount
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile1 from '@/assets/images/profiles/profile-1.jpg'
import profile2 from '@/assets/images/profiles/profile-2.jpg'
import profile3 from '@/assets/images/profiles/profile-3.jpg'
import profile4 from '@/assets/images/profiles/profile-4.jpg'
import profile5 from '@/assets/images/profiles/profile-5.jpg'

// List of testimonials
const testimonials = ref([
  {
    content:
      'Excellent guiding instructions. They are all great mentors at life and career. Best out of the best in the career counselling.',
    name: 'Kwame Addo',
    title: 'Bachelors, University of Toronto',
    image: profile1
  },
  {
    content:
      'The process was very simple and easy to go through. Before GoGlobal Education & Travel Consult I thought this gonna burn a hole in my pocket but I am very happy the way it turned out.',
    name: 'Chidi Okonkwo',
    title: 'Bachelors, University of New York',
    image: profile2
  },
  {
    content:
      'I am currently employed at one the biggest companies in the world. All thanks to GoGlobal Education & Travel Consult for opening door to USA for me and I love every step I ever took.',
    name: 'Amara Nwosu',
    title: 'Visual Designer, Cuatro, USA',
    image: profile3
  },
  {
    content:
      'The support throughout my application process was incredible. Their expertise on visa requirements saved me from potential delays and ensured a smooth transition.',
    name: 'Kofi Mensah',
    title: 'Masters, University of Melbourne',
    image: profile4
  },
  {
    content:
      "Without their scholarship guidance, I wouldn't have received the funding that made my international education possible. They truly care about student success.",
    name: 'Fatou Diallo',
    title: 'PhD Candidate, MIT',
    image: profile5
  }
])

// Current starting index for visible testimonials
const currentIndex = ref(0)

// Number of visible testimonials based on screen size
// This would ideally be responsive, but for now we'll use a fixed value
const visibleCount = 4

// Compute which testimonials are currently visible
const visibleTestimonials = computed(() => {
  return testimonials.value.slice(
    currentIndex.value,
    currentIndex.value + visibleCount
  )
})

// Navigation methods
function previousSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function nextSlide() {
  if (currentIndex.value < testimonials.value.length - visibleCount) {
    currentIndex.value++
  }
}
</script>

<style scoped>
/* Additional custom styling can be added here if needed */
</style>
