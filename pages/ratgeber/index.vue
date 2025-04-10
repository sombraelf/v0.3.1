<template>
  <div>
    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Page Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ratgeber</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Informationen und Tipps rund um das Thema Pflege und Betreuung
          </p>
        </div>

        <!-- Blog Categories -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="selectedCategory = category.id === selectedCategory ? null : category.id"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="post in filteredPosts" 
            :key="post.id" 
            class="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105"
          >
            <NuxtLink :to="`/ratgeber/${post.slug}`" class="block">
              <div class="relative pb-2/3">
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="absolute h-full w-full object-cover"
                >
                <div class="absolute top-4 left-4">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {{ getCategoryName(post.categoryId) }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">{{ formatDate(post.date) }}</div>
                <h2 class="text-xl font-bold text-gray-900 mb-2">{{ post.title }}</h2>
                <p class="text-gray-700 mb-4">{{ post.excerpt }}</p>
                <div class="text-primary font-medium">Weiterlesen</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample data - in a real app, this would come from an API or CMS
const categories = [
  { id: 'pflegegrad', name: 'Pflegegrad' },
  { id: 'alltagshilfe', name: 'Alltagshilfe' },
  { id: 'finanzierung', name: 'Finanzierung' },
  { id: 'betreuung', name: 'Betreuung' }
];

const posts = [
  {
    id: 1,
    title: 'Pflegegrad beantragen: So geht\'s',
    slug: 'pflegegrad-beantragen',
    excerpt: 'Ein Leitfaden zur Beantragung eines Pflegegrads - von der Vorbereitung bis zur Bewilligung.',
    date: '2023-11-15',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categoryId: 'pflegegrad'
  },
  {
    id: 2,
    title: 'Finanzielle Unterstützung für pflegende Angehörige',
    slug: 'finanzielle-unterstuetzung-pflegende-angehoerige',
    excerpt: 'Welche finanziellen Hilfen stehen pflegenden Angehörigen zu und wie können sie beantragt werden?',
    date: '2023-10-28',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categoryId: 'finanzierung'
  },
  {
    id: 3,
    title: 'Alltagshilfen im Überblick',
    slug: 'alltagshilfen-im-ueberblick',
    excerpt: 'Von Einkaufshilfen bis zur Wohnungsreinigung: Welche Alltagshilfen gibt es und wer übernimmt die Kosten?',
    date: '2023-10-10',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categoryId: 'alltagshilfe'
  },
  {
    id: 4,
    title: 'Demenz: Tipps für den Umgang mit Betroffenen',
    slug: 'demenz-tipps-umgang-betroffene',
    excerpt: 'Praktische Ratschläge für Angehörige und Pflegekräfte im Umgang mit Demenzpatienten.',
    date: '2023-09-22',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categoryId: 'betreuung'
  },
  {
    id: 5,
    title: 'Pflegegrad 2: Welche Leistungen stehen Ihnen zu?',
    slug: 'pflegegrad-2-leistungen',
    excerpt: 'Ein detaillierter Überblick über alle Leistungen, die bei Pflegegrad 2 in Anspruch genommen werden können.',
    date: '2023-09-05',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categoryId: 'pflegegrad'
  },
  {
    id: 6,
    title: 'Entlastungsbetrag: 125 Euro sinnvoll nutzen',
    slug: 'entlastungsbetrag-sinnvoll-nutzen',
    excerpt: 'Wie Sie den monatlichen Entlastungsbetrag von 125 Euro optimal für Ihre Pflegesituation einsetzen können.',
    date: '2023-08-18',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categoryId: 'finanzierung'
  }
];

const selectedCategory = ref(null);

const filteredPosts = computed(() => {
  if (!selectedCategory.value) return posts;
  return posts.filter(post => post.categoryId === selectedCategory.value);
});

const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : '';
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('de-DE', options);
};
</script>

<style scoped>
.pb-2\/3 {
  padding-bottom: 66.666667%;
}
</style>
