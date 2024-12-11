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
            <div class="profile__image">
                <v-avatar :size="smAndDown ? 200 : 300">
                    <v-img src="/images/gaza.jpg" lazy-src="/images/gaza.jpg" alt="Profile avatar" title="Profile avatar"></v-img>
                </v-avatar>
            </div>
            <div class="profile__text">
                <h1
                    class="text-uppercase font-weight-regular text-primary"
                    :class="[xs ? 'text-h4' : 'text-h3', { 'mt-5': smAndDown }]"
                >
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
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
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
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.profile__image {
    margin-right: 30px;
}

.profile__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Profile heading text styles */
.profile__text h1 {
    font-size: 2.5rem;
    color: #3f51b5;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.profile__text h2 {
    font-size: 1.6rem;
    color: #9e9e9e;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 5px;
}

/* Mobile view */
@media (max-width: 767px) {
    .profile {
        flex-direction: column;
        align-items: center;
    }

    .profile__image {
        margin-bottom: 20px;
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
    gap: 20px;
}

/* Card-like block element */
.block__element {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 20px;
}

.block__element:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
}

/* Section headers inside blocks */
.block__element h3 {
    color: #3f51b5;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 15px;
}

/* Media queries */
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

/* Styling the block elements for smaller screens */
@media (max-width: 576px) {
    .profile__text h1 {
        font-size: 2rem;
    }

    .profile__text h2 {
        font-size: 1.4rem;
    }

    .block__element {
        padding: 20px;
    }
}
</style>
