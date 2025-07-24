import React from 'react';

export interface SectionProps {
    readonly title: string;
    readonly children: React.ReactNode;
    [key: string]: any; // Allow additional props
}

export default function Section({title, children, ...props}: SectionProps) {

    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}