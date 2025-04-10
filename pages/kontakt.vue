<template>
  <div class="bg-light-bg py-12 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="component-container mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold mb-8 text-primary">Kontakt</h1>
        
        <div class="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-primary">Nehmen Sie Kontakt mit uns auf</h2>
          
          <p class="mb-6">
            Haben Sie Fragen zu unseren Dienstleistungen oder benötigen Sie Hilfe bei der Suche nach einer passenden Pflegelösung? 
            Unser Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns über das Formular, per E-Mail oder telefonisch.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-medium mb-4">Kontaktdaten</h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium">E-Mail</p>
                    <a href="mailto:info@sorglos-pflege.de" class="text-primary hover:underline">info@sorglos-pflege.de</a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium">Telefon</p>
                    <a href="tel:+4912345678" class="text-primary hover:underline">+49 (0) 123 456 78</a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium">Adresse</p>
                    <p>SorglosPflege UG (haftungsbeschränkt)</p>
                    <p>Musterstraße 123</p>
                    <p>12345 Berlin</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <h3 class="text-xl font-medium mb-4">Geschäftszeiten</h3>
                <div class="space-y-2">
                  <p><span class="font-medium">Montag - Freitag:</span> 9:00 - 18:00 Uhr</p>
                  <p><span class="font-medium">Samstag:</span> 10:00 - 14:00 Uhr</p>
                  <p><span class="font-medium">Sonntag:</span> Geschlossen</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-medium mb-4">Kontaktformular</h3>
              
              <form class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium mb-1">Name *</label>
                  <input type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium mb-1">E-Mail *</label>
                  <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium mb-1">Telefon</label>
                  <input type="tel" id="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium mb-1">Betreff *</label>
                  <input type="text" id="subject" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium mb-1">Nachricht *</label>
                  <textarea id="message" rows="5" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
                </div>
                
                <div class="flex items-start">
                  <input type="checkbox" id="privacy" class="mt-1 mr-2" required>
                  <label for="privacy" class="text-sm">
                    Ich habe die <NuxtLink to="/datenschutz" class="text-primary hover:underline">Datenschutzerklärung</NuxtLink> gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>
                
                <div>
                  <button type="submit" class="btn-primary">Nachricht senden</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 class="text-2xl font-semibold mb-6 text-primary">Standort</h2>
          
          <div class="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <p class="text-gray-500">Kartenansicht</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Metadata
useHead({
  title: 'Kontakt - SorglosPflege',
  meta: [
    { name: 'description', content: 'Kontaktieren Sie SorglosPflege für Fragen zu unseren Pflegedienstleistungen oder um Unterstützung bei der Suche nach einer passenden Pflegelösung zu erhalten.' }
  ]
})
</script>
