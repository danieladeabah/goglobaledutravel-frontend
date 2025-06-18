<template>
  <!-- Chatbot Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="toggleChatbot"
      class="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600 focus:outline-none"
      :class="{ 'rotate-45': isChatbotOpen }"
    >
      <span v-if="!isChatbotOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg>
      </span>
      <span v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </span>
    </button>
  </div>

  <!-- Chatbot Container -->
  <div
    v-if="isChatbotOpen"
    class="fixed bottom-24 right-6 z-50 flex h-96 w-80 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl transition-all duration-300 ease-in-out"
  >
    <div class="flex items-center justify-between bg-red-500 p-4 text-white">
      <h3 class="font-medium">Chat with us</h3>
      <button @click="toggleChatbot" class="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-4" ref="chatMessages">
      <div class="mb-4">
        <div class="inline-block rounded-lg bg-gray-100 p-3">
          Hello! How can I help you with your study abroad plans today?
        </div>
      </div>
      <div v-for="(message, index) in chatMessages" :key="index" class="mb-4">
        <div
          :class="[
            message.isUser ? 'ml-auto bg-red-500 text-white' : 'bg-gray-100',
            'inline-block max-w-[80%] rounded-lg p-3'
          ]"
        >
          {{ message.text }}
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 p-3">
      <form @submit.prevent="sendMessage" class="flex">
        <input
          type="text"
          v-model="messageInput"
          placeholder="Type your message..."
          class="flex-1 rounded-l-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
        />
        <button
          type="submit"
          class="rounded-r-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const isChatbotOpen = ref(false)
const chatMessages = ref([])
const messageInput = ref('')
const chatMessages_ref = ref(null)

const toggleChatbot = () => {
  isChatbotOpen.value = !isChatbotOpen.value
}

const sendMessage = () => {
  if (messageInput.value.trim()) {
    // Add user message
    chatMessages.value.push({
      text: messageInput.value,
      isUser: true
    })

    const userMessage = messageInput.value
    messageInput.value = ''

    // Simulate response (would connect to actual chatbot service in production)
    setTimeout(() => {
      chatMessages.value.push({
        text: `Thanks for your message: "${userMessage}". Our team will get back to you soon.`,
        isUser: false
      })

      // Scroll to bottom of messages
      setTimeout(() => {
        if (chatMessages_ref.value) {
          chatMessages_ref.value.scrollTop = chatMessages_ref.value.scrollHeight
        }
      }, 100)
    }, 1000)
  }
}

// Auto-scroll when new messages are added
watch(
  () => chatMessages.value.length,
  () => {
    setTimeout(() => {
      if (chatMessages_ref.value) {
        chatMessages_ref.value.scrollTop = chatMessages_ref.value.scrollHeight
      }
    }, 100)
  }
)
</script>
