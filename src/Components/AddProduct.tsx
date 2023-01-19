
import React, { ChangeEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { productContext, SettingDataContext } from '../App'
import { useValidate } from './useValidate';
export const AddProduct = () => {
    // using custom hook
    const { validation } = useValidate();
    // Using context here
    const products: any = useContext(productContext)
    const setting: any = useContext(SettingDataContext)
    console.log(products.data);
    let obj: any;
    setting.SettingData.price as any
    const [Name, setName] = useState("")
    const [Description, setDescription] = useState("")
    const [price, setPrice] = useState<any | String>("")
    const [tag, setTag] = useState("")
    const [stock, setStock] = useState<any>("")
    const NameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    console.log(Name);
    // taking value from user here
    const DescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }
    const PriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value)
    }
    const TagHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTag(e.target.value)
    }
    const StockHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStock(e.target.value)
    }
    // add button functinality
    const AddProductHandler = () => {
        console.log(products.data.length);

        // checking validation
        if (Name === "" && Description === "") {
            alert("Please fill the name and description of product..")
            document.getElementById("name")?.focus()
        }
        else if (Name === "") {
            alert("Please fill the name of product..")
            document.getElementById("name")?.focus()
        }
        else if (Description === "") {
            alert("Please fill the name of product..")
            document.getElementById("description")?.focus()

        }
        else if (price === "" && setting.SettingData !== undefined) {
            // using custom hook
            validation(Name, Description, tag, stock, price);
        }
        else if (setting.SettingData.tittle === "Tag") {
            // using custom hook
            validation(Name, Description, tag, stock, price);
        }
        else if (stock === "" && setting.SettingData !== undefined) {
            // using custom hook
            validation(Name, Description, tag, stock, price);
        }
        else {
            obj = {
                Name: Name,
                Description: Description,
                price: price,
                tag: tag,
                stock: stock
            }
            // setting data into context array
            products.data.push(obj)
            products.setData([...products.data])
        }
        // clearing input box
        setName("")
        setDescription("")
        setPrice("")
        setTag("")
        setStock("")
    }
    return (
        <div>
            <div className='Container' style={{ width: "50%" }}>
                <button className='btn btn-info mb-3'> <Link to={'/'}>Back</Link> </button>

                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Name</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={NameHandler}
                        value={Name}
                        id="name"
                        placeholder="Write name here"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Description</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={DescriptionHandler}
                        value={Description}
                        placeholder="Write description here"
                        id='description'
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Price</span>
                    <input type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={PriceHandler}
                        value={price}
                        placeholder="Price here"
                        id='price'
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Tag</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={TagHandler}
                        value={tag}
                        placeholder="Write tag here"
                        id='tag'
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Stock</span>
                    <input type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={StockHandler}
                        value={stock}
                        placeholder="write stock here"
                        id='stock'
                    />
                </div>
                <button onClick={AddProductHandler} className="btn btn-info">ADD PRODUCT</button>
                <div className='AddproductTable'>
                    {/* Listing the add product here */}
                    {
                        products.data.length === 0 ? null : <table className="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                    <th scope='col'>Tag</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.data.map((val: any) =>
                                    <tr key={Math.random()}><td>{val.Name}</td>
                                        <td>{val.Description}</td>
                                        <td>{val.price}</td>
                                        <td>{val.stock}</td>
                                        <td>{val.tag}</td></tr>)}
                            </tbody>
                        </table>
                    }

                </div>
            </div>
        </div>
    )
}
