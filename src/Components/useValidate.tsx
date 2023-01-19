import React, { useContext, useState } from 'react'
import { SettingDataContext, productContext } from '../App'
export const useValidate = () => {
    const [msg, setMsg] = useState("")
    // taking dta form context
    const setting: any = useContext(SettingDataContext);
    const product: any = useContext(productContext)
    function validation(Name: string, Description: string, tag: string, stock: any, price: any) {
        let obj: any
        console.log(product.data.stock);
        // checking the validation and condition here
        if (setting.SettingData.tittle === "Tag" && product.data.price === undefined && product.data.stock === undefined) {
            obj = {
                Name: Name + " " + tag,
                Description: Description,
                price: setting.SettingData.price,
                tag: tag,
                stock: setting.SettingData.stock
            }
            product.data.push(obj);
            product.setData([...product.data])
        }
        else if (product.data.price === undefined) {
            obj = {
                Name: Name,
                Description: Description,
                price: setting.SettingData.price,
                tag: tag,
                stock: stock
            }
            product.data.push(obj);
            product.setData([...product.data])
            console.log(product.data);
        }
        else if (product.data.stock === undefined) {
            obj = {
                Name: Name,
                Description: Description,
                price: price,
                tag: tag,
                stock: setting.SettingData.stock
            }
            product.data.push(obj);
            product.setData([...product.data])
            console.log(product.data);
        }
    }
    return { msg, validation }
}
