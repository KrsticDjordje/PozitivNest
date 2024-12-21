<script setup lang="ts">
defineProps<{
  title: string
  description: string
  features: string[]
  tags: string[]
  imageUrl: string
  projectUrl: string
}>()
</script>

<template>
  <a :href="projectUrl" target="_blank" class="project-card">
    <div class="card-content">
      <div class="image-container">
        <img :src="imageUrl" :alt="title" class="project-image">
      </div>
      <div class="card-body">
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <h3>{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <div class="features">
          <span v-for="feature in features" :key="feature" class="feature-tag">
            {{ feature }}
          </span>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.project-card:hover {
  transform: translateY(-5px) rotateX(2deg);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.card-content {
  position: relative;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 190px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}



.card-body {
  padding: 1.5rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  transition: transform 0.3s ease;
}

.project-card:hover h3 {
  transform: translateZ(10px);
}

.description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.tag {
  background: rgba(78, 205, 196, 0.1);
  color: #4ecdc4;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.feature-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.project-card:hover .feature-tag {
  background: rgba(255, 255, 255, 0.15);
  transform: translateZ(5px);
}
</style>