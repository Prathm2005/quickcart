import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'


const Searchbox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor="pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Search</DialogTitle>
        <form>
          <input 
            type="text" 
            placeholder="Search for Items" 
            className="block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none " 
          />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Searchbox
