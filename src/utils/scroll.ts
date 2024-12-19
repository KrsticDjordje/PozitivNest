import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useParallaxScroll(factor: number = 0.1) {
  const scrollY = ref(0)
  let ticking = false

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        scrollY.value = window.scrollY
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    transform: computed(() => `translateY(${scrollY.value * factor}px)`)
  }
}