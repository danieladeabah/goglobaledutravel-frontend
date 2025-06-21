<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Back button updated to use browser history -->
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
          Book Your Consultation
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
          Let our experts help you chart your path to academic success abroad
        </p>
      </div>

      <!-- Main Content -->
      <div class="mx-auto max-w-3xl">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <!-- Form Description -->
          <div class="bg-gradient-to-r from-red-50 to-red-100 px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <CalendarIcon class="h-8 w-8 text-red-600" />
              </div>
              <div class="ml-4">
                <h2 class="text-lg font-medium text-gray-900">
                  Consultation Session
                </h2>
                <p class="text-sm text-gray-500">
                  Fill out this form to schedule a one-on-one session with our
                  study abroad counsellors
                </p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="px-4 py-5 sm:p-6">
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <!-- Personal Information -->
                <div class="sm:col-span-2">
                  <h3 class="mb-2 text-lg font-medium text-gray-900">
                    Personal Information
                  </h3>
                </div>
                <div class="col-span-1">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <input
                    v-model="form.firstName"
                    type="text"
                    name="first-name"
                    id="first-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>
                <div class="col-span-1">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <input
                    v-model="form.lastName"
                    type="text"
                    name="last-name"
                    id="last-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>
                <div class="col-span-1">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    id="email"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>
                <div class="col-span-1">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                    >Phone number</label
                  >
                  <input
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    id="phone"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>

                <!-- Academic Information -->
                <div class="sm:col-span-2">
                  <h3 class="mb-2 mt-6 text-lg font-medium text-gray-900">
                    Academic Information
                  </h3>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="education-level"
                    class="block text-sm font-medium text-gray-700"
                    >Current level of education</label
                  >
                  <select
                    v-model="form.educationLevel"
                    id="education-level"
                    name="education-level"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  >
                    <option value="">Select your education level</option>
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="program"
                    class="block text-sm font-medium text-gray-700"
                    >Program interested in</label
                  >
                  <select
                    v-model="form.program"
                    id="program"
                    name="program"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  >
                    <option value="">Select program</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="masters">Master's</option>
                    <option value="phd">PhD</option>
                    <option value="mba">MBA</option>
                    <option value="nursing-us">Nursing Work in US</option>
                    <option value="accountant-us">Accountant Work in US</option>
                    <option value="teacher-ireland">Teaching in Ireland</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="destination"
                    class="block text-sm font-medium text-gray-700"
                    >Preferred destination countries</label
                  >
                  <select
                    v-model="form.destination"
                    id="destination"
                    name="destination"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  >
                    <option value="">Select destination country</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <!-- Additional Information -->
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700"
                    >Additional information</label
                  >
                  <textarea
                    v-model="form.message"
                    id="message"
                    name="message"
                    rows="4"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    placeholder="Please share any specific questions or areas you would like to discuss during the consultation"
                  ></textarea>
                </div>
              </div>

              <!-- Preferred Contact Method -->
              <div class="mt-6">
                <fieldset>
                  <legend class="text-base font-medium text-gray-900">
                    Preferred contact method
                  </legend>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-center">
                      <input
                        v-model="form.contactMethod"
                        id="contact-email"
                        name="contact-method"
                        type="radio"
                        value="email"
                        class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <label
                        for="contact-email"
                        class="ml-3 block text-sm font-medium text-gray-700"
                        >Email</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        v-model="form.contactMethod"
                        id="contact-phone"
                        name="contact-method"
                        type="radio"
                        value="phone"
                        class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <label
                        for="contact-phone"
                        class="ml-3 block text-sm font-medium text-gray-700"
                        >Phone</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        v-model="form.contactMethod"
                        id="contact-video"
                        name="contact-method"
                        type="radio"
                        value="video"
                        class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <label
                        for="contact-video"
                        class="ml-3 block text-sm font-medium text-gray-700"
                        >Video call</label
                      >
                    </div>
                  </div>
                </fieldset>
              </div>

              <!-- Submit Button -->
              <div class="mt-8">
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-lg border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Processing...</span>
                  <span v-else>Book Consultation</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Success Message -->
        <div v-if="showSuccess" class="mt-8 rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <CheckCircleIcon class="h-5 w-5 text-green-400" />
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">
                Consultation Request Received
              </h3>
              <div class="mt-2 text-sm text-green-700">
                <p>
                  Thank you for requesting a consultation. Our team will contact
                  you shortly to confirm your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Import icons
const ArrowLeftIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor'
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

const CalendarIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor'
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
        })
      ]
    )
})

const CheckCircleIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor'
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        })
      ]
    )
})

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  educationLevel: '',
  program: '',
  destination: '',
  message: '',
  contactMethod: 'email'
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Here you would typically make an API call to your backend
    // For example: await fetch('/api/consultation', { method: 'POST', body: JSON.stringify(form.value) })

    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Show success message
    showSuccess.value = true

    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      educationLevel: '',
      program: '',
      destination: '',
      message: '',
      contactMethod: 'email'
    }

    // Scroll to success message
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    }, 100)
  } catch (error) {
    console.error('Form submission error:', error)
    // Handle error state here
  } finally {
    isSubmitting.value = false
  }
}

// Add function to handle browser back navigation
const goBack = () => {
  window.history.back()
}
</script>
