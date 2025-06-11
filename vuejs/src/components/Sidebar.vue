<template>
    <div :class="['sidebar', { active: isActive }]">
        <div class="row">
            <div class="dropdown mt-6 col-8 company-logo">
                <a href="#" class="d-flex aling-items-center mb=md-0 me-md-auto text-decoration-none">
                    <i class="fa-solid fa-dumbbell me-3" style="font-size: 40px;"></i>
                    <span class="fs-4">Gympass</span>
                </a>
            </div>
            <div class="col-3">
                <buttom @click="toggleSidebar" class="btn btn-sm btn-dark mt-6 toggleDark" aria-label="Toggle sidebar">
                    <i class="fas fa-chevron-left"></i>
                </buttom>
            </div>
        </div>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li>
                <route-link to="/" class="nav-link">
                    <i class="fas fa-tachometer-alt me-2"></i>
                    Dashboard
                </route-link>
            </li>
            <hr>
            <li>
                <router-link to="/" class="nav-link">
                    <i class="fas fa-users me-2"></i>
                    Lista de Miembros
                </router-link>
            </li>
            <li>
                <router-link to="/" class="nav-link">
                    <i class="fa-solid fa-address-card me-2"></i>
                    Registar Miembros
                </router-link>
            </li>
            <hr>
            <li>
                <router-link to="/" class="nav-link">
                    <i class="fas fa-users me-2"></i>
                    Roles
                </router-link>
            </li>
            <li>
                <router-link to="/" class="nav-link">
                    <i class="fas fa-users me-2"></i>
                    Permissions
                </router-link>
            </li>
            <hr>
            <li class="mb-1">
                <buttom class="btn btn-toggle aling-items-center rounded collapsed nav-link" data-bs-toggle="collapse" data-bs-
                target="#home-collapse" aria-expanded="false">
                    Users & Roles
                </buttom>
                <div class="collapse" id="home-collapse" style="">
                    <ul class= "nav flex-column ms-3 text-extra-small">
                        <li>
                            <router-link to="/" class="nav-link">
                                <i class="fas fa-user me-2"></i>
                                Users
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/" class="nav-link">
                                <i class="fas fa-user-shield me-2"></i>
                                Roles
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/" class="nav-link">
                                <i class="fas fa-lock me-2"></i>
                                Permissions
                            </router-link>
                        </li>
                    </ul>
                </div> 
            </li>
        </ul>
        <hr>
            <div class="dropdown mt-6 user-profile">
                <a href="#" class="d-flex aling-item-center nav-link text-decoration-none dropdown-toggle" id="dropdownUser1"
    data-bs-toggle="dropdown" aria-expanded="false">
                <div class="avatar bg-primary text-white rounded-circle d-flex aling-items-center justify-content-center me-2"
    style="width: 32px; height: 32px;">
                <span class="text-uppercase">EM</span>
            </div>
            <div class="d-flex flex-column">
                <strong>Emmanuel Madrid</strong>
                <small>chris_payan@icloud.com</small>
            </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click="logout">Sign out</a></li>

            </ul>
            </div> 
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isActive = inject('isActive');
const toggleSidebar = inject('toggleSidebar');
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #343a40;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 1rem;
}
.sidebar .nav-link {
    color: #fff;
    transition: color 0.3s;
    display: flex;
    align-items: center;
}

.sidebar .nav-link:hover {
    color: green;
    text-decoration: none;
}

.sidebar .nav-link i {
    width: 20px;
    padding-right: 10px;
}

.toggleDark {
    display: none;
}

@media (max-width: 768px) {
    .sidebar {
        transform: traslateX(-250%);
    }
    .content {
        margin-left: 0;
        padding-right: 20px;
    }
    .sidebar.active {
        transform: translateX(0);
    }
    .content.active {
        margin-left: 250px;
    }
    .toggleDark {
        display: block;
    }
}
#sideToggle {
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1100;
    background-color: #343a40;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
}
.sidebar hr {
    border-color: #fff;
}
.user-profile {
    margin-bottom: 30px;
    margin-left: 20px;
}
.company-logo {
    margin-left: 20px;
}
.text-extra-samll {
    font-size: 0.8rem;
}
.btn-toggle::before {
    content: '\f078';
    font-family: 'FontAwesome';
    display: inline-block;
    margin-right: 20px;
    transition: trasform 0.3s ease;
}
.btn-toggle.collapsed::before {
    content: '\f054';
    transform: rotate(0);
}
.btn-toggle[aria-expanded="true"]::before {
    transform: rotate(0deg);
}
.btn-toggle.colapsed[aria-expanded="true"]::before {
    content: '\f078';
    transform: rotate(0);
}
</style>