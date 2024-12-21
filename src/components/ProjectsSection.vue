<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Vexiform',
    description: 'Free EXIF metadata viewer for your images. View detailed information about your photos including camera settings, location data, and more.',
    tags: ['Free', 'No ads', 'No email required'],
    features: ['EXIF metadata viewer', 'Metadata removal'],
    imageUrl: '/images/vexiform.png',
    projectUrl: 'https://vexiform.pages.dev'
  },
  {
    title: 'QRtist',
    description: 'Create and customize QR codes for free. Generate QR codes for links, text, or contact information with custom colors and styles.',
    tags: ['Free', 'No ads', 'No email required'],
    features: ['Customizable', 'Multiple formats', 'Batch generation'],
    imageUrl: '/images/qrtist.png',
    projectUrl: 'https://qrtist.pages.dev'
  },
  {
    title: 'OptimizeHub',
    description: 'Free tool for compressing and converting images, PDFs, and videos. Transform files between different formats without quality loss.',
    tags: ['Free', 'No ads', 'No email required'],
    features: ['Lossless compression', 'Multiple formats', 'File conversion'],
    imageUrl: '/images/optimizehub.png',
    projectUrl: 'https://optimizehub.pages.dev'
  },
  {
    title: 'Iconium',
    description: 'Free icon library with pre-defined categories. Download and customize icons for your projects. Simple interface for finding and modifying icons to match your needs.',
    tags: ['Free', 'No ads', 'No email required'],
    features: ['Customizable icons', 'Multiple formats', 'Category browsing'],
    imageUrl: '/images/iconium.png',
    projectUrl: 'https://iconium.pages.dev'
  }
]
</script>

<template>
  <div class="hero-section">
    <h1>Free Web Tools</h1>
    <p id="projects" class="hero-subtitle">Empowering the Community</p>
    <div class="hero-description">
      <p>Save time with my collection of hassle-free web tools. No annoying ads, no subscriptions, no email required -
        just powerful tools accessible to everyone. Always free, now and forever, because great tools should be
        available to all.</p>
    </div>
  </div>



  <section id="projects" class="projects-section">
    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>

    <div id="ideas" class="vision-banner">
      <h2 class="vision-title">Future Mision</h2>
      <div class="vision-content">
        <div class="vision-item">
          <span class="vision-icon">🎯</span>
          <h3>Bi-Monthly Releases</h3>
          <p>New free tool every two months, each designed to automate and simplify your daily tasks</p>
        </div>
        <div class="vision-item">
          <span class="vision-icon">⚡</span>
          <h3>Productivity Focus</h3>
          <p>Tools that save you time by automating repetitive tasks and streamlining your workflow</p>
        </div>
        <div class="vision-item">
          <span class="vision-icon">🤝</span>
          <h3>Forever Free</h3>
          <p>PozitivNest will always remain free. Your support helps create more tools for everyone</p>
        </div>
      </div>
      <div class="vision-footer">
        <p>PozitivNest is committed to developing tools that make work easier and more efficient. Every new release
          focuses on solving real-world challenges.</p>
      </div>
    </div>

    <div class="coming-soon">
      <p>More tools coming soon! Have a suggestion? <a href="mailto:djordje.krstic97@gmail.com">Let me know</a></p>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 1.5rem 0;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease;
  padding-bottom: .5rem;
}

.support-banner {
  text-align: center;
  margin: 5rem auto 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  max-width: 800px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.support-banner p {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.coming-soon {
  text-align: center;
  margin-top: 3rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
}

.intro-section {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
}

.intro-text {
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
}

.intro-text ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.intro-text li {
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.contribution-text {
  margin-top: 1.5rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
}

.vision-banner {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.08) 100%);
  padding: 4rem 0;
  margin: 4rem -50vw 2rem;
  margin-left: 50%;
  margin-right: 50%;
  position: relative;
  left: -50vw;
  width: 100vw;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.vision-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.vision-item {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.vision-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.vision-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.vision-item:hover::before {
  transform: translateX(100%);
}

.vision-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.vision-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vision-item p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.vision-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vision-footer {
  text-align: center;
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 0 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .support-banner {
    margin: 1.5rem 1rem 2rem;
    padding: 1rem;
  }

  .support-banner p {
    font-size: 1rem;
  }

  .coming-soon {
    margin-top: 2rem;
    padding: 0 1rem;
  }

  .intro-section {
    margin-bottom: 2rem;
  }

  .intro-text {
    font-size: 1rem;
  }

  .intro-text ul {
    grid-template-columns: 1fr;
  }

  .vision-banner {
    padding: 2rem 0;
    margin: 1rem -50vw;
    margin-left: 50%;
    margin-right: 50%;
  }

  .vision-content {
    padding: 0 1rem;
  }

  .vision-item {
    padding: 1.5rem;
  }

  .vision-icon {
    font-size: 2rem;
  }

  .vision-item h3 {
    font-size: 1.25rem;
  }

  .vision-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .vision-footer {
    margin: 2rem auto 0;
    padding: 0 1rem;
    font-size: 1rem;
  }
}
</style>