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
      {{ child.text }}
    </div>
  </div>

</template>

<script lang="ts">
import {Program, HBlock, Item, IBus} from "./types"
import { ref,PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'HBlockRenderer',
  components: {

  },
  props:{
    bus:{
      required:true,
      type: Object as PropType<IBus>
    },
    block:{
      required:true,
      type: Object as PropType<HBlock>
    }
  },
  methods:{
    startDrag(event:DragEvent, child:Item){
      console.log("start", event, child)
      event.dataTransfer?.setData("item", child.id);
    },
    onDrop(event:any){
      console.log("drop", event)
      console.log(event.dataTransfer.getData("item"))
      this.bus.handle({a:this.block, b:event.dataTransfer.getData("item")})
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
.hchild{
  margin:5px;
  padding:5px;
  border:1px solid black;
}
</style>
