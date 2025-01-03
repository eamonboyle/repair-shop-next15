"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";

type Props = {
    title: string;
    className?: string;
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link"
        | null
        | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ title, className, variant, ...props }: Props) {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.back()}
            className={cn("flex items-center gap-2", className)}
            variant={variant}
            {...props}
        >
            <ArrowLeftIcon className="w-4 h-4" />
            {title}
        </Button>
    );
}
