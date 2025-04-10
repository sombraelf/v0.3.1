<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-14 md:h-16 lg:h-20 component-container mx-auto">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-lg md:text-xl font-bold text-primary">SorglosPflege</span>
          </NuxtLink>
        </div>

        <div class="flex lg:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-100 focus:outline-none"
            aria-controls="mobile-menu"
            :aria-expanded="isOpen"
          >
            <span class="sr-only">Menü öffnen</span>
            <Bars3Icon v-if="!isOpen" class="block h-6 w-6" />
            <XMarkIcon v-else class="block h-6 w-6" />
          </button>
        </div>

        <nav class="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
          <div
            class="relative inline-block"
            @mouseenter="handleServicesMouseEnter" @mouseleave="handleServicesMouseLeave" >
            <button
              class="flex items-center px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
               :aria-expanded="isServicesHovered"
            >
              Leistungen
              <ChevronDownIcon class="ml-1 h-4 w-4" :class="{ 'rotate-180': isServicesHovered }" />
            </button>
            <div
              v-show="isServicesHovered" class="absolute left-0 mt-2 w-56 bg-white border border-gray-200 focus:outline-none shadow-lg"
              style="border-radius: var(--border-radius);"
              @mouseenter="handleServicesMouseEnter" @mouseleave="handleServicesMouseLeave" >
              <div class="py-1">
                <NuxtLink
                  to="/alltagshilfe"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 text-dark-text"
                  @click="closeServicesMenu" >
                  Alltagshilfe finden
                </NuxtLink>
                <NuxtLink
                  to="/pflegegrad"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 text-dark-text"
                  @click="closeServicesMenu" >
                  Pflegegrad berechnen
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/ratgeber"
            class="px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
          >
            Ratgeber
          </NuxtLink>

          <NuxtLink
            to="/ueber-uns"
            class="px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
          >
            Über uns
          </NuxtLink>

          <NuxtLink
            to="/kontakt"
            class="px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
          >
            Kontakt
          </NuxtLink>
        </nav>

        <div class="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-3">
          <NuxtLink
            to="/beratung"
            class="btn-secondary text-xs xl:text-sm inline-flex items-center hover:bg-primary/10 transition-colors duration-300"
          >
            <ChatBubbleLeftIcon class="h-4 w-4 mr-1" />
            Beratung erhalten
          </NuxtLink>

          <NuxtLink
            to="/angebote"
            class="btn-primary text-xs xl:text-sm"
          >
            Angebote erhalten
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      v-show="isOpen"
      class="lg:hidden bg-white border-t border-gray-200"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 component-container mx-auto">
        <div>
          <button
            @click="isServicesMobileOpen = !isServicesMobileOpen"
            class="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium text-dark-text"
          >
            Dienstleistungen
            <ChevronDownIcon class="ml-1 h-5 w-5" :class="{ 'rotate-180': isServicesMobileOpen }" />
          </button>

          <div v-show="isServicesMobileOpen" class="pl-4 space-y-1">
            <NuxtLink
              to="/alltagshilfe"
              class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text"
              @click="closeMobileMenu" >
              Alltagshilfe finden
            </NuxtLink>
            <NuxtLink
              to="/pflegegrad"
              class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text"
              @click="closeMobileMenu" >
              Pflegegrad berechnen
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          to="/ratgeber"
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text"
          @click="closeMobileMenu" >
          Ratgeber
        </NuxtLink>

        <NuxtLink
          to="/ueber-uns"
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text"
          @click="closeMobileMenu" >
          Wer wir sind
        </NuxtLink>

        <NuxtLink
          to="/kontakt"
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text"
          @click="closeMobileMenu" >
          Kontakt
        </NuxtLink>

        <div class="pt-2 space-y-2">
          <NuxtLink
            to="/beratung"
            class="block w-full text-center btn-secondary text-sm inline-flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
            @click="closeMobileMenu" >
            <ChatBubbleLeftIcon class="h-4 w-4 mr-1" />
            Beratung erhalten
          </NuxtLink>

          <NuxtLink
            to="/angebote"
            class="block w-full text-center btn-primary text-sm"
            @click="closeMobileMenu" >
            Angebote erhalten
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'

// --- Original Refs ---
const isOpen = ref(false)
const isServicesMobileOpen = ref(false)
const isServicesHovered = ref(false)

// --- NEU: Ref für den Desktop-Dropdown-Timeout ---
const servicesMenuTimeout = ref(null)

// --- NEU: Funktionen für Desktop-Dropdown Hover-Logik ---
const handleServicesMouseEnter = () => {
  if (servicesMenuTimeout.value) {
    clearTimeout(servicesMenuTimeout.value)
    servicesMenuTimeout.value = null
  }
  isServicesHovered.value = true
}

const handleServicesMouseLeave = () => {
  servicesMenuTimeout.value = setTimeout(() => {
    isServicesHovered.value = false
  }, 200) // 200ms Verzögerung
}

// --- NEU: Funktion zum Schließen des Desktop-Dropdowns (nach Klick) ---
const closeServicesMenu = () => {
    if (servicesMenuTimeout.value) {
        clearTimeout(servicesMenuTimeout.value);
        servicesMenuTimeout.value = null;
    }
    isServicesHovered.value = false;
}


// --- NEU: Funktion zum Schließen des mobilen Menüs (nach Klick) ---
const closeMobileMenu = () => {
    isOpen.value = false;
    // Optional: auch das mobile Submenu schließen
    // isServicesMobileOpen.value = false;
}
</script>
