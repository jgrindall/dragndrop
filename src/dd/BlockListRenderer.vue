<template>
   <div v-for="(block, i) in blocks" class="block" :key="'block' + i">
      <div v-if="block.type === 'h'">
        <HBlockRenderer :block="block" :bus="bus"></HBlockRenderer>
      </div>
      <div v-else-if="block.type === 'i'">
        <IBlockRenderer :block="block" :bus="bus"></IBlockRenderer> 
      </div>
    </div>

</template>

<script lang="ts">
import { IBus, BlockList} from "./types"
import { PropType, defineComponent } from 'vue';
import HBlockRenderer from "./HBlockRenderer.vue";
import IBlockRenderer from "./IBlockRenderer.vue";

export default defineComponent({
  name: 'BlockListRenderer',
  components: {
    HBlockRenderer,
    IBlockRenderer
},
  props:{
    bus:{
      required:true,
      type: Object as PropType<IBus>
    },
    blocks:{
      required:true,
      type: Object as PropType<BlockList>
    }
  }
});
</script>

<style scoped>

</style>
