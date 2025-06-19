<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-red-600 to-red-700 py-12 text-white">
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Student Essentials</h1>
          <p class="max-w-3xl text-xl">
            Everything you need to prepare for your international education
            journey.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- Quick Links Section -->
        <section class="mb-16">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              class="rounded-xl bg-red-50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <Icon
                name="heroicons:document-check"
                class="mx-auto mb-4 h-12 w-12 text-red-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Visa Requirements</h3>
              <p class="text-gray-600">
                Essential documentation and application processes for student
                visas
              </p>
              <button
                class="mt-4 rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                Learn More
              </button>
            </div>

            <div
              class="rounded-xl bg-red-50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <Icon
                name="heroicons:home"
                class="mx-auto mb-4 h-12 w-12 text-red-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Accommodation</h3>
              <p class="text-gray-600">
                Housing options, dorm information, and rental assistance abroad
              </p>
              <button
                class="mt-4 rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                Find Housing
              </button>
            </div>

            <div
              class="rounded-xl bg-red-50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <Icon
                name="heroicons:currency-dollar"
                class="mx-auto mb-4 h-12 w-12 text-red-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Financial Planning</h3>
              <p class="text-gray-600">
                Budgeting tools, scholarship info, and financial assistance
                resources
              </p>
              <button
                class="mt-4 rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                Financial Tools
              </button>
            </div>
          </div>
        </section>

        <!-- Pre-Departure Checklist -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Pre-Departure Checklist
          </h2>
          <div class="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div class="p-6">
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="mt-1 flex-shrink-0">
                    <Icon
                      name="heroicons:check-circle"
                      class="h-5 w-5 text-green-500"
                    />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-800">Secure Your Visa</h3>
                    <p class="text-gray-600">
                      Apply for your student visa as early as possible to avoid
                      delays.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mt-1 flex-shrink-0">
                    <Icon
                      name="heroicons:check-circle"
                      class="h-5 w-5 text-green-500"
                    />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-800">
                      Book Accommodation
                    </h3>
                    <p class="text-gray-600">
                      Arrange your housing before arriving at your destination.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mt-1 flex-shrink-0">
                    <Icon
                      name="heroicons:check-circle"
                      class="h-5 w-5 text-green-500"
                    />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-800">Health Insurance</h3>
                    <p class="text-gray-600">
                      Purchase international health coverage that meets host
                      country requirements.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mt-1 flex-shrink-0">
                    <Icon
                      name="heroicons:check-circle"
                      class="h-5 w-5 text-green-500"
                    />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-800">Pack Essentials</h3>
                    <p class="text-gray-600">
                      Prepare clothing and personal items appropriate for your
                      destination's climate.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mt-1 flex-shrink-0">
                    <Icon
                      name="heroicons:check-circle"
                      class="h-5 w-5 text-green-500"
                    />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-800">
                      Financial Preparations
                    </h3>
                    <p class="text-gray-600">
                      Set up international banking access and understand
                      currency exchange.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <button
              class="rounded-md bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700"
            >
              Download Complete Checklist PDF
            </button>
          </div>
        </section>

        <!-- Health & Insurance -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Health & Insurance
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p class="mb-4 text-gray-600">
                Studying abroad often requires specific health insurance
                coverage. Many countries and universities mandate international
                students to have adequate health insurance for the duration of
                their studies.
              </p>
              <p class="mb-4 text-gray-600">
                We can help you find the most suitable health insurance plan
                that meets both your needs and the requirements of your host
                institution or country.
              </p>
              <h3 class="mb-2 text-lg font-semibold">
                Key Insurance Considerations:
              </h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Coverage period matches your study program</li>
                <li>Emergency medical evacuation and repatriation</li>
                <li>Prescription medication coverage</li>
                <li>Mental health services</li>
                <li>Outpatient and hospital care</li>
              </ul>
            </div>
            <div class="rounded-lg bg-gray-50 p-6">
              <h3 class="mb-4 text-lg font-semibold">
                Recommended Insurance Providers
              </h3>
              <div class="space-y-4">
                <div class="flex items-center rounded bg-white p-3 shadow-sm">
                  <Icon
                    name="heroicons:shield-check"
                    class="mr-3 h-8 w-8 text-red-600"
                  />
                  <div>
                    <h4 class="font-medium">International Student Insurance</h4>
                    <p class="text-sm text-gray-500">
                      Comprehensive coverage tailored for students
                    </p>
                  </div>
                </div>
                <div class="flex items-center rounded bg-white p-3 shadow-sm">
                  <Icon
                    name="heroicons:shield-check"
                    class="mr-3 h-8 w-8 text-red-600"
                  />
                  <div>
                    <h4 class="font-medium">WorldCare Student Health</h4>
                    <p class="text-sm text-gray-500">
                      Global coverage with multilingual support
                    </p>
                  </div>
                </div>
                <div class="flex items-center rounded bg-white p-3 shadow-sm">
                  <Icon
                    name="heroicons:shield-check"
                    class="mr-3 h-8 w-8 text-red-600"
                  />
                  <div>
                    <h4 class="font-medium">EduHealth Global</h4>
                    <p class="text-sm text-gray-500">
                      Affordable plans for various study destinations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Cultural Adaptation -->
        <section class="mb-16 rounded-xl bg-gray-50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Cultural Adaptation
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 class="mb-3 text-lg font-semibold">
                Understanding Culture Shock
              </h3>
              <p class="mb-4 text-gray-600">
                Culture shock is a common experience when moving to a new
                country. It typically follows four phases:
              </p>
              <ol class="list-decimal space-y-2 pl-5 text-gray-600">
                <li>
                  <span class="font-medium">Honeymoon phase:</span> Initial
                  excitement about the new environment
                </li>
                <li>
                  <span class="font-medium">Frustration phase:</span> Challenges
                  with cultural differences emerge
                </li>
                <li>
                  <span class="font-medium">Adjustment phase:</span> Developing
                  strategies to adapt
                </li>
                <li>
                  <span class="font-medium">Acceptance phase:</span> Comfortable
                  navigation of the new culture
                </li>
              </ol>
            </div>
            <div>
              <h3 class="mb-3 text-lg font-semibold">Adaptation Strategies</h3>
              <div class="space-y-3">
                <div class="flex items-start">
                  <Icon
                    name="heroicons:light-bulb"
                    class="mr-2 mt-1 h-5 w-5 text-yellow-500"
                  />
                  <p class="text-gray-600">
                    Join student organizations and cultural clubs
                  </p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:light-bulb"
                    class="mr-2 mt-1 h-5 w-5 text-yellow-500"
                  />
                  <p class="text-gray-600">
                    Attend orientation events and welcome activities
                  </p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:light-bulb"
                    class="mr-2 mt-1 h-5 w-5 text-yellow-500"
                  />
                  <p class="text-gray-600">
                    Learn basic phrases in the local language
                  </p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:light-bulb"
                    class="mr-2 mt-1 h-5 w-5 text-yellow-500"
                  />
                  <p class="text-gray-600">
                    Connect with other international students
                  </p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:light-bulb"
                    class="mr-2 mt-1 h-5 w-5 text-yellow-500"
                  />
                  <p class="text-gray-600">
                    Establish a support network both locally and back home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Resources Download -->
        <section class="mb-16 text-center">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Essential Resources
          </h2>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div
              class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Icon
                name="heroicons:document-text"
                class="mx-auto mb-4 h-12 w-12 text-red-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Country Guides</h3>
              <p class="mb-4 text-gray-600">
                Detailed information about popular study destinations
              </p>
              <button
                class="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                Download Guides
              </button>
            </div>

            <div
              class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Icon
                name="heroicons:clipboard-document-list"
                class="mx-auto mb-4 h-12 w-12 text-red-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Packing Lists</h3>
              <p class="mb-4 text-gray-600">
                Customized packing guides for different destinations
              </p>
              <button
                class="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                Get Packing Lists
              </button>
            </div>

            <div
              class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Icon
                name="heroicons:calculator"
                class="mx-auto mb-4 h-12 w-12 text-red-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Budget Planners</h3>
              <p class="mb-4 text-gray-600">
                Tools to help manage expenses while studying abroad
              </p>
              <button
                class="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                Access Planners
              </button>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section class="rounded-xl bg-red-50 p-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">
              Need Personalized Assistance?
            </h2>
            <p class="mb-6 text-gray-600">
              Our student advisors can provide tailored guidance for your
              specific study abroad journey.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                class="rounded-md bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
              >
                Schedule a Consultation
              </button>
              <button
                class="rounded-md border border-red-600 px-6 py-3 text-red-600 transition-colors hover:bg-red-50"
              >
                Contact an Advisor
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Student Essentials | Go Global Edu Travel',
  meta: [
    {
      name: 'description',
      content:
        'Essential resources, guides and tools to help international students prepare for studying abroad, including visa requirements, accommodation, health insurance and cultural adaptation.'
    }
  ]
})
</script>
