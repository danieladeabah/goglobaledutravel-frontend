<template>
  <section class="py-16 text-center">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="mb-2 text-center text-3xl font-semibold">
        Why Choose Our Premium Counselling?
      </h2>
      <p class="mb-10 text-lg text-gray-600">
        Personalized guidance, proven results
      </p>

      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="flex cursor-pointer flex-col items-center rounded-3xl border border-gray-200 p-5 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            class="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-white"
          >
            <component :is="service.icon" />
          </div>
          <p class="max-w-[150px] text-sm leading-relaxed text-gray-700">
            {{ service.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CounsellingIcon from '@/assets/icons/counselling-icon.vue'
import InstituteIcon from '@/assets/icons/institute-icon.vue'
import ProfileBuildingIcon from '@/assets/icons/profile-building-icon.vue'
import DocumentIcon from '@/assets/icons/document-icon.vue'
import ApplicationIcon from '@/assets/icons/application-icon.vue'
import ScholarshipIcon from '@/assets/icons/scholarship-icon.vue'
import InterviewIcon from '@/assets/icons/interview-icon.vue'
import LoanIcon from '@/assets/icons/loan-icon.vue'
import VisaIcon from '@/assets/icons/visa-icon.vue'
import PreDepartureIcon from '@/assets/icons/pre-departure-icon.vue'
import WebinarIcon from '@/assets/icons/webinar-icon.vue'

const services = [
  { icon: CounsellingIcon, text: 'In-person and Virtual Counselling' },
  { icon: InstituteIcon, text: 'Institute and Course Selection' },
  { icon: ProfileBuildingIcon, text: 'Comprehensive Profile Building Support' },
  { icon: DocumentIcon, text: 'Document Preparation and Editing' },
  { icon: ApplicationIcon, text: 'End-to-End Application Support' },
  { icon: ScholarshipIcon, text: 'Access to Exclusive Scholarships' },
  {
    icon: InterviewIcon,
    text: 'Tailored Interview Preparation and Mock Sessions'
  },
  { icon: LoanIcon, text: 'Loan Assistance' },
  { icon: VisaIcon, text: 'Visa Guidance' },
  { icon: ProfileBuildingIcon, text: 'Accommodation Assistance' },
  { icon: PreDepartureIcon, text: 'Pre-Departure Support' },
  { icon: WebinarIcon, text: 'Informative Webinar' }
]
</script>
