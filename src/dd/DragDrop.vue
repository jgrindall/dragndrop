<template>
  <div class="program">
    <BlockListRenderer :blocks="prog.blocks" :bus="bus"></BlockListRenderer>
  </div>
</template>

<script lang="ts">
import {Program, IBus} from "./types"
import { ref,PropType, defineComponent, VueElement } from 'vue';
import { buildSlots } from "@vue/compiler-core";

type State = {
  bus: Bus
}

class Bus implements IBus{
  constructor(){
    console.log("made a bus");
  }
  handle(obj:any){
    console.log(obj);
  }
}

export default defineComponent({
  name: 'DragDrop',
  components: {

  },
  data():State{
    return {
      bus: new Bus()
    }
  },
  props:{
    prog:{
      required:true,
      type: Object as PropType<Program>
    }
  },
  methods:{
    getBus(): Bus{
      return new Bus
    } 
  }
});
</script>

<style scoped>

</style>
