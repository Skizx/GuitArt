import Layouts from "@/components/Layouts";
import Link from "next/link";

export default function Products() {
    return (
        <Layouts>
            <Link className="bg-green-900 text-white py-1 px-2 rounded-md" href={'/products/new'}>Ajouter un nouveau produit</Link>
        </Layouts>
    )
}