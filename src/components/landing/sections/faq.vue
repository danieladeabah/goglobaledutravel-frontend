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
    question:
      'What qualifications do I need for the Nursing Work program in the US?',
    answer:
      'To qualify for our US Nursing Work program, you need a nursing degree from an accredited institution, minimum 2 years clinical experience, NCLEX-RN certification (we provide preparation assistance), English language proficiency, and a clean background check. Our program includes exam preparation, credential evaluation assistance, and complete guidance through the licensing and immigration process.'
  },
  {
    question: 'Do I need a CPA certification for the US Accountant program?',
    answer:
      'While a US CPA certification is not initially required, it significantly enhances your placement opportunities and earning potential. Our program includes CPA exam preparation support, credential evaluation, placement assistance with firms that sponsor work visas, and guidance on state-specific licensing requirements. Many accountants start in entry or mid-level positions while pursuing their US CPA certification.'
  },
  {
    question:
      'What subjects are in demand for the Teaching in Ireland program?',
    answer:
      'Ireland currently has high demand for teachers in STEM subjects, foreign languages, English as an Additional Language, Special Education, and Home Economics. Our program includes support for Teaching Council of Ireland registration and placement in both public and private institutions across Ireland.'
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
