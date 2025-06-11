<template>
  <div>
    <Navbar />
    <Sidebar />

    <div class="content">
      <Breadcrumb />
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
const isActive = ref(false)
const toggleSidebar = () => {
  isActive.value = !isActive.value
};

provide('isActive', isActive);
provide('toggleSidebar', toggleSidebar)
</script>

<style scoped>
.conetnt {
  margin-left: 265px;
  transition: margin-left 0.3s ease;
}
@media (max-width: 768px) {
  .conetnt {
    margin-left: 0;
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>