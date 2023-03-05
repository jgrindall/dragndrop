<template>
  <div>
    <div v-for="(block, i) in blocks" class="block" :key="'block' + i">
      <component :is="getBlockType(block)" :block="block"></component>
    </div>
  </div>
   

</template>

<script lang="ts">
import { IBus, BlockList, BlockTypes, Block} from "./types"
import { PropType, defineComponent, inject } from 'vue';
import HBlockRenderer from "./HBlockRenderer.vue";
import IBlockRenderer from "./IBlockRenderer.vue";

export default defineComponent({
  name: 'BlockListRenderer',
  setup () {
    return {
      bus: inject<IBus>('bus')
    }
  },
  methods:{
    getBlockType(block:Block){
      return block.type === BlockTypes.HFLOW ? HBlockRenderer : IBlockRenderer
    },
    isHFlow(block:Block){
      return block.type === BlockTypes.HFLOW
    },
    isIndented(block:Block){
      return block.type === BlockTypes.INDENTED
    }
  },
  components: {
    HBlockRenderer,
    IBlockRenderer
  },
  props:{
    blocks:{
      required:true,
      type: Object as PropType<BlockList>
    }
  }
});
</script>

<style scoped>

</style>
