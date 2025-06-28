//define a reusable Card component that will be used across the project to display information about various properties.
import Image from "next/image";
interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    price: number;
    location: string;
}

export const Card = ({ title, description, imageSrc, price, location }: CardProps) => {
    return (
        <div className="card">
            <Image src={imageSrc} alt={title} width={500} height={500} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Location: {location}</p>
            </div>
        </div>
    );
};
