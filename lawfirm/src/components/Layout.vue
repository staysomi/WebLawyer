<template>
  <div>
    <Header />
    <main class="container mx-auto p-4">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
/* Layout-specific styling if needed */
</style>