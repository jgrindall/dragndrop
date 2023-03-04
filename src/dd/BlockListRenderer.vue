<template>
  <div>
    <div v-for="(block, i) in blocks" class="block" :key="'block' + i">
      <div v-if="block.type === 'h'">
        <HBlockRenderer :block="block"></HBlockRenderer>
      </div>
      <div v-else-if="block.type === 'i'">
        <IBlockRenderer :block="block"></IBlockRenderer> 
      </div>
    </div>
  </div>
   

</template>

<script lang="ts">
import { IBus, BlockList} from "./types"
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
