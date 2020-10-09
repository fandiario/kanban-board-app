<template>
  <div class="container">
      <div class="row">
          <div class="col-5 mx-auto mt-5">
              <h4 class="mb-3 text-primary">Kanban Board App</h4>              
              <div class="card shadow" style="width: 18rem;">
                  <img src="../assets/authentication.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">REGISTER</h5>
                    <small>Already got an account ? <a v-on:click.prevent="openLogin" href="#">Login</a> here</small>
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        register () {
            let payload = {
                email: this.email,
                password: this.password
            }
            this.$emit ('registerSubmit', payload)
        },

        openLogin () {
            this.$emit ('openForm', 'loginPage')
        }
    }

}
</script>

<style>

</style>