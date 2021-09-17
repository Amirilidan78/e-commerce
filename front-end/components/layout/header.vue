<template>
  <div class="w-100 py-3 border px-5 border-dark bg-blue dark:border-white ">
    <btn-simple :on_click="toggleTheme" >Dark</btn-simple>
  </div>
</template>
<script>
export default {

  name : "LayoutHeader",

  props : {
    toggleTheme : {
      type : Function ,
      default : () => {}
    }
  }

}
</script>
