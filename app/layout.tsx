import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/hooks/use-locale";
import { SonnerProvider } from "@/components/sonner-provider";

export const metadata: Metadata = {
	title: "Ramsis",
	description: "Secure Your Life, Digitally and Physically",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`min-h-dvh bg-background font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<LocaleProvider>
						<div className="relative flex min-h-dvh flex-col">
							<Header />
							<main className="flex-1">{children}</main>
							<Footer />
							<SonnerProvider />
						</div>
					</LocaleProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
