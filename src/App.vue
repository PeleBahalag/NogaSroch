<template>
  <div>
    <RouterLink to="/about" v-if="!whatPage">לעמוד ריק</RouterLink>
    <RouterLink to="/" v-else>לעמוד בית</RouterLink>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  computed : {
    whatPage(){
      const path = this.$route.path;
      if (path.includes("/about")) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted(){
    console.log("our current path is:" + this.$route.path)
  }
}
</script>

<style>

</style>