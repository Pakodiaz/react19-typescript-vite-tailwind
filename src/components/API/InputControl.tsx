import React from "react";

type InputControlProps = {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};


export default function InputControl({
                                         label,
                                         type = "text",
                                         name,
                                         value,
                                         onChange,
                                         error,
                                     }: InputControlProps) {
    return (
        <div className="space-y-1">
            <label className="block font-medium text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border rounded-md ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
