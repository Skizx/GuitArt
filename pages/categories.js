import Layouts from "@/components/Layouts";
import axios from "axios";

import { useState } from "react";

export default function Categories() {

    const [categories, setCategories] = useState('');

    async function saveCategory() {
      await  axios.post('/api/categories', {categories});
      setCategories('');
    }
    return (
        <Layouts>
            <h1>Categories</h1>
            <label>Nom categorie</label>
            <form onSubmit={saveCategory} className="flex gap-1">
                <input className="mb-0" type="text" placeholder={'Nom de la categorie'} value={categories} onChange={e => setCategories(e.target.value)} />
                <button className="btn-primary">Rechercher</button>
            </form>
        </Layouts>
    )
}