import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggler } from '@/components/theme-toggler';
import './globals.css';
import { Container } from '@/components/ui/container';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Discover Movies',
    description: 'Search and explore popular films',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                >
                    <Container>
                        <div className="mt-2 text-right md:mt-5">
                            <ThemeToggler />
                        </div>
                        {children}
                    </Container>
                </ThemeProvider>
            </body>
        </html>
    );
}
