<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Contact Us</h1>
          <p class="max-w-3xl text-xl">
            We're here to help with your international education journey. Reach
            out to our team for personalized assistance.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- Contact Methods Grid -->
        <section class="mb-16">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              class="rounded-xl bg-emerald-50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <Icon
                name="heroicons:phone"
                class="mx-auto mb-4 h-12 w-12 text-emerald-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Call Us</h3>
              <p class="text-gray-600">
                Speak directly with our student advisors
              </p>
              <a
                href="tel:+233200123456"
                class="mt-4 inline-block rounded-md bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
              >
                +233 20 012 3456
              </a>
            </div>

            <div
              class="rounded-xl bg-teal-50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <Icon
                name="heroicons:envelope"
                class="mx-auto mb-4 h-12 w-12 text-teal-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Email Us</h3>
              <p class="text-gray-600">Send us your questions anytime</p>
              <a
                href="mailto:info@goglobaledu.com"
                class="mt-4 inline-block rounded-md bg-teal-600 px-4 py-2 text-white transition-colors hover:bg-teal-700"
              >
                info@goglobaledu.com
              </a>
            </div>

            <div
              class="rounded-xl bg-emerald-50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <Icon
                name="heroicons:chat-bubble-left-right"
                class="mx-auto mb-4 h-12 w-12 text-emerald-600"
              />
              <h3 class="mb-2 text-lg font-semibold">Live Chat</h3>
              <p class="text-gray-600">
                Chat with our team during business hours
              </p>
              <button
                class="mt-4 rounded-md bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
                @click="navigateTo('/landing/contact?#contact')"
              >
                Start Chat
              </button>
            </div>
          </div>
        </section>

        <!-- Contact Form and Office Locations -->
        <div id="contact" class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <!-- Contact Form -->
          <section class="mb-16 lg:col-span-2">
            <h2 class="mb-6 text-2xl font-bold text-gray-800">
              Send Us a Message
            </h2>
            <div class="rounded-lg bg-white p-6 shadow-sm">
              <form>
                <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      for="firstName"
                      class="mb-1 block text-sm font-medium text-gray-700"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="firstName"
                      class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="mb-1 block text-sm font-medium text-gray-700"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="lastName"
                      class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div class="mb-6">
                  <label
                    for="email"
                    class="mb-1 block text-sm font-medium text-gray-700"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    id="email"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="phone"
                    class="mb-1 block text-sm font-medium text-gray-700"
                    >Phone Number (Optional)</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="subject"
                    class="mb-1 block text-sm font-medium text-gray-700"
                    >Subject</label
                  >
                  <select
                    id="subject"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="visa">Visa Information</option>
                    <option value="admissions">University Admissions</option>
                    <option value="programs">Study Programs</option>
                    <option value="accommodations">Accommodations</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div class="mb-6">
                  <label
                    for="message"
                    class="mb-1 block text-sm font-medium text-gray-700"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    rows="4"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div class="mb-6">
                  <div class="flex items-start">
                    <input
                      id="privacy"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label for="privacy" class="ml-2 text-sm text-gray-600">
                      I agree to the
                      <a href="#" class="text-emerald-600 hover:underline"
                        >privacy policy</a
                      >
                      and consent to being contacted by GoGlobalEduTravel.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  class="w-full rounded-md bg-emerald-600 px-4 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </section>

          <!-- Office Locations -->
          <section class="mb-16 lg:col-span-1">
            <h2 class="mb-6 text-2xl font-bold text-gray-800">Our Offices</h2>
            <div class="space-y-6">
              <div class="rounded-lg bg-white p-5 shadow-sm">
                <h3 class="mb-2 text-lg font-medium text-gray-800">
                  Accra Office
                </h3>
                <div class="mb-3 flex items-start">
                  <Icon
                    name="heroicons:map-pin"
                    class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-600"
                  />
                  <p class="text-gray-600">
                    123 Independence Avenue, Accra Central, Ghana
                  </p>
                </div>
                <div class="mb-3 flex items-start">
                  <Icon
                    name="heroicons:phone"
                    class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-600"
                  />
                  <p class="text-gray-600">+233 20 012 3456</p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:clock"
                    class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-600"
                  />
                  <p class="text-gray-600">
                    Monday - Friday: 9am - 5pm<br />Saturday: 10am - 2pm
                  </p>
                </div>
              </div>

              <div class="rounded-lg bg-white p-5 shadow-sm">
                <h3 class="mb-2 text-lg font-medium text-gray-800">
                  Kumasi Office
                </h3>
                <div class="mb-3 flex items-start">
                  <Icon
                    name="heroicons:map-pin"
                    class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-600"
                  />
                  <p class="text-gray-600">
                    456 Prempeh Street, Adum, Kumasi, Ghana
                  </p>
                </div>
                <div class="mb-3 flex items-start">
                  <Icon
                    name="heroicons:phone"
                    class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-600"
                  />
                  <p class="text-gray-600">+233 20 765 4321</p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:clock"
                    class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-600"
                  />
                  <p class="text-gray-600">
                    Monday - Friday: 9am - 5pm<br />Saturday: 10am - 1pm
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6 rounded-lg bg-emerald-50 p-5">
              <h3 class="mb-2 text-lg font-medium text-gray-800">
                Book an Appointment
              </h3>
              <p class="mb-4 text-gray-600">
                Prefer to meet in person? Schedule a consultation with our
                education advisors.
              </p>
              <button
                class="w-full rounded-md bg-emerald-600 px-4 py-2 text-center text-white transition-colors hover:bg-emerald-700"
                @click="navigateTo('/landing/consultation?type=appointment')"
              >
                Schedule Now
              </button>
            </div>
          </section>
        </div>

        <!-- Map Section -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">Find Us</h2>
          <div
            class="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-200"
          >
            <p class="flex h-full items-center justify-center text-gray-600">
              <!-- Map would be integrated here -->
              Interactive map will be displayed here
            </p>
          </div>
        </section>

        <!-- FAQ Preview -->
        <section class="mb-16 rounded-xl bg-gray-50 p-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p class="mb-8 text-gray-600">
              Find quick answers to common questions about our services.
            </p>

            <div class="mb-8 space-y-4 text-left">
              <div class="rounded-lg bg-white p-5 shadow-sm">
                <h3 class="font-medium text-gray-800">
                  How long does the visa application process take?
                </h3>
                <p class="mt-2 text-gray-600">
                  Processing times vary by country, but typically range from
                  2-12 weeks. We recommend starting the process at least 3
                  months before your intended travel date.
                </p>
              </div>

              <div class="rounded-lg bg-white p-5 shadow-sm">
                <h3 class="font-medium text-gray-800">
                  Do you offer scholarships?
                </h3>
                <p class="mt-2 text-gray-600">
                  While we don't directly provide scholarships, we help students
                  identify and apply for scholarship opportunities that match
                  their profile and chosen institutions.
                </p>
              </div>
            </div>

            <NuxtLink
              to="/landing/faq"
              class="inline-flex items-center rounded-md bg-teal-600 px-6 py-3 text-white transition-colors hover:bg-teal-700"
            >
              View All FAQs
              <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Contact Us | GoGlobalEduTravel',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with GoGlobalEduTravel for any inquiries about studying abroad, visa assistance, university applications, or other educational services.'
    }
  ]
})
</script>
