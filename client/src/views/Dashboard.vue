<template>
  <div>
      <Navbar
      @logoutSubmit = 'logoutSubmit'
      v-if="currentPage !== 'loginPage' || currentPage !== 'registerPage'">
      </Navbar>
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
    data () {
      return {
        currentPage: 'dashboardPage'
      }
    },
    props: ['tasksData', 'categoriesData'],
    components: {
      CardTask,
      Navbar,
      CardCategory,
      ButtonAdd
    },
    methods: {
      logoutSubmit (payload) {
        localStorage.clear ()
        this.$emit ("logoutSubmit", payload)
      }
    }
}
</script>

<style>

</style>