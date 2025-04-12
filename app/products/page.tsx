"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/utils/translations";

interface ProductTranslation {
	name: string;
	description: string;
}

interface Product {
	name: string;
	description: string;
	image: string;
	translationKey: string;
}

interface FeaturedProduct {
	name: string;
	description: string;
	image: string;
	key: "homeSecurity" | "businessSecurity";
}

interface ProductCardProps {
	product: Product | FeaturedProduct;
	locale: string;
}

type TranslatedProduct = {
	name: string;
	description: string;
};

interface TranslationsType {
	products: {
		homeSecurity: TranslatedProduct;
		businessSecurity: TranslatedProduct;
		[key: string]: any;
	};
}

// Helper function to safely access nested translation objects
function getNestedTranslation(
	obj: any,
	path: string,
): ProductTranslation | null {
	const result = path.split(".").reduce((acc, part) => acc?.[part], obj);
	return result as ProductTranslation | null;
}

export default function ProductsPage() {
	const { locale } = useLocale();
	const t = getTranslations(locale);

	return (
		<div className="container py-12 md:py-16">
			<div className="mx-auto max-w-4xl text-center">
				<h1 className="text-4xl font-bold">{t.products.title}</h1>
				<p className="mt-4 text-xl text-muted-foreground">
					{t.products.subtitle}
				</p>
			</div>

			<Tabs defaultValue="surveillance" className="mt-16">
				<div className="flex justify-center">
					<TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4">
						<TabsTrigger value="surveillance">
							{t.products.categories.surveillance}
						</TabsTrigger>
						<TabsTrigger value="access">
							{t.products.categories.access}
						</TabsTrigger>
						<TabsTrigger value="alarms">
							{t.products.categories.alarms}
						</TabsTrigger>
						<TabsTrigger value="cyber">
							{t.products.categories.cyber}
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="surveillance" className="mt-8">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{surveillanceProducts.map((product, index) => (
							<ProductCard key={index} product={product} locale={locale} />
						))}
					</div>
				</TabsContent>

				<TabsContent value="access" className="mt-8">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{accessProducts.map((product, index) => (
							<ProductCard key={index} product={product} locale={locale} />
						))}
					</div>
				</TabsContent>

				<TabsContent value="alarms" className="mt-8">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{alarmProducts.map((product, index) => (
							<ProductCard key={index} product={product} locale={locale} />
						))}
					</div>
				</TabsContent>

				<TabsContent value="cyber" className="mt-8">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{cyberProducts.map((product, index) => (
							<ProductCard key={index} product={product} locale={locale} />
						))}
					</div>
				</TabsContent>
			</Tabs>

			{/* Featured Products */}
			<div className="mt-20">
				<h2 className="text-center text-3xl font-bold">
					{t.products.featured.title}
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
					{t.products.featured.subtitle}
				</p>
				<div className="mt-8 grid gap-8 md:grid-cols-2">
					{featuredProducts.map((product, index) => (
						<Card key={index} className="overflow-hidden">
							<div className="grid md:grid-cols-2">
								<div className="aspect-square relative">
									<Image
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex flex-col p-6">
									<h3 className="text-xl font-bold">
										{locale === "ar"
											? //@ts-ignore
											  t.products[product.key].name
											: product.name}
									</h3>
									<p className="mt-2 flex-1 text-sm text-muted-foreground">
										{locale === "ar"
											? //@ts-ignore
											  t.products[product.key].description
											: product.description}
									</p>
									<div className="mt-4">
										<Button asChild className="w-full">
											<Link href="/contact">{t.common.inquireNow}</Link>
										</Button>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="mt-20 rounded-lg bg-muted p-8 text-center">
				<h2 className="text-2xl font-bold">{t.products.cta.title}</h2>
				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					{t.products.cta.content}
				</p>
				<Button asChild size="lg" className="mt-6">
					<Link href="/contact">{t.products.cta.button}</Link>
				</Button>
			</div>
		</div>
	);
}

function ProductCard({ product, locale }: ProductCardProps) {
	//@ts-ignore
	const t = getTranslations(locale);

	if ("key" in product) {
		// Handle featured products
		//@ts-ignore
		const translation = t.products[product.key] as ProductTranslation;
		return (
			<Card className="flex h-full flex-col overflow-hidden">
				<div className="aspect-video relative">
					<Image
						src={product.image || "/placeholder.svg"}
						alt={
							locale === "ar" && translation ? translation.name : product.name
						}
						fill
						className="object-cover"
					/>
				</div>
				<CardContent className="flex-1 p-6">
					<h3 className="text-lg font-bold">
						{locale === "ar" && translation ? translation.name : product.name}
					</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						{locale === "ar" && translation
							? translation.description
							: product.description}
					</p>
				</CardContent>
				<CardFooter className="p-6 pt-0">
					<Button asChild className="w-full">
						<Link href="/contact">{t.common.inquireNow}</Link>
					</Button>
				</CardFooter>
			</Card>
		);
	}

	// Handle regular products
	const translation = getNestedTranslation(t.products, product.translationKey);
	return (
		<Card className="flex h-full flex-col overflow-hidden">
			<div className="aspect-video relative">
				<Image
					src={product.image || "/placeholder.svg"}
					alt={locale === "ar" && translation ? translation.name : product.name}
					fill
					className="object-cover"
				/>
			</div>
			<CardContent className="flex-1 p-6">
				<h3 className="text-lg font-bold">
					{locale === "ar" && translation ? translation.name : product.name}
				</h3>
				<p className="mt-2 text-sm text-muted-foreground">
					{locale === "ar" && translation
						? translation.description
						: product.description}
				</p>
			</CardContent>
			<CardFooter className="p-6 pt-0">
				<Button asChild className="w-full">
					<Link href="/contact">{t.common.inquireNow}</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}

const surveillanceProducts: Product[] = [
	{
		name: "HD Security Camera",
		description:
			"1080p high-definition security camera with night vision and motion detection.",
		image:
			"https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "surveillance.hdCamera",
	},
	{
		name: "4K Surveillance System",
		description:
			"Complete 4K surveillance system with multiple cameras and DVR.",
		image:
			"https://images.unsplash.com/photo-1544868674-4f16cd4e88e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "surveillance.system4k",
	},
	{
		name: "Wireless Camera",
		description:
			"Easy-to-install wireless camera with cloud storage and mobile alerts.",
		image:
			"https://images.unsplash.com/photo-1728971975421-50f3dc9663a4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "surveillance.wirelessCamera",
	},
	{
		name: "PTZ Camera",
		description:
			"Pan-tilt-zoom camera with remote control and automatic tracking.",
		image:
			"https://plus.unsplash.com/premium_photo-1710961233810-5350d81d4b20?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "surveillance.ptzCamera",
	},
	{
		name: "Hidden Camera",
		description: "Discreet hidden camera for covert surveillance operations.",
		image:
			"https://images.unsplash.com/photo-1552502064-a188252d86d0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "surveillance.hiddenCamera",
	},
	{
		name: "Thermal Camera",
		description: "Thermal imaging camera for detection in complete darkness.",
		image:
			"https://images.unsplash.com/photo-1597424876915-41bd694b26da?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "surveillance.thermalCamera",
	},
];

const accessProducts: Product[] = [
	{
		name: "Biometric Access Control",
		description: "Fingerprint and facial recognition access control system.",
		image:
			"https://plus.unsplash.com/premium_photo-1674506652857-6c816df228c4?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "access.biometric",
	},
	{
		name: "Keycard System",
		description: "RFID keycard access control system for businesses.",
		image:
			"https://images.unsplash.com/photo-1688149013444-da644d290749?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "access.keycard",
	},
	{
		name: "Smart Lock",
		description: "Wi-Fi enabled smart lock with mobile app control.",
		image:
			"https://plus.unsplash.com/premium_photo-1729500764765-7795c760f73a?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "access.smartLock",
	},
	{
		name: "Intercom System",
		description: "Video intercom system for visitor verification.",
		image:
			"https://media.istockphoto.com/id/1991831178/photo/young-man-using-intercom-to-call.jpg?s=1024x1024&w=is&k=20&c=KSo__EAhLNNHnoF16k0dy9ecoNf62P2qfeaCjD2tM4I=",
		translationKey: "access.intercom",
	},
	{
		name: "Access Control Panel",
		description:
			"Centralized access control panel for managing multiple entry points.",
		image:
			"https://media.istockphoto.com/id/1310118255/photo/smart-home-control-in-kitchen.jpg?s=1024x1024&w=is&k=20&c=dbRPhvvIi4AyEPHwgDiOVE6dhIbhH4ykZ1w2Zr-74x8=",
		translationKey: "access.controlPanel",
	},
	{
		name: "Proximity Reader",
		description: "Proximity card reader for quick and secure access.",
		image:
			"https://media.istockphoto.com/id/1477483635/photo/adult-man-paying-with-credit-card-at-cafe-close-up-of-hands-with-credit-card-and-credit-card.jpg?s=1024x1024&w=is&k=20&c=nDMzR8zf1lOy61weHZYqO1EY8ukJqF59eH-f5bW-Ya0=",
		translationKey: "access.proximityReader",
	},
];

const alarmProducts: Product[] = [
	{
		name: "Smart Alarm System",
		description:
			"Comprehensive smart alarm system with mobile alerts and professional monitoring.",
		image:
			"https://media.istockphoto.com/id/1325947414/photo/close-up-on-an-automated-security-system-at-a-house.jpg?s=1024x1024&w=is&k=20&c=RygEj7GlYN1F3hfdMjJqa0ACFwo8miAaRKNvCMffcTQ=",
		translationKey: "alarms.smartAlarm",
	},
	{
		name: "Motion Sensors",
		description:
			"Advanced motion sensors with pet immunity and adjustable sensitivity.",
		image:
			"https://media.istockphoto.com/id/539346290/photo/motion-sensor-security-light.jpg?s=1024x1024&w=is&k=20&c=rjQpCxd9nG8bZchnDH6QEi8zWQRDo9C823jPNY1mtJA=",
		translationKey: "alarms.motionSensors",
	},
	{
		name: "Door/Window Sensors",
		description: "Reliable door and window sensors for perimeter security.",
		image:
			"https://media.istockphoto.com/id/2195605025/photo/automated-sliding-doors-entrance-to-modern-office-building.jpg?s=1024x1024&w=is&k=20&c=UwIq8Imh2JklbzKed-TE0immUyvCrz1375wnDruMJY4=",
		translationKey: "alarms.doorSensors",
	},
	{
		name: "Glass Break Detector",
		description: "Acoustic glass break detector for window protection.",
		image:
			"https://media.istockphoto.com/id/1459968362/photo/surveillance-camera-motion-sensors-and-security-equipment-on-building-wall.jpg?s=1024x1024&w=is&k=20&c=JERcBeVrlUAbx99uuf8PnEQ8CCKL-86slry1ZNkRPw8=",
		translationKey: "alarms.glassBreak",
	},
	{
		name: "Panic Button",
		description: "Wireless panic button for emergency situations.",
		image:
			"https://media.istockphoto.com/id/1227899751/photo/the-red-fire-alarm-switch-on-the-red-wall-at-the-bangkok-subway.jpg?s=1024x1024&w=is&k=20&c=4itaoBA1x0bKU7cdBy1OyJYbttqJwOksdnKFk6dluNQ=",
		translationKey: "alarms.panicButton",
	},
	{
		name: "Smoke & CO Detector",
		description:
			"Combined smoke and carbon monoxide detector with alarm integration.",
		image:
			"https://media.istockphoto.com/id/1649976983/photo/close-up-view-of-smoke-detector-at-ceiling-with-blurred-bedroom-background.jpg?s=1024x1024&w=is&k=20&c=HsfaW0z_wFJ2sWSfGVdmKvi5_pwrL7wy_Blu6DIMIqs=",
		translationKey: "alarms.smokeDetector",
	},
];

const cyberProducts: Product[] = [
	{
		name: "Hardware Firewall",
		description: "Enterprise-grade hardware firewall for network protection.",
		image:
			"https://plus.unsplash.com/premium_photo-1743618985986-d5e1df43f4bc?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "cyber.firewall",
	},
	{
		name: "Encrypted Storage",
		description: "Military-grade encrypted storage device for sensitive data.",
		image:
			"https://images.unsplash.com/photo-1691318043266-4c673ed13b8f?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "cyber.storage",
	},
	{
		name: "VPN Gateway",
		description: "Secure VPN gateway for remote access to your network.",
		image:
			"https://media.istockphoto.com/id/2151954310/photo/shield-security-network-technology-wire-frame-concept.jpg?s=1024x1024&w=is&k=20&c=7mRKh765UWhFqCi9vkJtvBGL3fqaOJdr4qjvjyqi_ZU=",
		translationKey: "cyber.vpn",
	},
	{
		name: "Password Manager",
		description:
			"Enterprise password management solution for secure credential storage.",
		image:
			"https://media.istockphoto.com/id/1366554092/photo/the-programmer-is-logging-in-and-encrypting-it-for-security-with-cybersecurity-technology.jpg?s=1024x1024&w=is&k=20&c=CNvA3oJ0-jatb4eLfUGIdqXIVEmvoYTipD-8dsw5CQA=",
		translationKey: "cyber.password",
	},
	{
		name: "Security Token",
		description: "Two-factor authentication token for secure login.",
		image:
			"https://plus.unsplash.com/premium_photo-1700830328048-b49d902cf04a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		translationKey: "cyber.token",
	},
	{
		name: "Network Monitor",
		description: "Network monitoring appliance for threat detection.",
		image:
			"https://media.istockphoto.com/id/1194430859/photo/two-professional-it-programers-discussing-blockchain-data-network-architecture-design-and.jpg?s=1024x1024&w=is&k=20&c=cxQ4J6eoQ8-EeOMfRR7d2vaXf03CsQxJZl2Lpz4FS4g=",
		translationKey: "cyber.monitor",
	},
];

const featuredProducts: FeaturedProduct[] = [
	{
		name: "Complete Home Security Package",
		description:
			"All-in-one home security solution including cameras, alarm system, and smart locks with professional installation and monitoring.",
		image:
			"https://plus.unsplash.com/premium_photo-1716824502184-f5f8816ed2ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		key: "homeSecurity",
	},
	{
		name: "Business Security Suite",
		description:
			"Comprehensive security solution for businesses including access control, surveillance, alarm systems, and cybersecurity protection.",
		image:
			"https://plus.unsplash.com/premium_photo-1684769161409-f6de69d3f274?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		key: "businessSecurity",
	},
];
