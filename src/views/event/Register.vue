<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'], 
  methods: {
    register() {
      // Assuming successful API call to register them

      this.GStore.flashMessage =
        'You are successfully registered for ' + this.event.title
      setTimeout(() => {  
        this.GStore.flashMessage = ''
      }, 3500)

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>

<style>
button {
  background-color: dodgerblue;
  padding: 8px 14px;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>