/* eslint-disable react/no-unescaped-entities */
import Layouts from "@/components/Layouts";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeletePageProduct() {

    const router = useRouter();
    const [productInfo, setProductInfo] = useState();
    const {id} = router.query;

    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get('/api/products?id='+id).then(res => {
            setProductInfo(res.data);
        });
    }, [id]);

    function No() {
        router.push('/products');
    }

    async function Delete() {
        await axios.delete('/api/products?id='+id);
        router.push('/products')
    }



    return (
        <Layouts>
            <h1 className="text-center">Voulez-vous vraiment supprimer "{productInfo?.title}" ?</h1>
            <div className="flex gap-2 justify-center">
                <button className="btn-yes" onClick={Delete}>Oui</button>
                <button className="btn-default" onClick={No}>Non</button>
            </div>
        </Layouts>
    )
}