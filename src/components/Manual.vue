<template>
    <div class="panel">
        <div class="navContainer">
            <ul class="nav">
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/clients">Clients</router-link></li>
                <li><router-link to="/pets">Pets</router-link></li>
                <li><router-link to="/users">Users</router-link></li>
                <li><router-link to="/manual">Manual</router-link></li>
                <li><router-link to="/">Logout</router-link></li>
            </ul>
        </div>
        <div class="body">
            <div>
                <h1 class="title">App Manual</h1>
                <div class="description">
                    <p>In order to use this app properly, the user must first create a pet in the pets section, followed by creating a client and specifying which pet they own.</p>
                    <p>Once both the client and the pet are properly set, the user may then create and schedule a visit with the customer/s and pet/s they have created in the main page.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Manual',
}
</script>

<style scoped>
    .panel {
        margin: 0 auto;
        background-color: wheat;
        width: 65%;
    }

    .navContainer {
        background-color: blue;
        width: 100%;
    }

    .nav {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: white;
        padding: 10px;
    }

    p {
        padding: 20px;
    }
</style>


