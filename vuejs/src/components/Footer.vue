<template>
    <footer>
        <div class="container">
            <p>&copy; 2025 Mi sitio web. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position:fixted;
        left:0px;
        bottom:0px;
        width:100%;
        background:#999;
        z-index: 3;
        margin-left: 250px;
        transition: margin-left 0.3s ease;
    }
    @media (max-width: 768px) {
        footer {
            margin-left: 0;
        }
    }
</style>