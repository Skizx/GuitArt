/* eslint-disable react/jsx-key */
import Layouts from "@/components/Layouts";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {

    const [allproducts, setAllproducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(res => {
            setAllproducts(res.data);
        });
    }), [];

    return (
        <Layouts>
            <Link className="bg-green-900 text-white py-1 px-2 rounded-md" href={'/products/new'}>Ajouter un nouveau produit</Link>
            <table className="basic">
                <thead>
                    <tr>
                        <td>Nom du produit</td>

                    </tr>
                </thead>
                <tbody>
                    {allproducts.map(data => (
                        <tr>
                            <td>{data.title}</td>
                            <td>buttons</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layouts>
    )
}