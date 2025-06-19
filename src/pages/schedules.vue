<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-orange-500 to-amber-600 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Upcoming Events & Schedules</h1>
          <p class="max-w-3xl text-xl">
            Stay up to date with our events, consultations, and important dates
            for your study abroad journey.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- Calendar Navigation -->
        <section class="mb-12">
          <div class="flex flex-col items-center justify-between md:flex-row">
            <div class="mb-4 flex items-center space-x-4 md:mb-0">
              <button class="rounded-full p-2 hover:bg-gray-100">
                <Icon name="heroicons:chevron-left" class="h-5 w-5" />
              </button>
              <h2 class="text-2xl font-bold">June 2023</h2>
              <button class="rounded-full p-2 hover:bg-gray-100">
                <Icon name="heroicons:chevron-right" class="h-5 w-5" />
              </button>
            </div>
            <div class="flex space-x-2">
              <button
                class="rounded-md bg-amber-500 px-4 py-2 text-white transition-colors hover:bg-amber-600"
              >
                Today
              </button>
              <button
                class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
              >
                Month
              </button>
              <button
                class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
              >
                Week
              </button>
              <button
                class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
              >
                Day
              </button>
            </div>
          </div>
        </section>

        <!-- Event Categories -->
        <section class="mb-8">
          <div class="mb-6 flex flex-wrap gap-2">
            <button
              class="flex items-center rounded-full bg-orange-100 px-4 py-2 text-orange-700 transition-colors hover:bg-orange-200"
            >
              <div class="mr-2 h-3 w-3 rounded-full bg-orange-500"></div>
              All Events
            </button>
            <button
              class="flex items-center rounded-full border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-50"
            >
              <div class="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
              Information Sessions
            </button>
            <button
              class="flex items-center rounded-full border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-50"
            >
              <div class="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              Application Deadlines
            </button>
            <button
              class="flex items-center rounded-full border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-50"
            >
              <div class="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
              University Visits
            </button>
            <button
              class="flex items-center rounded-full border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-50"
            >
              <div class="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
              Workshops
            </button>
          </div>
        </section>

        <!-- Featured Events -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">Featured Events</h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <!-- Event Card 1 -->
            <div
              class="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
            >
              <div class="relative h-40 bg-blue-500 p-6 text-white">
                <div
                  class="absolute right-4 top-4 rounded bg-white px-2 py-1 text-sm font-medium text-blue-600"
                >
                  Info Session
                </div>
                <div class="mt-8">
                  <p class="text-sm font-medium opacity-90">Tuesday</p>
                  <h3 class="text-2xl font-bold">June 15</h3>
                  <p class="text-sm">10:00 AM - 12:00 PM EST</p>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-lg font-semibold">
                  UK Universities Information Day
                </h3>
                <p class="mb-4 text-gray-600">
                  Learn about admission requirements, courses, and scholarship
                  opportunities at top UK universities.
                </p>
                <div class="mb-4 flex items-center text-sm text-gray-500">
                  <Icon name="heroicons:map-pin" class="mr-1 h-4 w-4" />
                  <span>Virtual Event (Zoom)</span>
                </div>
                <div class="flex justify-between">
                  <button
                    class="rounded-md bg-blue-100 px-4 py-2 text-blue-700 transition-colors hover:bg-blue-200"
                  >
                    Register
                  </button>
                  <button
                    class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
                  >
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>

            <!-- Event Card 2 -->
            <div
              class="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
            >
              <div class="relative h-40 bg-purple-500 p-6 text-white">
                <div
                  class="absolute right-4 top-4 rounded bg-white px-2 py-1 text-sm font-medium text-purple-600"
                >
                  University Visit
                </div>
                <div class="mt-8">
                  <p class="text-sm font-medium opacity-90">Monday</p>
                  <h3 class="text-2xl font-bold">June 20</h3>
                  <p class="text-sm">2:00 PM - 5:00 PM EST</p>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-lg font-semibold">
                  University of Toronto Representative Visit
                </h3>
                <p class="mb-4 text-gray-600">
                  Meet with admissions officers from UofT and learn about their
                  programs and requirements.
                </p>
                <div class="mb-4 flex items-center text-sm text-gray-500">
                  <Icon name="heroicons:map-pin" class="mr-1 h-4 w-4" />
                  <span>Our Office, Main Street</span>
                </div>
                <div class="flex justify-between">
                  <button
                    class="rounded-md bg-purple-100 px-4 py-2 text-purple-700 transition-colors hover:bg-purple-200"
                  >
                    Book Appointment
                  </button>
                  <button
                    class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
                  >
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>

            <!-- Event Card 3 -->
            <div
              class="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
            >
              <div class="relative h-40 bg-red-500 p-6 text-white">
                <div
                  class="absolute right-4 top-4 rounded bg-white px-2 py-1 text-sm font-medium text-red-600"
                >
                  Workshop
                </div>
                <div class="mt-8">
                  <p class="text-sm font-medium opacity-90">Saturday</p>
                  <h3 class="text-2xl font-bold">June 24</h3>
                  <p class="text-sm">1:00 PM - 4:00 PM EST</p>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-lg font-semibold">
                  Statement of Purpose Writing Workshop
                </h3>
                <p class="mb-4 text-gray-600">
                  Hands-on workshop to craft compelling personal statements for
                  your university applications.
                </p>
                <div class="mb-4 flex items-center text-sm text-gray-500">
                  <Icon name="heroicons:map-pin" class="mr-1 h-4 w-4" />
                  <span>Conference Room, 2nd Floor</span>
                </div>
                <div class="flex justify-between">
                  <button
                    class="rounded-md bg-red-100 px-4 py-2 text-red-700 transition-colors hover:bg-red-200"
                  >
                    Register
                  </button>
                  <button
                    class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
                  >
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Calendar View -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Monthly Calendar
          </h2>
          <div
            class="overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <!-- Calendar Header -->
            <div
              class="grid grid-cols-7 border-b border-gray-200 bg-gray-50 text-center"
            >
              <div class="py-2 font-medium text-gray-500">Sun</div>
              <div class="py-2 font-medium text-gray-500">Mon</div>
              <div class="py-2 font-medium text-gray-500">Tue</div>
              <div class="py-2 font-medium text-gray-500">Wed</div>
              <div class="py-2 font-medium text-gray-500">Thu</div>
              <div class="py-2 font-medium text-gray-500">Fri</div>
              <div class="py-2 font-medium text-gray-500">Sat</div>
            </div>

            <!-- Calendar Body -->
            <div class="grid grid-cols-7 text-center">
              <!-- Previous month dates -->
              <div
                class="h-24 border-b border-r border-gray-200 p-1 text-gray-400"
              >
                28
              </div>
              <div
                class="h-24 border-b border-r border-gray-200 p-1 text-gray-400"
              >
                29
              </div>
              <div
                class="h-24 border-b border-r border-gray-200 p-1 text-gray-400"
              >
                30
              </div>
              <div
                class="h-24 border-b border-r border-gray-200 p-1 text-gray-400"
              >
                31
              </div>

              <!-- Current month dates -->
              <div class="h-24 border-b border-r border-gray-200 p-1">1</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">2</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">3</div>

              <div class="h-24 border-b border-r border-gray-200 p-1">4</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">5</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">6</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">7</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">8</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">
                9
                <div
                  class="mt-1 rounded bg-green-100 px-1 py-0.5 text-xs text-green-800"
                >
                  Deadline
                </div>
              </div>
              <div class="h-24 border-b border-r border-gray-200 p-1">10</div>

              <div class="h-24 border-b border-r border-gray-200 p-1">11</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">12</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">
                13
                <div
                  class="mt-1 rounded bg-red-100 px-1 py-0.5 text-xs text-red-800"
                >
                  Workshop
                </div>
              </div>
              <div class="h-24 border-b border-r border-gray-200 p-1">14</div>
              <div
                class="h-24 border-b border-r border-gray-200 bg-amber-50 p-1"
              >
                15
                <div
                  class="mt-1 rounded bg-blue-100 px-1 py-0.5 text-xs text-blue-800"
                >
                  Info Session
                </div>
              </div>
              <div class="h-24 border-b border-r border-gray-200 p-1">16</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">17</div>

              <div class="h-24 border-b border-r border-gray-200 p-1">18</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">19</div>
              <div
                class="h-24 border-b border-r border-gray-200 bg-amber-50 p-1"
              >
                20
                <div
                  class="mt-1 rounded bg-purple-100 px-1 py-0.5 text-xs text-purple-800"
                >
                  Uni Visit
                </div>
              </div>
              <div class="h-24 border-b border-r border-gray-200 p-1">21</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">22</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">23</div>
              <div
                class="h-24 border-b border-r border-gray-200 bg-amber-50 p-1"
              >
                24
                <div
                  class="mt-1 rounded bg-red-100 px-1 py-0.5 text-xs text-red-800"
                >
                  Workshop
                </div>
              </div>

              <div class="h-24 border-b border-r border-gray-200 p-1">25</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">26</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">27</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">
                28
                <div
                  class="mt-1 rounded bg-blue-100 px-1 py-0.5 text-xs text-blue-800"
                >
                  Info Session
                </div>
              </div>
              <div class="h-24 border-b border-r border-gray-200 p-1">29</div>
              <div class="h-24 border-b border-r border-gray-200 p-1">30</div>
              <div
                class="h-24 border-b border-r border-gray-200 p-1 text-gray-400"
              >
                1
              </div>
            </div>
          </div>
        </section>

        <!-- Upcoming Deadlines -->
        <section class="mb-16">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">
            Important Deadlines
          </h2>
          <div
            class="overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="whitespace-nowrap px-6 py-4">
                    <div class="font-medium">June 9, 2023</div>
                    <div class="text-sm text-gray-500">11:59 PM EST</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm font-medium">
                      UK Universities Fall Intake Application Deadline
                    </div>
                    <div class="text-sm text-gray-500">
                      Last day to submit applications for most UK universities
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <span
                      class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                    >
                      Application Deadline
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm">
                    <a href="#" class="text-orange-600 hover:text-orange-900"
                      >Set Reminder</a
                    >
                  </td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap px-6 py-4">
                    <div class="font-medium">July 15, 2023</div>
                    <div class="text-sm text-gray-500">11:59 PM EST</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm font-medium">
                      Scholarship Application Deadline
                    </div>
                    <div class="text-sm text-gray-500">
                      Global Merit Scholarship final submission date
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <span
                      class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                    >
                      Application Deadline
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm">
                    <a href="#" class="text-orange-600 hover:text-orange-900"
                      >Set Reminder</a
                    >
                  </td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap px-6 py-4">
                    <div class="font-medium">August 1, 2023</div>
                    <div class="text-sm text-gray-500">11:59 PM EST</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm font-medium">
                      Australian Universities Spring Intake
                    </div>
                    <div class="text-sm text-gray-500">
                      Application deadline for February 2024 start
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <span
                      class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                    >
                      Application Deadline
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 text-sm">
                    <a href="#" class="text-orange-600 hover:text-orange-900"
                      >Set Reminder</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Consultation Booking -->
        <section class="mb-16 rounded-xl bg-orange-50 p-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 class="mb-4 text-2xl font-bold text-gray-800">
                Book a One-on-One Consultation
              </h2>
              <p class="mb-6 text-gray-600">
                Schedule a personalized consultation with our education advisors
                to discuss your study abroad plans, application strategies, or
                any questions you may have.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="mr-2 mt-0.5 h-5 w-5 text-green-500"
                  />
                  <p class="text-gray-600">
                    Personalized guidance tailored to your academic goals
                  </p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="mr-2 mt-0.5 h-5 w-5 text-green-500"
                  />
                  <p class="text-gray-600">Application review and feedback</p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="mr-2 mt-0.5 h-5 w-5 text-green-500"
                  />
                  <p class="text-gray-600">
                    Course and university selection assistance
                  </p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="mr-2 mt-0.5 h-5 w-5 text-green-500"
                  />
                  <p class="text-gray-600">
                    Financial planning and scholarship guidance
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-lg font-semibold">Book Your Session</h3>
              <form class="space-y-4">
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Your Name</label
                  >
                  <input
                    type="text"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Consultation Type</label
                  >
                  <select
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    <option>General Study Abroad Consultation</option>
                    <option>Application Review</option>
                    <option>Course Selection</option>
                    <option>Visa Guidance</option>
                    <option>Scholarship Information</option>
                  </select>
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Preferred Date</label
                  >
                  <input
                    type="date"
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label class="mb-1 block text-sm font-medium text-gray-700"
                    >Preferred Time</label
                  >
                  <select
                    class="w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    <option>9:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 12:00 PM</option>
                    <option>1:00 PM - 2:00 PM</option>
                    <option>2:00 PM - 3:00 PM</option>
                    <option>3:00 PM - 4:00 PM</option>
                    <option>4:00 PM - 5:00 PM</option>
                  </select>
                </div>
                <button
                  type="submit"
                  class="w-full rounded-md bg-orange-600 py-3 text-white transition-colors hover:bg-orange-700"
                >
                  Book Consultation
                </button>
              </form>
            </div>
          </div>
        </section>

        <!-- Subscribe to Updates -->
        <section class="text-center">
          <h2 class="mb-4 text-2xl font-bold text-gray-800">Stay Updated</h2>
          <p class="mx-auto mb-6 max-w-2xl text-gray-600">
            Subscribe to our calendar updates and never miss an important event,
            application deadline, or information session.
          </p>
          <div
            class="mx-auto flex max-w-xl flex-col justify-center gap-4 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              class="flex-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              class="rounded-md bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
            >
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Events & Schedules | Go Global Edu Travel',
  meta: [
    {
      name: 'description',
      content:
        'Stay up to date with our events calendar, information sessions, application deadlines, university visits and workshops for international education opportunities.'
    }
  ]
})
</script>
