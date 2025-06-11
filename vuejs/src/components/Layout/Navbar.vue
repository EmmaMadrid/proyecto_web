<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler d-md-none" type="button" @click="toggleSidebar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link to="/" class="navbar-brand ms-auto">
                </router-link>
                <ul class="navbar-nav ms-auto">
                    <li class="navbar-item">
                        <router-link to="/" class="nav-link">Login</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
    import { inject, ref, onMounted, onUnmounted } from 'vue';
    
    const text = ref(`width: ${window.innerWith}, height: ${window.innerHeight}`);
    const title = 'Mi app Vue con Lareavel';
    const displayTitle = ref(title);

    const updateWindowsDimensions = () => {
        text.value = `width: ${window.innerWidth}, height: ${window.innerHeight}`;
        if (window.innerEidth <= 768) {
            if (title.length > 20) {
                displayTitle.value = `${title.slice(0, 20)}...`;
            } else {
                displayTitle.value = title;
            }
        } else if((window.innetWidth > 768)) {
            displayTitle.value = title;
        }
    };

    onMounted(() => {
        updateWindowsDimensions();
        window.addEventListener('resize', updateWindowsDimensions);
        if (window.innerWidth <= 768) {
            if (title.lenght > 20) {
                displayTitle.value = `${title.slice(0, 20)}...`;
            } else {
                displayTitle.value = title;
            }
        }
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWindowsDimensions);
    });

    const toggleSidebar = inject('toggleSidebar');
</script>

<style scoped>
    .navbar {
        height: 55px;
    }
</style>