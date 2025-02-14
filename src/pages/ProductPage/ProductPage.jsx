import { useParams } from "react-router-dom";

export default function ProductPage() {
    const { id } = useParams();

    return (
        <h1>ProductPage{id}</h1>
    );
}