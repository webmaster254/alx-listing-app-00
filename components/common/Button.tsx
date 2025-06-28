//define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.
import Link from "next/link";

interface ButtonProps {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
}

export const Button = ({ href, label, variant = "primary" }: ButtonProps) => {
    return (
        <Link href={href} className={`btn btn-${variant}`}>{label}</Link>
    );
};