<script setup>
import { defineComponent, reactive } from 'vue';
import { useDisplay } from 'vuetify';
import PersonalInfo from '../components/PersonalInfo.vue';
import ContactInfo from '../components/ContactInfo.vue';
import Skills from '../components/Skills.vue';
import Timelines from '../components/Timelines.vue';
import Languages from '../components/Languages.vue';

defineComponent({
    name: 'Profile',
});

const { xs, sm, smAndDown, md, mdAndDown } = useDisplay();

const profile = reactive({
    fullName: 'GAZALUDDIN ZAKWAN',
    position: 'Web Developer and Electrical Engineering',
});
</script>

<template>
    <div class="container">
        <div class="profile">
            <div class="profile__text">
                <h1
                    class="text-uppercase font-weight-regular text-primary"
                    :class="[xs ? 'text-h4' : 'text-h3', { 'mt-5': smAndDown }]">
                    {{ profile.fullName }}
                </h1>
                <h2 class="text-h6 text-muted font-weight-light mt-3">
                    {{ profile.position }}
                </h2>
            </div>
        </div>

        <div class="block">
            <div class="block__row" :class="mdAndDown ? 'flex-column' : undefined">
                <div class="block__element block__element-1" :class="xs ? 'flex-column' : undefined">
                    <personal-info header="Personal Info" />
                    <contact-info header="Contact Info" :class="md || sm ? 'mt-0' : 'mt-5'" />
                    <languages header="Languages" :class="md ? 'mt-0' : smAndDown ? 'w-100 mt-5' : 'mt-5'" />
                </div>

                <div class="block__element block__element-2">
                    <skills :class="sm ? 'mt-5' : 'mt-0'" />
                    <timelines />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Main container styling */
.container {
    max-width: 2100px;
    margin: 0 auto;
    padding: 20px;
    background-color: #23abff; /* Latar belakang premium */
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s ease;
}

.container:hover {
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.1);
}

/* Profile section styling */
.profile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

/* Profile text styles */
.profile__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
}

/* Profile heading text styles */
/* Profile heading text styles */
.profile__text h1 {
    font-size: 3rem;
    color: #000000; /* Mengubah warna nama menjadi hitam */
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    transition: color 0.3s ease, transform 0.3s ease;
}

.profile__text h1:hover {
    color: #000000; /* Warna hitam tetap saat hover */
    transform: translateX(5px);
}

.profile__text h2 {
    font-size: 1.8rem;
    color: #000000; /* Mengubah warna posisi menjadi hitam */
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
    transition: color 0.3s ease;
}

.profile__text h2:hover {
    color: #0288d1; /* Warna biru terang saat hover */
}

/* Mobile view */
@media (max-width: 767px) {
    .profile {
        flex-direction: column;
        align-items: center;
    }

    .profile__text h1,
    .profile__text h2 {
        text-align: center;
    }
}

/* Block layout */
.block {
    margin-top: 60px;
}

.block__row {
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

/* Block element styling */
.block__element {
    background-color: #ffffff;
    padding: 35px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 30px;
    text-align: center;
}

.block__element:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
}

/* Section headers inside blocks */
.block__element h3 {
    color: #3f51b5;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Media queries for tablet and mobile screens */
@media (max-width: 991px) {
    .block__element-1 {
        flex: 0 0 100%;
        margin-right: 0;
    }

    .block__element-2 {
        flex: 1;
        margin-left: 0;
    }
}

@media (max-width: 576px) {
    .profile__text h1 {
        font-size: 2.2rem;
    }

    .profile__text h2 {
        font-size: 1.5rem;
    }

    .block__element {
        padding: 25px;
    }
}

/* Enhanced background and hover effects for Profile Image */
.profile__image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: 5px solid #0288d1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile__image:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

/* Stylish Links */
a {
    color: #0288d1;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;
}

a:hover {
    color: #6a1b9a;
    transform: scale(1.05);
    text-decoration: underline;
}

/* Floating action button */
.v-btn.fab {
    background-color: #6a1b9a;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.v-btn.fab:hover {
    background-color: #9c27b0;
    transform: translateY(-5px);
}
</style>
