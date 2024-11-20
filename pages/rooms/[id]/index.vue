<script setup>
const route = useRoute();
</script>
<template>
  <h2>客房{{ route.params.id }}簡介</h2>
  <div class="nav">
    <NuxtLink :to="`/rooms/${route.params.id}/reserve`">預約此房型</NuxtLink>
    <NuxtLink to="/rooms">回到客房旅宿頁</NuxtLink>
  </div>
</template>
<style>
.nav {
  display: flex;
  gap: 1rem;
}
</style>
