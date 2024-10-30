import React from 'react';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='main_layout'>
            <MainHeader/>
            <main className='flex flex-col justify-center _main_content overflow-x-hidden'>
                {children}
            </main>
            <MainFooter/>
        </div>
    );
}
