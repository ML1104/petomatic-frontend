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
            <div class="db-item" v-for="client in clientList" :key="client.id">
                <div>{{ client.name }}</div>
                <div>{{ client.picture }}</div>
                <div>{{ client.phone }}</div>
                <div>{{ client.email }}</div>
                <div>{{ client.sex }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Clients',

    data() {
        return {
            clientList: [],
        }
    },

    mounted() {
        this.axios
        .get('http://petomatic.local/app/clients')    
        .then(response => (this.clientList = response.data));
    }
}
</script>

<style scoped>
    .panel {
        margin: 0 auto;
        background-color: gray;
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

    .db-item {
        background-color: gray;
    }
</style>


