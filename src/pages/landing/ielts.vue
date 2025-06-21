<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">IELTS Preparation & Testing</h1>
          <p class="max-w-3xl text-xl">
            Your pathway to academic and professional success through English
            language proficiency.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- What is IELTS Section -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">What is IELTS?</h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p class="mb-4 text-gray-600">
                IELTS (International English Language Testing System) is the
                world's most popular English language proficiency test for
                higher education and global migration. It assesses all of your
                English skills — reading, writing, listening and speaking.
              </p>
              <p class="mb-4 text-gray-600">
                The test is designed to reflect how you'll use English in real
                life, with tasks that assess your ability to communicate
                effectively in an English-speaking environment.
              </p>
            </div>
            <div class="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://placehold.co/600x400/e2e8f0/1e40af?text=IELTS+Overview"
                alt="IELTS Overview"
                class="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <!-- IELTS Test Types Section -->
        <section class="mb-16 rounded-xl bg-gray-50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            IELTS Test Types
          </h2>
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
            <!-- Academic Test -->
            <div class="rounded-lg bg-white p-6 shadow-md">
              <div class="mb-4 flex items-center">
                <Icon
                  name="heroicons:academic-cap"
                  class="mr-3 h-8 w-8 text-blue-600"
                />
                <h3 class="text-xl font-semibold">Academic Test</h3>
              </div>
              <p class="mb-4 text-gray-600">
                For those applying to study at undergraduate or postgraduate
                levels, or for professional registration purposes.
              </p>
              <ul class="list-disc pl-5 text-gray-600">
                <li>University admissions</li>
                <li>Professional certification</li>
                <li>Higher education programs</li>
              </ul>
            </div>

            <!-- General Training Test -->
            <div class="rounded-lg bg-white p-6 shadow-md">
              <div class="mb-4 flex items-center">
                <Icon
                  name="heroicons:globe-alt"
                  class="mr-3 h-8 w-8 text-green-600"
                />
                <h3 class="text-xl font-semibold">General Training Test</h3>
              </div>
              <p class="mb-4 text-gray-600">
                For those migrating to Australia, Canada, New Zealand or the UK,
                or applying for secondary education, training programs or work
                experience.
              </p>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Migration purposes</li>
                <li>Work experience programs</li>
                <li>Secondary education</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Preparation Resources -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Preparation Resources
          </h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <!-- Resource Card 1 -->
            <div
              class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Icon
                name="heroicons:book-open"
                class="mb-4 h-10 w-10 text-blue-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Practice Materials</h3>
              <p class="text-gray-600">
                Access official IELTS practice papers, sample questions, and
                expert guidance materials.
              </p>
            </div>

            <!-- Resource Card 2 -->
            <div
              class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Icon
                name="heroicons:academic-cap"
                class="mb-4 h-10 w-10 text-blue-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Prep Courses</h3>
              <p class="text-gray-600">
                Join our specialized IELTS preparation courses taught by
                certified instructors.
              </p>
            </div>

            <!-- Resource Card 3 -->
            <div
              class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Icon
                name="heroicons:video-camera"
                class="mb-4 h-10 w-10 text-blue-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Online Workshops</h3>
              <p class="text-gray-600">
                Participate in live online workshops focusing on each section of
                the IELTS exam.
              </p>
            </div>
          </div>
        </section>

        <!-- Test Format -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">Test Format</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-3 text-left">Section</th>
                  <th class="border border-gray-300 p-3 text-left">Duration</th>
                  <th class="border border-gray-300 p-3 text-left">Format</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-3 font-medium">
                    Listening
                  </td>
                  <td class="border border-gray-300 p-3">30 minutes</td>
                  <td class="border border-gray-300 p-3">
                    Four recorded sections of increasing difficulty
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-medium">
                    Reading
                  </td>
                  <td class="border border-gray-300 p-3">60 minutes</td>
                  <td class="border border-gray-300 p-3">
                    Three passages with tasks (Academic) or five sections
                    (General Training)
                  </td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-medium">
                    Writing
                  </td>
                  <td class="border border-gray-300 p-3">60 minutes</td>
                  <td class="border border-gray-300 p-3">
                    Two tasks: a graph/chart description and an essay (Academic)
                    or a letter and an essay (General Training)
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-medium">
                    Speaking
                  </td>
                  <td class="border border-gray-300 p-3">11-14 minutes</td>
                  <td class="border border-gray-300 p-3">
                    Face-to-face interview with three parts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="rounded-xl bg-blue-50 p-4 lg:p-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 class="mb-4 text-2xl font-bold text-gray-800">
                Ready to Start Your IELTS Journey?
              </h2>
              <p class="mb-6 text-gray-600">
                Our expert counselors can guide you through the IELTS
                preparation process, help you register for the test, and provide
                personalized advice.
              </p>
              <button
                class="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                @click="navigateTo('/landing/consultation?type=ielts')"
              >
                Schedule a Consultation
              </button>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-lg font-semibold">Contact Information</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:envelope"
                    class="mr-2 hidden h-5 w-5 text-blue-600 lg:block"
                  />
                  <span>ielts@goglobaledutravel.com</span>
                </div>
                <div class="flex items-center">
                  <Icon
                    name="heroicons:phone"
                    class="mr-2 h-5 w-5 text-blue-600"
                  />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div class="flex items-center">
                  <Icon
                    name="heroicons:map-pin"
                    class="mr-2 h-5 w-5 text-blue-600"
                  />
                  <span>123 Education Street, City, Country</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'IELTS Preparation & Testing | GoGlobalEduTravel',
  meta: [
    {
      name: 'description',
      content:
        'Learn about IELTS testing, preparation resources, and how GoGlobalEduTravel can help you achieve the score you need for academic success abroad.'
    }
  ]
})
</script>
