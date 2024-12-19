<template>
  <div class="subtle-3d-elements">
    <!-- Floating cubes -->
    <div class="cube cube-1"></div>
    <div class="cube cube-2"></div>
    <div class="cube cube-3"></div>
    
    <!-- Rotating rings -->
    <div class="ring ring-1"></div>
    <div class="ring ring-2"></div>
    
    <!-- Floating dots -->
    <div class="dots">
      <div class="dot" v-for="i in 5" :key="i"></div>
    </div>
  </div>
</template>

<style scoped>
.subtle-3d-elements {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
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
  top: 15%;
  right: 10%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transform: rotate(-45deg);
}

.cube-2 {
  width: 40px;
  height: 40px;
  bottom: 20%;
  left: 15%;
  background: linear-gradient(45deg, #4ecdc4, #45b8ac);
  transform: rotate(30deg);
  animation-delay: -2s;
}

.cube-3 {
  width: 30px;
  height: 30px;
  top: 40%;
  left: 30%;
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
  top: 20%;
  right: 15%;
}

.ring-2 {
  width: 300px;
  height: 300px;
  bottom: 10%;
  left: 5%;
  animation-direction: reverse;
  animation-duration: 25s;
}

.dots {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: float 4s ease-in-out infinite;
}

.dot:nth-child(1) { top: 20%; left: 20%; animation-delay: -0.5s; }
.dot:nth-child(2) { top: 40%; right: 25%; animation-delay: -1s; }
.dot:nth-child(3) { bottom: 30%; left: 30%; animation-delay: -1.5s; }
.dot:nth-child(4) { top: 60%; right: 40%; animation-delay: -2s; }
.dot:nth-child(5) { bottom: 40%; right: 20%; animation-delay: -2.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
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