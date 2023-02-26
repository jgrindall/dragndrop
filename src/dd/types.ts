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

export type HBlock = {
    type: "h",
    id:string,
    children:Item[]
}

export type IBlock = {
    type: "i",
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

