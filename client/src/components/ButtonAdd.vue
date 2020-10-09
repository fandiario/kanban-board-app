<template>
  <div>
    <div>
        <b-button v-b-modal.modal-1 class="bg-primary mt-3 ml-3 shadow">
            <img src="../assets/plus.svg" alt="">
            Add New Task
        </b-button>
        <FormAddTask></FormAddTask>
    </div>
  </div>
</template>

<script>
import FormAddTask from '../components/FormAddTask'
export default {
    name: 'ButtonAdd',
    components: {
        FormAddTask
    }
}
</script>

<style>

</style>