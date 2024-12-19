<template>
  <div class="shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
  </div>
</template>

<style scoped>
.shapes {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: #ff6b6b;
  top: -200px;
  right: -100px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: #4ecdc4;
  bottom: -150px;
  left: -150px;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: #45b8ac;
  top: 40%;
  right: 15%;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: #ff8f8f;
  top: 30%;
  left: 10%;
}

@media (max-width: 768px) {
  .shape {
    filter: blur(60px);
  }
}
</style>