<template>
  <section class="py-16 bg-gradient-to-b from-white to-light-bg">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ihre Anfrage</h2>
        <p class="text-dark-text/70 text-lg max-w-3xl mx-auto">
          Füllen Sie das Formular aus und erhalten Sie passende Angebote von Pflegedienstleistern in Ihrer Region
        </p>
      </div>
      
      <!-- Form container with decorative elements -->
      <div class="relative component-container">
        <!-- Decorative elements -->
        <div class="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden md:block"></div>
        <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full -z-10 hidden md:block"></div>
        
        <!-- Form card -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10">
          <!-- Typeform embed -->
          <div class="typeform-container p-4 md:p-6 min-h-[500px]" ref="typeformContainer">
            <div data-tf-live="01JRDR6AXYD939C5NDKX3CTZAE"></div>
          </div>
          
          <!-- Divider -->
          <div class="px-6">
            <div class="h-px bg-gray-200"></div>
          </div>
          
          <!-- Trust indicators -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-light-bg/30">
            <!-- Datenschutz -->
            <div class="flex flex-col items-center text-center group">
              <div class="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <ShieldCheckIcon class="h-8 w-8 text-primary" />
              </div>
              <h3 class="font-semibold mb-1">Datenschutz</h3>
              <p class="text-sm text-dark-text/70">Ihre Daten werden vertraulich und nach DSGVO-Richtlinien behandelt</p>
            </div>
            
            <!-- Sichere Übertragung -->
            <div class="flex flex-col items-center text-center group">
              <div class="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <LockClosedIcon class="h-8 w-8 text-primary" />
              </div>
              <h3 class="font-semibold mb-1">Sichere Übertragung</h3>
              <p class="text-sm text-dark-text/70">SSL-verschlüsselte Verbindung für maximale Sicherheit Ihrer Daten</p>
            </div>
            
            <!-- Schnelle Rückmeldung -->
            <div class="flex flex-col items-center text-center group">
              <div class="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <BoltIcon class="h-8 w-8 text-primary" />
              </div>
              <h3 class="font-semibold mb-1">Schnelle Rückmeldung</h3>
              <p class="text-sm text-dark-text/70">Erste Angebote erhalten Sie in der Regel innerhalb von 24 Stunden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShieldCheckIcon, LockClosedIcon, BoltIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'

onMounted(() => {
  // Load Typeform script
  const script = document.createElement('script')
  script.src = '//embed.typeform.com/next/embed.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
.typeform-container {
  position: relative;
  z-index: 10;
}

/* Pulse animation for the bolt icon */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.group:hover .text-primary {
  animation: pulse 1.5s ease infinite;
}
</style>
