<template>
    <div>
      <h4 class="m-3">Users List</h4>
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
                  <SearchForm  />
                </div>
                <div class="col-md-6 col-sm-8">
                  <!-- Radio buttons Para validar si esta inactivo el registro -->
                  <FilterRadios />
                </div>
                <div class="col-md-2 col-sm-4">
                  <button class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#userModal">Add User</button>
                </div>
              </div>
              <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Active</th>
                    <th>ExternalId</th>
                    <th class="text-end">Options</th>
                  </tr>
                </thead>
                <tbody> 
                  <tr class="border-b">
                    <td data-label="Id"></td>
                    <td data-label="Name"></td>
                    <td data-label="Email"></td>
                    <td data-label="Role"></td>
                    <td data-label="Active"></td>
                    <td data-label="ExternalId"></td>
                    <td data-label="Options" class="options">
                      <div class="d-flex justify-content-end">
                        <div class="d-inline-flex">
                          <button class="btn btn-warning m-1 edit-btn" 
                            data-bs-toggle="modal" 
                            data-bs-target="#userModal"
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
          <!-- Componente Modal de Usuario -->
          <UserModal />
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
    import FilterRadios from '../Common/FilterRadios.vue';
    import UserModal from './UpsertUsers.vue'
    import Forbidden from '../Errors/Forbidden.vue'

    const loading = ref(true)

    // Only test
    setInterval(() => {
        loading.value = false
    }, 500)
</script>
  
<style scoped>
    .bg-inactive {
      color: #ee0519; /* Color de fondo para elementos inactivos */
      font-weight: bold; /* Texto en negritas */
    }
  
    .bg-active {
      color: #0f0f0f; /* Color de fondo para elementos activos */ 
    }
  
    @media (max-width: 900px) {
      .table-responsive {
        border: 0;
      }
  
      .table-responsive table {
        width: 100%;
        margin-bottom: 15px;
        background-color: transparent;
      }
  
      .table-responsive table thead, 
      .table-responsive table tbody, 
      .table-responsive table th, 
      .table-responsive table td, 
      .table-responsive table tr {
        display: block;
      }
  
      .table-responsive table thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
  
      .table-responsive table tr {
        border: 1px solid #ccc;
      }
  
      .table-responsive table td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
        text-align: right;
        height: 40px;
      }
  
      .table-responsive table .options {
        height: 60px;
      }
  
      .table-responsive table td:before {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
        content: attr(data-label);
      }
    }
  </style>