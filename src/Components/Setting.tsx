import React, { ChangeEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { SettingDataContext } from '../App'
import { useValidate } from './useValidate';
export const Setting = () => {
    // using custom hook here
    const { msg, validation } = useValidate();


    // states for taking value from user
    const [tittle, setTittle] = useState<string | "">("")
    const [Zip, setZip] = useState<number | string>("");
    const [stock, setstock] = useState<Number | any>("")
    const [price, setPrice] = useState<number | any>("")
    const Data: any = useContext(SettingDataContext)
    console.log(Data.SettingData);
    // setting the value in state
    console.log(Data.SettingData.length);

    const zipHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setZip(e.target.value)
    }
    const stockandler = (e: ChangeEvent<HTMLInputElement>) => {
        setstock(e.target.value)
    }
    const PriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value)
    }
    const DropDownHandler = (e: any) => {
        setTittle(e.target.value)
    }
    // setting button function
    const ClickHandler = () => {
        // checkimng validation for input field
        if (tittle === "") {
            alert("Please choose Tittle");
            document.getElementById("DropDwon")?.focus()
        }
        else if (Zip === "") {
            alert("Please enter Zip .")
            document.getElementById("zip")?.focus()
        }
        else if (stock === "") {
            alert("Please enter stock")
            document.getElementById("stock")?.focus()
        } else if (price === "") {
            alert("PLease enter price")
            document.getElementById("price")?.focus()
        }
        else {
            var obj = {
                tittle: tittle,
                stock: stock,
                price: price,
                Zip: Zip
            }
            Data.setSettingData(obj)
        }
    }
    return (
        <>
            <button className='btn btn-info mb-3 mt-3'> <Link to={'/'}>Back</Link> </button>
            <div className='OrderContainer'>
                <div>
                    <select className="form-select mb-3" id='DropDwon' aria-label="Default select example" onChange={DropDownHandler}>
                        <option value="" style={{ marginLeft: "54%" }}>----Select----</option>
                        <option value="Tag">Tag</option>
                        <option value="Without Tag">Without Tag</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Zip</span>
                    <input type="number"
                        id='zip'
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={zipHandler}
                        placeholder="Enter Zip"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">stock</span>
                    <input type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={stockandler}
                        value={stock}
                        placeholder="Enter Stock"
                        id='stock'
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
                        placeholder="Enter price"
                        id='price'
                    />
                </div>
                <button className='btn btn-secondary mb-3' onClick={ClickHandler}>Add setting</button>
                {Data.SettingData.price === undefined ? null : <div>
                    <table className="table table-hover table-dark mb-3">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">stock</th>
                                <th scope="col">Zip</th>
                                <th scope='col'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{Data.SettingData.tittle}</td>
                                <td>{Data.SettingData.stock}</td>
                                <td>{Data.SettingData.Zip}</td>
                                <td>{Data.SettingData.price}</td></tr>

                        </tbody>
                    </table>
                </div>}


            </div>
        </>
    )
}

