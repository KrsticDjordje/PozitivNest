<script setup lang="ts">
import { ref } from 'vue'

const navItems = [
  { text: 'Projects', href: '#projects' },
  { text: 'Ideas', href: '#ideas' },
  { text: 'Suggestion', href: '#suggestion' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="main-header">
    <div class="header-content">
      <div class="logo">
        <h2>PozitivNest</h2>
      </div>

      <!-- Hamburger мени за мобилне -->
      <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="{ 'active': isMenuOpen }">
        <ul>
          <li v-for="item in navItems" :key="item.text">
            <a :href="item.href" @click="closeMenu">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h2 {
  font-size: 1.5rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1.1rem;
}

nav a:hover {
  color: #4ecdc4;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-toggle.active span:first-child {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:last-child {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 1.5rem;
  }

  .menu-toggle {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(26, 26, 46, 0.98);
    backdrop-filter: blur(10px);
    padding-top: 5rem;
    transition: right 0.3s ease;
  }

  nav.active {
    right: 0;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }

  nav a {
    font-size: 1.5rem;
    display: block;
    padding: 1rem;
  }
}
</style>