<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div
      class="container mx-auto px-4 py-12 sm:px-6 lg:px-8"
      v-if="destination"
    >
      <!-- Back button -->
      <div class="mb-6">
        <NuxtLink
          to="/landing/study-destinations"
          class="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-red-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-red-700 hover:shadow-sm"
        >
          <ArrowLeftIcon class="mr-2 h-5 w-5" />
          <span>Back to Destinations</span>
        </NuxtLink>
      </div>

      <!-- Hero Section -->
      <div class="relative mb-10 h-80 w-full overflow-hidden rounded-xl">
        <img
          :src="destination.image"
          :alt="destination.name"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        ></div>
        <div class="absolute bottom-0 left-0 p-6">
          <div
            class="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
          >
            <Icon name="heroicons:map-pin" class="mr-1 h-4 w-4" />
            <span>{{ destination.region }}</span>
          </div>
          <h1 class="mt-3 text-4xl font-bold text-white">
            {{ destination.name }}
          </h1>
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              v-for="(tag, tagIndex) in destination.tags"
              :key="tagIndex"
              class="rounded-full bg-white/30 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Left Column: Overview and Key Info -->
        <div class="lg:col-span-2">
          <div class="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">Overview</h2>
            <p class="text-gray-700">{{ destination.description }}</p>

            <div class="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div class="rounded-lg bg-gray-50 p-4">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:academic-cap"
                    class="h-6 w-6 text-red-600"
                  />
                  <h3 class="ml-2 text-lg font-medium text-gray-900">
                    Education System
                  </h3>
                </div>
                <p class="mt-2 text-sm text-gray-600">
                  {{ educationSystems[destination.id] }}
                </p>
              </div>
              <div class="rounded-lg bg-gray-50 p-4">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:globe-alt"
                    class="h-6 w-6 text-red-600"
                  />
                  <h3 class="ml-2 text-lg font-medium text-gray-900">
                    Student Life
                  </h3>
                </div>
                <p class="mt-2 text-sm text-gray-600">
                  {{ studentLifeInfo[destination.id] }}
                </p>
              </div>
            </div>
          </div>

          <!-- Universities Section -->
          <div class="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              Top Universities
            </h2>
            <div class="space-y-4">
              <div
                v-for="(university, index) in topUniversities[destination.id] ||
                []"
                :key="index"
                class="flex flex-col items-center gap-4 rounded-lg border p-4 transition-all hover:bg-gray-50 md:flex-row"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600"
                >
                  <span class="font-bold">{{ index + 1 }}</span>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">
                    {{ university.name }}
                  </h3>
                  <p class="text-sm text-gray-600">{{ university.location }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Programs Section -->
          <div class="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              Popular Study Programs
            </h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                v-for="(program, index) in popularPrograms[destination.id] ||
                []"
                :key="index"
                class="rounded-lg border p-4 transition-all hover:bg-gray-50"
              >
                <h3 class="font-medium text-gray-900">{{ program.name }}</h3>
                <p class="mt-1 text-sm text-gray-600">
                  {{ program.description }}
                </p>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <Icon name="heroicons:academic-cap" class="mr-1 h-4 w-4" />
                  <span>{{ program.level }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Quick Info and CTA -->
        <div>
          <!-- Quick Info Card -->
          <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-4 text-lg font-bold text-gray-900">
              Key Information
            </h2>
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b pb-2">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:academic-cap"
                    class="mr-2 h-5 w-5 text-red-600"
                  />
                  <span class="text-sm text-gray-700">Universities</span>
                </div>
                <span class="font-medium text-gray-900"
                  >{{ destination.universities }}+</span
                >
              </div>
              <div class="flex items-center justify-between border-b pb-2">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:book-open"
                    class="mr-2 h-5 w-5 text-red-600"
                  />
                  <span class="text-sm text-gray-700">Programs</span>
                </div>
                <span class="font-medium text-gray-900"
                  >{{ destination.programs }}+</span
                >
              </div>
              <div class="flex items-center justify-between border-b pb-2">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:currency-dollar"
                    class="mr-2 h-5 w-5 text-red-600"
                  />
                  <span class="text-sm text-gray-700">Tuition Range</span>
                </div>
                <span class="font-medium text-gray-900">{{
                  destination.tuitionRange
                }}</span>
              </div>
              <div class="flex items-center justify-between border-b pb-2">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:language"
                    class="mr-2 h-5 w-5 text-red-600"
                  />
                  <span class="text-sm text-gray-700">Language</span>
                </div>
                <span class="font-medium text-gray-900">{{
                  destination.language
                }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:clock"
                    class="mr-2 h-5 w-5 text-red-600"
                  />
                  <span class="text-sm text-gray-700">Visa Process</span>
                </div>
                <span class="font-medium text-gray-900">{{
                  visaInfo[destination.id].processingTime
                }}</span>
              </div>
            </div>
          </div>

          <!-- Requirements Card -->
          <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-4 text-lg font-bold text-gray-900">
              General Requirements
            </h2>
            <ul class="space-y-2 text-sm text-gray-700">
              <li
                v-for="(req, index) in visaInfo[destination.id].requirements"
                :key="index"
                class="flex items-start"
              >
                <Icon
                  name="heroicons:check-circle"
                  class="mr-2 h-5 w-5 text-green-500"
                />
                <span>{{ req }}</span>
              </li>
            </ul>
          </div>

          <!-- CTA Card -->
          <div
            class="rounded-lg bg-gradient-to-r from-red-500 to-red-600 p-6 text-white shadow-md"
          >
            <h2 class="text-lg font-bold">
              Ready to Study in {{ destination.name }}?
            </h2>
            <p class="mt-2 text-sm">
              Get personalized guidance on application process, visa
              requirements, and more.
            </p>
            <div class="mt-4 space-y-3">
              <NuxtLink
                to="/landing/consultation"
                class="block w-full rounded-md bg-white py-2 text-center font-medium text-red-600 transition-colors hover:bg-gray-50"
              >
                Book Consultation
              </NuxtLink>
              <NuxtLink
                to="/landing/contact"
                class="block w-full rounded-md border border-white py-2 text-center font-medium text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Destinations Section -->
      <div class="mt-12">
        <h2 class="mb-6 text-2xl font-bold text-gray-900">
          Explore Other Destinations
        </h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="relatedDest in relatedDestinations"
            :key="relatedDest.id"
            class="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
          >
            <div class="relative h-40 w-full overflow-hidden">
              <img
                :src="relatedDest.image"
                :alt="relatedDest.name"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 p-3">
                <h3 class="text-lg font-bold text-white">
                  {{ relatedDest.name }}
                </h3>
                <div class="mt-1 flex items-center">
                  <Icon name="heroicons:map-pin" class="h-3 w-3 text-white" />
                  <span class="ml-1 text-xs text-white">{{
                    relatedDest.region
                  }}</span>
                </div>
              </div>
            </div>
            <div class="p-4">
              <NuxtLink
                :to="`/landing/study-destinations/${relatedDest.id}`"
                class="inline-flex w-full items-center justify-center rounded-md border border-red-600 px-3 py-1.5 text-center text-sm font-medium text-red-600 transition-colors hover:bg-red-600 hover:text-white"
              >
                Explore
                <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="container mx-auto px-4 py-12 text-center sm:px-6 lg:px-8"
    >
      <div class="rounded-lg bg-white p-12 shadow-md">
        <Icon
          name="heroicons:exclamation-circle"
          class="mx-auto h-16 w-16 text-red-500"
        />
        <h2 class="mt-4 text-2xl font-bold text-gray-900">
          Destination Not Found
        </h2>
        <p class="mt-2 text-gray-600">
          The study destination you're looking for doesn't exist or has been
          removed.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/landing/study-destinations"
            class="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            <Icon name="heroicons:arrow-left" class="mr-2 h-4 w-4" />
            Back to All Destinations
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { defineComponent, h, computed } from 'vue'
import { useRoute } from 'vue-router'

// Arrow Left Icon
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

// Navigation functions
const goBack = () => {
  window.history.back()
}

// Get the route to access params
const route = useRoute()

// Destinations data (same as in index.vue)
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

// Find the current destination from the route parameter
const destination = computed(() => {
  return destinations.find(d => d.id === route.params.id)
})

// Get related destinations in the same region (exclude current destination)
const relatedDestinations = computed(() => {
  if (!destination.value) return []
  return destinations
    .filter(
      d =>
        d.region === destination.value.region && d.id !== destination.value.id
    )
    .slice(0, 4)
})

// Education system information by country
const educationSystems = {
  uk: "The UK education system offers undergraduate degrees (3 years), master's degrees (1 year), and doctoral programs. Known for its research-led teaching and tutorial system especially at institutions like Oxford and Cambridge.",
  usa: "The US follows a credit-based system with 4-year bachelor's degrees, 2-year master's, and doctoral programs. Students can choose majors, minors, and electives with flexibility to customize their education.",
  canada:
    "Canada's education combines British and American influences with a focus on research and practical skills. Programs include 4-year bachelor's degrees, 1-2 year master's, and doctoral degrees. Many institutions offer co-op programs.",
  australia:
    "Australia offers 3-year bachelor's degrees, 1-2 year master's programs, and research-focused PhDs. The academic year typically runs from February to November, with a strong emphasis on practical, hands-on learning.",
  germany:
    "Germany's higher education system includes universities and universities of applied sciences, typically offering bachelor's (3 years), master's (2 years) and doctoral programs. Focus on thorough theoretical knowledge and independent research.",
  france:
    'The French system includes universities and specialized Grandes Écoles. Programs include License (3 years), Master (2 years), and Doctorat. The system emphasizes theoretical knowledge with competitive admissions for top schools.',
  singapore:
    "Singapore follows a British-influenced system with 3-4 year bachelor's degrees and 1-2 year master's programs. Education focuses on practical applications with strong connections to industry and research institutions.",
  netherlands:
    'The Dutch system offers 3-year bachelor\'s and 1-2 year master\'s programs, with a practical, interactive approach known as "problem-based learning." Higher education is divided between research universities and universities of applied sciences.',
  uae: "The UAE system features international branch campuses and local universities offering international curricula. Programs typically include 4-year bachelor's degrees and 1-2 year master's degrees with a focus on business, engineering, and innovation."
}

// Student life information by country
const studentLifeInfo = {
  uk: 'UK student life centers around vibrant campus communities with numerous societies and clubs. Students typically live in university halls in their first year, then private accommodations. Cities like London, Edinburgh, and Manchester offer rich cultural experiences.',
  usa: 'American campus life is renowned for its community spirit, sports events, Greek life, and extracurricular activities. Students often live on campus in dorms or nearby in shared housing, with bustling social scenes and diverse cultural experiences.',
  canada:
    'Canadian student life offers a balance of academics and recreation in safe, multicultural cities. Students enjoy outdoor activities, campus clubs, and diverse cultural events. Affordable housing options exist on-campus and in surrounding communities.',
  australia:
    'Students in Australia enjoy an outdoor lifestyle with beaches, sports, and barbecues. Campus life includes numerous student societies and events. Major cities offer cultural diversity and work opportunities alongside studies.',
  germany:
    'Student life in Germany is independent and affordable. Students typically rent private apartments and enjoy cultural activities, cafes, and travel opportunities. Student unions organize events and sports, while cities offer rich nightlife and arts scenes.',
  france:
    'French student life centers around cafes, cultural events, and art. Students often live in subsidized housing (CROUS) or shared apartments. Paris and other cities offer world-class museums, cuisine, and vibrant student communities.',
  singapore:
    'Singapore offers a unique multicultural student experience in a compact, safe city-state. Campus life includes diverse food options, cultural festivals, and modern facilities. Students typically live in dormitories or off-campus housing with excellent public transportation.',
  netherlands:
    'Dutch student life is informal and independent, with cycling as the main transportation mode. Students often join associations for social activities. Housing is typically in shared apartments, with vibrant cafe and cultural scenes in cities like Amsterdam and Utrecht.',
  uae: 'Student life in the UAE combines modern amenities with Middle Eastern culture. Dubai and Abu Dhabi offer international restaurants, shopping, and entertainment. Students typically live in purpose-built accommodations with state-of-the-art facilities.'
}

// Top universities by country
const topUniversities = {
  uk: [
    { name: 'University of Oxford', location: 'Oxford' },
    { name: 'University of Cambridge', location: 'Cambridge' },
    { name: 'Imperial College London', location: 'London' },
    { name: 'University College London (UCL)', location: 'London' },
    { name: 'London School of Economics (LSE)', location: 'London' }
  ],
  usa: [
    { name: 'Harvard University', location: 'Cambridge, Massachusetts' },
    { name: 'Stanford University', location: 'Stanford, California' },
    {
      name: 'Massachusetts Institute of Technology (MIT)',
      location: 'Cambridge, Massachusetts'
    },
    {
      name: 'California Institute of Technology (Caltech)',
      location: 'Pasadena, California'
    },
    { name: 'Princeton University', location: 'Princeton, New Jersey' }
  ],
  canada: [
    { name: 'University of Toronto', location: 'Toronto, Ontario' },
    { name: 'McGill University', location: 'Montreal, Quebec' },
    {
      name: 'University of British Columbia',
      location: 'Vancouver, British Columbia'
    },
    { name: 'University of Montreal', location: 'Montreal, Quebec' },
    { name: 'University of Alberta', location: 'Edmonton, Alberta' }
  ],
  australia: [
    { name: 'University of Melbourne', location: 'Melbourne' },
    { name: 'Australian National University', location: 'Canberra' },
    { name: 'University of Sydney', location: 'Sydney' },
    { name: 'University of Queensland', location: 'Brisbane' },
    { name: 'Monash University', location: 'Melbourne' }
  ],
  germany: [
    { name: 'Technical University of Munich', location: 'Munich' },
    { name: 'Ludwig Maximilian University of Munich', location: 'Munich' },
    { name: 'Heidelberg University', location: 'Heidelberg' },
    { name: 'Humboldt University of Berlin', location: 'Berlin' },
    { name: 'RWTH Aachen University', location: 'Aachen' }
  ],
  france: [
    { name: 'Paris Sciences et Lettres University', location: 'Paris' },
    { name: 'École Polytechnique', location: 'Paris' },
    { name: 'Sorbonne University', location: 'Paris' },
    { name: 'HEC Paris', location: 'Paris' },
    { name: 'CentraleSupélec', location: 'Paris' }
  ],
  singapore: [
    { name: 'National University of Singapore (NUS)', location: 'Singapore' },
    { name: 'Nanyang Technological University (NTU)', location: 'Singapore' },
    { name: 'Singapore Management University (SMU)', location: 'Singapore' },
    {
      name: 'Singapore University of Technology and Design (SUTD)',
      location: 'Singapore'
    },
    { name: 'Yale-NUS College', location: 'Singapore' }
  ],
  netherlands: [
    { name: 'University of Amsterdam', location: 'Amsterdam' },
    { name: 'Utrecht University', location: 'Utrecht' },
    { name: 'Delft University of Technology', location: 'Delft' },
    { name: 'Leiden University', location: 'Leiden' },
    { name: 'Erasmus University Rotterdam', location: 'Rotterdam' }
  ],
  uae: [
    { name: 'United Arab Emirates University', location: 'Al Ain' },
    { name: 'American University of Sharjah', location: 'Sharjah' },
    { name: 'Khalifa University', location: 'Abu Dhabi' },
    { name: 'New York University Abu Dhabi', location: 'Abu Dhabi' },
    { name: 'University of Sharjah', location: 'Sharjah' }
  ]
}

// Popular programs by country
const popularPrograms = {
  uk: [
    {
      name: 'Business and Management',
      description:
        'Programs focusing on global business strategies, entrepreneurship, and finance.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Computer Science',
      description:
        'Cutting-edge programs in AI, data science, and software engineering.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Medicine',
      description:
        'Internationally recognized medical degrees with clinical placements.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Law',
      description:
        'Prestigious law programs with focus on international and comparative law.',
      level: 'Undergraduate & Postgraduate'
    }
  ],
  usa: [
    {
      name: 'Computer Science & Engineering',
      description:
        'Innovative programs at the forefront of technology innovation.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Business Administration (MBA)',
      description:
        'World-renowned MBA programs with strong industry connections.',
      level: 'Postgraduate'
    },
    {
      name: 'Film Studies & Production',
      description:
        'Programs with connections to Hollywood and the entertainment industry.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Biomedical Sciences',
      description:
        'Cutting-edge research and innovation in healthcare and medicine.',
      level: 'Undergraduate & Postgraduate'
    }
  ],
  canada: [
    {
      name: 'Engineering',
      description:
        'Programs with co-op opportunities and practical training components.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Business & Finance',
      description:
        'Degrees focusing on international business and entrepreneurship.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Environmental Sciences',
      description:
        'Programs focusing on sustainability and natural resource management.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Computer Science',
      description:
        'Strong focus on AI, machine learning and software development.',
      level: 'Undergraduate & Postgraduate'
    }
  ],
  australia: [
    {
      name: 'Environmental Sciences',
      description:
        'World-leading programs in environmental management and conservation.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Tourism & Hospitality',
      description:
        "Programs with industry placements in Australia's thriving tourism sector.",
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Engineering',
      description:
        'Practical programs with focus on innovation and industry partnerships.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Health Sciences',
      description: 'Cutting-edge healthcare programs with clinical placements.',
      level: 'Undergraduate & Postgraduate'
    }
  ],
  germany: [
    {
      name: 'Engineering',
      description:
        'World-renowned programs with strong connections to German industry.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Renewable Energy',
      description:
        'Cutting-edge programs focusing on green technology and sustainability.',
      level: 'Postgraduate'
    },
    {
      name: 'Automotive Engineering',
      description:
        "Specialized programs with connections to Germany's leading car manufacturers.",
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Computer Science',
      description:
        'Strong focus on theoretical foundations and practical applications.',
      level: 'Undergraduate & Postgraduate'
    }
  ],
  france: [
    {
      name: 'Business & Management',
      description:
        'Programs at prestigious Grande Écoles with international recognition.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Culinary Arts & Hospitality',
      description: 'World-famous culinary education with hands-on training.',
      level: 'Undergraduate & Certificate'
    },
    {
      name: 'Fashion Design',
      description:
        'Programs in the global capital of fashion with industry connections.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Fine Arts & Architecture',
      description:
        'Traditional and contemporary art education in a rich cultural setting.',
      level: 'Undergraduate & Postgraduate'
    }
  ],
  singapore: [
    {
      name: 'Business & Finance',
      description:
        'Programs with focus on Asian markets and global business practices.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Computer Science',
      description:
        'Cutting-edge programs in AI, data science, and cybersecurity.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Engineering',
      description:
        "Strong programs with connections to Singapore's growing tech industry.",
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Medicine & Healthcare',
      description: 'World-class medical education with modern facilities.',
      level: 'Undergraduate & Postgraduate'
    }
  ],
  netherlands: [
    {
      name: 'Business & Economics',
      description:
        'International programs focusing on global trade and sustainability.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Water Management',
      description:
        'World-leading programs in water engineering and coastal management.',
      level: 'Postgraduate'
    },
    {
      name: 'Sustainable Development',
      description: 'Innovative programs focusing on environmental solutions.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Liberal Arts & Sciences',
      description: 'Interdisciplinary programs with student-led curriculum.',
      level: 'Undergraduate'
    }
  ],
  uae: [
    {
      name: 'Business & Finance',
      description:
        'Programs focusing on international business and Middle Eastern markets.',
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Petroleum Engineering',
      description:
        "Specialized programs with connections to the region's energy sector.",
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Architecture & Design',
      description:
        "Programs inspired by the UAE's innovative urban development.",
      level: 'Undergraduate & Postgraduate'
    },
    {
      name: 'Hospitality Management',
      description:
        "Training for careers in the UAE's luxury tourism and hospitality sector.",
      level: 'Undergraduate & Postgraduate'
    }
  ]
}

// Visa information by country
const visaInfo = {
  uk: {
    processingTime: '3-4 weeks',
    requirements: [
      'Confirmation of Acceptance for Studies (CAS)',
      'Proof of funds for tuition and living expenses',
      'English language proficiency (IELTS/TOEFL)',
      'Valid passport for the duration of the course'
    ]
  },
  usa: {
    processingTime: '2-3 months',
    requirements: [
      'Form I-20 from your university',
      'SEVIS fee payment receipt',
      'Proof of funds for tuition and living expenses',
      'Evidence of ties to your home country'
    ]
  },
  canada: {
    processingTime: '4-8 weeks',
    requirements: [
      'Letter of Acceptance from a DLI (Designated Learning Institution)',
      'Study permit application',
      'Proof of financial support',
      'Clean criminal record'
    ]
  },
  australia: {
    processingTime: '4-6 weeks',
    requirements: [
      'Confirmation of Enrollment (CoE)',
      'Genuine Temporary Entrant (GTE) statement',
      'Evidence of financial capacity',
      'Health insurance (OSHC)'
    ]
  },
  germany: {
    processingTime: '6-12 weeks',
    requirements: [
      'University admission letter',
      'Proof of financial resources (Blocked account)',
      'Health insurance',
      'German language proficiency for some programs'
    ]
  },
  france: {
    processingTime: '2-3 weeks',
    requirements: [
      'Campus France approval letter',
      'Proof of accommodation in France',
      'Proof of financial means',
      'Health insurance'
    ]
  },
  singapore: {
    processingTime: '2-4 weeks',
    requirements: [
      'In-Principle Approval (IPA) letter',
      'Proof of financial ability',
      'Medical examination results',
      'Tuition fee payment proof'
    ]
  },
  netherlands: {
    processingTime: '2-4 weeks',
    requirements: [
      'University admission letter',
      'Proof of sufficient funds',
      'Valid passport',
      'Health insurance'
    ]
  },
  uae: {
    processingTime: '2-3 weeks',
    requirements: [
      'University admission letter',
      'Passport valid for at least 6 months',
      'Proof of accommodation',
      'Medical examination and health insurance'
    ]
  }
}
</script>
