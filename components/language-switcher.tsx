"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/hooks/use-locale";
import { toast } from "@/lib/toast";

export function LanguageSwitcher() {
	const { locale, setLocale } = useLocale();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button variant="outline" size="icon" className="h-9 w-9">
				<span className="sr-only">Switch language</span>
				EN
			</Button>
		);
	}

	const switchLocale = (newLocale: string) => {
		setLocale(newLocale);
		toast({
			title: newLocale === "ar" ? "تم تغيير اللغة" : "Language changed",
			description:
				newLocale === "ar"
					? "تم تغيير اللغة إلى العربية"
					: "Language changed to English",
			variant: "success",
		});
		// Force reload to apply translations everywhere
		window.location.reload();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="h-9 w-9 font-medium">
					{locale === "ar" ? "AR" : "EN"}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => switchLocale("en")}>
					English
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => switchLocale("ar")}>
					Arabic
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
