import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
    return (
        <div>
            <button className="btn btn-info btn-lg button"><Link to={'/AddProduct'}>Add Product</Link></button>
            <button className="btn btn-primary btn-lg button"><Link to={'/Setting'}>Setting</Link></button>
            <button className="btn btn-success btn-lg button"><Link to={'/PlaceOrder'}>Place Order</Link></button>
        </div>
    )
}
