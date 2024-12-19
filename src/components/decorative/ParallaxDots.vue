<template>
  <div class="parallax-dots" :style="{ transform: `translateY(${-scrollY * 0.1}px)` }">
    <div v-for="i in 8" :key="i" 
         class="dot"
         :style="{ 
           top: `${Math.random() * 100}%`,
           left: `${Math.random() * 100}%`,
           animationDelay: `${-i * 0.5}s`
         }">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-dots {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  will-change: transform;
}

.dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>