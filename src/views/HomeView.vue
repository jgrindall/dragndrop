<template>
  <div class="home">
    <DragDrop :prog="getProgram()"></DragDrop> 
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import DragDrop from '@/dd/DragDrop.vue';
import {prog} from '@/dd/prog'
import {Program} from '@/dd/types'

export default defineComponent({
  name: 'HomeView',
  components: {
    DragDrop
  },
  methods:{
    getProgram(): Program{
      return reactive(prog)
    } 
  }

});
</script>
