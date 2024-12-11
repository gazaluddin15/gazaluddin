<script setup>
import { computed, defineComponent, reactive, ref } from 'vue';
import { useDisplay } from 'vuetify';

const { xs, sm, md, lg, xlAndUp } = useDisplay();

defineComponent({
    name: 'Skills',
});

const skills = reactive({
    options: [
        { id: 1, name: 'Back-end' },
        { id: 2, name: 'Front-end' },
        { id: 3, name: 'UI' },
        { id: 4, name: 'DBMS' },
        { id: 5, name: 'Arduino' },
        { id: 6, name: 'Pneumatic' },
        { id: 7, name: 'AutoCad' },
        { id: 8, name: 'PLC' },
        { id: 9, name: 'Raspberry pi' },
    ],
    items: [
        { id: 1, option: 1, name: 'Laravel', experience: '1 years' },
        { id: 2, option: 1, name: 'Golang', experience: '1 month' },
        { id: 3, option: 1, name: 'Nest.js', experience: '1months' },
        { id: 4, option: 2, name: 'Vue.js', experience: '1 months' },
        { id: 5, option: 2, name: 'Nuxt.js', experience: '1 months' },
        { id: 6, option: 3, name: 'Bootstrap', experience: '1 year' },
        { id: 7, option: 3, name: 'Tailwind', experience: '1 year' },
        { id: 8, option: 4, name: 'MySQL', experience: '3 years' },
        { id: 9, option: 4, name: 'MongoDB', experience: '1 year' },
        { id: 10, option: 4, name: 'PostgreSQL', experience: '6 months' },
        { id: 24, option: 5, name: 'Arduino', experience: '4 years' },
        { id: 25, option: 6, name: 'Pneumatic', experience: '3 years' },
        { id: 25, option: 7, name: 'AutoCad', experience: '2 years' },
        { id: 25, option: 8, name: 'PLC', experience: '3 years' },
        { id: 25, option: 9, name: 'Raspberry pi', experience: '1 years' },

    ],
});

const activeOption = ref(null);

const skillItems = computed(() =>
    activeOption.value != null ? skills.items.filter((item) => item.option === activeOption.value) : skills.items,
);

const toggleOption = (option) => (activeOption.value = activeOption.value === option.id ? null : option.id);
</script>

<template>
    <div class="technical-skills">
        <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1 mb-4">Technical Skills</h5>
        
        <div class="skills-options-wrapper">
            <v-slide-group show-arrows center-active class="mt-3">
                <v-slide-group-item v-for="option in skills.options" :key="option.id" v-slot="{ isSelected, toggle }">
                    <v-btn
                        class="ma-2"
                        rounded
                        :color="option.id === activeOption ? 'deep-purple-accent-1' : 'grey lighten-1'"
                        @click="toggleOption(option)"
                        elevation="4"
                        :class="option.id === activeOption ? 'text-white' : 'text-deep-purple'"
                        style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                    >
                        {{ option.name }}
                    </v-btn>
                </v-slide-group-item>
            </v-slide-group>
        </div>

        <v-item-group selected-class="bg-deep-purple-accent-1" class="technical-skills__row">
            <v-row>
                <v-col
                    v-for="skill in skillItems"
                    :key="skill.id"
                    :cols="xs ? 12 : sm ? 6 : md ? 4 : lg ? 3 : xlAndUp ? 3 : undefined"
                    class="mb-4"
                >
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <v-card
                            :class="['technical-skills__item', selectedClass]"
                            @click="toggle"
                            hover
                            class="d-flex flex-column align-center justify-center elevation-2 rounded-xl"
                        >
                            <div class="text-h5 text-center py-2">{{ isSelected ? skill.experience : skill.name }}</div>
                            <v-divider></v-divider>
                            <div v-if="isSelected" class="text-caption text-center py-1">Click to collapse</div>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-item-group>
    </div>
</template>

<style scoped>
/* Wrapper for scrollable skills options */
.skills-options-wrapper {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
}

/* Technical skills items layout */
.technical-skills__row {
    display: flex;
    margin-top: 24px;
}

.technical-skills__item {
    display: flex;
    flex: 0 1 25%;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100px;
    user-select: none;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.technical-skills__item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.text-h5 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.text-caption {
    font-size: 0.8rem;
}

.v-slide-group-item .v-btn {
    transition: background-color 0.2s ease, color 0.2s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.v-slide-group-item .v-btn:hover {
    background-color: #d1c4e9;
}

.v-divider {
    margin: 8px 0;
    border-color: #e1bee7;
}

@media (max-width: 600px) {
    .technical-skills__item {
        flex: 0 1 100%;
    }

    .v-slide-group-item .v-btn {
        width: 100%;
        margin: 5px 0;
    }
}

@media (min-width: 601px) and (max-width: 960px) {
    .technical-skills__item {
        flex: 0 1 45%;
    }
}

@media (min-width: 961px) {
    .technical-skills__item {
        flex: 0 1 22%;
    }
}
</style>
