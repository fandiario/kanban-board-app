<template>
  <div>
    <b-modal id="modal-3" title="Move Task" hide-footer>
            <form>
                <div class="form-group">
                    <label for="descriptionTask">Move to where ?</label>
                    <select class="form-control" id="moveDescriptionTask">
                        <option>---Category---</option>
                        <option value="backlog">backlog</option>
                        <option value="todo">todo</option>
                        <option value="ongoing">ongoing</option>
                        <option value="done">done</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Move</button>
            </form>
        </b-modal>
  </div>
</template>

<script>
export default {
    name: 'FormMoveTask'
    
}
</script>

<style>

</style>