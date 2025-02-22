"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface isAppProps {
  text: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  className?: string;
}

export function SubmitButton({ text, variant, className }: isAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn("w-fit", className)}>
          <Loader2 className="size-4 mr-2 animate-spin"></Loader2>
          Đang xử lý
        </Button>
      ) : (
        <Button className={cn("w-fit", className)} variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}

export function DeleteButton({ text, variant, className }: isAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant={variant} className={cn("w-fit", className)}>
          <Loader2 className="size-4 mr-2 animate-spin"></Loader2>
          Đang xử lý
        </Button>
      ) : (
        <Button className={cn("w-fit", className)} variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}
