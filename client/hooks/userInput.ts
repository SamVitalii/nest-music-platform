import React, { useState } from "react";

export const userInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return { value, onChange };
};