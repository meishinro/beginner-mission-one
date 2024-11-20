<template>
    <h1>註冊頁</h1>
    <form>
        <label for="email">電子郵件</label>
        <input type="email" id="email" name="email" />
        <label for="password">密碼</label>
        <input type="password" id="password" name="password" />
        <button type="submit">註冊</button>
    </form>
    <NuxtLink to="/login">已經有帳號了？點此登入</NuxtLink>
</template>