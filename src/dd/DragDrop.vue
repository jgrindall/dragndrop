<template>
  <div>
    
    <div class="program">
      <BlockListRenderer :blocks="prog.blocks"></BlockListRenderer>
    </div>
    
    <hr/>

    <div class="snippets">
      <HBlockRenderer :block="prog.snippets"></HBlockRenderer>
    </div>
  </div>
  
</template>

<script lang="ts">
import {Program} from "./types"
import { PropType, defineComponent } from 'vue';
import * as _ from 'underscore'
import Bus from "./Bus"
import HBlockRenderer from "./HBlockRenderer.vue";

type State = {
  bus: Bus
}

export default defineComponent({
  name: 'DragDrop',
  components: {
    HBlockRenderer
  },
  provide() {
    this.bus = this.bus || new Bus(this.prog)
    return {
      bus: this.bus
    }
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
