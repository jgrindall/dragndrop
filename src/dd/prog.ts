import { BlockList, Program } from "./types"


/**

i = 2*j + k*k
j = 0
while i < 100:
    j = 0
    i += 1

 */

export const blocks:BlockList = [
    {
        type: "h",
        id:"1",
        children:[
            {
                id:"1",
                text: "i = 2"
            },
            {
                id:"2",
                text: "*"
            },
            {
                id:"3",
                text: "j"
            },
            {
                id:"4",
                text: "+ k*k"
            }
        ]
    },
    {
        type: "h",
        id:"4",
        children:[
            {
                id:"5",
                text: "j = "
            },
            {
                id:"6",
                text: "0"
            }
        ]
    },
    {
        type: "i",
        id:"8",
        top:{
            id:"9",
            type: "h",
            children:[
                {
                    id:"10",
                    text: "while i < 100:"
                }
            ]
        },
        children:[
            {
                type: "h",
                id:"13",
                children:[
                    {
                        id:"11",
                        text: "j = "
                    },
                    {
                        id:"12",
                        text: "0"
                    }
                ]
            },
            {
                id:"14",
                type: "h",
                children:[
                    {
                        id:"15",
                        text: "i += 1"
                    }
                ]
            }
        ]
    }
]

export const prog:Program = {
    blocks: blocks
}