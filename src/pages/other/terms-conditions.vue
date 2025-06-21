<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Terms & Conditions</h1>
          <p class="max-w-3xl text-xl">
            Guidelines for using GoGlobalEduTravel services.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <section class="mb-16">
          <div class="mx-auto max-w-4xl">
            <h2 class="mb-6 text-2xl font-bold text-gray-800">
              Terms of Service Agreement
            </h2>

            <div class="space-y-6 text-gray-600">
              <p>
                These Terms and Conditions ("Terms") govern your use of the
                GoGlobalEduTravel website and services. By accessing or using
                our services, you agree to be bound by these Terms. If you
                disagree with any part of the Terms, then you may not access the
                service.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Use of Our Services
              </h3>
              <p>
                Our services are designed to assist students in finding
                appropriate educational opportunities abroad. You agree to use
                our services only for lawful purposes and in accordance with
                these Terms. You agree not to:
              </p>
              <ul class="ml-6 list-disc space-y-2">
                <li>
                  Use the service in any way that violates any applicable laws
                </li>
                <li>Submit false or misleading information</li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone's use
                  of the service
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or user
                  accounts
                </li>
              </ul>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Service Fees
              </h3>
              <p>
                Some of our services may incur fees. All fees will be clearly
                communicated to you before any services are rendered. Payment
                terms will be specified in separate agreements for specific
                services. We reserve the right to modify our fees with
                appropriate notice.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Intellectual Property
              </h3>
              <p>
                The service and its original content, features, and
                functionality are and will remain the exclusive property of
                GoGlobalEduTravel. Our service may contain content provided by
                third parties that is subject to copyright, trademark, and other
                intellectual property rights.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                User Accounts
              </h3>
              <p>
                When you create an account with us, you must provide accurate
                and complete information. You are responsible for maintaining
                the confidentiality of your account and password. You agree to
                accept responsibility for all activities that occur under your
                account.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Limitation of Liability
              </h3>
              <p>
                In no event shall GoGlobalEduTravel, nor its directors,
                employees, partners, agents, suppliers, or affiliates, be liable
                for any indirect, incidental, special, consequential or punitive
                damages, including loss of profits, data, or goodwill, resulting
                from your access to or use of or inability to access or use the
                service.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Changes to Terms
              </h3>
              <p>
                We reserve the right to modify or replace these Terms at any
                time. It is your responsibility to review these Terms
                periodically for changes. Your continued use of our services
                following the posting of any changes constitutes acceptance of
                those changes.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Governing Law
              </h3>
              <p>
                These Terms shall be governed by and defined following the laws
                of the jurisdiction in which our company is registered.
                GoGlobalEduTravel and yourself irrevocably consent to the
                exclusive jurisdiction of the courts in that jurisdiction for
                any disputes arising from these Terms.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section class="rounded-xl bg-emerald-50 p-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">
              Questions About Our Terms?
            </h2>
            <p class="mb-6 text-gray-600">
              If you have any questions about these Terms and Conditions, please
              contact our support team.
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
  title: 'Terms & Conditions | GoGlobalEduTravel',
  meta: [
    {
      name: 'description',
      content:
        'Read the terms and conditions governing the use of GoGlobalEduTravel services, website, and platforms for international education consulting.'
    }
  ]
})
</script>
