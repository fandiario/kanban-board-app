<template>
  <div class="col-12">
        <div class="card mb-3 shadow" style="max-width: 18rem;">
        <div class="card-header">
            <a href="#" class="btn btn-primary"><img src="../assets/move.svg" alt=""> Move</a>
        </div>
          <div class="card-body">
            <h5 class="card-title text-dark">{{ task.title }}</h5>
            <h6 class="card-subtitle mb-2 text-dark">{{ task.description }}</h6>
            <a href="#" class="btn btn-primary"><img src="../assets/edit.svg" alt=""> Edit</a>
            <a href="#" class="btn btn-danger"><img src="../assets/trash-2.svg" alt=""> Delete</a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardTask',
    props: ['task']
}
</script>

<style>

</style>