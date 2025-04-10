<template>
  <section class="py-16 bg-light-bg">
    <div class="container mx-auto px-4">
      <div class="component-container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <p class="text-dark-text/80 text-lg max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um das Thema Pflege und Unterstützung im Alltag.
          </p>
        </div>

        <div class="space-y-4 max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              :class="activeFaq === index ? 'bg-primary text-white' : 'hover:bg-light-accent/30'"
              :aria-expanded="activeFaq === index"
              :aria-controls="`faq-answer-${index}`"
            >
              <span class="font-medium text-lg">{{ faq.question }}</span>
              <ChevronDownIcon
                class="h-5 w-5 transition-transform duration-300"
                :class="activeFaq === index ? 'rotate-180' : ''"
              />
            </button>
            <div
              :id="`faq-answer-${index}`"
              v-show="activeFaq === index"
              class="p-5 border-t border-gray-200"
              role="region" :aria-labelledby="`faq-question-${index}`" >
              <p class="text-dark-text/80">{{ faq.answer }}</p>
              <div v-if="faq.additionalInfo" class="mt-4 pt-4 border-t border-gray-100">
                <ul class="list-disc list-inside space-y-2 text-dark-text/80">
                  <li v-for="(item, i) in faq.additionalInfo" :key="i">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="mb-6 text-dark-text/80">Haben Sie weitere Fragen? Wir helfen Ihnen gerne weiter.</p>
          <NuxtLink to="/kontakt" class="btn-primary inline-flex items-center">
            <EnvelopeIcon class="h-5 w-5 mr-2" />
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon, EnvelopeIcon } from '@heroicons/vue/24/outline' // Using outline version as per previous examples

// State for the active FAQ item
const activeFaq = ref(null)

// Toggle FAQ item
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// FAQ data (remains the same as you provided)
const faqs = [
  {
    question: 'Welche Pflegeleistungen stehen mir zu?',
    answer: 'Die Pflegeleistungen, die Ihnen zustehen, hängen von Ihrem Pflegegrad ab. Je nach Einstufung (Pflegegrad 1-5) haben Sie Anspruch auf verschiedene Leistungen wie Pflegegeld, Pflegesachleistungen, Tages- und Nachtpflege, Kurzzeitpflege und Verhinderungspflege.',
    additionalInfo: [
      'Pflegegrad 1: Entlastungsbetrag von 125€ monatlich',
      'Pflegegrad 2-5: Pflegegeld zwischen 316€ und 901€ monatlich',
      'Pflegegrad 2-5: Pflegesachleistungen zwischen 724€ und 2.095€ monatlich',
      'Alle Pflegegrade: Beratungsleistungen und Pflegehilfsmittel'
    ]
  },
  {
    question: 'Wie kann ich Förderungen und Zuschüsse beantragen?',
    answer: 'Um Förderungen und Zuschüsse zu beantragen, müssen Sie zunächst einen Antrag bei Ihrer Pflegekasse stellen. Der Medizinische Dienst (MD) oder andere Gutachter führen dann eine Begutachtung durch, um Ihren Pflegegrad festzustellen. Nach der Einstufung können Sie die entsprechenden Leistungen bei Ihrer Pflegekasse beantragen.',
    additionalInfo: [
      'Antrag bei der Pflegekasse (meist über die Krankenkasse)',
      'Begutachtung durch den Medizinischen Dienst',
      'Bescheid über den Pflegegrad',
      'Beantragung der gewünschten Leistungen'
    ]
  },
  {
    question: 'Welche Produkte und Dienstleistungen werden von der Pflegekasse bezuschusst?',
    answer: 'Die Pflegekasse bezuschusst eine Vielzahl von Produkten und Dienstleistungen, die zur Erleichterung der Pflege und zur Verbesserung der Lebensqualität beitragen. Dazu gehören Pflegehilfsmittel, wohnumfeldverbessernde Maßnahmen, Betreuungsleistungen und verschiedene Pflegedienstleistungen.',
    additionalInfo: [
      'Pflegehilfsmittel: Bis zu 40€ monatlich für Verbrauchsprodukte',
      'Wohnumfeldverbessernde Maßnahmen: Bis zu 4.000€ pro Maßnahme',
      'Betreuungsleistungen: Je nach Pflegegrad unterschiedliche Beträge',
      'Technische Hilfsmittel: Oft mit geringer Zuzahlung oder kostenlos'
    ]
  },
  {
    question: 'Wer kann Alltagshilfe in Anspruch nehmen?',
    answer: 'Alltagshilfe kann grundsätzlich von allen Menschen in Anspruch genommen werden, die Unterstützung im Alltag benötigen. Besonders relevant ist sie für Personen mit Pflegegrad, Senioren, Menschen mit Behinderungen oder nach Krankenhausaufenthalten. Die Kosten können bei Vorliegen eines Pflegegrads teilweise oder vollständig von der Pflegekasse übernommen werden.',
    additionalInfo: [
      'Personen mit Pflegegrad 1-5',
      'Senioren mit Unterstützungsbedarf',
      'Menschen nach Operationen oder Krankenhausaufenthalten',
      'Personen mit temporären oder dauerhaften Einschränkungen'
    ]
  },
  {
    question: 'Wie funktioniert die Vermittlung über SorglosPflege?',
    answer: 'Die Vermittlung über SorglosPflege ist einfach und unkompliziert. Sie füllen ein kurzes Formular mit Ihren Bedürfnissen aus, und wir leiten Ihre Anfrage an passende Dienstleister in Ihrer Region weiter. Diese kontaktieren Sie dann mit individuellen Angeboten. Sie können die Angebote vergleichen und den für Sie passenden Dienstleister auswählen. Unsere Beratung ist für Sie kostenlos und unverbindlich.',
    additionalInfo: [
      'Formular ausfüllen mit Ihren Bedürfnissen',
      'Passende Dienstleister werden informiert',
      'Sie erhalten individuelle Angebote',
      'Freie Auswahl des passenden Anbieters'
    ]
  }
]
</script>

<style scoped>
/* Smooth transition for accordion */
button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Custom styling for the FAQ section */
.faq-section {
  background: linear-gradient(to bottom, rgb(var(--light-bg)), white);
}

/* Die fehlerhafte Regel wurde entfernt, da der Hover-Effekt bereits
   über :class im Template korrekt angewendet wird */

/* Animation for the chevron icon */
.rotate-180 {
  transform: rotate(180deg);
}

/* Optional: Add transition for the content reveal */
div[id^="faq-answer-"] {
  transition: all 0.3s ease-in-out; /* Adjust timing/easing as needed */
  overflow: hidden; /* Needed for smooth height transition */
}

/* You might need a more sophisticated transition (e.g., using Vue's <transition>)
   for smooth height animation if v-show isn't sufficient */

</style>
