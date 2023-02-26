<template>
  <span>
    {{ item.text }} <span class="id">({{ item.id }})</span>
  </span>
</template>

<script lang="ts">
import {Item} from "./types"
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'ItemRenderer',
  components: {
    
},
  props:{
   item:{
      required:true,
      type: Object as PropType<Item>
    }
  }
});
</script>


<style scoped lang="scss">
  .id{
    font-size: 12px;
    opacity: 0.666;
    padding:5px
  }
</style>
