<template>
    <div>
      <!-- Modal -->
      <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="userModalLabel">Add User</h1>
              <h1 class="modal-title fs-5" id="userModalLabel">Edit User (User Name)</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm" id="registerForm" novalidate>
                <div class="alert alert-danger" role="alert">
                     errors
                </div>
                <div class="mb-3">
                  <label for="Name" class="form-label">Nombre</label>
                  <input 
                    type="text" 
                    class="form-control"
                    id="Name"
                    placeholder="Ingresa nombre"
                    ref="inputFocus" 
                  >
                  <p class="text-danger m-0"> 
                    error message
                  </p>
                </div>
  
                <div class="mb-3">
                  <label for="Email" class="form-label">Correo</label>
                  <input 
                    type="email" 
                    class="form-control"  
                    id="Email"
                    placeholder="Ingresa correo electrónico"
                  >
                  <p class="text-danger m-0"> 
                    error message
                  </p>
                </div>
  
                <div class="mb-3">
                  <label for="Role" class="form-label">Rol</label>
                  <select 
                    class="form-control" 
                    id="Role"
                  >
                    <option value="" disabled selected>Select a Role</option>
                    <option >Role Name</option>
                  </select>
                  <p class="text-danger m-0"> 
                    error message
                  </p>
                </div>
  
                <div class="mb-3 form-check">
                  <input 
                    type="checkbox" 
                    class="form-check-input" 
                    id="Status"
                  >
                  <label class="form-check-label" for="Status">Active</label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" >Add User</button>
              <button type="button" class="btn btn-primary" >Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
    
<script setup>
</script>