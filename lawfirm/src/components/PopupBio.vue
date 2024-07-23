<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg relative">
        <button @click="close" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Additional styling */
  </style>