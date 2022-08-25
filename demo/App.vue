<template>
  <!-- TODO: This is a work in progress -->
  <div>
    My Components
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useToasted } from '../src/index';

const toast = useToasted()

onMounted(() => {
  setTimeout(() => {
    toast.show("hello!")
  })
})
console.log(toast)
</script>