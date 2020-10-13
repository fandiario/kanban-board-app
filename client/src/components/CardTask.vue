<template>
  <div class="col-12">
        <div class="card mb-3 shadow bg-warning" style="max-width: 18rem;">
        <div class="card-header">
            <b-button v-b-modal.modal-3 class="bg-primary mr-2 mb-2 shadow">
              <img src="../assets/move.svg" alt="">
              Move
            </b-button>
            <FormMoveTask></FormMoveTask>
        </div>
          <div class="card-body">
            <h5 class="card-title text-dark">{{ task.title }}</h5>
            <h6 class="card-subtitle mb-2 text-dark">{{ task.description }}</h6>
            <!-- <a href="#" class="btn btn-primary"><img src="../assets/edit.svg" alt=""> Edit</a> -->
            <b-button v-b-modal.modal-2 class="bg-primary mr-2 mb-2 shadow">
              <img src="../assets/edit.svg" alt="">
              Edit
            </b-button>
            <FormEditTask></FormEditTask>
            <a href="#" class="btn btn-danger"><img src="../assets/trash-2.svg" alt=""> Delete</a>
          </div>
        </div>
    </div>
</template>

<script>
import FormEditTask from '../components/FormEditTask'
import FormMoveTask from '../components/FormMoveTask'
export default {
    name: 'CardTask',
    components: {
      FormEditTask,
      FormMoveTask
    },
    props: ['task']
}
</script>

<style>

</style>