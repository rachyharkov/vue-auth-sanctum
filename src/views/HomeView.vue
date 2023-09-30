<script setup>
  import { useToast } from "vue-toastification"

  const toast = useToast()

  const showToast = () => {
    toast("Default")
    toast.success("Success")
    toast.error("Error")
    toast.warning("Warning")
    toast.info("Info")
  }
</script>


<template>
  <main class="container">
    <h1>Home asd</h1>
    <button class="btn btn-primary" @click="showToast">
      button

      <i class="bi bi-plus"></i>
    </button>
  </main>
</template>
