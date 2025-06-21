<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Disclaimer</h1>
          <p class="max-w-3xl text-xl">
            Important information about using GoGlobal Education &
            Travel Consult services.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <section class="mb-16">
          <div class="mx-auto max-w-4xl">
            <h2 class="mb-6 text-2xl font-bold text-gray-800">
              Website Disclaimer
            </h2>

            <div class="space-y-6 text-gray-600">
              <p>
                The information provided on this website is for general
                informational purposes only. All information on the site is
                provided in good faith, however, we make no representation or
                warranty of any kind, express or implied, regarding the
                accuracy, adequacy, validity, reliability, availability or
                completeness of any information on the site.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                External Links
              </h3>
              <p>
                This website may contain links to external websites that are not
                provided or maintained by or in any way affiliated with GoGlobal
                Education & Travel Consult. Please note that we do not guarantee
                the accuracy, relevance, timeliness, or completeness of any
                information on these external websites.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Education Advice
              </h3>
              <p>
                While we strive to provide accurate information about
                educational institutions and programs, we recommend that
                students independently verify all information about programs,
                admission requirements, and visa regulations with official
                sources before making any decisions.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Limitation of Liability
              </h3>
              <p>
                GoGlobal Education & Travel Consult shall not be liable for any
                losses, injuries, or damages from the display or use of this
                information. We will not be liable to you in respect of any
                losses arising out of any event or events beyond our reasonable
                control.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">Updates</h3>
              <p>
                We may update this disclaimer from time to time. We encourage
                users to frequently check this page for any changes.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section class="rounded-xl bg-emerald-50 p-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">
              Have Questions?
            </h2>
            <p class="mb-6 text-gray-600">
              If you have any questions about this disclaimer, please contact
              our team.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink
                to="/landing/contact"
                class="rounded-md bg-emerald-600 px-6 py-3 text-white transition-colors hover:bg-emerald-700"
              >
                Contact Us
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
  title: 'Disclaimer | GoGlobal Education & Travel Consult',
  meta: [
    {
      name: 'description',
      content:
        'Read the disclaimer for GoGlobal Education & Travel Consult including limitations of liability, accuracy of information, and external links policy.'
    }
  ]
})
</script>
