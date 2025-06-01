<template>
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <main className="p-4">
            <router-view/>
        </main>
    </div>
</template>

<script setup>
    import Navbar from './components/Navbar.vue'
</script>

