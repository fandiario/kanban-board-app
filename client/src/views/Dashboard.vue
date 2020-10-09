<template>
  <div>
      <Navbar></Navbar>
      <ButtonAdd></ButtonAdd>
      <div class="row">
        <CardCategory 
        v-for="category in categoriesData"
        :category="category" 
        :key="category.id"
        :tasksData="tasksData">
        </CardCategory>
      </div>
  </div>
</template>

<script>
import CardTask from '../components/CardTask'
import Navbar from '../components/Navbar'
import CardCategory from '../components/CardCategory'
import ButtonAdd from '../components/ButtonAdd'
export default {
    name: 'DashboardPage',
    props: ['tasksData', 'categoriesData'],
    components: {
      CardTask,
      Navbar,
      CardCategory,
      ButtonAdd
    }
}
</script>

<style>

</style>