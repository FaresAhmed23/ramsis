"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/utils/translations";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { locale, dir } = useLocale();
	const t = getTranslations(locale);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-2">
					<Link
						href="/"
						className="flex items-center"
						style={{ flexDirection: dir === "rtl" ? "row-reverse" : "row" }}
					>
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary mx-2">
							<span className="text-lg font-bold text-primary-foreground">
								RA
							</span>
						</div>
						<span className="hidden font-bold sm:inline-block">Ramsis</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav
					className={cn(
						"hidden md:flex md:items-center md:gap-6",
						dir === "rtl" && "flex-row-reverse",
					)}
				>
					<Link
						href="/"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						{t.common.home}
					</Link>
					<Link
						href="/about"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						{t.common.about}
					</Link>
					<Link
						href="/services"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						{t.common.services}
					</Link>
					<Link
						href="/products"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						{t.common.products}
					</Link>
					<Link
						href="/contact"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						{t.common.contact}
					</Link>
				</nav>

				<div className="hidden md:flex md:items-center md:gap-2">
					<ThemeToggle />
					<LanguageSwitcher />
					<Button asChild>
						<Link href="/contact">{t.common.requestQuote}</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<LanguageSwitcher />
					<button
						className="block"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={cn(
					"absolute left-0 right-0 top-16 z-50 bg-background border-b md:hidden",
					isMenuOpen ? "block" : "hidden",
				)}
			>
				<div className="container py-4">
					<nav className="flex flex-col space-y-4">
						<Link
							href="/"
							className="text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.common.home}
						</Link>
						<Link
							href="/about"
							className="text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.common.about}
						</Link>
						<Link
							href="/services"
							className="text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.common.services}
						</Link>
						<Link
							href="/products"
							className="text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.common.products}
						</Link>
						<Link
							href="/contact"
							className="text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.common.contact}
						</Link>
						<Button asChild className="w-full">
							<Link href="/contact" onClick={() => setIsMenuOpen(false)}>
								{t.common.requestQuote}
							</Link>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
