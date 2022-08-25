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
    toast.show("hello!", {
      duration: 0,
      action: [
        {
          text: `Learn more`,
          onClick: (_, toastObject) => {
            toastObject.goAway(0)
            window.open("about:blank", "_blank")?.focus()
          },
        },
        {
          text: `Dismiss`,
          onClick: (_, toastObject) => {
            toastObject.goAway(0)
          },
        },
      ],
    })
  })
})
console.log(toast)
</script>