<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'Languages',
});

defineProps({
    header: String,
});

const languages = reactive([
    {
        name: 'Indonesia',
        value: 100,
    },
    {
        name: 'English',
        value: 30,
    },
]);
</script>

<template>
    <div class="languages">
        <h5 class="header text-h5 text-uppercase">{{ header }}</h5>
        <div v-for="(language, i) in languages" :key="i" class="language-item">
            <div class="language-name">
                <span class="text-subtitle-1">{{ language.name }}</span>
            </div>
            <div class="progress-container">
                <v-progress-linear
                    color="deep-purple-accent-1"
                    :model-value="language.value"
                    height="15"
                    rounded
                    class="progress-bar"
                ></v-progress-linear>
                <span class="progress-text">{{ language.value }}%</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.languages {
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    max-width: 450px;
    margin: 0 auto;
}

.header {
    color: #6a1b9a;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
}

.language-item {
    margin-bottom: 20px;
    padding: 12px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.language-name {
    color: #333;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
}

.progress-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
}

.progress-bar {
    flex-grow: 1;
    background-color: #e0e0e0;
    border-radius: 20px;
    margin-right: 12px; /* Adjusted margin for better spacing */
    width: 100%; /* Ensure progress bar always takes up full width */
}

.progress-text {
    color: #6a1b9a;
    font-weight: 600;
    text-align: right;
    min-width: 50px; /* Ensures the percentage text has enough space */
    z-index: 1;
}

.language-item:hover {
    background-color: #f3f3f3;
    transform: translateY(-3px);
    transition: background-color 0.3s ease, transform 0.3s ease;
}
</style>
