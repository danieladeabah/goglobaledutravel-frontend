<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Back button -->
      <div class="mb-6">
        <button
          @click="goBack"
          class="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-red-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-red-700 hover:shadow-sm"
        >
          <ArrowLeftIcon class="mr-2 h-5 w-5" />
          <span>Back</span>
        </button>
      </div>

      <!-- Header Section -->
      <div class="mb-10 text-center">
        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Professional Work Opportunities
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
          Discover international career opportunities for qualified
          professionals
        </p>
      </div>

      <!-- Professional Programs Section -->
      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Nurses Program -->
        <div
          class="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Nurses Work in US"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-xl font-bold text-white">Nurses Work in US</h3>
            </div>
          </div>
          <div class="p-6">
            <h2 class="mb-3 text-xl font-bold text-gray-900">
              Work as a Nurse in the United States
            </h2>
            <p class="mb-4 text-gray-700">
              Qualified nurses can access exclusive opportunities to work in the
              US healthcare system with our comprehensive placement assistance
              and visa support.
            </p>

            <h3 class="mb-2 text-lg font-semibold text-gray-800">
              Requirements:
            </h3>
            <ul class="mb-4 list-disc pl-5 text-gray-600">
              <li>Nursing degree from an accredited institution</li>
              <li>Minimum 2 years clinical experience</li>
              <li>NCLEX-RN certification</li>
              <li>English language proficiency (IELTS/TOEFL)</li>
              <li>Clean background check</li>
            </ul>

            <h3 class="mb-2 text-lg font-semibold text-gray-800">
              What We Offer:
            </h3>
            <ul class="mb-6 list-disc pl-5 text-gray-600">
              <li>NCLEX-RN exam preparation</li>
              <li>US credential evaluation assistance</li>
              <li>CGFNS certification guidance</li>
              <li>Visa sponsorship coordination</li>
              <li>Hospital placement services</li>
              <li>Relocation support</li>
            </ul>

            <NuxtLink
              to="/landing/consultation?type=nurse-program"
              class="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
            >
              Apply for Nursing Program
              <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Accountants Program -->
        <div
          class="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Accountants Work in US"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-xl font-bold text-white">
                Accountants Work in US
              </h3>
            </div>
          </div>
          <div class="p-6">
            <h2 class="mb-3 text-xl font-bold text-gray-900">
              US Accounting Careers
            </h2>
            <p class="mb-4 text-gray-700">
              We help accounting professionals navigate the certification
              requirements and visa processes needed to establish a successful
              career in the US financial sector.
            </p>

            <h3 class="mb-2 text-lg font-semibold text-gray-800">
              Requirements:
            </h3>
            <ul class="mb-4 list-disc pl-5 text-gray-600">
              <li>Accounting degree from an accredited institution</li>
              <li>Minimum 3 years professional experience</li>
              <li>Familiarity with US GAAP (preferred)</li>
              <li>English language proficiency (IELTS/TOEFL)</li>
            </ul>

            <h3 class="mb-2 text-lg font-semibold text-gray-800">
              What We Offer:
            </h3>
            <ul class="mb-6 list-disc pl-5 text-gray-600">
              <li>US CPA exam preparation</li>
              <li>Credential evaluation services</li>
              <li>License application guidance</li>
              <li>Interview preparation with US firms</li>
              <li>Visa sponsorship coordination</li>
              <li>Relocation assistance</li>
            </ul>

            <NuxtLink
              to="/landing/consultation?type=accountant-program"
              class="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
            >
              Apply for Accounting Program
              <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Teachers Program -->
        <div
          class="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Teachers in Ireland"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-xl font-bold text-white">
                Teachers Needed in Ireland
              </h3>
            </div>
          </div>
          <div class="p-6">
            <h2 class="mb-3 text-xl font-bold text-gray-900">
              Teaching Opportunities in Ireland
            </h2>
            <p class="mb-4 text-gray-700">
              Connect with teaching positions in Ireland's education system. We
              provide guidance on qualification recognition, job placement, and
              relocation assistance.
            </p>

            <h3 class="mb-2 text-lg font-semibold text-gray-800">
              Requirements:
            </h3>
            <ul class="mb-4 list-disc pl-5 text-gray-600">
              <li>Education degree or teaching qualification</li>
              <li>Minimum 2 years teaching experience</li>
              <li>
                Registration with Teaching Council of Ireland (we assist with
                this)
              </li>
              <li>English language proficiency</li>
              <li>Clean background check</li>
            </ul>

            <h3 class="mb-2 text-lg font-semibold text-gray-800">
              What We Offer:
            </h3>
            <ul class="mb-6 list-disc pl-5 text-gray-600">
              <li>Qualification recognition assistance</li>
              <li>Teaching Council registration support</li>
              <li>School placement services across Ireland</li>
              <li>Visa and work permit guidance</li>
              <li>Relocation support</li>
              <li>Ongoing professional development</li>
            </ul>

            <NuxtLink
              to="/landing/consultation?type=teacher-program"
              class="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
            >
              Apply for Teaching Program
              <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Process Section -->
      <div class="mt-16">
        <h2
          class="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Our Process
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div
            class="flex flex-col items-center rounded-lg bg-white p-6 shadow-md"
          >
            <div
              class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600"
            >
              <span class="text-2xl font-bold">1</span>
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold">
              Qualification Assessment
            </h3>
            <p class="text-center text-gray-600">
              We evaluate your credentials and experience to determine
              eligibility.
            </p>
          </div>

          <div
            class="flex flex-col items-center rounded-lg bg-white p-6 shadow-md"
          >
            <div
              class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600"
            >
              <span class="text-2xl font-bold">2</span>
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold">
              Documentation & Preparation
            </h3>
            <p class="text-center text-gray-600">
              We help prepare all necessary documentation and certifications.
            </p>
          </div>

          <div
            class="flex flex-col items-center rounded-lg bg-white p-6 shadow-md"
          >
            <div
              class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600"
            >
              <span class="text-2xl font-bold">3</span>
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold">
              Placement & Application
            </h3>
            <p class="text-center text-gray-600">
              We match you with appropriate opportunities and assist with
              applications.
            </p>
          </div>

          <div
            class="flex flex-col items-center rounded-lg bg-white p-6 shadow-md"
          >
            <div
              class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600"
            >
              <span class="text-2xl font-bold">4</span>
            </div>
            <h3 class="mb-2 text-center text-lg font-semibold">
              Visa & Relocation
            </h3>
            <p class="text-center text-gray-600">
              We provide guidance for visa processes and relocation support.
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16">
        <h2
          class="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Frequently Asked Questions
        </h2>

        <div class="mx-auto max-w-3xl space-y-4">
          <div class="rounded-lg border border-gray-200">
            <button
              class="flex w-full items-center justify-between p-4 text-left"
              @click="toggleFAQ(0)"
            >
              <span class="font-medium"
                >How long does the entire process take?</span
              >
              <Icon
                :name="
                  openIndex === 0
                    ? 'heroicons:chevron-up'
                    : 'heroicons:chevron-down'
                "
                class="h-5 w-5 text-gray-500"
              />
            </button>
            <div
              v-show="openIndex === 0"
              class="border-t border-gray-200 p-4 text-gray-600"
            >
              <p>
                The timeline varies by profession and destination country.
                Generally, the process takes 6-12 months from initial assessment
                to placement. Nursing and teaching positions may have specific
                academic year or intake cycles, while accounting positions are
                more flexible throughout the year.
              </p>
            </div>
          </div>

          <div class="rounded-lg border border-gray-200">
            <button
              class="flex w-full items-center justify-between p-4 text-left"
              @click="toggleFAQ(1)"
            >
              <span class="font-medium">What costs should I expect?</span>
              <Icon
                :name="
                  openIndex === 1
                    ? 'heroicons:chevron-up'
                    : 'heroicons:chevron-down'
                "
                class="h-5 w-5 text-gray-500"
              />
            </button>
            <div
              v-show="openIndex === 1"
              class="border-t border-gray-200 p-4 text-gray-600"
            >
              <p>
                Costs include credential evaluation fees,
                licensing/certification exams, visa application fees, and our
                service fee. Total costs typically range from $3,000-$8,000
                depending on the profession and destination. Many employers
                offer reimbursement packages for qualified candidates. We
                provide a detailed breakdown during your initial consultation.
              </p>
            </div>
          </div>

          <div class="rounded-lg border border-gray-200">
            <button
              class="flex w-full items-center justify-between p-4 text-left"
              @click="toggleFAQ(2)"
            >
              <span class="font-medium">Are there guaranteed placements?</span>
              <Icon
                :name="
                  openIndex === 2
                    ? 'heroicons:chevron-up'
                    : 'heroicons:chevron-down'
                "
                class="h-5 w-5 text-gray-500"
              />
            </button>
            <div
              v-show="openIndex === 2"
              class="border-t border-gray-200 p-4 text-gray-600"
            >
              <p>
                While we have a high success rate with our placements, we cannot
                guarantee positions as final hiring decisions rest with the
                employers. However, we work with established partners who
                actively recruit qualified professionals, and we prepare you
                thoroughly for interviews and application processes to maximize
                your chances of success.
              </p>
            </div>
          </div>

          <div class="rounded-lg border border-gray-200">
            <button
              class="flex w-full items-center justify-between p-4 text-left"
              @click="toggleFAQ(3)"
            >
              <span class="font-medium">Can my family relocate with me?</span>
              <Icon
                :name="
                  openIndex === 3
                    ? 'heroicons:chevron-up'
                    : 'heroicons:chevron-down'
                "
                class="h-5 w-5 text-gray-500"
              />
            </button>
            <div
              v-show="openIndex === 3"
              class="border-t border-gray-200 p-4 text-gray-600"
            >
              <p>
                Yes, most work visas allow for dependents (spouse and children)
                to accompany the primary visa holder. We provide guidance on the
                specific requirements for dependent visas, as well as
                information about education, healthcare, and other essential
                services for families in the destination country.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="mt-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-8 text-center text-white"
      >
        <h2 class="text-2xl font-bold">
          Ready to Start Your International Career?
        </h2>
        <p class="mx-auto mt-4 max-w-xl">
          Our team of specialist advisors is ready to help you navigate the path
          to an international professional position.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/landing/consultation?type=professional-work"
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
// Import arrow icon
const ArrowLeftIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        class: 'h-5 w-5'
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

// Function to handle back button
const goBack = () => {
  window.history.back()
}

// FAQ toggling functionality
const openIndex = ref(-1)

const toggleFAQ = index => {
  if (openIndex.value === index) {
    openIndex.value = -1
  } else {
    openIndex.value = index
  }
}

// Page metadata
useHead({
  title:
    'Professional Work Opportunities | GoGlobal Education & Travel Consult',
  meta: [
    {
      name: 'description',
      content:
        "Explore international career opportunities for nurses, accountants, and teachers through GoGlobal Education & Travel Consult's professional placement programs."
    }
  ]
})
</script>
