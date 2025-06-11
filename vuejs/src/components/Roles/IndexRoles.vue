<template>
    <div>
      <h4 class="m-3">Roles List</h4>
      <div v-if="loading" class="loading">
        <div class="spinner-border text-primary" style="width: 4rem; height: 4rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else>
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 col-sm-12 col-sx-12">
                  <!-- Search bar -->
                  <SearchForm />
                </div>
                <div class="col-md-12 col-sm-12">
                  <button class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#roleModal">Add Role</button>
                </div>
              </div>
              <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Permissions</th>
                    <th class="text-end">Options</th>
                  </tr>
                </thead>
                <tbody> 
                  <tr class="border-b">
                    <td></td>
                    <td></td>
                    <td class="permissions-column">
                      <span class="permission-tag"></span>
                    </td>
                    <td>
                      <div class="d-flex justify-content-end">
                        <div class="d-inline-flex">
                          <button class="btn btn-warning m-1 edit-btn" 
                            data-bs-toggle="modal" 
                            data-bs-target="#roleModal"
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn btn-danger m-1 destroy-btn" 
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--
              <Pagination :paginationData="paginationData" @paginationChange="handlePagination" />
            -->
            </div>
          </div>
          <!-- Componente Modal -->
          <RoleModal />
        </div>
        <!--
        <div v-else>
          <Forbidden />
        </div>
        -->
      </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import SearchForm from '../Common/SearchForm.vue'
    import Pagination from '../Common/Pagination.vue'
    import RoleModal from './UpsertRoles.vue'
    import Forbidden from '../Errors/Forbidden.vue'

    const loading = ref(true)

    // Only test
    setInterval(() => {
        loading.value = false
    }, 500)
</script>
   
<style scoped>
</style>