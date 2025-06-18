<template>
  <section class="services-section py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="mb-3 text-3xl font-bold">Our Services</h2>
        <p class="mx-auto max-w-3xl text-gray-600">
          We provide extensive academic guidance for UG and PG programs,
          including MBA and PhD, through our unparalleled 'ground and cloud'
          system.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <!-- Service Cards using v-for -->
        <div
          v-for="service in services"
          :key="service.id"
          class="overflow-hidden rounded-lg bg-white shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="h-40 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="mb-1 text-lg font-bold">{{ service.title }}</h3>
            <p class="text-sm text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileEvaluationImage from '@/assets/images/services/profile-evaluation.jpg'
import universitySelectionImage from '@/assets/images/services/university-selection.jpg'
import documentPreparationImage from '@/assets/images/services/document-preparation.jpg'
import scholarshipImage from '@/assets/images/services/scholarship.jpg'
import applicationGuidanceImage from '@/assets/images/services/application-guidance.jpg'
import visaSupportImage from '@/assets/images/services/visa-support.jpg'
import preDepartureImage from '@/assets/images/services/pre-departure.jpg'
import loanAssistanceImage from '@/assets/images/services/loan-assistance.jpg'

// Define reactive data
const services = [
  {
    id: 1,
    title: 'Detailed Profile Evaluation',
    description:
      'Tailored guidance to help you create a winning application profile.',
    image: profileEvaluationImage
  },
  {
    id: 2,
    title: 'University Selection',
    description: 'Expert advice on finding the best-fit institutions',
    image: universitySelectionImage
  },
  {
    id: 3,
    title: 'Document Preparation',
    description: 'Professional assistance with SOPs, LORs, and essays',
    image: documentPreparationImage
  },
  {
    id: 4,
    title: 'Scholarship Assistance',
    description: 'Access to exclusive funding opportunities',
    image: scholarshipImage
  },
  {
    id: 5,
    title: 'Application Guidance',
    description: 'Streamlined process with real-time updates',
    image: applicationGuidanceImage
  },
  {
    id: 6,
    title: 'Visa Support',
    description: 'Expert advice and preparation',
    image: visaSupportImage
  },
  {
    id: 7,
    title: 'Pre-Departure Briefing',
    description: 'Essential tips for a smooth transition',
    image: preDepartureImage
  },
  {
    id: 8,
    title: 'Student Loan Assistance',
    description: 'Easy access to financial support',
    image: loanAssistanceImage
  }
]
</script>
