import Layouts from "@/components/Layouts";
import { useState } from "react";

export default function NewProduct() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    function createNewProduct() {

    }

    return (
        <Layouts>
            <form >
                <h1>Nouveau produit</h1>
                <label>Nom du produit</label>
                <input type="text" placeholder="Nom du produit" value={title} onChange={e => setTitle(e.target.value)}/>
                <label>Description</label>
                <textarea placeholder="Description" cols="30" rows="10" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <label>Prix (€)</label>
                <input type="numer" placeholder="Prix" value={price} onChange={e => setPrice(e.target.value)} />
                <button type="submit" className="btn-primary">Créer</button>
            </form>
        </Layouts>
    )
}