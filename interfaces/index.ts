//Define all TypeScript interfaces related to the project. Start by creating placeholder interfaces for CardProps and ButtonProps
interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    price: number;
    location: string;
}

interface ButtonProps {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
}

interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
}

// Export the interfaces
export type { CardProps, ButtonProps, PropertyProps };
