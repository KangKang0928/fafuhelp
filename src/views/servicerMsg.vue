<template lang="">
<div class="servicerMsg">
    <empty v-if="isEmpty">
        <p>这里是空空的哦~</p>
    </empty>
    <div class="main">
        <ul class="msg">
            <li class="msg1" style="--i:${j}" v-for="data in datas">
                <form action="./acceptOrder.php" method="POST">
                    <div class="final_msg">
                        <img src="${data[i].userImg}" alt="">
                        <p>${data[i].userName}</p>
                    </div>
                    <div class="final_msg">
                        <p>${data[i].requireDesc}</p>
                        <div class="final_msg-label">
                            <input type='submit' value='接受' class='sub' v-if="false">
                            <input type="button" value="暂时忽略" class='del' v-else>
                        </div>
                    </div>
                    <input type="text" style="display:none;" name="userId" value="${data[i].userId}">
                    <input type="text" style="display:none;" name="requireId" value="${data[i].requireId}">
                    <input type="text" style="display:none;" name="servicerId" value="${servicerId}">
                </form>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import empty from "../components/empty.vue";
import {request} from '../network/request.js'
export default {
    data() {
        return {
            isEmpty: true,
            datas: null,
        };
    },
    components: {
        empty,
    },
    methods: {
        getDatas() {},
    },
    mounted() {
      request({
        url:"/servicerMsg.php",
        methods:'POST',
        params:{

        }
      }).then((data)=>{
        console.log(data);
      })
    },
    activated() {},
    deactivated() {},
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    user-select: none;
}

body {
    width: 100%;
    height: 100vh;
}

.float_right {
    float: right;
}

.head {
    font-size: 14px;
}

.head.right {
    float: right;
}

.main,
.order {
    position: absolute;
    width: 100%;
    height: 90vh;
    background-color: rgb(255, 255, 255);
    /* border: 1px solid red; */
}

.main {
    display: block;
    padding: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.main .msg img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.main .msg>li,
.main .msg>li>form {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.06);
}

.main .msg>li,
.order .msg>li {
    opacity: 0;
    animation: animate 0.8s ease-out calc(0.1s * var(--i)) forwards;
}

@keyframes animate {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.main .msg>li>form {
    padding: 20px 10px 20px 10px;
}

.main .msg>li {
    margin: 10px 0 10px 0;
}

.main .msg>li>form p {
    width: 80%;
    height: auto;
    margin-top: 20px;
    text-align: center;
}

.order {
    padding: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.final_msg {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}

.final_msg:nth-child(1) {
    align-self: flex-start;
    margin-top: 20px;
    width: 30%;
}

.final_msg:nth-child(2) {
    width: 50%;
    margin-right: 20px;
}

.order .msg img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.order .msg>li,
.order .msg>li>form {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.06);
}

.order .msg>li>form {
    padding: 20px 0 20px 0;
}

.order .msg>li {
    margin: 10px 0 10px 0;
}

.order .msg>li>form p {
    height: auto;
    margin-top: 20px;
}

.main .msg input,
.order .msg input {
    border: none;
    outline: none;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.05);
}

.order .msg input {
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 20px;
}

.menu {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.menu a {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    width: 50%;
    height: 100%;
    text-align: center;
    /* line-height: 10vh; */
    background-color: rgb(255, 255, 255);
    color: rgb(105, 105, 105);
    font-weight: 400;
    font-size: 13px;
    cursor: pointer;
}

.menu a i {
    font-size: 26px;
}

.menu .main-btn {
    color: rgb(0, 192, 0);
}

.final_msg-label {
    margin-top: 30px;
    margin-bottom: 20px;
}

.main .msg form select {
    border-radius: 20px;
    width: 110px;
    height: 40px;
    outline: none;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08);
    text-indent: 2em;
}

.main .msg form textarea {
    resize: none;
    width: 100%;
    outline: none;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08);
    margin: 10px 0 10px 0;
    padding: 10px;
    border-radius: 20px;
    color: rgb(105, 105, 105);
    font-size: 16px;
    overflow-y: scroll;
}

.main .msg form textarea:nth-child(1) {
    height: 15vh;
}

.main .msg form textarea:nth-child(2) {
    height: 50vh;
}

.main .msg form textarea::placeholder {
    font-size: 16px;
}

.userSubmit {
    color: rgb(19, 19, 19);
}

hr {
    border-style: dashed;
    border-bottom: none;
    border-left: none;
    border-right: none;
}

hr+p {
    text-align: center;
}

@media screen and (max-width: 991px) {
    .main .msg>li>form p {
        height: auto;
    }

    .order .msg>li>form p {
        height: auto;
    }

    .final_msg:nth-child(2) {
        width: 80%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.08);
        border-radius: 10px;
    }

    .final_msg:nth-child(2) p,
    .final_msg:nth-child(1) p {
        text-align: center;
        font-size: 12px;
    }

    .final_msg:nth-child(1) img {
        width: 30px;
        height: 30px;
    }

    .main .msg>li,
    .main .msg>li>form {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        border-radius: 20px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    }

    .main .msg>li>form,
    .order .msg>li>form {
        padding: 0;
    }

    .order .msg>li,
    .order .msg>li>form {
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    }

    .order .msg>li>form p {
        width: 80%;
    }

    input {
        font-size: 11px;
    }

    .menu a {
        font-size: 10px;
    }

    .menu a i {
        font-size: 20px;
    }
}

@media screen and (min-width: 1000px) {

    .main,
    .order {
        width: 90vw;
        height: 100vh;
        top: 0;
        right: 0;
    }

    .menu {
        width: 10vw;
        height: 100vh;
        top: 0;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
    }

    .menu a {
        width: 100%;
        height: 20vh;
        text-align: center;
        /* line-height: 20vh; */
        background-color: rgba(255, 255, 255);
    }
}

/*------------------------------*/
.main_ff>.head {
    /* border: 1px solid red; */
    margin: 0 auto;
    width: 86%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main_ff>.head>.head_item {
    /* border: 1px solid red; */
    width: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.main_ff>.head>.head_item>h2 {
    align-self: flex-start;
    font-weight: 100;
}

.main_ff .head img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.main_body {
    padding: 10px;
    margin: 20px auto;
    background-color: #eeeeee;
    /* border: 1px solid red; */
    width: 86%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}

.main_body>h5 {
    font-size: 20px;
    font-weight: 100;
    color: #000;
    text-decoration: none;
    /* border: 1px solid red; */
}

.main_ff>a:nth-child(3) {
    background-color: #00a8ff;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #00a8ff;
    display: block;
    width: 86%;
    font-size: 20px;
    font-weight: 100;
    color: #fff;
    text-decoration: none;
}

.main_ff>a:nth-child(4) {
    background-color: #e84118;
    text-align: center;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #e84118;
    display: block;
    width: 86%;
    font-size: 20px;
    font-weight: 100;
    color: #fff;
    text-decoration: none;
}

/* -------------------------------- */
.view {
    width: 100%;
    height: calc(100vh - 60px);
    overflow: hidden;
}

.main_f {
    width: 200vw;
    height: calc(100vh - 60px);
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main_ff {
    width: 50%;
    height: 100%;
}

.changeUser {
    width: 50%;
    height: 100%;
    overflow-y: scroll;
}

.changeUser i {
    font-size: 50px;
    margin-left: 10px;
}

.changeUser>form {
    margin: 0 auto;
    width: 90%;
    height: 260px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

.changeUser>form input {
    width: 80%;
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid #888;
}

.changeUser>form input[type="submit"] {
    border: none;
}

@media screen and (min-width: 992px) {
    .view {
        margin-left: 10vw;
        width: 90vw;
        height: 100%;
        overflow: hidden;
    }

    .main_f {
        width: 180vw;
        height: 100%;
        position: relative;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
