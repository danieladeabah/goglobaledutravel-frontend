<template>
  <NuxtLayout :name="'landing-wrapper'">
    <div class="bg-white">
      <!-- Hero Section -->
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-700 py-12 text-white"
      >
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold">Privacy Policy</h1>
          <p class="max-w-3xl text-xl">
            How GoGlobalEduTravel collects, uses, and protects your data.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <section class="mb-16">
          <div class="mx-auto max-w-4xl">
            <h2 class="mb-6 text-2xl font-bold text-gray-800">
              Our Commitment to Privacy
            </h2>

            <div class="space-y-6 text-gray-600">
              <p>
                GoGlobalEduTravel is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website and use
                our services. Please read this privacy policy carefully. If you
                do not agree with the terms of this privacy policy, please do
                not access the site.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Information We Collect
              </h3>
              <p>
                We may collect personal information that you voluntarily provide
                to us when you express an interest in obtaining information
                about us or our services, when you participate in activities on
                our website, or otherwise when you contact us. The personal
                information that we collect depends on the context of your
                interactions with us and may include:
              </p>
              <ul class="ml-6 list-disc space-y-2">
                <li>
                  Personal identification information (name, email address,
                  phone number, etc.)
                </li>
                <li>
                  Academic information (education history, test scores, etc.)
                </li>
                <li>
                  Device and usage information (IP address, browser type, etc.)
                </li>
              </ul>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                How We Use Your Information
              </h3>
              <p>
                We may use the information we collect for various purposes,
                including:
              </p>
              <ul class="ml-6 list-disc space-y-2">
                <li>To provide, operate, and maintain our services</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To understand how you use our services</li>
                <li>To develop new products, services, and features</li>
                <li>To communicate with you about our services and updates</li>
              </ul>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Sharing Your Information
              </h3>
              <p>
                We may share your information with educational institutions as
                part of the application process, with your consent. We may also
                share information with third-party service providers to help us
                operate our business and deliver services to you.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Data Security
              </h3>
              <p>
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, despite our
                safeguards, no security system is impenetrable.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Your Rights
              </h3>
              <p>
                You have the right to access, correct, update, or request
                deletion of your personal information. You can object to
                processing of your personal information, ask us to restrict
                processing of your personal information, or request portability
                of your personal information.
              </p>

              <h3 class="mt-8 text-xl font-semibold text-gray-800">
                Updates to This Policy
              </h3>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date at the top of
                this page.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section class="rounded-xl bg-emerald-50 p-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">
              Privacy Questions?
            </h2>
            <p class="mb-6 text-gray-600">
              If you have any questions about our privacy practices or this
              policy, please contact our privacy team.
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
  title: 'Privacy Policy | GoGlobalEduTravel',
  meta: [
    {
      name: 'description',
      content:
        'GoGlobalEduTravel privacy policy detailing how we collect, use, and protect your personal information when using our education services.'
    }
  ]
})
</script>
