import { BlockList, Program, Item, HBlock } from "./types"


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
        type: "h",
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
        type: "h",
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
        type: "i",
        id:id(),
        top:{
            id:id(),
            type: "h",
            children:[
                {
                    id:id(),
                    text: "while i < 100:"
                }
            ]
        },
        children:[
            {
                type: "h",
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
                type: "h",
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
    type: "h",
    id:id(),
    children:[
        {
            id:id(),
            text: "add this"
        },
        {
            id:id(),
            text: "add this too"
        },
        {
            id:id(),
            text: "and this"
        }
    ]
}


export const prog:Program = {
    blocks: blocks,
    snippets:snippets
}