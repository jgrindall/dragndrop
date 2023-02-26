<template>
   <div class="indented draggable" draggable="true">

    <HBlockRenderer :block="block.top" :bus="bus"></HBlockRenderer>
    <div class="i">
        <div class="icontainer" :class="{'empty' : block.children.length == 0}">
          <BlockListRenderer :blocks="block.children" :bus="bus"></BlockListRenderer>
        </div>
        
    </div>

</div>

</template>

<script lang="ts">
import { IBlock, IBus} from "./types"
import { PropType, defineComponent } from 'vue';
import HBlockRenderer from "./HBlockRenderer.vue";

export default defineComponent({
  name: 'IBlockRenderer',
  components: {
    HBlockRenderer
},
  props:{
    bus:{
      required:true,
      type: Object as PropType<IBus>
    },
    block:{
      required:true,
      type: Object as PropType<IBlock>
    }
  }
});
</script>


<style scoped lang="scss">
  .indented{
    padding: 8px;
    background: blue;
    .i{
      .icontainer{
        margin-left: 50px;
        &.empty{
          background-color: green;
        }
      }
    }
  }
  
</style>
