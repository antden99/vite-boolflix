<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: "AppMain",

  components: {   
    AppHeader: AppHeader,
    AppMain: AppMain,    
  },

}
</script>

<template>
  <div>

    <AppHeader></AppHeader>
    <AppMain></AppMain>
    
  </div>
</template>

<style>

</style>
