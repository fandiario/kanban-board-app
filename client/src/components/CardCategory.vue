<template>
  <div class="col-3">
      <!-- <div class="shadow bg-primary text-light p-2">Card Title</div> -->
    <div class="card text-white bg-primary mb-3 ml-3 mt-5 mr-3 shadow" style="max-width: 22rem;">
        <div class="card-body">
            <h5 class="card-title">{{ category.name }}</h5>
            <p class="card-text">
                <CardTask
                v-for="task in filteredTask"
                :task="task" 
                :key="task.id"
                >
                </CardTask>
            </p>
            <!-- <p class="card-text">{{ category }}</p> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
  </div>
</template>

<script>
import CardTask from '../components/CardTask'
export default {
    name: 'CardCategory',
    computed: {
        filteredTask () {
            return this.tasksData.filter (el => el.category === this.category.name)
        }
    },
    props: ['category', 'tasksData'],
    components: {
        CardTask
    }

}
</script>

<style>

</style>