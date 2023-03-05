import { BlockList, Program, Item, HBlock, BlockTypes } from "./types"


/**

i = 2*j + k*k
j = 0
while i < 100:
    j = 0
    i += 1

 */

let _id = 0

const id = ():string=>{
    _id++
    return "" + _id
}

export const blocks:BlockList = [
    {
        type: BlockTypes.HFLOW,
        id:id(),
        children:[
            {
                id:id(),
                text: "i = 2"
            },
            {
                id:id(),
                text: "*"
            },
            {
                id:id(),
                text: "j"
            },
            {
                id:id(),
                text: "+ k*k"
            }
        ]
    },
    {
        type: BlockTypes.HFLOW,
        id:id(),
        children:[
            {
                id:id(),
                text: "j = "
            },
            {
                id:id(),
                text: "0"
            }
        ]
    },
    {
        type: BlockTypes.INDENTED,
        id:id(),
        top:{
            id:id(),
            type: BlockTypes.HFLOW,
            children:[
                {
                    id:id(),
                    text: "while i < 100:"
                }
            ]
        },
        children:[
            {
                type: BlockTypes.HFLOW,
                id:id(),
                children:[
                    {
                        id:id(),
                        text: "j = "
                    },
                    {
                        id:id(),
                        text: "0"
                    }
                ]
            },
            {
                id:id(),
                type: BlockTypes.HFLOW,
                children:[
                    {
                        id:id(),
                        text: "i += 1"
                    }
                ]
            }
        ]
    }
]

const snippets:HBlock = {
    type: BlockTypes.HFLOW,
    id:id(),
    children:[
        {
            id:id(),
            text: "add this"
        },
        {
            id:id(),
            text: "if a >= b:"
        },
        {
            id:id(),
            text: "add this too"
        },
        {
            id:id(),
            text: "and this"
        },
        {
            id:id(),
            text: "for i in range(10):"
        },
        {
            id:id(),
            text: "while j >= 0:"
        }
    ]
}


export const prog:Program = {
    blocks: blocks,
    snippets:snippets
}