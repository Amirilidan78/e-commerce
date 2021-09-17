<template>
  <div>
    <LayoutHeader :toggleTheme="toggleTheme" />
    <Nuxt/>
  </div>
</template>
<script>
export default {

  head () {
    return {
      bodyAttrs: {
        class : `body`
      }
    }
  },

  methods : {

    toggleTheme(){
      this.$colorMode.preference = this.$colorMode.preference === 'light-mode' ? 'dark-mode' : 'light-mode'
    },

  }

}
</script>
