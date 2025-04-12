"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Database, Cpu, Star } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/utils/translations";

export default function Home() {
	const { locale, dir } = useLocale();
	const t = getTranslations(locale);

	return (
		<div className="flex flex-col gap-16 pb-8" dir={dir}>
			{/* Hero Section */}
			<section className="relative">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/20" />
				<div className="relative mx-auto flex max-w-screen-xl flex-col items-center px-4 py-20 text-center md:py-32">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						{t.home.hero.title} <span className="text-primary">✨</span>
					</h1>
					<p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
						{t.home.hero.subtitle}
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<Button asChild size="lg">
							<Link href="/services">{t.common.exploreServices}</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/products">{t.common.seeProducts}</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Services Carousel */}
			<section className="container">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold">{t.home.services.title}</h2>
					<p className="mt-2 text-muted-foreground">
						{t.home.services.subtitle}
					</p>
				</div>
				<div className="relative mx-auto max-w-5xl">
					<Carousel
						opts={{
							direction: dir === "rtl" ? "rtl" : "ltr",
							loop: true,
						}}
						className="w-full"
					>
						<CarouselContent>
							{services.map((service, index) => (
								<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
									<Card className="h-full">
										<CardContent className="flex h-full flex-col items-center justify-center p-6">
											<div className="mb-4 rounded-full bg-primary/10 p-3">
												{service.icon}
											</div>
											<h3 className="mb-2 text-xl font-bold">
												{locale === "ar" ? service.titleAr : service.title}
											</h3>
											<p className="text-center text-sm text-muted-foreground">
												{locale === "ar"
													? service.descriptionAr
													: service.description}
											</p>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="flex justify-center gap-2 mt-4">
							<CarouselPrevious className="static transform-none mx-2" />
							<CarouselNext className="static transform-none mx-2" />
						</div>
					</Carousel>
				</div>
			</section>

			{/* About Us Summary */}
			<section className="container">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold">{t.home.about.title}</h2>
					<p className="mt-4 text-muted-foreground">{t.home.about.content}</p>
					<Button asChild className="mt-6">
						<Link href="/about">{t.home.about.cta}</Link>
					</Button>
				</div>
			</section>

			{/* Products Preview */}
			<section className="container">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold">{t.home.products.title}</h2>
					<p className="mt-2 text-muted-foreground">
						{t.home.products.subtitle}
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{products.map((product, index) => (
						<Card key={index} className="overflow-hidden">
							<div className="aspect-square relative">
								<Image
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									fill
									className="object-cover"
								/>
							</div>
							<CardContent className="p-4">
								<h3 className="font-bold">
									{locale === "ar" ? product.nameAr : product.name}
								</h3>
								<p className="mt-1 text-sm text-muted-foreground">
									{locale === "ar"
										? product.descriptionAr
										: product.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
				<div className="mt-8 text-center">
					<Button asChild variant="outline">
						<Link href="/products">{t.home.products.viewAll}</Link>
					</Button>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-muted/50 py-16">
				<div className="container">
					<div className="mb-8 text-center">
						<h2 className="text-3xl font-bold">{t.home.testimonials.title}</h2>
						<p className="mt-2 text-muted-foreground">
							{t.home.testimonials.subtitle}
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<Card key={index} className="h-full">
								<CardContent className="flex h-full flex-col p-6">
									<div className="mb-4 flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="h-5 w-5 fill-primary text-primary"
											/>
										))}
									</div>
									<p className="flex-1 text-sm text-muted-foreground">
										"{locale === "ar" ? testimonial.textAr : testimonial.text}"
									</p>
									<div className="mt-4">
										<p className="font-semibold">
											{locale === "ar" ? testimonial.nameAr : testimonial.name}
										</p>
										<p className="text-sm text-muted-foreground">
											{locale === "ar"
												? testimonial.titleAr
												: testimonial.title}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="container">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold">{t.home.whyChooseUs.title}</h2>
					<p className="mt-2 text-muted-foreground">
						{t.home.whyChooseUs.subtitle}
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<div key={index} className="flex flex-col items-center text-center">
							<div className="mb-4 rounded-full bg-primary/10 p-3">
								{feature.icon}
							</div>
							<h3 className="mb-2 text-xl font-bold">
								{locale === "ar" ? feature.titleAr : feature.title}
							</h3>
							<p className="text-sm text-muted-foreground">
								{locale === "ar" ? feature.descriptionAr : feature.description}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-primary text-primary-foreground">
				<div className="container py-16 text-center">
					<h2 className="text-3xl font-bold">{t.home.cta.title}</h2>
					<p className="mx-auto mt-4 max-w-2xl">{t.home.cta.content}</p>
					<Button asChild size="lg" variant="secondary" className="mt-8">
						<Link href="/contact">{t.home.cta.button}</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}

const services = [
	{
		title: "Cybersecurity",
		titleAr: "الأمن السيبراني",
		description:
			"Protect your digital assets with our comprehensive cybersecurity solutions.",
		descriptionAr:
			"حماية أصولك الرقمية من خلال حلولنا الشاملة للأمن السيبراني.",
		icon: <Shield className="h-6 w-6 text-primary" />,
	},
	{
		title: "Firewall Setup",
		titleAr: "إعداد جدار الحماية",
		description:
			"Advanced firewall configuration to keep intruders out of your network.",
		descriptionAr:
			"تكوين متقدم لجدار الحماية لمنع المتسللين من الوصول إلى شبكتك.",
		icon: <Lock className="h-6 w-6 text-primary" />,
	},
	{
		title: "Data Recovery",
		titleAr: "استعادة البيانات",
		description:
			"Recover lost or compromised data with our expert recovery services.",
		descriptionAr:
			"استعادة البيانات المفقودة أو المعرضة للخطر من خلال خدمات الاسترداد الخبيرة لدينا.",
		icon: <Database className="h-6 w-6 text-primary" />,
	},
	{
		title: "Penetration Testing",
		titleAr: "اختبار الاختراق",
		description:
			"Identify vulnerabilities before hackers do with our penetration testing.",
		descriptionAr:
			"تحديد نقاط الضعف قبل أن يفعل ذلك المتسللون من خلال اختبار الاختراق لدينا.",
		icon: <Cpu className="h-6 w-6 text-primary" />,
	},
];

const products = [
	{
		name: "Smart Security Camera",
		nameAr: "كاميرا أمان ذكية",
		description: "HD surveillance with motion detection and night vision.",
		descriptionAr: "مراقبة عالية الدقة مع كشف الحركة والرؤية الليلية.",
		image:
			"https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Biometric Access Control",
		nameAr: "التحكم في الوصول البيومتري",
		description: "Secure access with fingerprint and facial recognition.",
		descriptionAr: "وصول آمن مع التعرف على بصمات الأصابع والوجه.",
		image:
			"https://plus.unsplash.com/premium_photo-1674506652857-6c816df228c4?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Encrypted Storage Drive",
		nameAr: "محرك تخزين مشفر",
		description: "Military-grade encryption for your sensitive data.",
		descriptionAr: "تشفير من الدرجة العسكرية لبياناتك الحساسة.",
		image:
			"https://images.unsplash.com/photo-1691318043266-4c673ed13b8f?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Smart Alarm System",
		nameAr: "نظام إنذار ذكي",
		description: "Comprehensive home security with mobile alerts.",
		descriptionAr: "أمان منزلي شامل مع تنبيهات للهاتف المحمول.",
		image:
			"https://media.istockphoto.com/id/1325947414/photo/close-up-on-an-automated-security-system-at-a-house.jpg?s=1024x1024&w=is&k=20&c=RygEj7GlYN1F3hfdMjJqa0ACFwo8miAaRKNvCMffcTQ=",
	},
];

const testimonials = [
	{
		text: "Ramsis completely transformed our company's security infrastructure. We feel safer than ever.",
		textAr:
			"قامت سيكيورتك بتحويل البنية التحتية الأمنية لشركتنا بالكامل. نشعر بأمان أكثر من أي وقت مضى.",
		name: "John Smith",
		nameAr: "جون سميث",
		title: "CEO, Tech Innovations",
		titleAr: "الرئيس التنفيذي، ابتكارات التكنولوجيا",
	},
	{
		text: "The team at Ramsis provided exceptional service and cutting-edge solutions for our home security needs.",
		textAr:
			"قدم فريق سيكيورتك خدمة استثنائية وحلولًا متطورة لاحتياجات الأمان المنزلية لدينا.",
		name: "Sarah Johnson",
		nameAr: "سارة جونسون",
		title: "Homeowner",
		titleAr: "مالكة منزل",
	},
	{
		text: "Their cybersecurity expertise saved our company from what could have been a devastating breach.",
		textAr:
			"خبرتهم في الأمن السيبراني أنقذت شركتنا مما كان يمكن أن يكون خرقًا مدمرًا.",
		name: "Michael Chen",
		nameAr: "مايكل تشن",
		title: "CTO, DataCorp",
		titleAr: "المدير التقني، داتا كورب",
	},
];

const features = [
	{
		title: "Expert Team",
		titleAr: "فريق خبير",
		description:
			"Our security professionals have decades of combined experience in the field.",
		descriptionAr:
			"يمتلك متخصصو الأمن لدينا عقودًا من الخبرة المشتركة في هذا المجال.",
		icon: <Shield className="h-6 w-6 text-primary" />,
	},
	{
		title: "24/7 Support",
		titleAr: "دعم على مدار الساعة",
		description:
			"Round-the-clock customer support for all your security concerns.",
		descriptionAr: "دعم العملاء على مدار الساعة لجميع مخاوفك الأمنية.",
		icon: <Lock className="h-6 w-6 text-primary" />,
	},
	{
		title: "Cutting-Edge Technology",
		titleAr: "تكنولوجيا متطورة",
		description:
			"We use only the latest and most advanced security technologies.",
		descriptionAr: "نستخدم فقط أحدث تقنيات الأمان وأكثرها تقدمًا.",
		icon: <Cpu className="h-6 w-6 text-primary" />,
	},
	{
		title: "Customized Solutions",
		titleAr: "حلول مخصصة",
		description:
			"Security plans tailored to your specific needs and requirements.",
		descriptionAr: "خطط أمنية مصممة خصيصًا لتلبية احتياجاتك ومتطلباتك المحددة.",
		icon: <Database className="h-6 w-6 text-primary" />,
	},
	{
		title: "Affordable Pricing",
		titleAr: "أسعار معقولة",
		description:
			"Competitive rates without compromising on quality or service.",
		descriptionAr: "أسعار تنافسية دون المساومة على الجودة أو الخدمة.",
		icon: <Star className="h-6 w-6 text-primary" />,
	},
	{
		title: "Fast Response",
		titleAr: "استجابة سريعة",
		description:
			"Quick response times to security incidents and customer inquiries.",
		descriptionAr: "أوقات استجابة سريعة للحوادث الأمنية واستفسارات العملاء.",
		icon: <Shield className="h-6 w-6 text-primary" />,
	},
];
