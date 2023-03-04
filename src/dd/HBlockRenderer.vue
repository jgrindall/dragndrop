<template>
  <div
    class="h draggable"
    draggable="true"

    @drop.prevent="onDrop($event)"
    @dragenter="checkDrop($event)"
    @dragover="checkDrop($event)"
>
      <div
        v-for="(child, i) in block.children"
        :key="'child' + i"
        class="hchild draggable"
        draggable="true"
        @dragstart="startDrag($event, child)"
      >
      <ItemRenderer :item="child"></ItemRenderer>
    </div>
    <span class="id">{{ block.id }}</span>
  </div>

</template>

<script lang="ts">
import { HBlock, Item, IBus} from "./types"
import { PropType, defineComponent } from 'vue';
import ItemRenderer from "./ItemRenderer.vue";
import { inject } from 'vue'

export default defineComponent({
  name: 'HBlockRenderer',
  setup () {
    return {
      bus: inject<IBus>('bus')
    }
  },
  components: {
    ItemRenderer
  },
  props:{
    block:{
      required:true,
      type: Object as PropType<HBlock>
    }
  },
  methods:{
    startDrag(event:DragEvent, child:Item){
      console.log("start", event, child)
      event.dataTransfer?.setData("draggedItemId", child.id);
    },
    onDrop(event:any){
      const draggedItemId = event.dataTransfer.getData("draggedItemId")
      const bus = this.bus as IBus
      bus.handle({
        dropTarget:this.block,
        draggedItemId
      })
    },
    checkDrop(event:any){
      event.preventDefault()
    }
  }
});
</script>

<style scoped>
.h{
  font-size:24px;
  background: hotpink;
  display: flex;
  margin:5px;
}
.id{
  font-size: 14px;
  opacity: 0.666;
  margin-left: auto;
  padding:5px
}
.hchild{
  margin:5px;
  padding:5px;
  border:1px solid black;
}
</style>
