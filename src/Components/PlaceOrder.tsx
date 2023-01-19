import React, { ChangeEvent, useContext, useState } from 'react'
import '../App.css'
import { productContext, SettingDataContext } from '../App'
import { Link } from 'react-router-dom'
export const PlaceOrder = () => {
    const [product, setProduct] = useState<any>([])
    // Using context here
    const products: any = useContext(productContext)
    const setting: any = useContext(SettingDataContext)
    // States for input box
    const [Name, setName] = useState<string | "">("")
    const [productName, setProductName] = useState<string | "">("")
    const [address, setAddress] = useState("")
    const [Zip, setZip] = useState("");
    const [quantity, setQuantity] = useState<Number | any>("")
    // taking value from user
    const NameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const addressHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value)
    }
    const zipHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setZip(e.target.value)
    }
    const quantityandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.target.value)
    }
    const DropDownHandler = (e: any) => {
        setProductName(e.target.value)
        console.log(e.target.value);
    }
    let obj: any
    const PlaceOrderHandler = () => {
        // Place order function
        // checking validation here
        if (Name === "") {
            alert("Please enter your name ")
            document.getElementById("name")?.focus();
        }
        else if (address === "") {
            alert("Write your address")
            document.getElementById("address")?.focus();
        }
        else if (quantity === "") {
            alert("Enter quantity")
            document.getElementById("quanity")?.focus();
        }
        else if (productName === "") {
            alert("Please chosse product first")
        }
        else {
            // taking the zip value from setting component
            if (Zip === "") {
                obj = {
                    Name: Name,
                    productName: productName,
                    address: address,
                    Zip: setting.SettingData.Zip,
                    quantity: quantity
                }
                setProduct([...product, obj])
            }
            else {
                obj = {
                    Name: Name,
                    productName: productName,
                    address: address,
                    Zip: Zip,
                    quantity: quantity
                }
                setProduct([...product, obj])
                setZip("")
                setAddress("")
                setName("")
                setProductName("")
                setQuantity("")
            }

        }

    }
    return (
        <div>
            <div className='OrderContainer'>

                <button className='btn btn-info mb-3'> <Link to={'/'}>Back</Link> </button>
                <div className="input-group mb-3 ">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Customer Name</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={NameHandler}
                        value={Name}
                        id="name"
                        placeholder='write your name'
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Address</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={addressHandler}
                        value={address}
                        id="address"
                        placeholder='Write your address'
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Zip</span>
                    <input type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={zipHandler}
                        value={Zip}
                        id="zip"
                        placeholder='enter zip here'
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Quantity</span>
                    <input type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={quantityandler}
                        value={quantity}
                        placeholder="enter product quantity"
                        id='quantity'
                    />
                </div>
                <div className="btn-group w-100 mb-3" >
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">product</span>
                    <select className="form-select" aria-label="Default select example" onChange={DropDownHandler}>
                        <option value="" style={{ marginLeft: "54%" }}>----Select----</option>
                        {products.data.map((val: any) => <option className='dropdown-item ml-50'>{val.Name}</option>)}
                    </select>

                </div>
                <button className='btn btn-primary' onClick={PlaceOrderHandler}>Place Order</button>
                <div className='AddproductTable'>
                    {
                        product.length === 0 ? null : <table className="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Zip</th>
                                    <th scope='col'>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((val: any) => <tr key={Math.random()}>
                                    <td>{val.Name}</td>
                                    <td>{val.address}</td>
                                    <td>{val.productName}</td>
                                    <td>{val.Zip}</td>
                                    <td>{val.quantity}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    }

                </div>
            </div>

        </div>
    )
}
