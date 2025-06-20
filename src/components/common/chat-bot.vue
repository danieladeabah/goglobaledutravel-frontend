<template>
  <!-- Chatbot Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="toggleChatbot"
      class="chat-bot-button flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600 focus:outline-none"
      :class="{ 'rotate-45': isChatbotOpen, breathing }"
    >
      <!-- Notification Badge -->
      <span
        v-if="showNotificationBadge"
        class="notification-badge absolute -right-2 -top-2 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-800 shadow-md"
        @click.stop="dismissNotification"
      >
        🔔
      </span>
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
  <Transition name="fade">
    <div
      v-if="isChatbotOpen"
      class="fixed inset-0 z-50 flex h-full w-full flex-col overflow-hidden rounded-none bg-white shadow-xl transition-all duration-300 ease-in-out sm:inset-auto sm:bottom-24 sm:right-6 sm:h-96 sm:w-80 lg:h-[500px] lg:w-[400px]"
    >
      <div class="flex items-center justify-between bg-red-500 p-4 text-white">
        <h3 class="font-medium">
          Chat with <span class="font-mono text-gray-800">(./gG🎓)</span>Travel
        </h3>
        <div class="flex items-center space-x-2">
          <!-- Delete chat button -->
          <button
            @click="showClearConfirmation = true"
            class="focus:outline-none"
            title="Clear chat history"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
          <!-- Close button -->
          <button
            @click="toggleChatbot"
            class="focus:outline-none"
            title="Close chat"
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto p-4" ref="chatMessagesRef">
        <!-- Original prompts at the top -->
        <div class="mb-4 border-b border-gray-200 pb-4">
          <p class="mb-2 text-sm text-gray-500">Popular questions:</p>
          <div class="space-y-2">
            <button
              v-for="(prompt, idx) in baseSuggestedPrompts.slice(0, 4)"
              :key="idx"
              @click="usePrompt(prompt)"
              class="block w-full rounded-md border border-gray-300 p-2 text-left text-sm transition-colors hover:border-red-300 hover:bg-red-50"
            >
              {{ prompt }}
            </button>
          </div>
        </div>

        <div class="mb-4">
          <div class="inline-block rounded-lg bg-gray-100 p-3">
            Hello! How can I help you with your study abroad plans today?
          </div>
        </div>

        <!-- Chat messages -->
        <div v-for="(message, index) in chatMessages" :key="index" class="mb-4">
          <div
            :class="[
              message.isUser ? 'ml-auto bg-red-500 text-white' : 'bg-gray-100',
              'inline-block max-w-[80%] rounded-lg p-3'
            ]"
          >
            <div v-if="message.isUser">{{ message.text }}</div>
            <div
              v-else
              v-html="renderMarkdown(message.text)"
              class="markdown-content"
            ></div>
          </div>
        </div>

        <!-- Context-aware suggested prompts at the bottom -->
        <div
          v-if="chatMessages.length > 0"
          class="mb-4 border-t border-gray-200 pt-4"
        >
          <p class="mb-2 text-sm text-gray-500">You might also want to ask:</p>
          <div class="space-y-2">
            <button
              v-for="(prompt, idx) in suggestedPrompts"
              :key="idx"
              @click="usePrompt(prompt)"
              class="block w-full rounded-md border border-gray-300 p-2 text-left text-sm transition-colors hover:border-red-300 hover:bg-red-50"
            >
              {{ prompt }}
            </button>
          </div>
        </div>

        <div v-if="isLoading" class="mb-4">
          <div class="inline-block rounded-lg bg-gray-100 p-3">
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 p-2 sm:p-3">
        <form @submit.prevent="sendMessage" class="flex w-full items-center">
          <input
            type="text"
            v-model="messageInput"
            placeholder="Type your message..."
            class="min-w-0 flex-1 rounded-l-lg border border-gray-300 px-2 py-[0.54rem] text-sm focus:border-red-500 focus:outline-none sm:px-3 sm:text-base"
            :disabled="isLoading"
          />
          <button
            type="submit"
            class="flex items-center justify-center rounded-r-lg bg-red-500 px-3 py-3 text-white hover:bg-red-600 focus:outline-none disabled:bg-gray-400 sm:px-4"
            aria-label="Send message"
            :disabled="isLoading || !messageInput.trim()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="sm:h-5 sm:w-5"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Confirmation Modal for clearing chat -->
  <Transition name="fade">
    <div
      v-if="showClearConfirmation"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 p-4"
    >
      <div class="w-full max-w-xs rounded-lg bg-white p-4 shadow-xl">
        <h3 class="mb-3 text-lg font-medium">Clear conversation</h3>
        <p class="text-gray-600">
          Are you sure you want to delete this conversation history?
        </p>

        <div class="mt-4 flex justify-end space-x-2">
          <button
            @click="showClearConfirmation = false"
            class="rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            @click="clearChat"
            class="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { marked } from 'marked'

const isChatbotOpen = ref(false)
const chatMessages = ref([])
const messageInput = ref('')
const chatMessagesRef = ref(null)
const isLoading = ref(false)
const conversationHistory = ref([])
const showClearConfirmation = ref(false)
const showNotificationBadge = ref(false)

// Store the system prompt separately as Gemini API doesn't support system role
const systemPrompt =
  'You are a helpful assistant for GoGlobal Education & Travel Consult, a study abroad agency. Provide useful and accurate information about studying abroad, countries, universities, visa processes, and other related queries. Keep responses concise, friendly, and focused on helping students with their education travel needs.'

// Suggested prompts that users can click
const baseSuggestedPrompts = [
  'What study programs are available in the UK?',
  'How do I apply for a student visa in Canada?',
  'What are the best universities for Computer Science?',
  'What scholarships are available for international students?',
  'How much does it cost to study in Australia?',
  'Tell me about studying in Germany',
  'What are the language requirements for studying abroad?',
  'How can I find accommodation in foreign countries?',
  'What are the top medical schools in Europe?',
  'How do I prepare for studying abroad?'
]

// Function to generate context-aware suggestions
const generateSuggestions = () => {
  // If there are no messages yet, return base prompts
  if (chatMessages.value.length === 0) {
    return getRandomSuggestions(baseSuggestedPrompts, 4)
  }

  const lastAIMessage = [...chatMessages.value]
    .reverse()
    .find(msg => !msg.isUser)

  // If topic is about UK
  if (
    (lastAIMessage && lastAIMessage.text.toLowerCase().includes('uk')) ||
    (lastAIMessage &&
      lastAIMessage.text.toLowerCase().includes('united kingdom'))
  ) {
    return getRandomSuggestions(
      [
        'What are the top universities in London?',
        'How much does accommodation cost in the UK?',
        'What scholarships are available for UK universities?',
        'Do I need IELTS for UK student visa?',
        'What is the UK Graduate Route visa?'
      ],
      4
    )
  }

  // If topic is about visas
  if (lastAIMessage && lastAIMessage.text.toLowerCase().includes('visa')) {
    return getRandomSuggestions(
      [
        'What documents do I need for a student visa?',
        'How long does visa processing take?',
        'Can I work while studying with a student visa?',
        'What are post-study work visa options?',
        'How do I extend my student visa?'
      ],
      4
    )
  }

  // If topic is about scholarships
  if (
    lastAIMessage &&
    lastAIMessage.text.toLowerCase().includes('scholarship')
  ) {
    return getRandomSuggestions(
      [
        'What are merit-based scholarships?',
        'Which countries offer full scholarships?',
        'How do I write a good scholarship essay?',
        'Are there scholarships for specific fields of study?',
        'When should I apply for scholarships?'
      ],
      4
    )
  }

  // Default: return random base suggestions
  return getRandomSuggestions(baseSuggestedPrompts, 4)
}

// Helper to get random suggestions
const getRandomSuggestions = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Dynamic suggestions that update based on conversation
const suggestedPrompts = ref(getRandomSuggestions(baseSuggestedPrompts, 4))

const props = defineProps({
  breathing: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  // Initialize conversation history without a system message
  conversationHistory.value = []

  // Show notification badge after a short delay to attract users
  setTimeout(() => {
    if (!isChatbotOpen.value) {
      showNotificationBadge.value = true
    }
  }, 2000) // Show after 2 seconds
})

const toggleChatbot = () => {
  isChatbotOpen.value = !isChatbotOpen.value

  // Hide notification badge when chat is opened
  if (isChatbotOpen.value) {
    showNotificationBadge.value = false
  }
}

// Function to dismiss notification badge without opening the chat
const dismissNotification = event => {
  event.stopPropagation()
  showNotificationBadge.value = false
}

// Function to use a suggested prompt
const usePrompt = prompt => {
  messageInput.value = prompt
  sendMessage()
}

const callGeminiAPI = async prompt => {
  try {
    const config = useRuntimeConfig()
    const apiKey = config.public.GOOGLE_GEMINI_API_KEY

    if (!apiKey) {
      console.error('GOOGLE_GEMINI_API_KEY is not configured')
      return 'Sorry, the chatbot is not properly configured. Please contact support.'
    }

    // Format the history correctly for Gemini API
    let messages = []

    // Add the system instruction as a model message at the beginning of conversation
    // if this is the first message in the conversation
    if (conversationHistory.value.length === 0) {
      messages.push({
        role: 'model',
        parts: [{ text: systemPrompt }]
      })
    } else {
      // Otherwise use existing conversation history
      messages = [...conversationHistory.value]
    }

    // Add user message to conversation
    messages.push({
      role: 'user',
      parts: [{ text: prompt }]
    })

    // Fix API endpoint construction
    const response = await fetch(`${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024
        }
      })
    })

    const data = await response.json()

    if (data.error) {
      console.error('Gemini API error:', data.error)
      throw new Error(data.error.message || 'Error from Gemini API')
    }

    // Extract the response text
    const responseText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response"

    // Update conversation history with both user message and AI response
    if (conversationHistory.value.length === 0) {
      // If this was the first message, add the system instruction as model message
      conversationHistory.value = [
        {
          role: 'model',
          parts: [{ text: systemPrompt }]
        },
        {
          role: 'user',
          parts: [{ text: prompt }]
        },
        {
          role: 'model',
          parts: [{ text: responseText }]
        }
      ]
    } else {
      // Otherwise just add the new user message and AI response
      conversationHistory.value.push(
        {
          role: 'user',
          parts: [{ text: prompt }]
        },
        {
          role: 'model',
          parts: [{ text: responseText }]
        }
      )
    }

    return responseText
  } catch (error) {
    console.error('Error calling Gemini API:', error)
    return 'I apologize, but I encountered an error processing your request. Please try again later.'
  }
}

const sendMessage = async () => {
  if (messageInput.value.trim()) {
    // Add user message to chat
    const userMessage = messageInput.value.trim()
    chatMessages.value.push({
      text: userMessage,
      isUser: true
    })

    // Clear input and set loading state
    messageInput.value = ''
    isLoading.value = true

    // Force UI update before API call
    await nextTick()
    scrollToBottom()

    try {
      // Get response from Gemini API
      const aiResponse = await callGeminiAPI(userMessage)

      // Add AI response to chat
      chatMessages.value.push({
        text: aiResponse,
        isUser: false
      })

      // Update suggested prompts based on conversation
      suggestedPrompts.value = generateSuggestions()
    } catch (error) {
      console.error('Error in sendMessage:', error)

      // Add error message to chat
      chatMessages.value.push({
        text: 'Sorry, I encountered an error. Please try again later.',
        isUser: false
      })
    } finally {
      isLoading.value = false
      scrollToBottom()
    }
  }
}

// Function to clear chat history
const clearChat = () => {
  chatMessages.value = []
  conversationHistory.value = []
  showClearConfirmation.value = false

  // Auto-scroll to top after clearing
  nextTick(() => {
    if (chatMessagesRef.value) {
      chatMessagesRef.value.scrollTop = 0
    }
  })
}

const scrollToBottom = () => {
  setTimeout(() => {
    if (chatMessagesRef.value) {
      chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
    }
  }, 100)
}

// Auto-scroll when new messages are added
watch(
  () => chatMessages.value.length,
  () => scrollToBottom()
)

// Function to render markdown in messages
const renderMarkdown = text => {
  try {
    return marked(text, { breaks: true })
  } catch (error) {
    console.error('Error rendering markdown:', error)
    return text
  }
}
</script>

<style scoped>
.chat-bot-button {
  transition: transform 0.3s ease-in-out;
}

.breathing {
  animation: breathe 3s infinite ease-in-out;
}

.notification-badge {
  animation: pulse 2s infinite;
}

@keyframes breathe {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
  }

  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
  }
}

/* Transition effects */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Typing indicator animation */
.typing-indicator {
  display: inline-flex;
  align-items: center;
  height: 20px;
}

.typing-indicator span {
  height: 8px;
  width: 8px;
  margin: 0 2px;
  background-color: #666;
  border-radius: 50%;
  display: inline-block;
  animation: typing 1.5s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

/* Markdown content styling */
.markdown-content {
  line-height: 1.5;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.markdown-content ul,
.markdown-content ol {
  padding-left: 1.5rem;
}

.markdown-content ul {
  list-style-type: disc;
}

.markdown-content ol {
  list-style-type: decimal;
}

.markdown-content a {
  color: #3182ce;
  text-decoration: underline;
}

.markdown-content pre,
.markdown-content code {
  background-color: #f0f0f0;
  padding: 0.1em 0.3em;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
}
</style>
