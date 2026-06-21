"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ElementType;
}

interface FormSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
}

export const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  ({ value, onValueChange, placeholder, options, className, id, required, disabled }, ref) => {
    return (
      <SelectPrimitive.Root value={value} onValueChange={onValueChange} required={required} disabled={disabled}>
        <SelectPrimitive.Trigger
          ref={ref}
          id={id}
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-xl border px-4 py-3 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-brand-teal",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[placeholder]:text-white/40",
            className
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 opacity-50 shrink-0 ml-2" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className={cn(
              "relative z-[100] min-w-[var(--radix-select-trigger-width)] overflow-hidden",
              "rounded-xl border border-white/10 bg-[#0b1a2d] shadow-2xl",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
              "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
            )}
            position="popper"
            sideOffset={6}
          >
            <SelectPrimitive.Viewport className="p-1.5">
              {options.map((opt) => {
                const Icon = opt.icon;
                return (
                  <SelectPrimitive.Item
                    key={opt.value}
                    value={opt.value}
                    className={cn(
                      "relative flex w-full cursor-default select-none items-center gap-2.5",
                      "rounded-lg py-2.5 px-3 text-sm text-white/65 outline-none",
                      "focus:bg-brand-teal/20 focus:text-white",
                      "data-[state=checked]:bg-brand-teal/15 data-[state=checked]:text-white",
                      "transition-colors duration-100"
                    )}
                  >
                    {Icon && (
                      <Icon className="h-4 w-4 shrink-0 text-brand-tealLight" />
                    )}
                    <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                    <span className="absolute right-3 flex h-3.5 w-3.5 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Check className="h-3.5 w-3.5 text-brand-tealLight" />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                  </SelectPrimitive.Item>
                );
              })}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);
FormSelect.displayName = "FormSelect";
