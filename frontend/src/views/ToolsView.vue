<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Market Tools</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <XauGbpSignal />
      <!-- Add more components as needed -->
    </div>
  </div>
</template>

<script setup>
import XauGbpSignal from '@/components/XauGbpSignal.vue';
// Import more polling components here
</script>
