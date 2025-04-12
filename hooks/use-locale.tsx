"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";

type LocaleContextType = {
	locale: string;
	setLocale: (locale: string) => void;
	dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextType>({
	locale: "en",
	setLocale: () => {},
	dir: "ltr",
});

export function LocaleProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<string>("en");
	const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
	const [mounted, setMounted] = useState(false);

	// Apply locale settings to document
	useEffect(() => {
		if (!mounted) return;

		document.documentElement.lang = locale;
		document.documentElement.dir = dir;

		// Force a re-render of the entire app when locale changes
		const htmlElement = document.documentElement;
		if (locale === "ar") {
			htmlElement.classList.add("locale-ar");
		} else {
			htmlElement.classList.remove("locale-ar");
		}
	}, [locale, dir, mounted]);

	const setLocale = (newLocale: string) => {
		setLocaleState(newLocale);
		localStorage.setItem("locale", newLocale);
		setDir(newLocale === "ar" ? "rtl" : "ltr");
	};

	// Initialize locale from localStorage on mount
	useEffect(() => {
		const savedLocale = localStorage.getItem("locale") || "en";
		setLocale(savedLocale);
		setMounted(true);
	}, []);

	return (
		<LocaleContext.Provider value={{ locale, setLocale, dir }}>
			{children}
		</LocaleContext.Provider>
	);
}

export const useLocale = () => useContext(LocaleContext);
