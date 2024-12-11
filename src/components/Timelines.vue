<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
  name: 'Timelines',
});

const timelines = reactive([
  {
    id: 0,
    icon: 'mdi-book-education',
    color: 'cyan lighten-1',
    title: 'Universitas Islam "45" Bekasi',
    position: 'Electrical Engineering',
    period: 'SEP 2022 — JUN 2025',
    description: 'Student',
  },
  {
    id: 1,
    icon: 'mdi-briefcase-variant',
    color: 'amber darken-1',
    title: 'FluidWeb',
    position: 'Trainee',
    period: 'JUN — AUG 2021',
    description: 'Building landing pages and E2E testing with Cypress.js',
  },
  {
    id: 2,
    icon: 'mdi-briefcase-variant',
    color: 'blue-darken-3',
    title: 'TrackEnsure',
    position: 'Data Specialist',
    period: 'AUG 2021 — MAY 2022',
    description: 'Working with data on logistics transactions',
  },
  {
    id: 3,
    icon: 'mdi-briefcase-variant',
    color: 'blue-grey',
    title: 'Moonion',
    position: 'PHP Back-end developer',
    period: 'JUN — SEP 2022',
    description: 'Adding new features to an existing e-commerce',
  },
  {
    id: 4,
    icon: 'mdi-briefcase-variant',
    color: 'deep-orange-lighten-1',
    title: 'TuneLab',
    position: 'Full-stack web developer',
    period: 'DEC 2022 — NOWADAYS',
    description: 'Building and modifying Laravel & Vue.js projects',
  },
]);
</script>

<template>
  <div class="timeline mt-5">
    <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">Education & Work</h5>
    <v-timeline class="mt-5">
      <v-timeline-item
        v-for="timeline in timelines"
        :key="timeline.id"
        :dot-color="timeline.color"
        :icon="timeline.icon"
        size="large"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
            v-text="timeline.period"
          ></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${timeline.color}`">
            {{ timeline.title }}
          </h2>
          <h5 :class="`text-button text-${timeline.color}`">{{ timeline.position }}</h5>
          <span class="text-subtitle-2">{{ timeline.description }}</span>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped>
.timeline {
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.timeline h5 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a148c;
}

.v-timeline-item {
  transition: all 0.3s ease;
}

.v-timeline-item:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.v-timeline-item .v-timeline-item__icon {
  background-color: #ffffff;
  border: 2px solid var(--v-dot-color);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-timeline-item .v-timeline-item__content {
  background: var(--v-dot-color);
  border-radius: 8px;
  padding: 20px;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.v-timeline-item .v-timeline-item__content h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.v-timeline-item .v-timeline-item__content h5 {
  font-size: 1rem;
  font-weight: 500;
  color: #f0f0f0;
}

.v-timeline-item .v-timeline-item__content span {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>
