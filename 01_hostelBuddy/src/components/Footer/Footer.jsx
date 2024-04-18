import React from "react";

function Footer() {
    return (
        <footer className="md-0 w-full mt-4 h-auto pb-8 bg-gray-800 px-28 pt-14 text-white flex flex-wrap justify-between">
        <div className="w-80 h-60 bg-amber-500 p-4">
            <p className="text-4xl uppercase font-bold pt-2 pb-8">Hostel Buddy</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quod aspernatur officia, ipsam hic praesentium consequuntur perspiciatis optio!</p>
        </div>
        <div className="flex flex-col space-y-2">
            <div className="flex mb-4">
                <div className="mx-2 uppercase font-bold text-amber-500">Contact</div>
                <div className=" w-16 h-1 border-2 border-amber-400 rounded-2xl mt-[11px] mb-2"></div>
            </div>
            <div>bhawarkua,indore</div>
            <div>+91 7689436562</div>
            <div>hostelbuddy@example.com</div>
            <div></div>
        </div>
        <div className="flex flex-col space-y-2">
            <div className="flex mb-4">
                <div className="mx-2 uppercase font-bold text-amber-500">company</div>
                <div className=" w-16 h-1 border-2 border-amber-400 rounded-2xl mt-[11px] mb-2"></div>
            </div>
            <div>123 Street, New York, USA</div>
            <div>+012 345 67890</div>
            <div>info@example.com</div>
            <div></div>
        </div>
        <div className="flex flex-col space-y-2">
            <div className="flex mb-4">
                <div className="mx-2 uppercase font-bold text-amber-500">service</div>
                <div className=" w-16 h-1 border-2 border-amber-400 rounded-2xl mt-[11px] mb-2"></div>
            </div>
            <div>123 Street, New York, USA</div>
            <div>+012 345 67890</div>
            <div>info@example.com</div>
            <div></div>
        </div>
        </footer>
    )
}

export default Footer;