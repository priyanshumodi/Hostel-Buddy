import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const AdminMessage = () => {
    const messages = useSelector(state => state.messageReducer.messages)
    // console.log(messages)
    return (
        <div>
        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-4xl flex flex-col justify-center items-center text-center lg:py-16 lg:px-6">
            <div className="mx-auto">
                <h2 className="mb-4 text-4xl  font-extrabold text-gray-900 dark:text-white">Let's See What People Think About US</h2>
            </div> 
            <div className="flex flex-col  space-y-4">
               {messages.map((message) => (
                        <figure key={message.id} className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{message.subject}</h3>
                                <p className="my-4">{message.message}</p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>{message.name}</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">{message.email}</div>
                                </div>
                            </figcaption>    
                        </figure>
                       ))
                }
            </div>
            <div className="text-center mt-6">
                <Link 
                to={"/admin/adminMessages"} 
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none
                 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 
                 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                 >
                    Show more...
                </Link> 
            </div>
        </div>
        </section>
        </div>
        
    )
}

export default AdminMessage