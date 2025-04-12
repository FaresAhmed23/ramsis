"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/utils/translations";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const { locale, dir } = useLocale();
	const t = getTranslations(locale);

	return (
		<footer className="border-t bg-muted/40" dir={dir}>
			<div className="container py-8 md:py-12">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="mb-4 text-lg font-semibold">Ramsis Team</h3>
						<p className="text-sm text-muted-foreground">{t.home.hero.title}</p>
						<p className="mt-2 text-sm text-muted-foreground">
							{t.common.established}
						</p>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">
							{locale === "ar" ? "روابط سريعة" : "Quick Links"}
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									{t.common.home}
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									{t.common.about}
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									{t.common.services}
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									{t.common.products}
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									{t.common.contact}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">
							{t.contact.info.title}
						</h3>
						<ul className="space-y-2 text-sm">
							<li className="text-muted-foreground">
								{t.contact.info.email.main}
							</li>
							<li className="text-muted-foreground">
								{t.contact.info.phone.main}
							</li>
							<li className="text-muted-foreground">
								{t.contact.info.address.line1}
								<br />
								{t.contact.info.address.line2}
								<br />
								{t.contact.info.address.line3}
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">
							{locale === "ar" ? "تابعنا" : "Follow Us"}
						</h3>
						<div
							className="flex space-x-4"
							style={{ flexDirection: dir === "rtl" ? "row-reverse" : "row" }}
						>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="Facebook"
							>
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="Twitter"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t pt-8 text-center">
					<p className="text-sm text-muted-foreground">
						{t.common.copyright.replace("{year}", currentYear.toString())}
					</p>
					<p className="mt-1 text-xs text-muted-foreground">
						{t.common.madeWith}
					</p>
				</div>
			</div>
		</footer>
	);
}
