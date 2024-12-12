<script setup>
import { onMounted, ref } from 'vue';

// Flag untuk status loading
const isLoading = ref(true);

// Mengatur tema sesuai preferensi pengguna
const getBrowserTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const theme = ref(getBrowserTheme());

onMounted(() => {
  // Simulasi waktu loading (misalnya 3 detik)
  setTimeout(() => {
    isLoading.value = false; // Setelah 3 detik, hapus loading
    if (localStorage.hasOwnProperty('theme')) {
      theme.value = getTheme();
    } else {
      setTheme();
    }
  }, 3000); // 3 detik delay untuk loading
});

const setTheme = () => localStorage.setItem('theme', JSON.stringify(theme.value));

const getTheme = () => JSON.parse(localStorage.getItem('theme'));
</script>

<template>
  <!-- Elemen Loading (Spinner) -->
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
  
  <!-- Konten utama hanya tampil setelah loading selesai -->
  <v-app :theme="theme" class="full-screen" v-if="!isLoading">
    <v-main class="full-screen">
      <v-container fluid class="full-screen">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
/* Fullscreen layout */
.full-screen {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #6a1b9a, #0288d1); /* Main gradient for light theme */
    background-size: 400% 400%; /* Gradient animation effect */
    animation: gradientBG 8s ease infinite;
    transition: background 0.3s ease, transform 0.3s ease;
}

/* Animated background gradient */
@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Dark theme background styling */
[v-cloak] .v-app[data-theme="dark"] {
    background: linear-gradient(135deg, #333, #212121); /* Elegant dark gradient */
    background-size: 400% 400%;
    animation: gradientBG 8s ease infinite;
}

/* Loading Overlay */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeInOut 3s ease-out forwards;
}

/* Fade-in and Fade-out effect for loading overlay */
@keyframes fadeInOut {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
    }
}

/* Spinner for loading animation */
.loading-spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #0288d1;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
}

/* Spinner animation */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Scrollbar styling */
::-webkit-scrollbar {
    width: 0.8rem;
    background-color: #3f51b5;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #d1c4e9;
    border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #9fa8da;
}

/* Link styling */
a {
    text-decoration: none;
    color: #0288d1;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.3s ease;
}

a:hover {
    color: #6a1b9a;
    text-decoration: underline;
    transform: scale(1.05);
}

/* Slide group centering */
.v-slide-group__content {
    justify-content: center;
}

/* Timeline height adjustment */
.v-timeline--vertical.v-timeline {
    height: auto;
    padding: 20px;
    border-left: 3px solid #0288d1; /* Elegant vertical line for timelines */
}

/* Progress bar adjustments */
.v-progress-linear__background,
.v-progress-linear__determinate {
    max-width: calc(100% - 25px) !important;
    border-radius: 10px;
}

/* Button Styling for a Premium Look */
.v-btn {
    background-color: #0288d1;
    color: white;
    border-radius: 25px;
    padding: 12px 24px;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.v-btn:hover {
    background-color: #0277bd;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
}

/* Enhanced Floating Action Button */
.v-btn.fab {
    background-color: #6a1b9a;
    width: 60px;
    height: 60px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.v-btn.fab:hover {
    background-color: #9c27b0;
    transform: translateY(-5px);
}

/* Elegant Typography */
h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #333;
    letter-spacing: 1px;
}

h1 {
    font-size: 3rem;
    color: #0288d1;
}

h2 {
    font-size: 2rem;
    color: #6a1b9a;
}

h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
}

/* Elegant Box Shadows for Elements */
.v-card, .v-container, .v-avatar {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.v-card:hover, .v-avatar:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

/* Smooth Scroll Effect */
html {
    scroll-behavior: smooth;
}
</style>
