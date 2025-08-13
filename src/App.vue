<script>
import FactsCard from './components/FactsCard.vue';
import info from './assets/texts/info.json'
  export default {
    data(){
      return{
        userTrue : null,
        info
      }
    },
    components : {FactsCard},
    mounted(){
      setTimeout(() => {
        if(confirm('האם שרוך ורוד זה השרוך הכי יפה בצה"ל??')){
          this.userTrue = true;
        }
        else {
          this.userTrue = false;
        }
      } , 200)
    }
  }
</script>

<template>
  <div v-if="userTrue || userTrue === null">
    <h1 class="title">הפרוייקט הראשון שלי בסיירים</h1>
    <h3 class="subtitle">לומדת שרוך מפ"ל</h3>
    <img src="./assets/srochim.jpg" alt="sroch" class="sroch">
    <div class="facts">
      <facts-card v-for="(fact, index) in info.factsArray" :key="index" :fact="fact"></facts-card>
    </div>
  </div>
</template>

<style scoped>
body {
  overflow: hidden;
  direction: rtl;
}

.title {
  color: rgb(255, 0, 170);
}

.subtitle {
  color: rgb(182, 0, 121);
  font-size: 1.8rem;
}

.sroch {
  width: 15vw;
}

.facts {
  display: flex;
}
</style>