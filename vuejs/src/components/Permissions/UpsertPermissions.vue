<template>
    <div>
      <!-- Modal -->
        <div class="modal fade" id="permissionModal" tabindex="-1" aria-labelledby="permissionModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="permissionModalLabel" >Add Permission</h1>
              <h1 class="modal-title fs-5" id="permissionModalLabel" >Edit Permission (Permission Name)</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm" id="registerForm" novalidate>
                <div  class="alert alert-danger" role="alert">
                  errors 
                </div>
                <div class="mb-3">
                  <label for="Name" class="form-label">Nombre</label>
                  <input 
                    type="text" 
                    class="form-control"
                    id="Name"
                    placeholder="Ingresa el permiso"
                    ref="inputFocus" 
                  >
                  <p  class="text-danger m-0"> 
                    error message
                  </p>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Add Permission</button>
              <button type="button" class="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
</script>