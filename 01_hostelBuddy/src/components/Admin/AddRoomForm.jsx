import React,{useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { addRoom, updateRoom} from "../../features/room/roomSlice";

function AddRoomForm(details) {
    console.log(details.update)
    const [title, setTitle] = useState(details.title)
    const [image, setImage] = useState(details.image)
    const [price, setPrice] = useState(details.price)
    const [description, setDescription] = useState(details.description)

    const dispatch = useDispatch()

    // update refresh
    useEffect(() => {
     
      if(!details.update) {
        setTitle('')
        setImage('')
        setPrice('')
        setDescription('')
      }
      else {
        setTitle(details.title)
        setImage(details.image)
        setPrice(details.price)
        setDescription(details.description)
      }
    },[details.update])

    // form submit
    const handleSubmit = (e) => {
      e.preventDefault()

      if(details.update)
      {
        const id = details.id
        const newCard = details.new 
        
        dispatch(updateRoom({id,title,image,price,description,new:newCard}))

      }
      else
      dispatch(addRoom({title,image,price,description}))

      setTitle('')
      setImage('')
      setPrice('')
      setDescription('')
      
      details.onFormSubmit()
    }


    return (
        <div className="container mx-auto px-4 py-8">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input 
            type="text" 
            id="title" 
            name="title" 
            value={title}
            required={true}
            onChange={e => setTitle(e.target.value)}
            placeholder="Room Title" 
            className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
            />
          </div>
          <div className="flex flex-col">
            <input type="text" 
            id="image" 
            name="image" 
            value={image}
            required={true}
            onChange={e => setImage(e.target.value)}
            placeholder="Room Image" 
            className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
            />
          </div>
          <div className="flex flex-col">
            <input 
            type="text" 
            id="price" 
            name="price" 
            value={price}
            required={true}
            onChange={e => setPrice(e.target.value)}
            placeholder="Room Price" 
            className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
            />
          </div>
          <div className="flex flex-col">
            <textarea id="description" required={true} value={description} name="description" onChange={e => setDescription(e.target.value)} rows="5" placeholder="description" className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"></textarea>
          </div>
          {!details.update && (
            <button type="submit" className="uppercase text-xl text-center p-4 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
            add
            </button>
          )}
          {details.update && (
            <button type="submit" className="uppercase text-xl text-center p-4 bg-amber-500 text-white rounded hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
            update
            </button>
          )}
        </form>
        </div>
    )
}

export default AddRoomForm