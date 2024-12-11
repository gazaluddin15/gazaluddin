<script setup>
import { onMounted, ref } from 'vue';

const getBrowserTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const theme = ref(getBrowserTheme());

onMounted(() => (localStorage.hasOwnProperty('theme') ? (theme.value = getTheme()) : setTheme()));

const setTheme = () => localStorage.setItem('theme', JSON.stringify(theme.value));

const getTheme = () => JSON.parse(localStorage.getItem('theme'));
</script>

<template>
    <v-app :theme="theme" class="full-screen">
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
}

/* Scrollbar styling */
::-webkit-scrollbar {
    width: 0.6rem;
    background-color: #b388ff;
}

::-webkit-scrollbar-thumb {
    background-color: #d1c4e9;
    border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #ede7f6;
}

/* Link styling */
a {
    text-decoration: none;
}

/* Slide group centering */
.v-slide-group__content {
    justify-content: center;
}

/* Timeline height adjustment */
.v-timeline--vertical.v-timeline {
    height: auto;
}

/* Progress bar adjustments */
.v-progress-linear__background,
.v-progress-linear__determinate {
    max-width: calc(100% - 25px) !important;
}
</style>
