import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addRoom } from "../../features/room/roomSlice";

function AddRoomForm() {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addRoom({title,image,price,description}))
      setTitle('')
      setImage('')
      setPrice('')
      setDescription('')
      
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
          <button type="submit" className="uppercase text-xl text-center p-4 bg-amber-500 text-white rounded hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
            add
          </button>
        </form>
        </div>
    )
}

export default AddRoomForm