<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">About Us</h1>
          <p class="max-w-3xl text-xl">
            Helping students achieve their global education aspirations since
            2025.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- Our Story -->
        <section class="mb-16">
          <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 class="mb-6 text-2xl font-bold text-gray-800">Our Story</h2>
              <p class="mb-4 text-gray-600">
                Go Global Edu Travel was founded in 2025 with a simple mission:
                to make international education accessible to students from
                Africa. What began as a small consulting service has grown into
                a comprehensive education agency helping thousands of students
                achieve their dreams of studying abroad.
              </p>
              <p class="mb-4 text-gray-600">
                Our founder, having experienced the challenges of pursuing
                international education firsthand, recognized the need for
                reliable guidance and support for students navigating this
                complex journey. Since then, we've expanded our services and
                reach while maintaining our commitment to personalized support.
              </p>
              <p class="text-gray-600">
                Today, Go Global Edu Travel has partnerships with over 200
                institutions across 15 countries and has successfully placed
                more than 5,000 students in international programs.
              </p>
            </div>
            <div
              class="relative h-[400px] overflow-hidden rounded-lg shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Go Global Edu Travel Team"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section class="rounded-xl bg-emerald-50 p-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">
              Ready to Start Your Journey?
            </h2>
            <p class="mb-6 text-gray-600">
              Contact our team today to explore how we can help you achieve your
              international education goals.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink
                to="/contact"
                class="rounded-md bg-emerald-600 px-6 py-3 text-white transition-colors hover:bg-emerald-700"
              >
                Contact Us
              </NuxtLink>
              <NuxtLink
                to="/study-abroad-steps"
                class="rounded-md border border-emerald-600 px-6 py-3 text-emerald-600 transition-colors hover:bg-emerald-50"
              >
                Learn About Our Process
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'About Us | Go Global Edu Travel',
  meta: [
    {
      name: 'description',
      content:
        'Learn about Go Global Edu Travel, our mission to make international education accessible, our experienced team, and our history of helping students achieve their academic dreams abroad.'
    }
  ]
})
</script>
