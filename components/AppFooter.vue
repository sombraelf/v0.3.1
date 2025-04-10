<template>
  <footer class="bg-primary text-white">
    <!-- CTA Section -->
    <div class="py-16 text-center">
      <div class="container mx-auto px-4">
        <div class="component-container mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Bereit für ein sorgloses Leben?</h2>
          <p class="text-lg mb-8 max-w-3xl mx-auto">
            Starten Sie jetzt Ihre Anfrage und finden Sie die passende Unterstützung für Ihren Alltag.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink to="/alltagshilfe" class="btn bg-white text-primary hover:bg-gray-100 transition-colors duration-300 font-medium">
              Angebote erhalten
            </NuxtLink>
            <NuxtLink to="/kontakt" class="btn bg-transparent border-2 border-white hover:bg-white/10 transition-colors duration-300 font-medium">
              Kontakt aufnehmen
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="py-12 border-t border-white/20">
      <div class="container mx-auto px-4">
        <div class="component-container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Company Info -->
            <div>
              <div class="mb-6">
                <h3 class="text-2xl font-bold mb-1">
                  <span class="text-white">Sorglos</span>
                  <span class="text-light-accent">Pflege</span>
                </h3>
                <p class="text-white/80">
                  Ihre kostenlose Pflegeberatung und Vergleichsplattform für Pflegedienstleister. Wir helfen Ihnen, den richtigen Pflegedienst zu finden.
                </p>
              </div>
              
              <!-- Social Media -->
              <div class="flex space-x-4">
                <a href="#" aria-label="Facebook" class="text-white hover:text-light-accent transition-colors duration-300">
                  <FacebookIcon class="h-6 w-6" />
                </a>
                <a href="#" aria-label="Instagram" class="text-white hover:text-light-accent transition-colors duration-300">
                  <InstagramIcon class="h-6 w-6" />
                </a>
                <a href="#" aria-label="Twitter" class="text-white hover:text-light-accent transition-colors duration-300">
                  <TwitterIcon class="h-6 w-6" />
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Schnelllinks</h4>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/alltagshilfe" class="text-white/80 hover:text-white transition-colors duration-300">
                    Alltagshilfe
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/pflegegrad" class="text-white/80 hover:text-white transition-colors duration-300">
                    Pflegegrad berechnen
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/ratgeber" class="text-white/80 hover:text-white transition-colors duration-300">
                    Ratgeber
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/ueber-uns" class="text-white/80 hover:text-white transition-colors duration-300">
                    Über uns
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/kontakt" class="text-white/80 hover:text-white transition-colors duration-300">
                    Kontakt
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Kontakt</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <EnvelopeIcon class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@sorglos-pflege.de" class="text-white/80 hover:text-white transition-colors duration-300">
                    info@sorglos-pflege.de
                  </a>
                </li>
                <li class="flex items-start">
                  <PhoneIcon class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="tel:+491234567890" class="text-white/80 hover:text-white transition-colors duration-300">
                    +49 123 456789
                  </a>
                </li>
                <li class="flex items-start">
                  <MapPinIcon class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-white/80">
                    Musterstraße 123, 12345 Berlin
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="py-4 border-t border-white/20">
      <div class="container mx-auto px-4">
        <div class="component-container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div class="text-sm text-white/70 mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} SorglosPflege UG (haftungsbeschränkt)
          </div>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <NuxtLink to="/impressum" class="text-white/70 hover:text-white transition-colors duration-300">
              Impressum
            </NuxtLink>
            <NuxtLink to="/datenschutz" class="text-white/70 hover:text-white transition-colors duration-300">
              Datenschutz
            </NuxtLink>
            <NuxtLink to="/nutzer-agb" class="text-white/70 hover:text-white transition-colors duration-300">
              Nutzer AGB
            </NuxtLink>
            <NuxtLink to="/partner-agb" class="text-white/70 hover:text-white transition-colors duration-300">
              Partner AGB
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/outline'

// Social media icons
const FacebookIcon = defineComponent({
  render: () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    viewBox: '0 0 24 24', 
    fill: 'currentColor' 
  }, [
    h('path', { 
      d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
    })
  ])
})

const InstagramIcon = defineComponent({
  render: () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    viewBox: '0 0 24 24', 
    fill: 'currentColor' 
  }, [
    h('path', { 
      d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
    })
  ])
})

const TwitterIcon = defineComponent({
  render: () => h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    viewBox: '0 0 24 24', 
    fill: 'currentColor' 
  }, [
    h('path', { 
      d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    })
  ])
})
</script>

<style scoped>
/* Hover effects for links */
a:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}

a {
  transition: transform 0.3s ease;
}

/* Button styles specific to footer */
.btn {
  @apply px-6 py-3 rounded-md transition-all duration-300 font-medium;
}
</style>
