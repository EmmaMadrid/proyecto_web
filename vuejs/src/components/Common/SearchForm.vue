<template>
    <form>
        <div class="input-group mb-3">
            <input type="text" class="form-control input-search" @input="search" placeholder="Search...">
        </div>
    </form>
</template>

<script setup>
const emit = defineEmits(['search'])
const search = (e) => {
    emit('search', e.target.value)
}
</script>