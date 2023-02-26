<template>
  <div class="program">
    <BlockListRenderer :blocks="prog.blocks" :bus="bus"></BlockListRenderer>
  </div>
</template>

<script lang="ts">
import {Program, Block, HBlock} from "./types"
import { PropType, defineComponent } from 'vue';
import * as _ from 'underscore'
import Bus from "./Bus"

type State = {
  bus: Bus
}

export default defineComponent({
  name: 'DragDrop',
  components: {

  },
  data():State{
    return {
      bus: new Bus(this.prog)
    }
  },
  props:{
    prog:{
      required:true,
      type: Object as PropType<Program>
    }
  },
  methods:{
   
  }
});
</script>

<style scoped>

</style>
