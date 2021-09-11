<template>
    <div class="my-container">
        <div class="header not-login">
            <div class="login-btn" @click="$router.push('/login')">
                <img class="mobile-image" src="./mobile.png">
                <span class="text">登录 / 注册</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.my-container {
    .header{
        height: 361px;
        background: url("./banner.png");
        background-size: cover;
    }
    .not-login {
        display: flex;
        justify-content: center;
        align-items: center;
        .login-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            .mobile-image {
                width: 132px;
                height: 132px;
                margin-bottom: 15px;
            }
            .text {
                font-size: 28px;
                color: white;
            }
        }
    }
}
</style>
