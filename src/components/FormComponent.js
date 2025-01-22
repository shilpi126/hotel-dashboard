import React, { useState } from 'react'
import Card from '../UI/Card'
import { Input, Label } from '../UI/Input'
import Button from '../UI/Button'
const initialData =  {
        placeName:"",
        address:{
            hotelNo:"",
            city:"",
            state:"",
            pinCode:"",
            
        },
        pricePerNight:"",
        category:"",
        images:[],

    }

const FormComponent = () => {
    const [imagePreviews, setImagePreviews] = useState([]);
    const [hotelData, setHotelData] = useState(initialData)

    const handleChange = (e) => {
        const { id, value, files } = e.target;

        if(id === "city" || id === "pinCode" || id === "state" || id==="hotelNo"){
            setHotelData((prevData)=>({
                ...prevData, address:{...prevData.address, [id]:value}
            }))
            
        }else if (id === "images" && files) {
            const selectedFiles = Array.from(files); 
            const previewUrls = selectedFiles.map((file) =>
            URL.createObjectURL(file)
            );
        
            setImagePreviews((prevPreviews) => [...prevPreviews, ...previewUrls]);
        
            setHotelData((prevData) => ({
                ...prevData,
                images:[...prevData.images,...previewUrls]
                
            }));
            
        }else{
        
        setHotelData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        }

        
    
    };
    


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(hotelData)
        setHotelData({
            placeName: "",
            address: {
                hotelNo: "",
                city: "",
                state: "",
                pinCode: "",
            },
            pricePerNight: "",
            category: "",
            images: [], 
        });

        setImagePreviews([]);
        document.getElementById("images").value = null;

    }


return (
    <React.Fragment>
    <h1 className='text-center mt-4 text-xl '>Booking Form</h1>
        <Card className='mt-2  w-[80%] h-[70%] '>
        <form onSubmit={handleFormSubmit} className='p-4 flex justify-between '>
        <div className='mr-2 w-[100%]'>
            <div className='h-16 mb-2'>
                <Label htmlFor="placeName" label="Place Name"/>
                <Input
                    type="text"
                    id="placeName"
                    value={hotelData.placeName}
                    placeholder="Enter Place Name..."
                    onChange={handleChange}
                    className="text-black h-10 p-2  outline-none w-[100%] rounded-md border-2 border-slate-300 "
                />
                
            </div>
            <div className='h-16 mb-2'>
                <Label htmlFor="pricePerNight" label="Praice Per Night"/>
                <Input
                    type="text"
                    id="pricePerNight"
                    value={hotelData.pricePerNight}
                    placeholder="Enter Price..."
                    onChange={handleChange}
                    className="border-2 border-slate-300 p-2 h-10 outline-none w-[100%] rounded-md"
                />
                
            </div>

            <div className='h-16 mb-2'>
                <Label htmlFor="category" label="Category Of Place"/>
                <select 
                id='category'
                value={hotelData.category}
                onChange={handleChange}
                className="border-2 border-slate-300 h-10 outline-none w-[100%] rounded-md"
                >
                    <option value="" disabled>Select Category</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Houseboat">Houseboat</option>
                </select>
                
            </div>
            <div className='h-24 mb-2'>
                <Label htmlFor="images" label="Image Of Place"/>
                <Input
                    type="file"
                    id="images"
                    placeholder="Upload Place Images..."
                    onChange={handleChange}
                    className="border-2 border-slate-300 h-10  outline-none w-[100%] rounded-md"
                />
                    
            <div className="text-sm">
            <h3>Selected Files:</h3>
            <div className="flex mt-2">
                {imagePreviews && imagePreviews.map((url, index) => (
                    <div key={index} className="ml-2 mb-2 ">
                    <img
                        src={url}
                        alt="img"
                        
                        className="w-20 h-14 rounded-md border-2 border-orange-600"
                    />
                    </div>
                ))}
            </div>
            </div>
        </div>



        </div>
            <div className='w-[100%]'>
                
                        <div className=' '>
                            <Label htmlFor="address" label="Address"/>
                    
                            
                        <Input
                                type="text"
                                id="hotelNo"
                                value={hotelData.address.hotelNo}
                                placeholder="Enter hotel no..."
                                onChange={handleChange}
                                className="border-2 border-slate-300  h-10 outline-none w-[100%] rounded-md mb-4"
                            />
                            <Input
                                type="text"
                                id="city"
                                value={hotelData.address.city}
                                placeholder="Enter city..."
                                onChange={handleChange}
                                className="border-2 border-slate-300 h-10 outline-none w-[100%] rounded-md mb-4"
                            />
                        

                    
                    <Input
                                type="text"
                                id="state"
                                value={hotelData.address.state}
                                placeholder="Enter state..."
                                onChange={handleChange}
                                className="border-2 border-slate-300 h-10 outline-none w-[100%] rounded-md mb-4"
                            />
                            <Input
                                type="text"
                                id="pinCode"
                                value={hotelData.address.pinCode}
                                placeholder="Enter pincode..."
                                onChange={handleChange}
                                className="border-2 border-slate-300 h-10 outline-none w-[100%] rounded-md mb-4"
                            />
                    
                            
                        </div>


                    
                        <Button 
                        type="submit" 
                        name="Create Booking Details"
                        className="bg-slate-700 h-10 mt-2 text-center text-white pt-2"
                        />
            </div>
        </form>
    </Card>
    </React.Fragment>
    )
}

export default FormComponent