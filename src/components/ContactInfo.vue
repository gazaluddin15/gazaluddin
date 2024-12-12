<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'ContactInfo',
});

defineProps({
    header: String,
});

const data = reactive([
    {
        icon: 'mdi-cellphone-sound',
        title: 'Phone',
        value: '+6285694223708',
        href: 'tel:+380638720990',
        target: null,
    },
    {
        icon: 'mdi-gmail',
        title: 'Gmail',
        value: 'gazaluddin98@gmail.com',
        href: 'mail:gazaluddin98@gmail.com',
        target: null,
    },
    {
        icon: 'mdi-github',
        title: 'GitHub',
        value: 'gazaluddin15',
        href: 'https://github.com/gazaluddin15',
        target: '_blank',
    },
    {
        icon: 'mdi-linkedin',
        title: 'LinkedIn',
        value: 'gazaluddin-zakwan',
        href: 'https://www.linkedin.com/in/gazaluddin-zakwan-a890902a1/',
        target: '_blank',
    },
    {
        icon: 'mdi-instagram',
        title: 'Instagram',
        value: '@gazaluddinzakwan',
        href: 'https://www.instagram.com/gazaluddin_zakwan/profilecard/?igsh=MW8zdWFmNzdoeHYzeg==',
        target: '_blank',
    },
]);
</script>

<template>
    <div class="contact-info">
        <h5 class="header text-h5 text-uppercase">{{ header }}</h5>
        <div class="contact-info__item" v-for="(item, i) in data" :key="i">
            <div class="contact-info__icon">
                <v-icon size="x-large">{{ item.icon }}</v-icon>
            </div>
            <div class="contact-info__content">
                <span class="title">{{ item.title }}</span>
                <a :href="item.href" :target="item.target" class="value">{{ item.value }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-info {
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
    margin-bottom: 20px; /* Menambahkan ruang yang lebih besar di bawah header */
    text-align: center; /* Menjaga header tetap di tengah */
}

.contact-info__item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-info__icon {
    color: #6a1b9a;
    margin-right: 15px; /* Menambah ruang di antara ikon dan teks */
}

.contact-info__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Menyelaraskan konten ke kiri */
}

.title {
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 1rem; /* Menyelaraskan ukuran font title */
}

.value {
    color: #6a1b9a;
    text-decoration: none;
    font-size: 0.9rem; /* Ukuran font yang sedikit lebih kecil untuk value */
    transition: color 0.3s ease;
}

.value:hover {
    color: #0288d1;
    text-decoration: underline;
}

.contact-info__item:hover {
    background-color: #fafafa;
}
</style>
