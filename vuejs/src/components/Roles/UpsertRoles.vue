<template>
    <div class="modal fade" id="roleModal" tabindex="-1" aria-labelledby="roleModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="roleModalLabel">Add Role</h1>
        <h1 class="modal-title fs-5" id="roleModalLabel">Edit Role (Role Name)</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form @submit.prevent="submitForm" id="registerForm" novalidate style="margin-bottom: 200px;">
            <div class="alert alert-danger" role="alert">
            errors 
            </div>
            <div class="mb-3">
            <label for="Name" class="form-label">Name</label>
            <input 
                type="text" 
                class="form-control"
                id="Name"
                placeholder="Ingresa el role"
                ref="inputFocus" 
            >
            <p class="text-danger m-0"> 
                error message
            </p>
            </div>
            
            <div class="mb-5">
            <label for="Permissions" class="form-label">Permissions</label>
            <Multiselect
                mode="tags"
                :close-on-select="false"
                :searchable="true"
                :create-option="false"
                :options="options"
            />
            </div>
        </form>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add Role</button>
        <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
    </div>
    </div>
</div>
</template>

<script setup>
import Multiselect from '@vueform/multiselect'

//Solo para pruebas, en practicas posteriores usaremos la base de datos
const options = [
    'permissiontest1',
    'permissiontest2',
    'permissiontest3',
    'permissiontest4'
]

</script>
<style scoped>

</style>
<style src="@vueform/multiselect/themes/default.css"></style>