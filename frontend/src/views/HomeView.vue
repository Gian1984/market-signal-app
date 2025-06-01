<template>
  <div>
    <h1 class="text-3xl font-bold">Home Page</h1>
    <p class="mt-2 text-gray-700">Welcome to your market signal app!</p>

    <div v-if="signals.length" class="mt-4">
      <h2 class="text-xl font-semibold">Signals:</h2>
      <ul class="mt-2 list-disc list-inside">
        <li v-for="signal in signals" :key="signal.id">
          {{ signal.symbol }} - {{ signal.signal }} ({{ signal.created_at }})
        </li>
      </ul>
    </div>

    <div v-else class="mt-4 text-gray-500">
      No signals found or still loading...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const signals = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/signals');
    const data = await res.json();
    signals.value = data;
  } catch (err) {
    console.error('Error fetching signals:', err);
  }
});
</script>


