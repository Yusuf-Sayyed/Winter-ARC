// src/components/loader.tsx
import { Loader2 } from "lucide-react";

    export function Loader() {
    return (
        <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-neutral-500" />
        </div>
    );
    }