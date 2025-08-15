<template>
<div>
    <div v-if="loading" class="loading">
        Loading
    </div>
    <div v-else>
        <h1>Dashboard</h1>
        <div v-if="can('customers:view')">
        <p>Acceso a ver Customers</p>
        </div>
        <div v-if="can('customers:create')">
        <p>Acceso a crear Customers</p>
        </div>
        <div v-if="can('customers:edit')">
        <p>Acceso a editar Customers</p>
        </div>
        <div v-if="can('customers:delete')">
        <p>Acceso a eliminar Customers</p>
        </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { definedAbilities } from '../utils/abilities'

  const loading = ref(true)
  onMounted(() => {
    definedAbilities()
    
    setInterval(() => {
      definedAbilities()
    }, 60000)
    
  })
</script>
