<template>
  <div class="container">
      <div class="row">
          <div class="col-5 mx-auto mt-5">
              <h4 class="mb-3 text-dark">Kanban Board App</h4>
              <div class="card shadow " style="width: 18rem;">
                  <img src="../assets/login.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">LOGIN</h5>
                    <small>Haven't got an account yet ? <a v-on:click.prevent="openRegister" href="#">Register</a> here</small>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login () {
            let payload = {
                email: this.email,
                password: this.password
            }
             
            this.$emit('loginSubmit', payload)
        },

        openRegister () {
            this.$emit ('openForm', 'registerPage')
        }
    }

}
</script>

<style>

</style>