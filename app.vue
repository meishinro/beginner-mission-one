<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">首頁</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/login">登入頁</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rooms">客房旅宿頁</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/member">會員頁/修改個人資料頁</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>

<style>
header {
  background-color: #333;
  color: white;
  padding: 10px;
}
nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}
nav ul li {
  margin: 0;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
