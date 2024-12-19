<template>
  <div class="floating-elements" :style="{ transform: `translateY(${-scrollY * 0.2}px)` }">
    <!-- Floating cubes -->
    <div class="cube cube-1"></div>
    <div class="cube cube-2"></div>
    <div class="cube cube-3"></div>
    
    <!-- Rotating rings -->
    <div class="ring ring-1"></div>
    <div class="ring ring-2"></div>
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
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  will-change: transform;
}

.cube {
  position: absolute;
  transform-style: preserve-3d;
  animation: float 6s ease-in-out infinite;
  opacity: 0.1;
}

.cube-1 {
  width: 60px;
  height: 60px;
  top: 25%;
  right: 10%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transform: rotate(-45deg);
}

.cube-2 {
  width: 40px;
  height: 40px;
  top: 60%;
  left: 15%;
  background: linear-gradient(45deg, #4ecdc4, #45b8ac);
  transform: rotate(30deg);
  animation-delay: -2s;
}

.cube-3 {
  width: 30px;
  height: 30px;
  top: 80%;
  right: 20%;
  background: linear-gradient(45deg, #ff8f8f, #ff6b6b);
  transform: rotate(15deg);
  animation-delay: -4s;
}

.ring {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.ring-1 {
  width: 200px;
  height: 200px;
  top: 40%;
  right: 15%;
}

.ring-2 {
  width: 300px;
  height: 300px;
  top: 70%;
  left: 5%;
  animation-direction: reverse;
  animation-duration: 25s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-45deg); }
  50% { transform: translateY(-10px) rotate(-45deg); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .cube, .ring {
    transform: scale(0.7);
  }
}
</style>