<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-purple-600 to-indigo-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Educational Programs</h1>
          <p class="max-w-3xl text-xl">
            Discover our range of tailored educational programs to launch your
            international education journey.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- Program Categories -->
        <section class="mb-16">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <button
              class="rounded-full bg-indigo-100 px-6 py-3 font-medium text-indigo-700 transition-colors hover:bg-indigo-200"
            >
              All Programs
            </button>
            <button
              class="rounded-full border border-gray-200 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Undergraduate
            </button>
            <button
              class="rounded-full border border-gray-200 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Postgraduate
            </button>
            <button
              class="rounded-full border border-gray-200 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Summer Programs
            </button>
          </div>
        </section>

        <!-- Featured Programs -->
        <section class="mb-16">
          <h2 class="mb-8 text-2xl font-bold text-gray-800">
            Featured Programs
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <!-- Program Card 1 -->
            <div
              class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div class="h-48 overflow-hidden">
                <img
                  src="https://placehold.co/800x600/e2e8f0/4338ca?text=Undergraduate+Studies"
                  alt="Undergraduate Studies Program"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <div class="mb-3 flex items-center justify-between">
                  <span
                    class="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700"
                    >Undergraduate</span
                  >
                  <span class="text-sm text-gray-500">3-4 Years</span>
                </div>
                <h3 class="mb-2 text-xl font-bold">
                  Global Undergraduate Studies
                </h3>
                <p class="mb-4 text-gray-600">
                  Comprehensive support for bachelor's degree programs at top
                  international universities.
                </p>
                <div class="mb-4 flex items-center text-sm text-gray-500">
                  <Icon name="heroicons:map-pin" class="mr-1 h-4 w-4" />
                  <span>Multiple Destinations</span>
                </div>
                <button
                  class="w-full rounded-md bg-indigo-600 py-2 text-white transition-colors hover:bg-indigo-700"
                >
                  Learn More
                </button>
              </div>
            </div>

            <!-- Program Card 2 -->
            <div
              class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div class="h-48 overflow-hidden">
                <img
                  src="https://placehold.co/800x600/e2e8f0/4338ca?text=MBA+Programs"
                  alt="MBA Programs"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <div class="mb-3 flex items-center justify-between">
                  <span
                    class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                    >Postgraduate</span
                  >
                  <span class="text-sm text-gray-500">1-2 Years</span>
                </div>
                <h3 class="mb-2 text-xl font-bold">
                  International MBA Pathways
                </h3>
                <p class="mb-4 text-gray-600">
                  Fast-track your business career with our supported MBA
                  application and study program.
                </p>
                <div class="mb-4 flex items-center text-sm text-gray-500">
                  <Icon name="heroicons:map-pin" class="mr-1 h-4 w-4" />
                  <span>US, UK, Canada, Australia</span>
                </div>
                <button
                  class="w-full rounded-md bg-indigo-600 py-2 text-white transition-colors hover:bg-indigo-700"
                >
                  Learn More
                </button>
              </div>
            </div>

            <!-- Program Card 3 -->
            <div
              class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div class="h-48 overflow-hidden">
                <img
                  src="https://placehold.co/800x600/e2e8f0/4338ca?text=Summer+Schools"
                  alt="Summer School Programs"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <div class="mb-3 flex items-center justify-between">
                  <span
                    class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                    >Summer</span
                  >
                  <span class="text-sm text-gray-500">4-8 Weeks</span>
                </div>
                <h3 class="mb-2 text-xl font-bold">Global Summer Schools</h3>
                <p class="mb-4 text-gray-600">
                  Immersive short-term academic programs at prestigious
                  universities worldwide.
                </p>
                <div class="mb-4 flex items-center text-sm text-gray-500">
                  <Icon name="heroicons:map-pin" class="mr-1 h-4 w-4" />
                  <span>Europe, Asia, North America</span>
                </div>
                <button
                  class="w-full rounded-md bg-indigo-600 py-2 text-white transition-colors hover:bg-indigo-700"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Program Benefits -->
        <section class="mb-16 rounded-xl bg-gray-50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Why Choose Our Programs
          </h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="rounded-full bg-purple-100 p-3">
                  <Icon
                    name="heroicons:academic-cap"
                    class="h-6 w-6 text-purple-600"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="mb-2 text-lg font-semibold">Academic Excellence</h3>
                <p class="text-gray-600">
                  Partnerships with top-ranked institutions worldwide ensuring
                  quality education.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="rounded-full bg-indigo-100 p-3">
                  <Icon
                    name="heroicons:user-group"
                    class="h-6 w-6 text-indigo-600"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="mb-2 text-lg font-semibold">Dedicated Support</h3>
                <p class="text-gray-600">
                  Personal advisors guide you throughout your application and
                  study journey.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="rounded-full bg-blue-100 p-3">
                  <Icon
                    name="heroicons:document-check"
                    class="h-6 w-6 text-blue-600"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="mb-2 text-lg font-semibold">Visa Assistance</h3>
                <p class="text-gray-600">
                  Expert help navigating visa requirements and application
                  processes.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="rounded-full bg-purple-100 p-3">
                  <Icon
                    name="heroicons:home-modern"
                    class="h-6 w-6 text-purple-600"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="mb-2 text-lg font-semibold">
                  Accommodation Support
                </h3>
                <p class="text-gray-600">
                  Help finding suitable and affordable housing options near your
                  institution.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="rounded-full bg-indigo-100 p-3">
                  <Icon
                    name="heroicons:briefcase"
                    class="h-6 w-6 text-indigo-600"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="mb-2 text-lg font-semibold">Career Development</h3>
                <p class="text-gray-600">
                  Resources and guidance for internships and post-graduation
                  employment.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="rounded-full bg-blue-100 p-3">
                  <Icon
                    name="heroicons:currency-dollar"
                    class="h-6 w-6 text-blue-600"
                  />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="mb-2 text-lg font-semibold">Scholarship Guidance</h3>
                <p class="text-gray-600">
                  Information on available scholarships and financial aid
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Specialized Programs -->
        <section class="mb-16">
          <h2 class="mb-8 text-2xl font-bold text-gray-800">
            Specialized Programs
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- Language Programs -->
            <div
              class="flex flex-col items-center gap-6 rounded-lg border border-gray-200 p-6 md:flex-row md:items-start"
            >
              <div class="flex-shrink-0">
                <div class="rounded-full bg-indigo-100 p-4">
                  <Icon
                    name="heroicons:language"
                    class="h-10 w-10 text-indigo-600"
                  />
                </div>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold">
                  Language Preparation Programs
                </h3>
                <p class="mb-4 text-gray-600">
                  Intensive language courses designed to prepare you for
                  academic study in English, French, German, and more. These
                  programs include:
                </p>
                <ul class="mb-4 list-disc pl-5 text-gray-600">
                  <li>Pre-sessional English courses</li>
                  <li>Academic language preparation</li>
                  <li>IELTS/TOEFL preparation courses</li>
                  <li>Specialized vocabulary for various fields</li>
                </ul>
                <button
                  class="rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
                >
                  Explore Language Programs
                </button>
              </div>
            </div>

            <!-- Research Programs -->
            <div
              class="flex flex-col items-center gap-6 rounded-lg border border-gray-200 p-6 md:flex-row md:items-start"
            >
              <div class="flex-shrink-0">
                <div class="rounded-full bg-purple-100 p-4">
                  <Icon
                    name="heroicons:beaker"
                    class="h-10 w-10 text-purple-600"
                  />
                </div>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold">Research Opportunities</h3>
                <p class="mb-4 text-gray-600">
                  Connect with research institutions and universities for
                  undergraduate and graduate research placements. Our program
                  supports:
                </p>
                <ul class="mb-4 list-disc pl-5 text-gray-600">
                  <li>Research assistant positions</li>
                  <li>Lab attachments in STEM fields</li>
                  <li>Fieldwork opportunities</li>
                  <li>Research-based degree programs</li>
                </ul>
                <button
                  class="rounded-md bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
                >
                  Find Research Programs
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Application Process -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Application Process
          </h2>
          <div class="relative">
            <!-- Process Steps -->
            <div
              class="absolute left-0 top-24 hidden h-1 w-full bg-gray-200 md:block"
            ></div>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
              <!-- Step 1 -->
              <div class="relative">
                <div class="mb-4 flex justify-center">
                  <div
                    class="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white"
                  >
                    1
                  </div>
                </div>
                <div class="text-center">
                  <h3 class="mb-2 text-lg font-semibold">
                    Initial Consultation
                  </h3>
                  <p class="text-gray-600">
                    Meet with our advisors to discuss your academic goals and
                    preferences.
                  </p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="relative">
                <div class="mb-4 flex justify-center">
                  <div
                    class="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white"
                  >
                    2
                  </div>
                </div>
                <div class="text-center">
                  <h3 class="mb-2 text-lg font-semibold">Program Selection</h3>
                  <p class="text-gray-600">
                    Identify suitable programs and institutions based on your
                    profile.
                  </p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="relative">
                <div class="mb-4 flex justify-center">
                  <div
                    class="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white"
                  >
                    3
                  </div>
                </div>
                <div class="text-center">
                  <h3 class="mb-2 text-lg font-semibold">
                    Application Support
                  </h3>
                  <p class="text-gray-600">
                    Receive guidance on preparing and submitting strong
                    applications.
                  </p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="relative">
                <div class="mb-4 flex justify-center">
                  <div
                    class="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white"
                  >
                    4
                  </div>
                </div>
                <div class="text-center">
                  <h3 class="mb-2 text-lg font-semibold">Pre-Departure Prep</h3>
                  <p class="text-gray-600">
                    Comprehensive support for visas, accommodation, and travel
                    arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonials -->
        <section class="mb-16">
          <h2 class="mb-8 text-2xl font-bold text-gray-800">Success Stories</h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- Testimonial 1 -->
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div class="mb-4 flex items-center">
                <div class="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="https://placehold.co/200x200/e2e8f0/4338ca?text=S"
                    alt="Student"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 class="font-semibold">Sarah Johnson</h3>
                  <p class="text-sm text-gray-500">
                    MBA, London Business School
                  </p>
                </div>
              </div>
              <p class="italic text-gray-600">
                "Go Global's MBA Pathway program was instrumental in my
                acceptance to LBS. The application guidance and interview
                preparation made all the difference. Now I'm thriving in one of
                the world's top business programs!"
              </p>
            </div>

            <!-- Testimonial 2 -->
            <div
              class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div class="mb-4 flex items-center">
                <div class="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="https://placehold.co/200x200/e2e8f0/4338ca?text=M"
                    alt="Student"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 class="font-semibold">Miguel Rodriguez</h3>
                  <p class="text-sm text-gray-500">
                    BSc Computer Science, University of Toronto
                  </p>
                </div>
              </div>
              <p class="italic text-gray-600">
                "The undergraduate program support I received was exceptional.
                From course selection to visa application, every step was guided
                with professionalism. I highly recommend their services to
                anyone looking to study abroad."
              </p>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="rounded-xl bg-indigo-50 p-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 class="mb-4 text-2xl font-bold text-gray-800">
                Ready to Start Your Educational Journey?
              </h2>
              <p class="mb-6 text-gray-600">
                Contact our program advisors to discuss which educational
                pathway is right for you and take the first step toward your
                international education goals.
              </p>
              <button
                class="rounded-md bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
              >
                Request Program Information
              </button>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-lg font-semibold">Quick Inquiry</h3>
              <form class="space-y-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Name</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Program Interest</label
                  >
                  <select
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    <option>Undergraduate Programs</option>
                    <option>Postgraduate Programs</option>
                    <option>Summer Programs</option>
                    <option>Language Programs</option>
                    <option>Research Opportunities</option>
                  </select>
                </div>
                <button
                  type="submit"
                  class="w-full rounded-md bg-indigo-600 py-2 text-white transition-colors hover:bg-indigo-700"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Educational Programs | Go Global Edu Travel',
  meta: [
    {
      name: 'description',
      content:
        'Explore our comprehensive range of educational programs for international students, including undergraduate, postgraduate, summer schools, language courses, and research opportunities.'
    }
  ]
})
</script>
