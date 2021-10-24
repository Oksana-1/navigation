<template>
  <header class="mf-header">
    <ul>
      <li><a href="#" @click.prevent="changeThePet('dog')">Dogs</a></li>
      <li><a href="#" @click.prevent="changeThePet('cat')">Cats</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "NavList",
  props: {
    eventBus: Object,
  },
  methods: {
    changeThePet(myPet) {
      this.eventBus.changeMyPet(myPet);
    }
  }
}
</script>

<style scoped>

</style>