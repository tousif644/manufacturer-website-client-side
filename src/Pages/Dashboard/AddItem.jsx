import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)


        // Image Storage Key
        const imageStorageKey = 'd2a8fc6969ae2760ad345f485a7f1b85';
        console.log("data", data);


        // image extract data
        const image = data.image[0];

        // Form Data
        const formData = new FormData()
        //appending data into formData 
        formData.append("image", image);


        // post -> url
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`


        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(result => {
            if (result.success) {
                const image = result.data.url;

                const toolsData = {
                    name: data.name,
                    price: parseFloat(data.price),
                    stock: parseInt(data.stock),
                    image: image
                }

                fetch(`http://localhost:5000/tools`, {
                    method: "POST",
                    headers: {
                        'content-type': "application/json",
                        authorization: `Token ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify(toolsData)
                }).then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success("Data inserted Successfully")
                        } else {
                            toast.error("Failed to insert  data")
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h1 className='text-4xl font-bold underline'>Add Item</h1>
            <div>
                <div>
                    <div className="card mx-auto   lg:max-w-lg md:max-w-md sm:max-w-sm    bg-base-100 shadow-xl">
                        <div className="card-body mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder="Tool Name" class="input input-bordered w-full max-w-xs my-4" {...register("name", { required: true, maxLength: 20 })} />
                                <input type="tel" placeholder="Tool Price" class="input input-bordered w-full max-w-xs"  {...register("price", { required: true, maxLength: 20 })} />
                                <input type="tel" placeholder="Stock" class="input input-bordered w-full max-w-xs my-4"  {...register("stock", { required: true, maxLength: 20 })} />
                                <input type="file" {...register("image", { required: true, maxLength: 20 })} class=" w-full max-w-xs" />
                                <input type="submit" className='btn btn-secondary w-32 text-white my-4' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddItem;