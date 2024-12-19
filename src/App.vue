<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import BackgroundShapes from './components/decorative/BackgroundShapes.vue'
import FloatingElements from './components/decorative/FloatingElements.vue'
import ParallaxDots from './components/decorative/ParallaxDots.vue'
</script>

<template>
  <div class="app-container">
    <BackgroundShapes />
    <FloatingElements />
    <ParallaxDots />
    <TheHeader />

    <main>
      <ProjectsSection />
    </main>

    <TheFooter />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hero-section {
  text-align: center;
  padding: 4rem 0;
  position: relative;
}

.hero-section h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.hero-section:hover h1 {
  transform: translateZ(20px);
}



.hero-section:hover .hero-subtitle {
  transform: translateZ(10px);
}

main {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
  }

  .hero-section h1 {
    font-size: 2.5rem;
  }

  main {
    padding: 0 1rem;
  }
}
</style>