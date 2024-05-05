import React,{ useState} from 'react';
import { addUser } from '../../features/user/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Book = (details) => {
  const [id,setId] = useState(details.userId)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [price,setPrice] = useState(details.price)
  const [payment,setPayment] = useState('credit')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const user =  useSelector(state => state.userReducer.users)
  const rooms = useSelector(state => state.roomReducer.room)

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const found = rooms.find(room => room.id===id)

    dispatch(addUser({id,name,email,price,title:found.title,payment,}))

    setId('')
    setName('')
    setEmail('')
    setPrice('')
    setPayment('')

    navigate('/room')
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Hostel Booking Form</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label  className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            required = {true}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            required = {true}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="check-in">
            Check-in Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="check-in"
            type="date"
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="name">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            readOnly
            value={price}
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="payment">
            Payment Method
          </label>
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="payment"
          >
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
