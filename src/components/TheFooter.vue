<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/djordjekrstic97',
    icon: '🔗'
  },
  {
    name: 'Email',
    url: 'mailto:djordje.krstic97@gmail.com',
    icon: '📧'
  },
  {
    name: 'Website',
    url: 'krsticdjordje.com',
    icon: '🌐'
  }
]
</script>

<template>
  <footer class="main-footer">
    <div id="suggestion" class="footer-content">
      <div class="social-links">
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
          class="social-link">
          <span class="icon">{{ link.icon }}</span>
          {{ link.name }}
        </a>
      </div>
      <p class="copyright">&copy; {{ currentYear }} Djordje Krstic. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  width: 100%;
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.05);
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.social-links {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(90deg, #4ecdc4, transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.social-link:hover {
  color: #4ecdc4;
}

.social-link:hover::after {
  transform: scaleX(1);
}

.icon {
  font-size: 1.2rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .social-link {
    font-size: 1rem;
  }
}
</style>