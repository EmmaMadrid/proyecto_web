<template>
    <div>
        <div class="fornm-check from-check-inline">
            <input class="form-check-input" type="radio" name="show" id="all" value="all" checked@change="filter">
            <label class="form-check-label" for="all">All</label>
        </div>
        </input>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="show" id="active" value="active" @change="filter">
            <label class="form-check-label" for="active">Active</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="show" id="inactive" value="inactive" 
        @change="filter">
            <label class="form-check-label" for="user">Inactive</label>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['filter'])
const filter = (e) => {
    emit('filter', e.target.value)
}
</script>