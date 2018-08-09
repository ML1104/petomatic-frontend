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
            <div class="db-item" v-for="visit in visitsList" :key="visit.id">
                <div>{{ visit.title }}</div>
                <div>{{ visit.desc }}</div>
                <div>{{ visit.date }}</div>
                <div>{{ visit.time }}</div>
                <div>{{ visit.pet_id }}</div>
                <div>{{ visit.client_id }}</div>
                <div>{{ visit.user_id }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            visitsList: [],
        }
    },

    mounted() {
        this.axios
        .get('http://petomatic.local/app/')    
        .then(response => (this.visitsList = response.data));
    }
}
</script>

<style>
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

    li  {
        color: white;
    }
</style>


