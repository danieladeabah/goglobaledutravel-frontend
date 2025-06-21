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
          Study Destinations
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
          Explore top educational destinations around the world for your
          international study experience
        </p>
      </div>

      <!-- Filter Section -->
      <div class="mb-8 rounded-lg bg-gray-50 p-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-4">
            <span class="text-sm font-medium text-gray-700">Filter by:</span>
            <div>
              <select
                v-model="filters.region"
                class="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm"
              >
                <option value="">All Regions</option>
                <option value="europe">Europe</option>
                <option value="north_america">North America</option>
                <option value="asia_pacific">Asia Pacific</option>
                <option value="middle_east">Middle East</option>
              </select>
            </div>
          </div>
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search destinations..."
              class="w-full rounded-md border-gray-300 py-2 pl-10 pr-4 text-sm shadow-sm focus:border-red-500 focus:ring-red-500 md:w-64"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon
                name="heroicons:magnifying-glass"
                class="h-4 w-4 text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="destination in filteredDestinations"
          :key="destination.id"
          class="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              :src="destination.image"
              :alt="destination.name"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-xl font-bold text-white">
                {{ destination.name }}
              </h3>
              <div class="mt-1 flex items-center">
                <Icon name="heroicons:map-pin" class="h-4 w-4 text-white" />
                <span class="ml-1 text-sm text-white">{{
                  destination.region
                }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-grow flex-col p-4">
            <p class="text-gray-600">{{ destination.description }}</p>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="(tag, tagIndex) in destination.tags"
                :key="tagIndex"
                class="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-500">
              <div class="flex items-center">
                <Icon name="heroicons:academic-cap" class="mr-1 h-4 w-4" />
                <span>{{ destination.universities }}+ Universities</span>
              </div>
              <div class="flex items-center">
                <Icon name="heroicons:book-open" class="mr-1 h-4 w-4" />
                <span>{{ destination.programs }}+ Programs</span>
              </div>
              <div class="flex items-center">
                <Icon name="heroicons:currency-dollar" class="mr-1 h-4 w-4" />
                <span>{{ destination.tuitionRange }}</span>
              </div>
              <div class="flex items-center">
                <Icon name="heroicons:language" class="mr-1 h-4 w-4" />
                <span>{{ destination.language }}</span>
              </div>
            </div>

            <div class="mt-auto pt-6">
              <NuxtLink
                :to="`/landing/study-destinations/${destination.id}`"
                class="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
              >
                Explore {{ destination.name }}
                <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="mt-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-8 text-center text-white"
      >
        <h2 class="text-2xl font-bold">Need Help Deciding?</h2>
        <p class="mx-auto mt-4 max-w-xl">
          Our education consultants can help you choose the best destination
          based on your academic goals and preferences.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/consultation?type=study-destinations"
            class="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-50"
          >
            Book a Free Consultation
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
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

// Add function to handle browser back navigation
const goBack = () => {
  window.history.back()
}

// Filter and search states
const filters = ref({
  region: ''
})
const searchQuery = ref('')

// Destinations data
const destinations = [
  {
    id: 'uk',
    name: 'United Kingdom',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
    description:
      'Home to renowned universities like Oxford and Cambridge, the UK offers world-class education with a rich cultural experience.',
    universities: 150,
    programs: 10000,
    tuitionRange: '$15K-$45K/year',
    language: 'English',
    tags: ['Research Excellence', 'Historic Universities', 'Diverse Culture']
  },
  {
    id: 'usa',
    name: 'United States',
    region: 'North America',
    image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492',
    description:
      'The US boasts prestigious institutions with cutting-edge research facilities and diverse campus experiences.',
    universities: 4000,
    programs: 20000,
    tuitionRange: '$20K-$60K/year',
    language: 'English',
    tags: [
      'Ivy League',
      'Research Opportunities',
      'Optional Practical Training'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    region: 'North America',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
    description:
      'Canada offers excellent education quality with more affordable tuition and post-study work opportunities.',
    universities: 100,
    programs: 5000,
    tuitionRange: '$10K-$35K/year',
    language: 'English/French',
    tags: ['Post-Study Work', 'Immigration Pathways', 'Safe Environment']
  },
  {
    id: 'australia',
    name: 'Australia',
    region: 'Asia Pacific',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
    description:
      'Australian universities are globally recognized with a focus on research and innovation in a stunning natural setting.',
    universities: 43,
    programs: 3000,
    tuitionRange: '$15K-$40K/year',
    language: 'English',
    tags: ['Research Innovation', 'Quality of Life', 'Post-Study Work Rights']
  },
  {
    id: 'germany',
    name: 'Germany',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    description:
      'Germany offers tuition-free or low-cost education at top-ranked technical universities with a strong industry connection.',
    universities: 400,
    programs: 6000,
    tuitionRange: 'Free-$5K/year',
    language: 'German/English',
    tags: ['Tuition-Free Programs', 'Engineering Excellence', 'Strong Economy']
  },
  {
    id: 'france',
    name: 'France',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    description:
      'France combines excellent higher education with rich cultural heritage and affordable tuition fees.',
    universities: 250,
    programs: 4000,
    tuitionRange: '$3K-$15K/year',
    language: 'French/English',
    tags: ['Arts & Culture', 'Culinary Excellence', 'Grande Écoles']
  },
  {
    id: 'singapore',
    name: 'Singapore',
    region: 'Asia Pacific',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170',
    description:
      'Singapore offers world-class education with a multicultural environment at the heart of booming Asian economies.',
    universities: 30,
    programs: 1000,
    tuitionRange: '$15K-$35K/year',
    language: 'English',
    tags: ['Business Hub', 'Tech Innovation', 'Strategic Location']
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4',
    description:
      'The Netherlands offers many English-taught programs with a practice-oriented approach to education.',
    universities: 70,
    programs: 2000,
    tuitionRange: '$8K-$20K/year',
    language: 'Dutch/English',
    tags: ['English Programs', 'Innovation Focus', 'International Environment']
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    description:
      'The UAE has become an education hub with international branch campuses and modern facilities.',
    universities: 60,
    programs: 1000,
    tuitionRange: '$15K-$35K/year',
    language: 'English/Arabic',
    tags: ['Global Campus Branches', 'Modern Infrastructure', 'Tax-Free Income']
  }
]

// Filter destinations based on search and filters
const filteredDestinations = computed(() => {
  return destinations.filter(destination => {
    // Apply region filter if selected
    if (
      filters.value.region &&
      destination.region.toLowerCase() !== filters.value.region
    ) {
      return false
    }

    // Apply search filter if query exists
    return !(
      searchQuery.value &&
      !destination.name
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) &&
      !destination.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
    )
  })
})
</script>
