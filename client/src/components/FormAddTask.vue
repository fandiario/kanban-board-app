<template>
  <div>
    <b-modal id="modal-1" title="Add Task" hide-footer>
            <form>
                <div class="form-group">
                    <label for="titleTask">Title</label>
                    <input type="email" class="form-control" id="titleTask">
                </div>
                <div class="form-group">
                    <label for="descriptionTask">Description</label>
                    <input type="password" class="form-control" id="descriptionTask">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </b-modal>
  </div>
</template>

<script>
export default {
    name: 'FormAddTask'
    

}
</script>

<style>

</style>