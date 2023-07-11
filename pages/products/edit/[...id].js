/* eslint-disable react-hooks/exhaustive-deps */
import Layouts from "@/components/Layouts";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {
    
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get('/api/products?id='+id).then(res => {
            setProductInfo(res.data);
        })
    }, [])
    return (
        <Layouts>
            <h1>Modifier produit</h1>
            {productInfo && (
                <ProductForm {...productInfo}/>
            )}
        </Layouts>
    )
}