<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="mb-2 text-center text-3xl font-bold text-gray-800">
        Our Programs
      </h2>
      <p class="mx-auto mb-10 max-w-3xl text-center text-gray-600">
        We provide extensive academic guidance for UG and PG programs, including
        MBA and PhD, through our unparalleled 'ground and cloud' system.
      </p>

      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
      >
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="flex h-full flex-col rounded-lg border bg-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="flex-grow">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
            >
              <component :is="program.icon" />
            </div>
            <h3 class="mb-2 text-lg font-semibold">{{ program.title }}</h3>
            <p class="mb-4 text-sm text-gray-600">
              {{ program.description }}
            </p>
          </div>
          <div class="mt-auto pt-4">
            <NuxtLink
              :to="'/landing/consultation?type=' + program.title"
              class="font-medium text-red-600 hover:underline"
              >{{ program.linkText }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import UndergraduateIcon from '@/assets/icons/application-icon.vue'
import MastersIcon from '@/assets/icons/masters-icon.vue'
import MBAIcon from '@/assets/icons/cup-icon.vue'
import PhDIcon from '@/assets/icons/phd-icon.vue'
import ManagementIcon from '@/assets/icons/loan-icon.vue'
import NurseIcon from '@/assets/icons/counselling-icon.vue'
import AccountantIcon from '@/assets/icons/visa-icon.vue'
import TeacherIcon from '@/assets/icons/institute-icon.vue'

const programs = [
  {
    icon: UndergraduateIcon,
    title: 'Undergraduate Programs',
    description:
      "Navigate the admissions process with confidence. We'll help you choose the right program and guide you through applications, scholarships, and visa processes.",
    linkText: 'Learn More'
  },
  {
    icon: MastersIcon,
    title: "Master's Programs",
    description:
      "Secure your spot in a world-class graduate program with our expert guidance. From SOP writing to interviews, we've got you covered.",
    linkText: "Explore Master's Options"
  },
  {
    icon: MBAIcon,
    title: 'MBA Programs',
    description:
      'Get personalised mentorship for top MBA programs. Our experts will help you craft a winning application and maximise your chances.',
    linkText: 'Find Your Dream MBA'
  },
  {
    icon: PhDIcon,
    title: 'PhD Programs',
    description:
      'Receive tailored support for your PhD application process, including research proposal drafting, supervisor selection, and funding options.',
    linkText: 'Start Your PhD Journey'
  },
  {
    icon: ManagementIcon,
    title: 'Management Programs',
    description:
      'Our specialized advisors will help you gain admission into top Management programs worldwide.',
    linkText: 'Explore Management Programs'
  },
  {
    icon: NurseIcon,
    title: 'Nurses Work in US',
    description:
      'Qualified nurses can access exclusive opportunities to work in the US healthcare system with our comprehensive placement assistance and visa support.',
    linkText: 'Nursing Opportunities'
  },
  {
    icon: AccountantIcon,
    title: 'Accountants Work in US',
    description:
      'We help accounting professionals navigate the certification requirements and visa processes needed to establish a successful career in the US financial sector.',
    linkText: 'Accounting Careers'
  },
  {
    icon: TeacherIcon,
    title: 'Teachers Needed in Ireland',
    description:
      'Connect with teaching positions in Ireland education system. We provide guidance on qualification recognition, job placement, and relocation assistance.',
    linkText: 'Teaching Positions'
  }
]
</script>
