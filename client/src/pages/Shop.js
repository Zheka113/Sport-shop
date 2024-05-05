import React from "react";
import Item from "../components/shopComponents/item";

const itemArr = [
    {
        name: 'blabla',
        brand: 'br',
        type: 'ty',
        parameters: [
            {
                par1: '11',
                parname: 'one'
            },
            {
                par2: '22',
                parname: 'two'
            }
        ],
        description: 'some text'
    },
    {
        name: 'second',
        brand: 'brand',
        type: 'type',
        parameters: [
            {
                par1: '4',
                parname: 'one'
            },
            {
                par2: '3',
                parname: '44'
            }
        ],
        description: 'some text 2'
    }
]

const Shop = () => {
    return(
        <div>
            {itemArr.map((item)=>(
                <Item 
                key = {item.name} 
                name = {item.name} 
                description = {item.description}
                />
            ))}
        </div>
    )
}

export default Shop;