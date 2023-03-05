import * as _ from 'underscore'
import { reactive } from 'vue';
import {DragData, Block, HBlock, Item, IBlock, IBus, Program, BlockList, BlockTypes} from "./types"

export default class Bus implements IBus{
  prog:Program
  constructor(prog:Program){
    console.log("made a bus");
    this.prog = prog
  }
  handle(data:DragData){
    console.log("handle", data);
    const draggedBlock: Block | Item | null = this.getById(data.draggedItemId)
    console.log("draggedBlock", draggedBlock);
    if(draggedBlock){
      const parentOfDraggedBlock: Block | null = this.getParentForId(data.draggedItemId)
      console.log("parentOfDraggedBlock", parentOfDraggedBlock);
      if(parentOfDraggedBlock && parentOfDraggedBlock.type === BlockTypes.HFLOW){
        parentOfDraggedBlock.children = _.without(parentOfDraggedBlock.children, draggedBlock as Item)
        const isEmpty = parentOfDraggedBlock.children.length === 0
        if(isEmpty){
           const parentOfParent = this.getParentForId(parentOfDraggedBlock.id)
           console.log(parentOfParent, 'deletes', parentOfDraggedBlock)
        }
        if(data.dropTarget.type === BlockTypes.HFLOW){
          data.dropTarget.children = [
            ...data.dropTarget.children,
            draggedBlock as Item
          ]
        }
      }
    }
    this.deleteEmpty()
  }
  deleteEmpty(){
    console.log("de")
  }
  getById(id:string): Block | Item | null{

    const _getByIdInBlock = (block: Block): Block | Item | null=>{
      if(block.id === id){
        return block
      }
      else if(block.type === BlockTypes.HFLOW){
        for(const child of block.children){
          if(child.id === id){
            return child
          }
        }
      }
      else{
        if(block.top.id === id){
          return block.top
        }
        for(const child of block.top.children){
          if(child.id === id){
            return child
          }
        }
        const child = _getById(block.children)
        if(child){
          return child
        }
      }
      return null
    }

    const _getById = (blockList:BlockList): Block | Item | null=>{
      for(const block of blockList){
        const inBlock = _getByIdInBlock(block)
        if(inBlock){
          return inBlock
        }
      }
      return null
    }
    return _getById(this.prog.blocks) || _getByIdInBlock(this.prog.snippets)
  }
  getParentForId(id:string): Block | null{ 

    const _isChildOfBlock = (block:HBlock | IBlock): boolean=>{
      if(block.type === BlockTypes.HFLOW){
        const match = block.children.find(item => item.id === id)
        if(match){
          return true
        }
      }
      else{
        if(block.top.id === id){
          return true
        }
      }
      return false
    }

    const _getParentForId = (blockList:BlockList): Block | null=>{
      for(const block of blockList){
        const inBlock = _isChildOfBlock(block)
          if(inBlock){
            return block
          }
          else if(block.type === BlockTypes.INDENTED){
            return _getParentForId(block.children)
          }
      }
      return null
    }


    const isSnippet = _isChildOfBlock(this.prog.snippets)
    if(isSnippet){
      return this.prog.snippets
    }
    return _getParentForId(this.prog.blocks)
  }
}

