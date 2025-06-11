<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/home">Inicio</router-link>
      </li>
      <li
        v-for="(item, idx) in items"
        :key="item.path"
        class="breadcrumb-item"
        :class="{ active: idx === items.length - 1 }"
        aria-current="page"
      >
        <template v-if="idx !== items.length - 1">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </template>
        <template v-else>
          {{ item.name }}
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const items = computed(() => {
  if (!route || !route.matched) return [];
  return route.matched
    .filter(r => r.name && r.path && r.path !== '/')
    .map(r => ({
      name: r.name,
      path: r.path
    }));
});
</script>

<style scoped>
nav {
  margin: 15px;
}
</style>