import { cn } from "@/lib/utils";

interface NavbarMenuItemProps {
    title: string;
    description: string;
    image: string;
    className?: string;
}

function NavbarMenuItem({
    title,
    description,
    image,
    className,
}: NavbarMenuItemProps) {
    return (
        <div className={cn("flex gap-x-2 w-1/2", className)}>
            <img className="w-8 h-8 rounded-full" src={image} alt={title} />
            <div className="flex flex-col group hover:cursor-pointer">
                <p className="text-base font-semibold group-hover:text-primary">
                    {title}
                </p>
                <p className="text-sm font-extralight line-clamp-2">{description}</p>
            </div>
        </div>
    );
}

export default NavbarMenuItem;
