<template>
  <div class="p-4 border rounded shadow">
    <h2 class="font-semibold text-lg">XAU/GBP Signal</h2>
    <div v-if="signals.length">
      <ul>
        <li v-for="signal in signals" :key="signal.id">
          <strong>{{ signal.symbol }}</strong> - {{ signal.signal }} ({{ new Date(signal.created_at).toLocaleString() }})
        </li>
      </ul>
    </div>
    <p v-else>Loading or no data available.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const signals = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/signals');
    signals.value = await res.json();
  } catch (error) {
    console.error('Error fetching XAU/GBP signals:', error);
  }
});
</script>
