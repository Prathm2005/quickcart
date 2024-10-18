"use client"
import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Rootestate } from '@/store/store'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Sidebar from './Sidebar'
const Shopcart = () => {

  const items=useSelector((state:Rootestate)=> state.cart.items)
  const totalquantity = items.reduce((total,item)=>
    total+item.quantity,0)
  
  return (
    <Sheet>
      <SheetTrigger>
  <div  className='relative'>
    <span  className='absolute  -top-3 -right-2 w-6 h-6 bg-gray-600 text-center  flex items-center justify-center flex-col text-xs text-white rounded-full '>
      {totalquantity}
    </span>
    <ShoppingBagIcon  cursor={"pointer"} size={25}/>
  </div>
  </SheetTrigger>
  <SheetContent className={"overflow-auto h-full"}>
    <Sidebar items={items} />
  </SheetContent>
  </Sheet>
  )
}

export default Shopcart