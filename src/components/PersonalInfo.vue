<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'PersonalInfo',
});

defineProps({
    header: String,
});

const data = reactive([
    {
        icon: 'mdi-calendar-account',
        title: 'Birth date',
        value: '09 July, 2004',
    },
    {
        icon: 'mdi-city',
        title: 'Birth place',
        value: 'Cileungsi, Bogor',
    },
    {
        icon: 'mdi-compass-rose',
        title: 'Location',
        value: 'Griya Alam Sentosa',
    },
]);
</script>

<template>
    <div class="personal-info">
        <h5 class="header text-h5 text-uppercase">{{ header }}</h5>
        <div class="personal-info__item" v-for="(item, i) in data" :key="i">
            <div class="personal-info__icon">
                <v-icon size="x-large">{{ item.icon }}</v-icon>
            </div>
            <div class="personal-info__content">
                <span class="title">{{ item.title }}</span>
                <span class="value">{{ item.value }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.personal-info {
    padding: 20px;
    background: #f4f7fb;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

.header {
    color: #6a1b9a;
    font-weight: bold;
    margin-bottom: 20px; /* Menambahkan lebih banyak ruang di bawah header */
    text-align: center;
}

.personal-info__item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.personal-info__icon {
    color: #6a1b9a;
    margin-right: 15px; /* Menambahkan ruang antara ikon dan konten */
}

.personal-info__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Menjaga konten sejajar ke kiri */
}

.title {
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 1rem; /* Menyelaraskan ukuran font title */
}

.value {
    color: #555;
    font-weight: lighter;
    font-size: 0.9rem; /* Menyelaraskan ukuran font value */
}

.personal-info__item:hover {
    background-color: #fafafa;
}
</style>
