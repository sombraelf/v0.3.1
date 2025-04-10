<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">So einfach funktioniert's</h2>
        <p class="text-dark-text/70 text-lg max-w-3xl mx-auto">
          In nur zwei Schritten verbinden wir Sie mit passenden Pflegedienstleistern in Ihrer Region
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 component-container">
        <!-- Step 1 -->
        <div class="bg-light-bg rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group">
          <!-- Decorative circle -->
          <div class="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-125"></div>
          
          <!-- Step number -->
          <div class="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10">1</div>
          
          <div class="relative z-10">
            <div class="mb-6 text-primary">
              <ClipboardDocumentListIcon class="h-14 w-14" />
            </div>
            
            <h3 class="text-xl font-bold mb-3">Anfrage stellen</h3>
            
            <p class="text-dark-text/80">
              Teilen Sie uns Ihren Pflegebedarf und Ihre Postleitzahl mit. 
              Je detaillierter Ihre Angaben, desto passgenauer können wir für Sie suchen.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-light-bg rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group">
          <!-- Decorative circle -->
          <div class="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-125"></div>
          
          <!-- Step number -->
          <div class="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10">2</div>
          
          <div class="relative z-10">
            <div class="mb-6 text-primary">
              <EnvelopeOpenIcon class="h-14 w-14" />
            </div>
            
            <h3 class="text-xl font-bold mb-3">Angebote erhalten</h3>
            
            <p class="text-dark-text/80">
              Geprüfte Pflegedienstleister aus Ihrer Region werden sich mit passenden 
              Angeboten bei Ihnen melden. Vergleichen Sie und wählen Sie das Beste.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ClipboardDocumentListIcon, EnvelopeOpenIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Animation for hover effects */
.group:hover .text-primary {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

.text-primary {
  transition: transform 0.3s ease;
}
</style>
