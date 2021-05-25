import React, {useEffect} from "react";
import {resetProductsLoading, setProducts, setProductsLoading} from "../redux";
import {useDispatch, useSelector} from "react-redux";


export default function Products() {
    const {products, isProductsLoading} = useSelector(({products: {products, isProductsLoading}}) => ({products, isProductsLoading}));
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        try {
            dispatch(setProductsLoading())
            const resp = await fetch('https://fakestoreapi.com/products/');
            const data = await resp.json();
            dispatch(setProducts(data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(resetProductsLoading())
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);
    console.log(products)

    if (isProductsLoading) {
        return <div>Loading</div>
    }

    return (<div>
            {products && products.map(product=>(
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <img src={product.image} alt='imageShop'/>
                </div>
            ))}
        </div>
    );
};
