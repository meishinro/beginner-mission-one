<script setup>
const route = useRoute();
</script>
<template>
  <h2>預約房型</h2>
  <NuxtLink :to="`/rooms/${route.params.id}/reserve/success`"
    >確定預約客房{{ route.params.id }}</NuxtLink
  >
</template>
