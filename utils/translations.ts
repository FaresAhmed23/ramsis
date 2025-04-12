import { en } from "@/translations/en";
import { ar } from "@/translations/ar";

export const translations = {
	en,
	ar,
};

export function getTranslations(locale: string) {
	return translations[locale as keyof typeof translations] || translations.en;
}
