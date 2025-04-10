<template>
  <div>
    <!-- Chat Bubble Button -->
    <button
      @click="toggleChat"
      class="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-all duration-300 z-50 flex items-center justify-center"
      :class="{ 'rotate-45': isOpen }"
    >
      <ChatBubbleLeftRightIcon v-if="!isOpen" class="h-6 w-6" />
      <XMarkIcon v-else class="h-6 w-6" />
    </button>

    <!-- Chat Window -->
    <div
      v-show="isOpen"
      class="fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-300 flex flex-col"
      :class="{ 'translate-y-0 opacity-100': isOpen, 'translate-y-8 opacity-0': !isOpen }"
      style="max-height: 70vh; max-width: 24rem; left: auto;"
    >
      <!-- Chat Header -->
      <div class="bg-primary text-white p-4 flex justify-between items-center">
        <div class="flex items-center">
          <ChatBubbleLeftRightIcon class="h-5 w-5 mr-2" />
          <h3 class="font-medium">SorglosPflege Beratung</h3>
        </div>
        <button @click="toggleChat" class="text-white hover:text-gray-200">
          <XMarkIcon class="h-5 w-5" />
        </button>
      </div>

      <!-- Consent Banner (if not consented) -->
      <div v-if="!hasConsented" class="p-4 bg-white flex-grow overflow-y-auto">
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 class="font-bold text-gray-900 mb-2">Datenschutzhinweis</h4>
          <p class="text-sm text-gray-700 mb-4">
            Dieser Chat verwendet KI-Technologie, um Ihre Fragen zu beantworten. Ihre Eingaben werden verarbeitet, um passende Antworten zu generieren. Bitte beachten Sie, dass:
          </p>
          <ul class="text-sm text-gray-700 list-disc pl-5 mb-4 space-y-1">
            <li>Ihre Chatdaten zur Verbesserung des Services gespeichert werden können</li>
            <li>Die KI-generierten Antworten nicht immer zu 100% korrekt sind</li>
            <li>Keine sensiblen persönlichen Daten wie Passwörter eingegeben werden sollten</li>
          </ul>
          <button
            @click="giveConsent"
            class="w-full btn-primary text-sm py-2"
          >
            Ich stimme zu und möchte den Chat nutzen
          </button>
        </div>
      </div>

      <!-- Chat Messages (if consented) -->
      <div v-else class="flex-grow overflow-y-auto p-4" ref="messagesContainer">
        <div class="space-y-4">
          <!-- Welcome Message -->
          <div class="flex items-start">
            <div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3">
              <ChatBubbleLeftRightIcon class="h-5 w-5" />
            </div>
            <div class="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p class="text-gray-800">
                Hallo! Ich bin Ihr digitaler Pflegeberater. Wie kann ich Ihnen heute helfen?
              </p>
            </div>
          </div>

          <!-- AI Disclaimer -->
          <div class="flex items-start">
            <div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3">
              <InformationCircleIcon class="h-5 w-5" />
            </div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-[80%]">
              <p class="text-sm text-yellow-800">
                <strong>Hinweis:</strong> Ich bin ein KI-Assistent und meine Antworten können Fehler enthalten. Bei wichtigen Entscheidungen konsultieren Sie bitte einen menschlichen Berater.
              </p>
            </div>
          </div>

          <!-- Dynamic Messages -->
          <div v-for="(message, index) in messages" :key="index" class="flex items-start" :class="{ 'justify-end': message.isUser }">
            <template v-if="!message.isUser">
              <div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3">
                <ChatBubbleLeftRightIcon class="h-5 w-5" />
              </div>
              <div class="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p class="text-gray-800" v-html="formatMessage(message.text)"></p>
              </div>
            </template>
            <template v-else>
              <div class="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                <p>{{ message.text }}</p>
              </div>
              <div class="flex-shrink-0 bg-gray-200 rounded-full p-2 ml-3">
                <UserIcon class="h-5 w-5 text-gray-600" />
              </div>
            </template>
          </div>

          <!-- Loading Animation -->
          <div v-if="isLoading" class="flex items-start">
            <div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3">
              <ChatBubbleLeftRightIcon class="h-5 w-5" />
            </div>
            <div class="bg-gray-100 rounded-lg p-4 max-w-[80%] flex items-center">
              <div class="typing-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Input (if consented) -->
      <div v-if="hasConsented" class="border-t border-gray-200 p-4 bg-white">
        <form @submit.prevent="sendMessage" class="flex items-center">
          <input
            v-model="userInput"
            type="text"
            placeholder="Ihre Frage eingeben..."
            class="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-[38px]"
            :disabled="isLoading"
          />
          <button
            type="submit"
            class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 h-[38px]"
            :disabled="isLoading || !userInput.trim()"
          >
            <PaperAirplaneIcon class="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, provide } from 'vue';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  UserIcon, 
  PaperAirplaneIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/outline';

// State
const isOpen = ref(false);
const hasConsented = ref(false);
const userInput = ref('');
const messages = ref([]);
const isLoading = ref(false);
const messagesContainer = ref(null);

// Check if user has previously consented
onMounted(() => {
  const savedConsent = localStorage.getItem('chatConsent');
  if (savedConsent === 'true') {
    hasConsented.value = true;
  }
  
  // Test API connection on mount
  testApiConnection();
});

// Toggle chat window
const toggleChat = () => {
  isOpen.value = !isOpen.value;
};

// Open chat window (for external components)
const openChat = () => {
  isOpen.value = true;
};

// Provide chat control to other components
provide('chatStore', {
  openChat,
  isOpen
});

// Give consent to data processing
const giveConsent = () => {
  hasConsented.value = true;
  localStorage.setItem('chatConsent', 'true');
};

// Format message with line breaks
const formatMessage = (text) => {
  return text.replace(/\n/g, '<br>');
};

// Test API connection
const testApiConnection = async () => {
  try {
    console.log("Testing API connection...");
    const testResponse = await fetch(
      "https://flowise.maximilianpaszke.de/api/v1/prediction/b52a4ca7-de36-4b7c-9b27-4b44bd252687",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: "Test connection" })
      }
    );
    
    console.log("API test status:", testResponse.status);
    console.log("API test headers:", Object.fromEntries([...testResponse.headers]));
    
    if (!testResponse.ok) {
      console.error("API test failed with status:", testResponse.status);
      return;
    }
    
    const testResult = await testResponse.json();
    console.log("API test response:", testResult);
  } catch (error) {
    console.error("API test error:", error);
  }
};

// Send message to Flowise API
const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;
  
  // Add user message to chat
  const userMessage = userInput.value;
  messages.value.push({ text: userMessage, isUser: true });
  userInput.value = '';
  
  // Show loading animation
  isLoading.value = true;
  
  try {
    // Scroll to bottom
    await nextTick();
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
    
    // Call Flowise API with CORS mode explicitly set
    const response = await fetch(
      "https://flowise.maximilianpaszke.de/api/v1/prediction/b52a4ca7-de36-4b7c-9b27-4b44bd252687",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ question: userMessage })
      }
    );
    
    console.log("API response status:", response.status);
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log("API Response:", result);
    
    // Add AI response to chat
    if (result && result.text) {
      messages.value.push({ text: result.text, isUser: false });
    } else {
      messages.value.push({ 
        text: "Entschuldigung, ich konnte keine Antwort generieren. Bitte versuchen Sie es erneut.", 
        isUser: false 
      });
    }
  } catch (error) {
    console.error('Error querying Flowise API:', error);
    messages.value.push({ 
      text: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.", 
      isUser: false 
    });
  } finally {
    isLoading.value = false;
    
    // Scroll to bottom again after response
    await nextTick();
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  }
};

// Auto-scroll when messages change
watch(messages, async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
}, { deep: true });
</script>

<style scoped>
/* Typing animation */
.typing-animation {
  display: flex;
  align-items: center;
}

.typing-animation span {
  height: 8px;
  width: 8px;
  margin: 0 2px;
  background-color: #6B7280;
  border-radius: 50%;
  display: inline-block;
  animation: bounce 1.5s infinite ease-in-out;
}

.typing-animation span:nth-child(1) {
  animation-delay: -0.3s;
}

.typing-animation span:nth-child(2) {
  animation-delay: -0.15s;
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1);
  }
}

/* Transitions */
.translate-y-0 {
  transform: translateY(0);
}

.translate-y-8 {
  transform: translateY(2rem);
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}
</style>
