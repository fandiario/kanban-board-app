<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <div>
                <b-dropdown id="dropdown-1" class="m-md-2" variant="dark">
                    <template v-slot:button-content>
                        <b-icon icon="person-fill" aria-hidden="true"></b-icon> User
                    </template>
                    <b-dropdown-item>
                        <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                        Edit User
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <b-icon icon="person-x-fill" aria-hidden="true"></b-icon> 
                        Delete User
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                        <b-icon icon="x-circle-fill" aria-hidden="true" ></b-icon> 
                        <a @:click.prevent="logout" href="#" class="text-dark">Log Out</a>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">Kanban Board App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        logout() {
            localStorage.clear ()
            this.$emit ('logoutSubmit', 'loginPage')
        }
    }
}
</script>

<style>

</style>