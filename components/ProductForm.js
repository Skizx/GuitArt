import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({title:currentTitle, description:currentDescription, price:currentPrice, _id, images,}) {

    // Gestion d'état formulaire création de produit
    const [title, setTitle] = useState(currentTitle || '');
    const [description, setDescription] = useState(currentDescription || '');
    const [price, setPrice] = useState(currentPrice || '');
    const [redirect, setRedirect] = useState(false)
    const router = useRouter();

    async function saveProduct(event) {
        event.preventDefault();
        const data = {title, description, price};
        if(_id) {
            // Modifier
            await axios.put('/api/products', {...data,_id})
        } else {
            // Créer
            await axios.post('/api/products', data);
        }
        setRedirect(true);
    }
    if(redirect) {
     router.push('/products');
    }

    async function UploadImages(e) {
        const files = e.target?.files;
        if(files.length > 0 ) {
            const data = new FormData();
            for(const file of files) {
                data.append('file', file)
            }
            fetch('/api/upload', {
                method: 'POST',
                body: data,
            })
        }
    }

    return (
            <form onSubmit={saveProduct} >
                <label>Nom du produit</label>
                <input type="text" placeholder="Nom du produit" value={title} onChange={e => setTitle(e.target.value)}/>
                <label>Photos</label>
                <div className="mb-2">
                    <label className="w-24 h-24 text-center flex items-center justify-center flex-col text-gray-500 bg-gray-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                        </svg>
                        Telecharger
                        <input className="hidden" type="file" onChange={UploadImages} />
                    </label>
                    {!images?.length && (
                        <div>Aucun photo pour ce produit</div>
                    )}
                </div>
                <label>Description</label>
                <textarea placeholder="Description" cols="30" rows="10" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <label>Prix (€)</label>
                <input type="numer" placeholder="Prix" value={price} onChange={e => setPrice(e.target.value)} />
                <button type="submit" className="btn-primary">Valider</button>
            </form>
    )
}