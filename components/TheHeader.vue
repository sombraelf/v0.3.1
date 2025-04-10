<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-14 md:h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-lg md:text-xl font-bold" style="color: var(--primary)">SorglosPflege</span>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button 
            @click="isOpen = !isOpen" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            style="color: var(--primary)"
            aria-controls="mobile-menu" 
            :aria-expanded="isOpen"
          >
            <span class="sr-only">Menü öffnen</span>
            <Bars3Icon v-if="!isOpen" class="block h-6 w-6" />
            <XMarkIcon v-else class="block h-6 w-6" />
          </button>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
          <!-- Dropdown for Dienstleistungen -->
          <div class="relative" @mouseleave="isServicesOpen = false">
            <button 
              @mouseover="isServicesOpen = true"
              class="flex items-center px-2 xl:px-3 py-2 rounded-md text-sm font-medium"
              style="color: var(--dark-text);"
            >
              Dienstleistungen
              <ChevronDownIcon class="ml-1 h-4 w-4" :class="{ 'rotate-180': isServicesOpen }" />
            </button>
            
            <div 
              v-show="isServicesOpen"
              class="absolute left-0 mt-2 w-56 bg-white border border-gray-200 focus:outline-none"
              style="border-radius: var(--border-radius);"
            >
              <div class="py-1">
                <NuxtLink 
                  to="/alltagshilfe" 
                  class="block px-4 py-2 text-sm hover:bg-gray-100"
                  style="color: var(--dark-text);"
                >
                  Alltagshilfe finden
                </NuxtLink>
                <NuxtLink 
                  to="/pflegegrad" 
                  class="block px-4 py-2 text-sm hover:bg-gray-100"
                  style="color: var(--dark-text);"
                >
                  Pflegegrad berechnen
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink 
            to="/ratgeber" 
            class="px-2 xl:px-3 py-2 rounded-md text-sm font-medium"
            style="color: var(--dark-text);"
          >
            Ratgeber
          </NuxtLink>
          
          <NuxtLink 
            to="/ueber-uns" 
            class="px-2 xl:px-3 py-2 rounded-md text-sm font-medium"
            style="color: var(--dark-text);"
          >
            Wer wir sind
          </NuxtLink>
          
          <NuxtLink 
            to="/kontakt" 
            class="px-2 xl:px-3 py-2 rounded-md text-sm font-medium"
            style="color: var(--dark-text);"
          >
            Kontakt
          </NuxtLink>
        </nav>

        <!-- CTA Buttons (Desktop) -->
        <div class="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-3">
          <NuxtLink 
            to="/beratung" 
            class="btn-secondary text-xs xl:text-sm inline-flex items-center"
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

    <!-- Mobile menu -->
    <div 
      v-show="isOpen" 
      class="lg:hidden bg-white border-t border-gray-200"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Mobile Dropdown -->
        <div>
          <button 
            @click="isServicesMobileOpen = !isServicesMobileOpen"
            class="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium"
            style="color: var(--dark-text);"
          >
            Dienstleistungen
            <ChevronDownIcon class="ml-1 h-5 w-5" :class="{ 'rotate-180': isServicesMobileOpen }" />
          </button>
          
          <div v-show="isServicesMobileOpen" class="pl-4 space-y-1">
            <NuxtLink 
              to="/alltagshilfe" 
              class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
              style="color: var(--dark-text);"
              @click="isOpen = false"
            >
              Alltagshilfe finden
            </NuxtLink>
            <NuxtLink 
              to="/pflegegrad" 
              class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
              style="color: var(--dark-text);"
              @click="isOpen = false"
            >
              Pflegegrad berechnen
            </NuxtLink>
          </div>
        </div>

        <NuxtLink 
          to="/ratgeber" 
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
          style="color: var(--dark-text);"
          @click="isOpen = false"
        >
          Ratgeber
        </NuxtLink>
        
        <NuxtLink 
          to="/ueber-uns" 
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
          style="color: var(--dark-text);"
          @click="isOpen = false"
        >
          Wer wir sind
        </NuxtLink>
        
        <NuxtLink 
          to="/kontakt" 
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
          style="color: var(--dark-text);"
          @click="isOpen = false"
        >
          Kontakt
        </NuxtLink>

        <!-- CTA Buttons (Mobile) -->
        <div class="pt-2 space-y-2">
          <NuxtLink 
            to="/beratung" 
            class="block w-full text-center btn-secondary text-sm inline-flex items-center justify-center"
            @click="isOpen = false"
          >
            <ChatBubbleLeftIcon class="h-4 w-4 mr-1" />
            Beratung erhalten
          </NuxtLink>
          
          <NuxtLink 
            to="/angebote" 
            class="block w-full text-center btn-primary text-sm"
            @click="isOpen = false"
          >
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

const isOpen = ref(false)
const isServicesOpen = ref(false)
const isServicesMobileOpen = ref(false)
</script>
