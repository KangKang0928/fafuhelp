<template>
  <div id="app">

    <keep-alive>
      <router-view />
    </keep-alive>

    <div id="nav">
      <router-link to="/userMsg">
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        <p>发送需求</p>
      </router-link>
      <router-link to="/servicerMsg">
        <i class="fa fa-comments-o" aria-hidden="true"></i>
        <p>消息大厅</p>
      </router-link>
      <router-link to="/userOrder">
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <p>我的需求</p>
      </router-link>
      <router-link to="/servicerOrder">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p>我的接单</p>
      </router-link>
      <router-link to="/my">
        <i class="fa fa-smile-o" aria-hidden="true"></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  height: 100vh;
  width: 100%;
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 0px -1px 5px rgba(0,0,0,0.1);
  position: fixed;
  bottom: 0;
  left: 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #2c3e50;
    text-decoration: none;
    width: 50px;
    height: 50px;

    &.router-link-exact-active {
      color: #42b983;
    }

    i{
      font-size: 1.5rem;
    }
    p{
      font-size: 0.6rem;
    }
  }
}
#nprogress .bar{
  background-color:#42b983!important;
}
</style>
