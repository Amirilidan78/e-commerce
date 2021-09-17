<template>
  <button
    class="py-1 px-2 border border-transparent rounded"
    :class="`bg-${color} dark:bg-${dark_color} ${extra_class}`"
    @click="on_click">
    <slot />
  </button>
</template>
<script>
export default {

  name : "btn-simple",

  props : {

    on_click : {
      type: Function ,
      default: () => {}
    } ,

    color : {
      type: String ,
      default: "white"
    },

    dark_color : {
      type: String ,
      default: "dark"
    },

    extra_class : {
      type: String ,
      default: ""
    },

  }

}
</script>
