import React from 'react';

export interface TabButtonProps {
    isSelected?: boolean;
    children: React.ReactNode;
    [key: string]: any; // Allow additional props
}

export default function TabButton({children, isSelected = false , ...props}: TabButtonProps) {

    return (<li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li>);
}