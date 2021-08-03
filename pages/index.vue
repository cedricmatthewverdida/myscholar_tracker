<template>
  <div>
    <Currency />
    <Scholar class="mt-2"/>
  </div>
</template>

<script>
  import Scholar from '~/components/tracker.vue'
  import Currency from '~/components/valuetracker.vue'
  export default {
    components:{
      Scholar,
      Currency
    }
  }
</script>

<style lang="scss" scoped>

</style>