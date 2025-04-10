<template>
  <section class="relative overflow-hidden py-12 md:py-16 lg:py-20">
    <!-- Background shape -->
    <div class="absolute bottom-0 right-0 w-full h-full bg-light-bg  -z-10"></div>
    
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 component-container">
        <!-- Left column: Text content -->
        <div class="w-full lg:w-1/2 space-y-6">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-primary">Sorglos</span> die richtige Pflege finden
          </h1>
          
          <p class="text-dark-text/80 text-lg">
            Wir verbinden Sie mit kompetenten Pflegedienstleistern in Ihrer Nähe. 
            Geben Sie einfach Ihre Anforderungen ein und erhalten Sie passende Angebote.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <NuxtLink to="/alltagshilfe" class="btn-primary text-center sm:text-left">
              Angebote erhalten
            </NuxtLink>
            
            <NuxtLink to="/pflegegrad" class="btn-secondary text-center sm:text-left">
              Beratung erhalten
            </NuxtLink>
          </div>
          
          <!-- Testimonial section -->
          <div class="pt-6 md:pt-8">
            <div class="flex items-center">
              <div class="flex -space-x-2">
                <!-- Colored circles instead of images -->
                <div class="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold">1</div>
                <div class="w-10 h-10 rounded-full border-2 border-white bg-primary/80 flex items-center justify-center text-white text-xs font-bold">2</div>
                <div class="w-10 h-10 rounded-full border-2 border-white bg-primary/60 flex items-center justify-center text-white text-xs font-bold">3</div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium">Wir helfen täglich über 100+ Kunden deutschlandweit</p>
                <div class="flex text-yellow-400 mt-1">
                  <StarIcon v-for="i in 5" :key="i" class="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right column: Image placeholder -->
        <div class="w-full lg:w-1/2">
          <div class="relative">
            <div class="rounded-lg overflow-hidden shadow-xl">
              <!-- Colored div instead of image -->
              <div 
                class="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-primary/20 to-primary/70 rounded-lg flex items-center justify-center"
              >
                <div class="text-white text-lg font-medium">Pflegedienstleistung</div>
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-light-accent/30 rounded-full -z-10"></div>
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>
