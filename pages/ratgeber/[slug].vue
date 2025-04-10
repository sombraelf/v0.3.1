<template>
  <div>
    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Back Button -->
        <NuxtLink to="/ratgeber" class="inline-flex items-center text-primary font-medium mb-8 hover:text-primary-dark transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zur Übersicht
        </NuxtLink>

        <!-- Post Header -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
              {{ getCategoryName(post.categoryId) }}
            </span>
            <span class="text-gray-500">{{ formatDate(post.date) }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
          <div class="flex items-center">
            <img 
              :src="post.author.avatar" 
              :alt="post.author.name"
              class="w-10 h-10 rounded-full mr-3"
            >
            <div>
              <div class="font-medium text-gray-900">{{ post.author.name }}</div>
              <div class="text-sm text-gray-500">{{ post.author.role }}</div>
            </div>
          </div>
        </div>

        <!-- Featured Image -->
        <div class="relative rounded-lg overflow-hidden mb-10">
          <img 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-auto"
          >
        </div>

        <!-- Post Content -->
        <div class="prose prose-lg max-w-none">
          <p>
            Wenn Sie oder ein Angehöriger pflegebedürftig werden, ist es wichtig, frühzeitig einen Pflegegrad zu beantragen. Der Pflegegrad bestimmt, welche Leistungen von der Pflegeversicherung übernommen werden. In diesem Artikel erklären wir Ihnen Schritt für Schritt, wie Sie einen Pflegegrad beantragen können.
          </p>

          <h2>Was ist ein Pflegegrad?</h2>
          <p>
            Der Pflegegrad gibt an, wie selbstständig eine Person ihren Alltag bewältigen kann. Es gibt fünf Pflegegrade, wobei Pflegegrad 1 eine geringe Beeinträchtigung und Pflegegrad 5 eine schwerste Beeinträchtigung der Selbstständigkeit bedeutet.
          </p>

          <h2>Wer kann einen Pflegegrad beantragen?</h2>
          <p>
            Jeder, der gesetzlich oder privat pflegeversichert ist und aufgrund körperlicher, kognitiver oder psychischer Beeinträchtigungen Hilfe im Alltag benötigt, kann einen Pflegegrad beantragen. Die Beeinträchtigungen müssen voraussichtlich für mindestens sechs Monate bestehen.
          </p>

          <h2>Schritt 1: Antrag stellen</h2>
          <p>
            Der erste Schritt ist die Antragstellung bei der Pflegekasse. Dies kann telefonisch, schriftlich oder online erfolgen. Die Pflegekasse ist bei der Krankenkasse angesiedelt, bei der die pflegebedürftige Person versichert ist.
          </p>

          <h2>Schritt 2: Vorbereitung auf die Begutachtung</h2>
          <p>
            Nach der Antragstellung wird ein Termin für die Begutachtung durch den Medizinischen Dienst (MD) oder bei privat Versicherten durch MEDICPROOF vereinbart. Zur Vorbereitung sollten Sie:
          </p>
          <ul>
            <li>Ein Pflegetagebuch führen, in dem Sie dokumentieren, welche Hilfe die pflegebedürftige Person benötigt</li>
            <li>Arztberichte und Befunde zusammenstellen</li>
            <li>Medikamentenpläne bereithalten</li>
            <li>Eine Liste mit den behandelnden Ärzten erstellen</li>
          </ul>

          <h2>Schritt 3: Die Begutachtung</h2>
          <p>
            Bei der Begutachtung kommt ein Gutachter zu Ihnen nach Hause und prüft die Selbstständigkeit in sechs verschiedenen Bereichen:
          </p>
          <ol>
            <li>Mobilität</li>
            <li>Kognitive und kommunikative Fähigkeiten</li>
            <li>Verhaltensweisen und psychische Problemlagen</li>
            <li>Selbstversorgung</li>
            <li>Umgang mit krankheits- oder therapiebedingten Anforderungen</li>
            <li>Gestaltung des Alltagslebens und sozialer Kontakte</li>
          </ol>

          <h2>Schritt 4: Entscheidung der Pflegekasse</h2>
          <p>
            Nach der Begutachtung erstellt der Gutachter einen Bericht, auf dessen Grundlage die Pflegekasse über den Pflegegrad entscheidet. Die Entscheidung sollte innerhalb von 25 Arbeitstagen nach Antragstellung erfolgen.
          </p>

          <h2>Was tun bei Ablehnung oder zu niedrigem Pflegegrad?</h2>
          <p>
            Wenn der Antrag abgelehnt wird oder der zuerkannte Pflegegrad zu niedrig erscheint, können Sie innerhalb eines Monats Widerspruch einlegen. Legen Sie dem Widerspruch möglichst weitere ärztliche Atteste bei, die Ihre Pflegebedürftigkeit belegen.
          </p>

          <h2>Fazit</h2>
          <p>
            Die Beantragung eines Pflegegrads mag zunächst kompliziert erscheinen, ist aber mit der richtigen Vorbereitung gut zu bewältigen. Scheuen Sie sich nicht, Hilfe in Anspruch zu nehmen, zum Beispiel durch Pflegestützpunkte oder Pflegeberatungsstellen.
          </p>
          <p>
            Bei SorglosPflege unterstützen wir Sie gerne bei allen Fragen rund um das Thema Pflege und helfen Ihnen, den passenden Pflegedienst zu finden.
          </p>
        </div>

        <!-- Related Posts -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Das könnte Sie auch interessieren</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="relatedPost in relatedPosts" 
              :key="relatedPost.id" 
              class="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <NuxtLink :to="`/ratgeber/${relatedPost.slug}`" class="block">
                <div class="relative pb-2/3">
                  <img 
                    :src="relatedPost.image" 
                    :alt="relatedPost.title" 
                    class="absolute h-full w-full object-cover"
                  >
                </div>
                <div class="p-6">
                  <h4 class="text-lg font-bold text-gray-900 mb-2">{{ relatedPost.title }}</h4>
                  <p class="text-gray-700 mb-4">{{ relatedPost.excerpt }}</p>
                  <div class="text-primary font-medium">Weiterlesen</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// In a real application, this would fetch data based on the slug parameter
// For this example, we're using static data

const route = useRoute();
const slug = route.params.slug;

// Sample data - in a real app, this would come from an API or CMS
const categories = [
  { id: 'pflegegrad', name: 'Pflegegrad' },
  { id: 'alltagshilfe', name: 'Alltagshilfe' },
  { id: 'finanzierung', name: 'Finanzierung' },
  { id: 'betreuung', name: 'Betreuung' }
];

// This is a mock post - in a real app, you would fetch the post based on the slug
const post = {
  id: 1,
  title: 'Pflegegrad beantragen: So geht\'s',
  slug: 'pflegegrad-beantragen',
  date: '2023-11-15',
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  categoryId: 'pflegegrad',
  author: {
    name: 'Julia Müller',
    role: 'Pflegeexpertin',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
};

// Mock related posts
const relatedPosts = [
  {
    id: 5,
    title: 'Pflegegrad 2: Welche Leistungen stehen Ihnen zu?',
    slug: 'pflegegrad-2-leistungen',
    excerpt: 'Ein detaillierter Überblick über alle Leistungen, die bei Pflegegrad 2 in Anspruch genommen werden können.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Finanzielle Unterstützung für pflegende Angehörige',
    slug: 'finanzielle-unterstuetzung-pflegende-angehoerige',
    excerpt: 'Welche finanziellen Hilfen stehen pflegenden Angehörigen zu und wie können sie beantragt werden?',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  }
];

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

/* Basic styling for the blog content */
.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1a202c;
}

.prose p {
  margin-bottom: 1.25rem;
  line-height: 1.7;
}

.prose ul, .prose ol {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose ul li {
  list-style-type: disc;
}

.prose ol li {
  list-style-type: decimal;
}
</style>
