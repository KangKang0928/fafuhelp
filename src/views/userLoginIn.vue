<template>
  <div class="userLoginIn">
    <div class="window">
      <div class="container_item">
        <h1>用户登录</h1>
        <form class="log_in" v-on:submit="onLogin">
          <input
            type="text"
            placeholder="用户ID"
            required="required"
            name="userId"
            id="uid"
            autocomplete="off"
          />
          <input
            type="password"
            placeholder="登录密码"
            required="required"
            name="userPwd"
            id="upw"
            autocomplete="off"
          />
          <div class="btn2">
            <input type="submit" value="登录" />
            <div id="sign_up">前往注册</div>
          </div>
        </form>
      </div>
      <div class="container_item">
        <h1>用户注册</h1>
        <form class="sign_up">
          <input
            type="text"
            placeholder="用户名 例如:18软件小陈"
            required="required"
            class="userName"
            autocomplete="off"
          />
          <input
            type="password"
            placeholder="密码"
            required="required"
            class="userPwd"
            autocomplete="off"
          />
          <input
            type="password"
            placeholder="确认密码"
            required="required"
            class="userPwdA"
            autocomplete="off"
          />
          <div class="btn2">
            <input type="submit" value="注册" />
            <div id="sign_up" class="login">返回登录</div>
          </div>
        </form>
      </div>
    </div>
    <a href="https://corsun.xyz/main.html" id="back">返回主页</a>
  </div>
</template>
<script>
import { request } from "../network/request.js";
export default {
  methods: {
    onLogin(e) {
      e.preventDefault();
      var uid = document.getElementById('uid');
      var upw = document.getElementById('upw');
      console.log(uid.value);
      console.log(upw.value);
      request({
        method: "post",
        url: "/userLoginIn.php",
        data: {
          userId: document.getElementById('uid').value,
          userPwd: document.getElementById('upw').value,
        },
      }).then((data) => {
        console.log(data.data);
        if (data[0].stat == "success") {
          this.$router.push('/userMsg');
        } else {
          alert("账号或密码错误!");
        }
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.userLoginIn {
  position: relative;
  background-color: #fff;
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: 25px;
}
.container_item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.window {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userLoginIn p,
h1 {
  color: #000;
}
.userLoginIn h1 {
  margin-top: 40px;
}
.btn {
  width: 280px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.log_in,
.sign_up {
  width: 380px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.log_in a,
.sign_up a,
.btn a {
  text-decoration: none;
  color: #000;
  display: block;
  line-height: 60px;
  text-align: center;
  width: 120px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.1);
}
.log_in a:hover,
.sign_up a:hover,
.btn a:hover {
  text-decoration: underline;
}
.log_in input,
.sign_up input {
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  width: 80%;
  height: 30%;
  background-color: transparent;
  color: #000;
  margin-bottom: 20px;
}
.log_in input[value="登录"],
.sign_up input[value="注册"] {
  width: 120px;
  height: 35px;
  font-size: 14px;
  border: 1px solid #000;
  margin: 0;
}
.log_in input::placeholder,
.sign_up input::placeholder {
  color: #000;
}
#back {
  position: absolute;
  background-color: transparent;
  font-size: 13px;
  bottom: 15px;
  right: 10px;
  width: auto;
  height: auto;
  line-height: 0;
  color: #000;
  text-decoration: none;
}
#sign_up {
  background-color: transparent;
  font-size: 14px;
  color: #000;
  border: 1px solid #000;
  background-color: #fff;
  bottom: 0;
  right: 0;
  width: 120px;
  height: 35px;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
}
@media (max-width: 991px) {
  .userLoginIn {
    width: 260px;
    height: 400px;
  }
  .log_in,
  .sign_up,
  .btn {
    width: 220px;
    height: 180px;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .userLoginIn p {
    margin-bottom: 80px;
  }
  .btn2 {
    margin-bottom: -20px;
  }
  .btn2 input,
  .btn2 div {
    margin: 10px 0 10px 0;
  }
  body {
    // background-image: url(../img/psb.jpg);
  }
}
@media screen and (min-width: 992px) {
  .btn2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 220px;
    height: 180px;
    flex-direction: row;
  }
  .btn2 input,
  .btn2 div {
    margin: 0 10px 0 10px;
  }
}
</style>
