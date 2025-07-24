import React from 'react';

export interface TabsProps {
    readonly children: React.ReactNode;
    readonly buttons: React.ReactNode;
    readonly ButtonsContainer?: React.ElementType;
}

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }: TabsProps) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );

}