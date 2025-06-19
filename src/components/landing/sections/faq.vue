<template>
  <section class="py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="mb-10 text-center text-3xl font-semibold">FAQ</h2>

      <div class="mt-5">
        <div v-for="(faq, index) in faqItems" :key="index" class="mb-2.5">
          <div
            @click="toggleFAQ(index)"
            class="flex cursor-pointer items-center justify-between py-2.5"
          >
            <h3 class="m-0 text-lg font-medium text-red-600">
              {{ faq.question }}
            </h3>
            <span class="text-xl text-red-600">{{
              openIndex === index ? '−' : '+'
            }}</span>
          </div>
          <div
            v-if="openIndex === index"
            class="pb-2.5 transition-all duration-300"
          >
            <p class="m-0 leading-relaxed text-gray-600">{{ faq.answer }}</p>
          </div>
          <div class="my-1 h-px bg-gray-200"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqItems = [
  {
    question: 'What documents are needed for university applications?',
    answer:
      'Students must provide a range of documents when applying to their dream university. While the list of documents depends on the chosen course, some of the common ones asked by the university are academic transcripts, SOPs, LORs, medical certificates, etc.'
  },
  {
    question: 'Can you help me with scholarships?',
    answer:
      'Yes, we provide comprehensive scholarship assistance. Our advisors help identify suitable scholarship opportunities, guide you through application requirements, and support you in preparing competitive applications to maximize your chances of receiving financial aid.'
  },
  {
    question: 'How do I know which program is right for me?',
    answer:
      'Our advisors conduct thorough assessments of your academic background, career goals, and personal interests to recommend suitable programs. We consider factors such as university reputation, program curriculum, location preferences, and future employment opportunities to ensure the program aligns with your long-term objectives.'
  },
  {
    question: 'Is this service available online?',
    answer:
      'Yes, our services are available online. We offer virtual consultations, digital document processing, and remote support throughout your application journey, making it convenient for students worldwide to access our expertise regardless of their location.'
  },
  {
    question: 'How long does the application process typically take?',
    answer:
      'The application timeline varies depending on the destination country and specific university requirements. Generally, we recommend starting the process 8-12 months before your intended enrollment date. This allows sufficient time for document preparation, entrance exams, visa processing, and accommodation arrangements.'
  },
  {
    question: 'Do you provide visa assistance services?',
    answer:
      'Yes, we offer comprehensive visa assistance services. Our team guides you through the entire visa application process, helps prepare the necessary documentation, conducts mock interview sessions, and provides up-to-date information on visa requirements and regulations for your destination country.'
  }
]

// Start with the first FAQ item open by default
const openIndex = ref(0)

const toggleFAQ = index => {
  if (openIndex.value === index) {
    // Close the current item if it's already open
    openIndex.value = -1
  } else {
    // Open the clicked item
    openIndex.value = index
  }
}
</script>
