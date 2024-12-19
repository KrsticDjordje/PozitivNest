export const fadeInUpAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const rotateAnimation = {
  animate: {
    transform: 'rotate(360deg)',
    transition: { duration: 20, repeat: Infinity, ease: 'linear' }
  }
}

export const floatAnimation = {
  animate: {
    y: ['0px', '-10px', '0px'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}