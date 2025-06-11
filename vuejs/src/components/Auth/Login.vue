<template>
  <div class="container-fluid">
    <div class="row">
    <div class="col-md-12 position-relative d-flex justify-content-center align-items-center">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title text-center">Login</h4>
            <form @submit.prevent="submitForm" id="userForm" novalidate>
            <div class="alert alert-danger" role="alert">
                errors 
            </div>
            <div class="mb-1">
                <label for="Email" class="form-label">Correo</label>
                <input 
                type="email" 
                class="form-control" 
                id="Email"
                placeholder="Ingresa tu correo electrónico"
                ref="inputFocus"
                >
                <p class="text-danger m-0"> 
                    error message
                </p>
            </div>


            <div class="mb-3">
                <label for="Password" class="form-label">Contraseña</label>
                <input 
                type="password" 
                class="form-control" 
                id="Password" 
                placeholder="Ingresa tu contraseña"
                autocomplete="off"
                >
                <p class="text-danger m-0"> 
                    error message
                </p>
            </div>


            <div class="mb-3 form-check">
                <input 
                type="checkbox" 
                class="form-check-input" 
                id="rememberMe" 
                >
                <label class="form-check-label" for="rememberMe">Recordarme</label>
            </div>


            <div class="d-grid gap-2 mb-3">
                <button class="btn btn-primary" type="submit" >Login</button>
            </div>
            
            <div class="text-center mb-3">
                <span class="or-line">O</span>
           </div>


            <div class="d-grid gap-2 mb-3">
                <button class="btn btn-outline-danger" type="button">
                <i class="fab fa-google me-2"></i> Google
                </button>
            </div>


            <div class="mt-3 text-center mb-3">
                <router-link to="/forgot-password" class="link-secondary">Olvidé mi contraseña</router-link>
            </div>
            <div class="text-center">
                <p class="mb-0">¿No tienes una cuenta? <router-link to="/register" class="link-primary">Regístrate</router-link></p>
            </div>
            </form>
        </div>
        </div>
    </div>
  </div>
</div>
</template>


<script setup>


</script>


<style scoped>
.card {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin-top: 80px;
    margin-bottom: 25px;
}


.card-title {
    margin-bottom: 20px;
}


.form-label {
    font-weight: bold;
}


.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}


.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}


.link-secondary {
    color: #6c757d;
    text-decoration: none;
}


.link-secondary:hover {
    color: #495057;
    text-decoration: underline;
}


.or-line {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    font-weight: bold;
}


.or-line::before, .or-line::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100px; /* Aumenta este valor para hacer las líneas más largas */
    height: 2px; /* Aumenta el grosor de la línea */
        background-color: #ccc;
}


.or-line::before {
    left: -110px; /* Ajusta la posición para centrar correctamente */
}


.or-line::after {
    right: -110px; /* Ajusta la posición para centrar correctamente */
}
</style> 