<template>
    <div>
        <!-- <h1>{{ message }}</h1> -->
        <LoginPage 
        v-if="currentPage === 'loginPage'"
        @loginSubmit="login"
        @openForm="openForm">
        </LoginPage>

        <RegisterPage
        v-else-if="currentPage === 'registerPage'"
        @registerSubmit="register"
        @openForm="openForm">
        </RegisterPage>

        <DashboardPage
        v-else-if="currentPage === 'dashboardPage'"
        :tasksData="tasks"
        :categoriesData="categories">
        </DashboardPage>
    </div>
</template>

<script>
import axios from 'axios'
import LoginPage from './views/Login'
import RegisterPage from './views/Register'
import DashboardPage from './views/Dashboard'
import swal from 'sweetalert';

export default {
  name: 'App',
  data() {
    return {
      message: 'Kanban Board App',
      currentPage: 'loginPage',
      tasks: [],
      categories: [
        {
          id: 1,
          name: "backlog"
        },
        {
          id: 2,
          name: "todo"
        },
        {
          id: 3,
          name: "ongoing"
        },
        {
          id: 4,
          name: "done"
        }

      ]
    };
  },
  components: {
      LoginPage,
      RegisterPage,
      DashboardPage
  },
  methods: {
      checkAuth () {
          if (localStorage.getItem('access_token')) {
              this.currentPage = 'dashboardPage'
              // console.log ("ini dari checkauth")
              this.fetchTasks ()

          } else {
              this.currentPage = 'loginPage'
          }
      },
      login (payload) {
        //   console.log (payload)
          
          axios ({
              url: 'http://localhost:3000/users/login',
              method: 'POST',
              data: payload
          })

          .then (({ data }) => {
              this.currentPage = 'dashboardPage'
              localStorage.setItem('access_token',data.access_token)
              this.checkAuth ()
            //   console.log (data)
          })

          .catch (err => {
              console.log (err)
              swal ( "Oops" ,  "Something went wrong!" ,  "error" )
          })
      },
      register (payload) {
        //   console.log (payload)

          axios ({
              url: 'http://localhost:3000/users/register',
              method: 'POST',
              data: payload
          })

          .then (({data}) => {
              this.currentPage = 'loginPage'
              console.log (data)
              swal ({
                title: "Registered",
                text: "Your data has been registered!",
                icon: "success",
                });
          })

          .catch (err => {
              console.log (err)
              swal ( "Oops" ,  "Invalid email or password" ,  "error" )
          })

      },
      openForm (payload) {
          this.currentPage = payload
      },
      fetchTasks () {
          axios ({
              url: 'http://localhost:3000/tasks/',
              method: 'GET',
              headers: {
                  access_token: localStorage.access_token
              }
          })

          .then (({ data }) => {
            //  console.log (data.tasks)
            // console.log ("from fetchTask")
             this.tasks = data
          })

          .catch (err => {
              console.log (err)
              swal ( "Oops" ,  "Something went wrong!" ,  "error" )
          })

      },
      created () {
          this.checkAuth ()
      }
  }
};
</script>

<style >

</style>