<template>
  <div class="facts-card">
    <p>{{ fact }}</p>
  </div>
</template>

<script>
export default {
    props : {
        fact : String
    },
}
</script>

<style>
.facts-card{
    background-color: rgba(118, 57, 72, 1);
    margin: 2%;
    border-radius: 25px;
    padding: 2%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    color: red;
}
</style>