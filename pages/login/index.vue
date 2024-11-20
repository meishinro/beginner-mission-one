<template>
  <h1>登入頁</h1>
  <form>
    <label for="email">電子郵件</label>
    <input type="email" id="email" name="email" />
    <label for="password">密碼</label>
    <input type="password" id="password" name="password" />
    <button type="submit">登入</button>
  </form>
  <NuxtLink to="/login/sign-up">還沒有帳號？點此註冊</NuxtLink>
</template>
