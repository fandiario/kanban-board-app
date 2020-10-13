<template>
  <div>
    <b-modal id="modal-2" title="Edit Task" hide-footer>
            <form>
                <div class="form-group">
                    <label for="titleTask">Title</label>
                    <input type="text" class="form-control" id="editTitleTask">
                </div>
                <div class="form-group">
                    <label for="descriptionTask">Description</label>
                    <input type="text" class="form-control" id="editDescriptionTask">
                </div>
                <button type="submit" class="btn btn-primary">Edit</button>
            </form>
        </b-modal>
  </div>
</template>

<script>
export default {
    name: 'FormEditTask'
    

}
</script>

<style>

</style>