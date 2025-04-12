"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Shield,
	Lock,
	Database,
	Cpu,
	Server,
	Wifi,
	HardDrive,
	FileKey,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/utils/translations";

export default function ServicesPage() {
	const { locale, dir } = useLocale();
	const t = getTranslations(locale);

	return (
		<div className="container py-12 md:py-16" dir={dir}>
			<div className="mx-auto max-w-4xl text-center">
				<h1 className="text-4xl font-bold">{t.services.title}</h1>
				<p className="mt-4 text-xl text-muted-foreground">
					{t.services.subtitle}
				</p>
			</div>

			<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{services.map((service, index) => (
					<Card key={index} className="flex h-full flex-col">
						<CardContent className="flex flex-1 flex-col p-6">
							<div className="mb-4 rounded-full bg-primary/10 p-3 self-start">
								{service.icon}
							</div>
							<h2 className="mb-2 text-2xl font-bold">
								{locale === "ar" ? service.titleAr : service.title}
							</h2>
							<p className="flex-1 text-muted-foreground">
								{locale === "ar" ? service.descriptionAr : service.description}
							</p>
							<ul className="mt-4 space-y-2">
								{service.features.map((feature, i) => (
									<li key={i} className="flex items-start">
										<div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />{" "}
										<span className="text-sm">
											{locale === "ar" ? service.featuresAr[i] : feature}
										</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter className="p-6 pt-0">
							<Button asChild className="w-full">
								<Link href="/contact">{t.services.requestService}</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			{/* Process Section */}
			<div className="mt-20">
				<h2 className="text-center text-3xl font-bold">
					{t.services.process.title}
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
					{t.services.process.subtitle}
				</p>
				<div className="mt-12 grid gap-8 md:grid-cols-4">
					{process.map((step, index) => (
						<div key={index} className="flex flex-col items-center text-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
								{index + 1}
							</div>

							<h3 className="mt-4 text-xl font-bold">
								{/* @ts-ignore */}
								{t.services.process.steps[step.key].title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{/* @ts-ignore */}
								{t.services.process.steps[step.key].description}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="mt-20 rounded-lg bg-muted p-8 text-center">
				<h2 className="text-2xl font-bold">{t.services.cta.title}</h2>
				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					{t.services.cta.content}
				</p>
				<Button asChild size="lg" className="mt-6">
					<Link href="/contact">{t.services.cta.button}</Link>
				</Button>
			</div>
		</div>
	);
}

const services = [
	{
		title: "Cybersecurity",
		titleAr: "الأمن السيبراني",
		description:
			"Protect your digital assets with our comprehensive cybersecurity solutions. We help identify vulnerabilities and implement robust security measures.",
		descriptionAr:
			"حماية أصولك الرقمية من خلال حلولنا الشاملة للأمن السيبراني. نساعد في تحديد نقاط الضعف وتنفيذ تدابير أمنية قوية.",
		icon: <Shield className="h-6 w-6 text-primary" />,
		features: [
			"Network security assessment",
			"Vulnerability scanning",
			"Security policy development",
			"Employee security training",
		],
		featuresAr: [
			"تقييم أمن الشبكة",
			"فحص نقاط الضعف",
			"تطوير سياسة الأمن",
			"تدريب الموظفين على الأمن",
		],
	},
	{
		title: "Firewall Setup",
		titleAr: "إعداد جدار الحماية",
		description:
			"Advanced firewall configuration to keep intruders out of your network. Our experts will set up and maintain your firewall for optimal protection.",
		descriptionAr:
			"تكوين متقدم لجدار الحماية لمنع المتسللين من الوصول إلى شبكتك. سيقوم خبراؤنا بإعداد وصيانة جدار الحماية الخاص بك للحماية المثلى.",
		icon: <Lock className="h-6 w-6 text-primary" />,
		features: [
			"Hardware firewall installation",
			"Software firewall configuration",
			"Rule set optimization",
			"Regular updates and maintenance",
		],
		featuresAr: [
			"تثبيت جدار حماية الأجهزة",
			"تكوين جدار حماية البرامج",
			"تحسين مجموعة القواعد",
			"التحديثات والصيانة المنتظمة",
		],
	},
	{
		title: "Data Recovery",
		titleAr: "استعادة البيانات",
		description:
			"Recover lost or compromised data with our expert recovery services. We use advanced tools to retrieve your valuable information.",
		descriptionAr:
			"استعادة البيانات المفقودة أو المعرضة للخطر من خلال خدمات الاسترداد الخبيرة لدينا. نستخدم أدوات متقدمة لاسترداد معلوماتك القيمة.",
		icon: <Database className="h-6 w-6 text-primary" />,
		features: [
			"Hard drive recovery",
			"RAID recovery",
			"Deleted file recovery",
			"Corrupted database repair",
		],
		featuresAr: [
			"استرداد القرص الصلب",
			"استرداد RAID",
			"استرداد الملفات المحذوفة",
			"إصلاح قاعدة البيانات التالفة",
		],
	},
	{
		title: "Penetration Testing",
		titleAr: "اختبار الاختراق",
		description:
			"Identify vulnerabilities before hackers do with our penetration testing. Our ethical hackers will test your systems for weaknesses.",
		descriptionAr:
			"تحديد نقاط الضعف قبل أن يفعل ذلك المتسللون من خلال اختبار الاختراق لدينا. سيختبر قراصنة الإنترنت الأخلاقيون لدينا أنظمتك بحثًا عن نقاط الضعف.",
		icon: <Cpu className="h-6 w-6 text-primary" />,
		features: [
			"Web application testing",
			"Network infrastructure testing",
			"Social engineering assessment",
			"Detailed reporting and remediation",
		],
		featuresAr: [
			"اختبار تطبيقات الويب",
			"اختبار البنية التحتية للشبكة",
			"تقييم الهندسة الاجتماعية",
			"تقارير مفصلة والإصلاح",
		],
	},
	{
		title: "Cloud Security",
		titleAr: "أمن السحابة",
		description:
			"Secure your cloud infrastructure with our specialized cloud security services. We ensure your data remains protected in the cloud.",
		descriptionAr:
			"تأمين البنية التحتية السحابية الخاصة بك من خلال خدمات أمن السحابة المتخصصة لدينا. نضمن بقاء بياناتك محمية في السحابة.",
		icon: <Server className="h-6 w-6 text-primary" />,
		features: [
			"Cloud configuration review",
			"Access control management",
			"Data encryption implementation",
			"Continuous monitoring",
		],
		featuresAr: [
			"مراجعة تكوين السحابة",
			"إدارة التحكم في الوصول",
			"تنفيذ تشفير البيانات",
			"المراقبة المستمرة",
		],
	},
	{
		title: "Network Security",
		titleAr: "أمن الشبكة",
		description:
			"Protect your network from unauthorized access and attacks. We design and implement secure network architectures.",
		descriptionAr:
			"حماية شبكتك من الوصول غير المصرح به والهجمات. نقوم بتصميم وتنفيذ بنية شبكة آمنة.",
		icon: <Wifi className="h-6 w-6 text-primary" />,
		features: [
			"Network design and implementation",
			"Wireless security",
			"VPN setup and configuration",
			"Intrusion detection systems",
		],
		featuresAr: [
			"تصميم وتنفيذ الشبكة",
			"أمن لاسلكي",
			"إعداد وتكوين VPN",
			"أنظمة كشف التسلل",
		],
	},
	{
		title: "Backup Solutions",
		titleAr: "حلول النسخ الاحتياطي",
		description:
			"Ensure your data is safe with our comprehensive backup solutions. We implement reliable backup systems to prevent data loss.",
		descriptionAr:
			"ضمان سلامة بياناتك من خلال حلول النسخ الاحتياطي الشاملة لدينا. نقوم بتنفيذ أنظمة نسخ احتياطي موثوقة لمنع فقدان البيانات.",
		icon: <HardDrive className="h-6 w-6 text-primary" />,
		features: [
			"Automated backup systems",
			"Off-site backup storage",
			"Disaster recovery planning",
			"Regular backup testing",
		],
		featuresAr: [
			"أنظمة النسخ الاحتياطي الآلية",
			"تخزين النسخ الاحتياطي خارج الموقع",
			"تخطيط التعافي من الكوارث",
			"اختبار النسخ الاحتياطي المنتظم",
		],
	},
	{
		title: "Encryption Services",
		titleAr: "خدمات التشفير",
		description:
			"Protect sensitive information with our encryption services. We implement strong encryption to keep your data secure.",
		descriptionAr:
			"حماية المعلومات الحساسة من خلال خدمات التشفير لدينا. نقوم بتنفيذ تشفير قوي للحفاظ على أمان بياناتك.",
		icon: <FileKey className="h-6 w-6 text-primary" />,
		features: [
			"File and folder encryption",
			"Email encryption",
			"Full disk encryption",
			"Encrypted communication channels",
		],
		featuresAr: [
			"تشفير الملفات والمجلدات",
			"تشفير البريد الإلكتروني",
			"تشفير القرص الكامل",
			"قنوات اتصال مشفرة",
		],
	},
];

const process = [
	{
		key: "assessment",
	},
	{
		key: "planning",
	},
	{
		key: "implementation",
	},
	{
		key: "monitoring",
	},
];
