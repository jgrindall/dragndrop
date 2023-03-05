export type Program = {
    blocks: BlockList,
    snippets: HBlock
}

export type Block = HBlock | IBlock

export type BlockList = Block[]

export type Item = {
    id:string,
    text: string
}

export enum BlockTypes{
    HFLOW = "hflow",
    INDENTED = "indented"
}

export type HBlock = {
    type: BlockTypes.HFLOW,
    id:string,
    children:Item[]
}

export type IBlock = {
    type: BlockTypes.INDENTED,
    id:string,
    top:HBlock,
    children:BlockList
}

export type DragData = {
    dropTarget: Block,
    draggedItemId: Item["id"]
}

export interface IBus{
    handle:(obj:DragData)=>void
}
