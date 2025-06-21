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
          Find Your Perfect Course
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
          Search through thousands of programs to find the perfect match for
          your academic goals
        </p>
      </div>

      <!-- Search Section -->
      <div
        class="mb-10 rounded-xl bg-gradient-to-r from-red-50 to-red-100 p-6 shadow-lg"
      >
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label
              for="course-subject"
              class="block text-sm font-medium text-gray-700"
            >
              Subject Area
            </label>
            <select
              v-model="filters.subject"
              id="course-subject"
              class="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="">All Subjects</option>
              <option
                v-for="subject in subjectAreas"
                :key="subject"
                :value="subject"
              >
                {{ subject }}
              </option>
            </select>
          </div>
          <div>
            <label
              for="course-level"
              class="block text-sm font-medium text-gray-700"
            >
              Study Level
            </label>
            <select
              v-model="filters.level"
              id="course-level"
              class="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="">All Levels</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="phd">PhD</option>
              <option value="diploma">Diploma</option>
            </select>
          </div>
          <div>
            <label
              for="course-country"
              class="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              v-model="filters.country"
              id="course-country"
              class="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="">All Countries</option>
              <option
                v-for="country in countries"
                :key="country"
                :value="country"
              >
                {{ country }}
              </option>
            </select>
          </div>
          <div>
            <label
              for="course-search"
              class="block text-sm font-medium text-gray-700"
            >
              Keyword Search
            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input
                v-model="searchQuery"
                type="text"
                id="course-search"
                class="block w-full rounded-md border-gray-300 p-2 pr-10 focus:border-red-500 focus:ring-red-500"
                placeholder="Search courses..."
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <Icon
                  name="heroicons:magnifying-glass"
                  class="h-5 w-5 text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 flex justify-center">
          <button
            @click="searchCourses"
            class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <Icon name="heroicons:magnifying-glass" class="mr-2 h-5 w-5" />
            Search Courses
          </button>
        </div>
      </div>

      <!-- Results Section -->
      <div>
        <div class="mb-6 flex items-center justify-between">
          <h2 class="text-xl font-semibold text-gray-800">
            {{ filteredCourses.length }} Courses Found
          </h2>
          <div class="flex items-center">
            <label for="sort-by" class="mr-2 text-sm font-medium text-gray-700"
              >Sort by:</label
            >
            <select
              v-model="sortBy"
              id="sort-by"
              class="rounded-md border-gray-300 py-1 pl-3 pr-10 text-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="relevance">Relevance</option>
              <option value="name">Name (A-Z)</option>
              <option value="tuition_asc">Tuition (Low to High)</option>
              <option value="tuition_desc">Tuition (High to Low)</option>
              <option value="duration">Duration (Shortest First)</option>
            </select>
          </div>
        </div>

        <!-- Course List -->
        <div class="space-y-6">
          <div
            v-for="course in paginatedCourses"
            :key="course.id"
            class="overflow-hidden rounded-lg bg-white shadow transition-shadow duration-200 hover:shadow-md"
          >
            <div class="p-6">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-center">
                    <img
                      :src="course.universityLogo"
                      :alt="course.university"
                      class="mr-3 h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 class="text-lg font-bold text-gray-900">
                        {{ course.name }}
                      </h3>
                      <p class="text-sm text-gray-600">
                        {{ course.university }}, {{ course.country }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <p class="text-gray-600">{{ course.description }}</p>
                  </div>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span
                      v-for="(tag, tagIndex) in course.tags"
                      :key="tagIndex"
                      class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div class="flex min-w-[180px] flex-col items-end space-y-2">
                  <div class="text-right">
                    <div class="text-sm text-gray-500">Annual Tuition</div>
                    <div class="font-semibold text-gray-900">
                      {{ course.tuition }}
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-500">Duration</div>
                    <div class="font-semibold text-gray-900">
                      {{ course.duration }}
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-500">Study Level</div>
                    <div class="font-semibold capitalize text-gray-900">
                      {{ course.level }}
                    </div>
                  </div>
                  <NuxtLink
                    :to="`/landing/find-course/${course.id}`"
                    class="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    View Details
                    <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredCourses.length === 0" class="mt-12 text-center">
          <Icon
            name="heroicons:magnifying-glass"
            class="mx-auto h-12 w-12 text-gray-400"
          />
          <h3 class="mt-2 text-lg font-medium text-gray-900">
            No courses found
          </h3>
          <p class="mt-1 text-gray-500">
            Try adjusting your search filters for better results.
          </p>
        </div>

        <!-- Pagination -->
        <div
          v-if="filteredCourses.length > 0"
          class="mt-10 flex items-center justify-center"
        >
          <nav
            class="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              @click="goToPreviousPage"
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Previous</span>
              <Icon name="heroicons:chevron-left" class="h-5 w-5" />
            </button>
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold"
              :class="{
                'bg-red-600 text-white': currentPage === page,
                'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0':
                  currentPage !== page
              }"
            >
              {{ page }}
            </button>
            <button
              @click="goToNextPage"
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Next</span>
              <Icon name="heroicons:chevron-right" class="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>

      <!-- Need Help CTA -->
      <div class="mt-16 rounded-2xl bg-gray-50 p-8">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
          <div class="mb-6 md:mb-0 md:max-w-lg">
            <h2 class="text-2xl font-bold text-gray-900">
              Need Help Finding the Perfect Course?
            </h2>
            <p class="mt-2 text-gray-600">
              Our education consultants can provide personalized program
              recommendations based on your academic background, career goals,
              and preferences.
            </p>
          </div>
          <div>
            <NuxtLink
              to="/landing/consultation?type=course-finding"
              class="inline-flex items-center rounded-md bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
            >
              Get Expert Advice
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { defineComponent, h, ref, computed } from 'vue'

// Import icon
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

// Filter and search
const filters = ref({
  subject: '',
  level: '',
  country: ''
})
const searchQuery = ref('')
const sortBy = ref('relevance')

// Pagination variables
const currentPage = ref(1)
const itemsPerPage = ref(4)
const totalPages = computed(() =>
  Math.ceil(filteredCourses.value.length / itemsPerPage.value)
)

// Select options
const subjectAreas = [
  'Business & Management',
  'Computer Science & IT',
  'Engineering',
  'Medicine & Health Sciences',
  'Arts & Humanities',
  'Social Sciences',
  'Natural Sciences',
  'Law',
  'Education',
  'Media & Communications'
]

const countries = [
  'United Kingdom',
  'United States',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Netherlands',
  'Singapore',
  'New Zealand',
  'Ireland'
]

// Sample course data
const courses = [
  {
    id: 'cs-1001',
    name: 'Computer Science BSc (Hons)',
    university: 'University of Manchester',
    country: 'United Kingdom',
    universityLogo:
      'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=100&auto=format&fit=crop',
    description:
      'A comprehensive computer science degree covering programming, algorithms, artificial intelligence, and software engineering.',
    level: 'undergraduate',
    duration: '3 years',
    tuition: '£24,000/year',
    tuitionValue: 24000,
    subject: 'Computer Science & IT',
    tags: ['Programming', 'Artificial Intelligence', 'Software Engineering'],
    intakes: ['September']
  },
  {
    id: 'bus-2002',
    name: 'Master of Business Administration (MBA)',
    university: 'Harvard Business School',
    country: 'United States',
    universityLogo:
      'https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=100&auto=format&fit=crop',
    description:
      'A prestigious MBA program focusing on leadership, innovation and global business strategies.',
    level: 'postgraduate',
    duration: '2 years',
    tuition: '$78,000/year',
    tuitionValue: 78000,
    subject: 'Business & Management',
    tags: ['Leadership', 'Finance', 'Entrepreneurship'],
    intakes: ['August']
  },
  {
    id: 'eng-3003',
    name: 'Mechanical Engineering MEng',
    university: 'University of Toronto',
    country: 'Canada',
    universityLogo:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=100&auto=format&fit=crop',
    description:
      'An advanced mechanical engineering program with focus on sustainable design and advanced manufacturing techniques.',
    level: 'undergraduate',
    duration: '4 years',
    tuition: 'C$58,000/year',
    tuitionValue: 42000,
    subject: 'Engineering',
    tags: ['Mechanical Systems', 'Sustainable Design', 'Robotics'],
    intakes: ['September', 'January']
  },
  {
    id: 'med-4004',
    name: 'Medicine MBBS',
    university: 'University of Sydney',
    country: 'Australia',
    universityLogo:
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=100&auto=format&fit=crop',
    description:
      'A comprehensive medical program preparing students for careers as medical practitioners with clinical placements.',
    level: 'undergraduate',
    duration: '6 years',
    tuition: 'A$80,000/year',
    tuitionValue: 54000,
    subject: 'Medicine & Health Sciences',
    tags: ['Clinical Practice', 'Medical Research', 'Healthcare'],
    intakes: ['February']
  },
  {
    id: 'law-5005',
    name: 'International Law LLM',
    university: 'London School of Economics',
    country: 'United Kingdom',
    universityLogo:
      'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=100&auto=format&fit=crop',
    description:
      'An advanced law degree focusing on international legal frameworks, human rights, and global governance.',
    level: 'postgraduate',
    duration: '1 year',
    tuition: '£29,000/year',
    tuitionValue: 29000,
    subject: 'Law',
    tags: ['International Law', 'Human Rights', 'Legal Research'],
    intakes: ['September']
  },
  {
    id: 'art-6006',
    name: 'Fine Arts BFA',
    university: 'Parsons School of Design',
    country: 'United States',
    universityLogo:
      'https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=100&auto=format&fit=crop',
    description:
      'A creative program exploring various artistic mediums, design principles, and contemporary art practices.',
    level: 'undergraduate',
    duration: '4 years',
    tuition: '$52,000/year',
    tuitionValue: 52000,
    subject: 'Arts & Humanities',
    tags: ['Studio Art', 'Design', 'Creative Expression'],
    intakes: ['August', 'January']
  },
  {
    id: 'sci-7007',
    name: 'Data Science MSc',
    university: 'Technical University of Munich',
    country: 'Germany',
    universityLogo:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100&auto=format&fit=crop',
    description:
      'An intensive program covering statistical analysis, machine learning, and big data technologies.',
    level: 'postgraduate',
    duration: '2 years',
    tuition: '€5,000/year',
    tuitionValue: 5000,
    subject: 'Computer Science & IT',
    tags: ['Machine Learning', 'Big Data', 'Statistics'],
    intakes: ['October', 'April']
  },
  {
    id: 'edu-8008',
    name: 'Education and Teaching Diploma',
    university: 'University of Auckland',
    country: 'New Zealand',
    universityLogo:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=100&auto=format&fit=crop',
    description:
      'A professional qualification preparing graduates to teach in primary or secondary schools.',
    level: 'diploma',
    duration: '1 year',
    tuition: 'NZ$36,000/year',
    tuitionValue: 22000,
    subject: 'Education',
    tags: ['Teaching', 'Curriculum Design', 'Educational Psychology'],
    intakes: ['February', 'July']
  },
  {
    id: 'psy-9009',
    name: 'Psychology and Neuroscience BSc',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    universityLogo:
      'https://images.unsplash.com/photo-1593697972679-c4041d132a46?q=80&w=100&auto=format&fit=crop',
    description:
      'A comprehensive program exploring human behavior, brain function, and psychological research methods.',
    level: 'undergraduate',
    duration: '4 years',
    tuition: '£25,500/year',
    tuitionValue: 25500,
    subject: 'Social Sciences',
    tags: ['Neuroscience', 'Research Methods', 'Clinical Psychology'],
    intakes: ['September']
  },
  {
    id: 'env-1010',
    name: 'Environmental Science MSc',
    university: 'University of British Columbia',
    country: 'Canada',
    universityLogo:
      'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=100&auto=format&fit=crop',
    description:
      'An interdisciplinary program focusing on sustainability, conservation, and addressing environmental challenges.',
    level: 'postgraduate',
    duration: '2 years',
    tuition: 'C$45,000/year',
    tuitionValue: 33000,
    subject: 'Natural Sciences',
    tags: ['Sustainability', 'Conservation', 'Climate Studies'],
    intakes: ['September', 'January']
  },
  {
    id: 'comm-1111',
    name: 'Mass Communications BA',
    university: 'New York University',
    country: 'United States',
    universityLogo:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=100&auto=format&fit=crop',
    description:
      'A comprehensive program covering journalism, digital media, public relations and communication theory.',
    level: 'undergraduate',
    duration: '4 years',
    tuition: '$56,000/year',
    tuitionValue: 56000,
    subject: 'Media & Communications',
    tags: ['Journalism', 'Digital Media', 'Public Relations'],
    intakes: ['August']
  },
  {
    id: 'phil-1212',
    name: 'Philosophy and Ethics MA',
    university: 'University of Melbourne',
    country: 'Australia',
    universityLogo:
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=100&auto=format&fit=crop',
    description:
      'A thought-provoking program examining philosophical traditions, ethical frameworks, and contemporary debates.',
    level: 'postgraduate',
    duration: '1.5 years',
    tuition: 'A$50,000/year',
    tuitionValue: 34000,
    subject: 'Arts & Humanities',
    tags: ['Ethics', 'Critical Thinking', 'Philosophy'],
    intakes: ['February', 'July']
  }
]

// Filter courses based on search criteria
const filteredCourses = computed(() => {
  return courses.filter(course => {
    // Apply subject filter
    if (filters.value.subject && course.subject !== filters.value.subject) {
      return false
    }

    // Apply level filter
    if (filters.value.level && course.level !== filters.value.level) {
      return false
    }

    // Apply country filter
    if (filters.value.country && course.country !== filters.value.country) {
      return false
    }

    // Apply search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      return (
        course.name.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.university.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return true
  })
})

// Sort the filtered courses
const sortedCourses = computed(() => {
  const courses = [...filteredCourses.value]

  switch (sortBy.value) {
    case 'name':
      return courses.sort((a, b) => a.name.localeCompare(b.name))
    case 'tuition_asc':
      return courses.sort((a, b) => a.tuitionValue - b.tuitionValue)
    case 'tuition_desc':
      return courses.sort((a, b) => b.tuitionValue - a.tuitionValue)
    case 'duration':
      return courses.sort((a, b) => {
        const aDuration = parseInt(a.duration.split(' ')[0])
        const bDuration = parseInt(b.duration.split(' ')[0])
        return aDuration - bDuration
      })
    default:
      return courses
  }
})

// Get paginated courses based on current page
const paginatedCourses = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return sortedCourses.value.slice(startIndex, endIndex)
})

// Pagination methods
const goToPage = page => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1)
  }
}

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1)
  }
}

// Search function - can be used with button click
const searchCourses = () => {
  // This function could be used to trigger additional actions, like analytics
  currentPage.value = 1 // Reset to first page when searching
  console.log('Searching with filters:', filters.value)
  console.log('Search query:', searchQuery.value)
}

// Add function to handle browser back navigation
const goBack = () => {
  window.history.back()
}
</script>
