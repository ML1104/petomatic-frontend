<template>
  <div class="login">
    <div class="panel">
      <div class="title">Login</div>
      <form action="post">
        <input type="text" required placeholder="Username">
        <input type="password" required placeholder="Password">
        <router-link to="/home"><button>Login</button></router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
  .login {
    width: 600px;
    margin: 0 auto; 
  }

  .panel {
    border: 2px solid blue;
    height: 500px;
  }

  .title {
    font-size: 40px;
    padding: 10px;
    background-color: blue;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    justify-content: space-around;
    height: 50%;
  }

  input {
    text-align: center;
    padding: 10px;
    border: 2px solid gray;
  }

  button {
    padding: 10px;
    font-size: 16px;
    background-color: white;
    width: 150px;
    border: 3px solid blue;
  }

  button:hover {
    background-color: blue;
    color: white;
    transition: 300ms;
  }
</style>
