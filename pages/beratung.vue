<template>
  <div>
    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Page Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kostenlose Pflegeberatung</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Erhalten Sie schnelle und kompetente Antworten auf Ihre Fragen rund um das Thema Pflege
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Info -->
          <div>
            <div class="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Wie kann unser KI-Assistent Ihnen helfen?</h2>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <CheckCircleIcon class="h-5 w-5 text-primary" />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-900">Informationen zu Pflegegraden</h3>
                    <p class="text-gray-600">Erfahren Sie, welche Voraussetzungen für einen Pflegegrad erfüllt sein müssen und wie der Antragsprozess abläuft.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <CheckCircleIcon class="h-5 w-5 text-primary" />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-900">Leistungen der Pflegeversicherung</h3>
                    <p class="text-gray-600">Informieren Sie sich über Pflegegeld, Pflegesachleistungen und weitere finanzielle Unterstützungsmöglichkeiten.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <CheckCircleIcon class="h-5 w-5 text-primary" />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-900">Alltagshilfen finden</h3>
                    <p class="text-gray-600">Erhalten Sie Tipps zur Suche nach geeigneten Alltagshilfen und Informationen zur Kostenübernahme.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <CheckCircleIcon class="h-5 w-5 text-primary" />
                  </div>
                  <div class="ml-3">
                    <h3 class="font-medium text-gray-900">Pflegetipps für Angehörige</h3>
                    <p class="text-gray-600">Bekommen Sie praktische Ratschläge für die Pflege von Angehörigen und Informationen zu Entlastungsangeboten.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <InformationCircleIcon class="h-6 w-6 text-yellow-600" />
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-yellow-800">Wichtiger Hinweis</h3>
                  <p class="mt-2 text-yellow-700">
                    Unser KI-Assistent gibt sein Bestes, um Ihnen korrekte und hilfreiche Informationen zu liefern. Bitte beachten Sie jedoch:
                  </p>
                  <ul class="mt-2 space-y-2 text-yellow-700 list-disc pl-5">
                    <li>Die Antworten werden automatisch generiert und können Fehler enthalten</li>
                    <li>Für rechtsverbindliche Auskünfte wenden Sie sich bitte an einen menschlichen Berater</li>
                    <li>Bei komplexen Fällen empfehlen wir eine persönliche Beratung</li>
                  </ul>
                  <p class="mt-2 text-yellow-700">
                    Für eine individuelle Beratung durch einen unserer Pflegeexperten können Sie gerne <NuxtLink to="/kontakt" class="font-medium underline">Kontakt</NuxtLink> mit uns aufnehmen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Chat Interface -->
          <div class="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div class="bg-primary text-white p-4 flex items-center">
              <ChatBubbleLeftRightIcon class="h-6 w-6 mr-3" />
              <h2 class="text-xl font-bold">Pflegeberatung Chat</h2>
            </div>

            <!-- Chat Interface -->
            <div v-if="!hasConsented" class="p-6">
              <div class="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3">Datenschutzhinweis</h3>
                <p class="text-gray-700 mb-4">
                  Dieser Chat verwendet KI-Technologie, um Ihre Fragen zu beantworten. Ihre Eingaben werden verarbeitet, um passende Antworten zu generieren. Bitte beachten Sie, dass:
                </p>
                <ul class="text-gray-700 list-disc pl-5 mb-6 space-y-2">
                  <li>Ihre Chatdaten zur Verbesserung des Services gespeichert werden können</li>
                  <li>Die KI-generierten Antworten nicht immer zu 100% korrekt sind</li>
                  <li>Keine sensiblen persönlichen Daten wie Passwörter eingegeben werden sollten</li>
                </ul>
                <button
                  @click="giveConsent"
                  class="w-full btn-primary py-3 text-base"
                >
                  Ich stimme zu und möchte den Chat nutzen
                </button>
              </div>

              <div class="text-center text-gray-500 text-sm">
                <p>Durch die Nutzung des Chats akzeptieren Sie unsere <NuxtLink to="/datenschutz" class="text-primary hover:underline">Datenschutzbestimmungen</NuxtLink>.</p>
              </div>
            </div>

            <!-- Chat Messages (if consented) -->
            <div v-else class="flex flex-col h-[600px] max-h-[70vh] md:h-[600px]">
              <div class="flex-grow overflow-y-auto p-6" ref="messagesContainer">
                <div class="space-y-6">
                  <!-- Welcome Message -->
                  <div class="flex items-start">
                    <div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3">
                      <ChatBubbleLeftRightIcon class="h-5 w-5" />
                    </div>
                    <div class="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                      <p class="text-gray-800">
                        Hallo! Ich bin Ihr digitaler Pflegeberater. Wie kann ich Ihnen heute helfen? Sie können mir Fragen zu Pflegegraden, Leistungen der Pflegeversicherung oder zur Suche nach Alltagshilfen stellen.
                      </p>
                    </div>
                  </div>

                  <!-- AI Disclaimer -->
                  <div class="flex items-start">
                    <div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3">
                      <InformationCircleIcon class="h-5 w-5" />
                    </div>
                    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-[80%]">
                      <p class="text-yellow-800">
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
                      <div class="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                        <p class="text-gray-800" v-html="formatMessage(message.text)"></p>
                      </div>
                    </template>
                    <template v-else>
                      <div class="bg-primary text-white rounded-lg p-4 max-w-[80%]">
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

              <!-- Chat Input -->
              <div class="border-t border-gray-200 p-4 bg-white">
                <form @submit.prevent="sendMessage" class="flex items-center">
                  <input
                    v-model="userInput"
                    type="text"
                    placeholder="Ihre Frage eingeben..."
                    class="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-[50px]"
                    :disabled="isLoading"
                  />
                  <button
                    type="submit"
                    class="bg-primary text-white px-5 py-3 rounded-r-lg hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 h-[50px]"
                    :disabled="isLoading || !userInput.trim()"
                  >
                    <PaperAirplaneIcon class="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mt-24">
          <h2 class="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Wie beantrage ich einen Pflegegrad?</h3>
              <p class="text-gray-700">
                Um einen Pflegegrad zu beantragen, stellen Sie einen Antrag bei Ihrer Pflegekasse. Nach der Antragstellung erfolgt eine Begutachtung durch den Medizinischen Dienst. Basierend auf dem Gutachten entscheidet die Pflegekasse über den Pflegegrad.
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Welche Leistungen stehen mir bei Pflegegrad 2 zu?</h3>
              <p class="text-gray-700">
                Bei Pflegegrad 2 haben Sie Anspruch auf Pflegegeld (332€ monatlich), Pflegesachleistungen (bis zu 761€ monatlich), Entlastungsbetrag (125€ monatlich), Verhinderungspflege und Kurzzeitpflege sowie weitere Leistungen.
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Was ist der Unterschied zwischen Pflegegeld und Pflegesachleistungen?</h3>
              <p class="text-gray-700">
                Pflegegeld erhalten Sie, wenn die Pflege durch Angehörige erfolgt. Pflegesachleistungen werden für professionelle Pflegedienste gezahlt. Sie können auch eine Kombination aus beiden Leistungen wählen.
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Wie finde ich eine geeignete Alltagshilfe?</h3>
              <p class="text-gray-700">
                Über unsere Plattform können Sie schnell und einfach passende Alltagshilfen in Ihrer Nähe finden. Wir vermitteln Ihnen qualifizierte Dienstleister, die Ihnen bei der Bewältigung des Alltags helfen können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';
import { 
  ChatBubbleLeftRightIcon, 
  UserIcon, 
  PaperAirplaneIcon,
  InformationCircleIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline';

// State
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
    
    // Call Flowise API
    const response = await query({ question: userMessage });
    
    // Add AI response to chat
    if (response && response.text) {
      messages.value.push({ text: response.text, isUser: false });
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

// Flowise API query function
async function query(data) {
  try {
    const response = await fetch(
      "https://flowise.maximilianpaszke.de/api/v1/prediction/b52a4ca7-de36-4b7c-9b27-4b44bd252687",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log("API Response:", result);
    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

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
  height: 10px;
  width: 10px;
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
</style>
