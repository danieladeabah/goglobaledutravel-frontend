<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
          <p class="max-w-3xl text-xl">
            Find answers to common questions about studying abroad, visas,
            accommodations, and more.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- FAQ Search -->
        <section class="mb-16">
          <div class="mx-auto max-w-2xl">
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <Icon
                  name="heroicons:magnifying-glass"
                  class="h-5 w-5 text-gray-400"
                />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search for answers..."
                class="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>
        </section>

        <!-- FAQ Categories -->
        <section class="mb-8">
          <div class="flex flex-wrap justify-center gap-3 md:gap-5">
            <button
              v-for="(category, index) in categories"
              :key="index"
              @click="selectedCategory = category.id"
              :class="[
                'rounded-full px-5 py-2 text-sm transition',
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </section>

        <!-- FAQs -->
        <section class="mx-auto max-w-4xl">
          <!-- Visa and Applications -->
          <div
            v-if="selectedCategory === 'all' || selectedCategory === 'visa'"
            class="mb-12"
          >
            <h2 class="mb-6 text-2xl font-bold text-gray-800">
              Visa and Applications
            </h2>

            <div class="space-y-4">
              <!-- Question 1 -->
              <div
                v-if="isQuestionVisible('documents visa required')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q1')"
                >
                  <span class="font-medium"
                    >What documents do I need for a student visa
                    application?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q1'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q1'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>The required documents typically include:</p>
                  <ul class="mt-2 list-disc space-y-1 pl-5">
                    <li>Valid passport</li>
                    <li>
                      Letter of acceptance from an educational institution
                    </li>
                    <li>Proof of financial support/financial statements</li>
                    <li>Academic transcripts and certificates</li>
                    <li>
                      English language proficiency test results (IELTS, TOEFL)
                    </li>
                    <li>Statement of purpose</li>
                    <li>Passport-sized photographs</li>
                    <li>Health/medical insurance</li>
                  </ul>
                  <p class="mt-2">
                    Requirements may vary by country, so we provide
                    country-specific checklists during consultations.
                  </p>
                </div>
              </div>

              <!-- Question 2 -->
              <div
                v-if="isQuestionVisible('visa process timeline')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q2')"
                >
                  <span class="font-medium"
                    >How long does the visa application process take?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q2'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q2'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Processing times vary by country and can range from 2 to 12
                    weeks. For example:
                  </p>
                  <ul class="mt-2 space-y-1">
                    <li>UK: 3-4 weeks</li>
                    <li>Canada: 4-8 weeks</li>
                    <li>USA: 2-5 weeks</li>
                    <li>Australia: 4-6 weeks</li>
                  </ul>
                  <p class="mt-2">
                    We recommend starting the visa application process at least
                    3 months before your intended travel date to allow for any
                    delays or additional documentation requests.
                  </p>
                </div>
              </div>

              <!-- Question 3 -->
              <div
                v-if="isQuestionVisible('apply universities yourself')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q3')"
                >
                  <span class="font-medium"
                    >Can I apply to universities myself or do I need to use your
                    services?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q3'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q3'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    You can certainly apply to universities directly. Our
                    services are designed to streamline the process and improve
                    your chances of acceptance by:
                  </p>
                  <ul class="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Matching you with institutions that best fit your academic
                      profile and goals
                    </li>
                    <li>
                      Providing guidance on application requirements and
                      deadlines
                    </li>
                    <li>Reviewing and strengthening application materials</li>
                    <li>Facilitating communication with universities</li>
                    <li>Managing the entire application timeline</li>
                  </ul>
                  <p class="mt-2">
                    Many students find our expertise especially valuable when
                    applying to multiple institutions or highly competitive
                    programs.
                  </p>
                </div>
              </div>

              <!-- Question 4 -->
              <div
                v-if="isQuestionVisible('visa rejection what to do')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q4')"
                >
                  <span class="font-medium"
                    >What if my visa application is rejected?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q4'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q4'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    If your visa application is rejected, we provide the
                    following support:
                  </p>
                  <ul class="mt-2 list-disc space-y-1 pl-5">
                    <li>Analysis of the rejection reasons</li>
                    <li>Guidance on addressing the concerns</li>
                    <li>Assistance with the appeal process when applicable</li>
                    <li>Support with preparing a stronger reapplication</li>
                    <li>
                      Exploration of alternative study destinations if necessary
                    </li>
                  </ul>
                  <p class="mt-2">
                    Our visa success rate is over 95% because we thoroughly
                    prepare applications to address potential concerns before
                    submission.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Finances and Scholarships -->
          <div
            v-if="selectedCategory === 'all' || selectedCategory === 'finances'"
            class="mb-12"
          >
            <h2 class="mb-6 text-2xl font-bold text-gray-800">
              Finances and Scholarships
            </h2>

            <div class="space-y-4">
              <!-- Question 5 -->
              <div
                v-if="isQuestionVisible('cost studying abroad')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q5')"
                >
                  <span class="font-medium"
                    >What are the average costs of studying abroad?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q5'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q5'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Costs vary significantly by country, city, and institution.
                    Here's a general overview of annual expenses:
                  </p>
                  <div class="mt-3 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                      <thead>
                        <tr class="border-b">
                          <th class="px-3 py-2 text-left">Country</th>
                          <th class="px-3 py-2 text-left">
                            Tuition (USD/year)
                          </th>
                          <th class="px-3 py-2 text-left">
                            Living Expenses (USD/year)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b">
                          <td class="px-3 py-2">USA</td>
                          <td class="px-3 py-2">$20,000 - $50,000</td>
                          <td class="px-3 py-2">$10,000 - $20,000</td>
                        </tr>
                        <tr class="border-b">
                          <td class="px-3 py-2">UK</td>
                          <td class="px-3 py-2">$15,000 - $40,000</td>
                          <td class="px-3 py-2">$12,000 - $18,000</td>
                        </tr>
                        <tr class="border-b">
                          <td class="px-3 py-2">Canada</td>
                          <td class="px-3 py-2">$10,000 - $30,000</td>
                          <td class="px-3 py-2">$8,000 - $15,000</td>
                        </tr>
                        <tr class="border-b">
                          <td class="px-3 py-2">Australia</td>
                          <td class="px-3 py-2">$15,000 - $35,000</td>
                          <td class="px-3 py-2">$10,000 - $18,000</td>
                        </tr>
                        <tr class="border-b">
                          <td class="px-3 py-2">Germany</td>
                          <td class="px-3 py-2">$0 - $5,000</td>
                          <td class="px-3 py-2">$9,000 - $12,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p class="mt-3">
                    We provide detailed cost breakdowns for your specific
                    program and location during consultations.
                  </p>
                </div>
              </div>

              <!-- Question 6 -->
              <div
                v-if="isQuestionVisible('scholarships help')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q6')"
                >
                  <span class="font-medium"
                    >Do you help students find scholarships?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q6'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q6'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Yes, we actively help students identify and apply for
                    scholarships through various channels:
                  </p>
                  <ul class="mt-2 list-disc space-y-1 pl-5">
                    <li>University-specific scholarships and grants</li>
                    <li>Government-funded opportunities</li>
                    <li>Private foundations and organizations</li>
                    <li>Country-specific scholarship programs</li>
                    <li>Field of study scholarships</li>
                  </ul>
                  <p class="mt-2">
                    Our advisors match your profile with appropriate scholarship
                    opportunities and provide guidance on strengthening your
                    scholarship applications. Last year, over 60% of our
                    students received some form of financial assistance.
                  </p>
                </div>
              </div>

              <!-- Question 7 -->
              <div
                v-if="isQuestionVisible('work while studying')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q7')"
                >
                  <span class="font-medium"
                    >Can international students work while studying
                    abroad?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q7'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q7'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Work regulations for international students vary by country:
                  </p>
                  <ul class="mt-2 space-y-2">
                    <li>
                      <span class="font-medium">USA:</span> Students on F-1
                      visas can work on-campus for up to 20 hours/week during
                      semesters and full-time during breaks.
                    </li>
                    <li>
                      <span class="font-medium">UK:</span> Students can
                      typically work up to 20 hours/week during term time and
                      full-time during holidays.
                    </li>
                    <li>
                      <span class="font-medium">Canada:</span> Students can work
                      up to 20 hours/week off-campus during semesters and
                      full-time during scheduled breaks.
                    </li>
                    <li>
                      <span class="font-medium">Australia:</span> Student visas
                      generally permit work for up to 20 hours/week during
                      course periods.
                    </li>
                    <li>
                      <span class="font-medium">Germany:</span> Non-EU students
                      can work 120 full days or 240 half-days per year.
                    </li>
                  </ul>
                  <p class="mt-2">
                    We provide detailed information about work rights and
                    restrictions for your specific destination country during
                    pre-departure orientation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Accommodation and Living -->
          <div
            v-if="
              selectedCategory === 'all' || selectedCategory === 'accommodation'
            "
            class="mb-12"
          >
            <h2 class="mb-6 text-2xl font-bold text-gray-800">
              Accommodation and Living
            </h2>

            <div class="space-y-4">
              <!-- Question 8 -->
              <div
                v-if="isQuestionVisible('arrange accommodation')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q8')"
                >
                  <span class="font-medium"
                    >Do you arrange student accommodation?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q8'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q8'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Yes, we provide comprehensive accommodation assistance
                    including:
                  </p>
                  <ul class="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Information on university dormitories/halls of residence
                    </li>
                    <li>Guidance on private student housing options</li>
                    <li>Connections to trusted accommodation providers</li>
                    <li>Application support for university-managed housing</li>
                    <li>
                      Advice on suitable neighborhoods and transportation access
                    </li>
                  </ul>
                  <p class="mt-2">
                    We recommend starting the accommodation search at least 3-6
                    months before your program begins, especially for popular
                    study destinations where student housing can be competitive.
                  </p>
                </div>
              </div>

              <!-- Question 9 -->
              <div
                v-if="isQuestionVisible('health insurance')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q9')"
                >
                  <span class="font-medium"
                    >What health insurance do international students need?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q9'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q9'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Health insurance requirements vary by country and
                    institution:
                  </p>
                  <ul class="mt-2 space-y-2">
                    <li>
                      <span class="font-medium">USA:</span> Most universities
                      require students to have comprehensive health insurance,
                      either through the university's plan or an approved
                      alternative.
                    </li>
                    <li>
                      <span class="font-medium">UK:</span> Students on courses
                      longer than 6 months pay an Immigration Health Surcharge
                      that gives access to the National Health Service.
                    </li>
                    <li>
                      <span class="font-medium">Canada:</span> Most provinces
                      have health insurance plans for international students,
                      sometimes mandatory through the institution.
                    </li>
                    <li>
                      <span class="font-medium">Australia:</span> Overseas
                      Student Health Cover (OSHC) is mandatory for all
                      international student visa holders.
                    </li>
                  </ul>
                  <p class="mt-2">
                    We assist students in finding suitable insurance plans that
                    meet both their needs and the requirements of their host
                    country and institution.
                  </p>
                </div>
              </div>

              <!-- Question 10 -->
              <div
                v-if="isQuestionVisible('cultural differences')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q10')"
                >
                  <span class="font-medium"
                    >How do I prepare for cultural differences?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q10'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q10'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Preparing for cultural adjustment is an important part of
                    studying abroad. We help students prepare through:
                  </p>
                  <ul class="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Pre-departure orientation sessions focused on cultural
                      adaptation
                    </li>
                    <li>Country-specific cultural guides and resources</li>
                    <li>
                      Connections with alumni students who have studied in your
                      destination
                    </li>
                    <li>
                      Information about student groups and cultural
                      organizations at your institution
                    </li>
                    <li>
                      Guidance on managing culture shock and building support
                      networks
                    </li>
                  </ul>
                  <p class="mt-2">
                    We encourage students to research cultural norms, customs,
                    and social etiquette of their host country before departure.
                    Learning even basic phrases in the local language can also
                    significantly enhance your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Our Services -->
          <div
            v-if="selectedCategory === 'all' || selectedCategory === 'services'"
            class="mb-12"
          >
            <h2 class="mb-6 text-2xl font-bold text-gray-800">Our Services</h2>

            <div class="space-y-4">
              <!-- Question 11 -->
              <div
                v-if="isQuestionVisible('services provided')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q11')"
                >
                  <span class="font-medium"
                    >What services does Go Global Edu Travel provide?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q11'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q11'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    We offer comprehensive support across the entire
                    international education journey:
                  </p>
                  <ul class="mt-2 list-disc space-y-1 pl-5">
                    <li>University and program selection guidance</li>
                    <li>Application preparation and submission</li>
                    <li>Visa application assistance</li>
                    <li>Scholarship and funding advice</li>
                    <li>Accommodation arrangements</li>
                    <li>Pre-departure orientation</li>
                    <li>IELTS test preparation</li>
                    <li>Travel arrangements guidance</li>
                    <li>Post-arrival support</li>
                  </ul>
                  <p class="mt-2">
                    Our services can be tailored to your specific needs - from
                    comprehensive end-to-end support to assistance with specific
                    aspects of your journey.
                  </p>
                </div>
              </div>

              <!-- Question 12 -->
              <div
                v-if="isQuestionVisible('services cost')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q12')"
                >
                  <span class="font-medium"
                    >How much do your services cost?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q12'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q12'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>
                    Our service fee structure varies based on the scope of
                    assistance required:
                  </p>
                  <ul class="mt-2 space-y-2">
                    <li>
                      <span class="font-medium">Initial consultation:</span>
                      Free of charge
                    </li>
                    <li>
                      <span class="font-medium"
                        >University application services:</span
                      >
                      Many services are offered at no cost to students as we
                      receive commissions from partner institutions. For
                      non-partner institutions, modest application handling fees
                      may apply.
                    </li>
                    <li>
                      <span class="font-medium"
                        >IELTS preparation courses:</span
                      >
                      Fees depend on course duration and format (group vs.
                      private)
                    </li>
                    <li>
                      <span class="font-medium">Premium packages:</span>
                      Comprehensive service packages with guaranteed placements
                      have tiered pricing based on destination and level of
                      study
                    </li>
                  </ul>
                  <p class="mt-2">
                    We believe in transparency and will discuss all potential
                    costs during your initial consultation. Many students find
                    that our services actually save money by helping secure
                    scholarships and avoiding costly application mistakes.
                  </p>
                </div>
              </div>

              <!-- Question 13 -->
              <div
                v-if="isQuestionVisible('get started')"
                class="rounded-lg border border-gray-200"
              >
                <button
                  class="flex w-full items-center justify-between p-4 text-left"
                  @click="toggle('q13')"
                >
                  <span class="font-medium"
                    >How do I get started with Go Global Edu Travel?</span
                  >
                  <Icon
                    :name="
                      expandedQuestion === 'q13'
                        ? 'heroicons:chevron-up'
                        : 'heroicons:chevron-down'
                    "
                    class="h-5 w-5 text-gray-500"
                  />
                </button>
                <div
                  v-show="expandedQuestion === 'q13'"
                  class="border-t border-gray-200 p-4 text-gray-600"
                >
                  <p>Getting started is simple:</p>
                  <ol class="mt-2 list-decimal space-y-1 pl-5">
                    <li>
                      Schedule a free initial consultation through our website,
                      by phone, or by visiting one of our offices
                    </li>
                    <li>
                      Meet with an advisor to discuss your educational
                      background, goals, and preferences
                    </li>
                    <li>
                      Receive personalized recommendations for institutions and
                      programs
                    </li>
                    <li>Decide on the level of service you require</li>
                    <li>
                      Begin working with your dedicated advisor on applications
                      and next steps
                    </li>
                  </ol>
                  <p class="mt-2">
                    The earlier you start the process, the more options you'll
                    have. We recommend beginning at least 12-18 months before
                    your intended start date for undergraduate programs and
                    10-12 months for postgraduate programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Still Have Questions -->
        <section class="mb-16 rounded-xl bg-emerald-50 p-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">
              Still Have Questions?
            </h2>
            <p class="mb-6 text-gray-600">
              Our team is ready to help answer any questions you may have about
              studying abroad.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink
                to="/contact"
                class="rounded-md bg-emerald-600 px-6 py-3 text-white transition-colors hover:bg-emerald-700"
              >
                Contact Us
              </NuxtLink>
              <button
                class="rounded-md border border-emerald-600 px-6 py-3 text-emerald-600 transition-colors hover:bg-emerald-50"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

// State management
const expandedQuestion = ref(null)
const searchQuery = ref('')
const selectedCategory = ref('all')

// Toggle question expand/collapse
const toggle = questionId => {
  expandedQuestion.value =
    expandedQuestion.value === questionId ? null : questionId
}

// FAQ category filtering
const categories = [
  { id: 'all', name: 'All Questions' },
  { id: 'visa', name: 'Visa Process' },
  { id: 'finances', name: 'Finances' },
  { id: 'accommodation', name: 'Accommodation' },
  { id: 'services', name: 'Services' }
]

// Search filtering function for questions
const isQuestionVisible = keywords => {
  if (!searchQuery.value) return true
  return keywords.toLowerCase().includes(searchQuery.value.toLowerCase())
}

// Page metadata
useHead({
  title: 'Frequently Asked Questions | Go Global Edu Travel',
  meta: [
    {
      name: 'description',
      content:
        'Find answers to frequently asked questions about studying abroad, visa applications, accommodation, finances, and our services at Go Global Edu Travel.'
    }
  ]
})
</script>
