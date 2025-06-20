<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Back button updated to use browser history -->
      <div class="mb-6">
        <button
          @click="goBack"
          class="inline-flex items-center rounded-full border px-4 py-1 text-red-600 transition-all duration-200 ease-in-out hover:bg-gray-100 hover:text-red-700 hover:shadow-sm"
        >
          <ArrowLeftIcon class="mr-2 h-5 w-5" />
          <span>Back</span>
        </button>
      </div>

      <!-- Header Section -->
      <div class="mb-10 text-center">
        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Study Abroad Steps
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
          Your comprehensive guide to planning your international education
          journey
        </p>
      </div>

      <!-- Steps Section -->
      <div class="mx-auto max-w-6xl py-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            v-for="(step, index) in studySteps"
            :key="index"
            class="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div class="flex items-center">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
              >
                <span class="text-xl font-bold text-red-600">{{
                  index + 1
                }}</span>
              </div>
              <h3 class="ml-4 text-xl font-bold text-gray-800">
                {{ step.title }}
              </h3>
            </div>
            <div class="mt-4 text-gray-600">
              <p>{{ step.description }}</p>
            </div>
            <div class="mt-6">
              <ul class="ml-6 list-disc space-y-2 text-gray-600">
                <li
                  v-for="(point, pointIndex) in step.points"
                  :key="pointIndex"
                >
                  {{ point }}
                </li>
              </ul>
            </div>
            <div v-if="step.action" class="mt-6">
              <NuxtLink
                :to="step.action.link"
                :class="[
                  'inline-flex items-center rounded-md px-4 py-2 text-sm font-medium',
                  step.action.disabled
                    ? 'disabled-link'
                    : 'bg-red-600 text-white hover:bg-red-700'
                ]"
                @click.prevent="step.action.disabled ? null : null"
              >
                {{ step.action.text }}
                <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="mt-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-8 text-center text-white"
      >
        <h2 class="text-2xl font-bold">Ready to Start Your Journey?</h2>
        <p class="mx-auto mt-4 max-w-xl">
          Our education consultants are ready to guide you through every step of
          your study abroad journey.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/landing/consultation?type=study-abroad-steps"
            class="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-50"
          >
            Book a Free Consultation
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Import icon
const ArrowLeftIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor'
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
        })
      ]
    )
})

// Add function to handle browser back navigation
const goBack = () => {
  window.history.back()
}

// Study abroad steps data
const studySteps = [
  {
    title: 'Research & Planning',
    description:
      'Start by researching potential destinations, universities, and programs that match your academic interests and career goals.',
    points: [
      'Identify your academic goals and career aspirations',
      'Research countries with renowned educational institutions',
      'Consider factors like language, culture, and living costs',
      'Create a timeline for your application process'
    ],
    action: {
      text: 'Explore Destinations',
      link: '/landing/study-destinations'
    }
  },
  {
    title: 'Test Preparation',
    description:
      'Most international programs require standardized tests as part of the application process.',
    points: [
      'Prepare for language proficiency tests (IELTS, TOEFL)',
      'Study for standardized tests (SAT, GRE, GMAT) if required',
      'Register for test dates with enough time before applications',
      'Consider test preparation courses for optimal scores'
    ],
    action: {
      text: 'IELTS Preparation',
      link: '/landing/ielts'
    }
  },
  {
    title: 'University Selection',
    description:
      'Choose universities that offer programs aligned with your academic goals and budget.',
    points: [
      'Research university rankings and program specializations',
      'Check admission requirements and deadlines',
      'Consider scholarship opportunities',
      'Evaluate campus facilities and accommodation options'
    ],
    action: {
      text: 'Find Courses',
      link: '#', // Changed from '/find-course' to '#' to disable actual navigation
      disabled: true // Add a disabled flag to indicate this link is disabled
    }
  },
  {
    title: 'Application Submission',
    description:
      'Prepare and submit strong applications to your selected institutions.',
    points: [
      'Prepare personal statements and essays',
      'Obtain recommendation letters from professors or employers',
      'Gather academic transcripts and certificates',
      'Submit applications before deadlines'
    ]
  },
  {
    title: 'Financial Planning',
    description:
      'Create a comprehensive financial plan covering tuition, living expenses, and travel costs.',
    points: [
      'Research tuition fees and cost of living',
      'Explore scholarship opportunities',
      'Consider part-time work options if permitted',
      'Prepare financial documentation for visa applications'
    ]
  },
  {
    title: 'Visa Application',
    description:
      'Once accepted, apply for a student visa for your destination country.',
    points: [
      'Research visa requirements and processing times',
      'Prepare required documentation (acceptance letter, financial proof)',
      'Schedule and attend visa interviews if required',
      'Follow up on visa application status'
    ]
  },
  {
    title: 'Pre-Departure Preparation',
    description:
      'Prepare for your journey and stay abroad with essential arrangements.',
    points: [
      'Arrange accommodation near your campus',
      'Purchase health insurance',
      'Book flights and plan airport transfers',
      'Learn about local culture and customs'
    ],
    action: {
      text: 'Student Essentials',
      link: '/landing/student-essentials'
    }
  },
  {
    title: 'Arrival & Orientation',
    description:
      'Adjust to your new environment and begin your academic journey.',
    points: [
      'Attend university orientation sessions',
      'Complete registration formalities',
      'Open a local bank account',
      'Familiarize yourself with campus resources and facilities'
    ]
  }
]
</script>

<style scoped>
/* Add styles for the disabled link with blur effect */
:deep(.disabled-link) {
  filter: blur(1.5px);
  pointer-events: none;
  opacity: 0.7;
  cursor: not-allowed;
  background-color: #ccc !important;
  color: #888 !important;
}
</style>
