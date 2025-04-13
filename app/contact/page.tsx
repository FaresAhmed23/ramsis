"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/utils/translations";
import emailjs from "@emailjs/browser";
import { toast } from "@/lib/toast";

export default function ContactPage() {
	const { locale, dir } = useLocale();
	const t = getTranslations(locale);
	const formRef = useRef(null);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const serviceId = "service_a6efm9a";
			const templateId = "template_7qpj48n";
			const publicKey = "zjsJ4Zq5KEEPNpSRB";

			await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

			toast({
				title: t.contact.form.success,
				description: t.contact.form.successMessage,
				variant: "success",
			});

			// Reset form
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});
		} catch (error) {
			console.error("Error sending email:", error);
			toast({
				title: "Error",
				description:
					"There was an error sending your message. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="container py-12 md:py-16" dir={dir}>
			<div className="mx-auto max-w-4xl text-center">
				<h1 className="text-4xl font-bold">{t.contact.title}</h1>
				<p className="mt-4 text-xl text-muted-foreground">
					{t.contact.subtitle}
				</p>
			</div>

			<div className="mt-16 grid gap-8 md:grid-cols-2">
				<div>
					<h2 className="text-2xl font-bold">{t.contact.form.title}</h2>
					<p className="mt-2 text-muted-foreground">
						{t.contact.form.subtitle}
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-6 space-y-4"
					>
						<div className="space-y-2">
							<Label htmlFor="name">{t.contact.form.name}</Label>
							<Input
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">{t.contact.form.email}</Label>
							<Input
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">{t.contact.form.phone}</Label>
							<Input
								id="phone"
								name="phone"
								type="tel"
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">{t.contact.form.message}</Label>
							<Textarea
								id="message"
								name="message"
								rows={5}
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>
						<Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting ? (
								<span className="flex items-center gap-2">
									<svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
											fill="none"
										/>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
									{locale === "ar" ? "جاري الإرسال..." : "Sending..."}
								</span>
							) : (
								t.contact.form.button
							)}
						</Button>
					</form>
				</div>

				<div className="flex flex-col">
					<h2 className="text-2xl font-bold">{t.contact.info.title}</h2>
					<p className="mt-2 text-muted-foreground">
						{locale === "ar"
							? "يمكنك أيضًا الوصول إلينا باستخدام تفاصيل الاتصال التالية."
							: "You can also reach us using the following contact details."}
					</p>
					<div className="mt-6 grid gap-6">
						<Card>
							<CardContent
								className="flex items-start gap-4 p-6"
								style={{ flexDirection: dir === "rtl" ? "row-reverse" : "row" }}
							>
								<Mail className="h-6 w-6 text-primary" />
								<div className={dir === "rtl" ? "text-right" : "text-left"}>
									<h3 className="font-bold">{t.contact.info.email.title}</h3>
									<p className="text-muted-foreground">
										{t.contact.info.email.main}
									</p>
									<p className="text-muted-foreground">
										{t.contact.info.email.support}
									</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent
								className="flex items-start gap-4 p-6"
								style={{ flexDirection: dir === "rtl" ? "row-reverse" : "row" }}
							>
								<Phone className="h-6 w-6 text-primary" />
								<div className={dir === "rtl" ? "text-right" : "text-left"}>
									<h3 className="font-bold">{t.contact.info.phone.title}</h3>
									<p className="text-muted-foreground">
										{t.contact.info.phone.main}
									</p>
									<p className="text-muted-foreground">
										{t.contact.info.phone.support}
									</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent
								className="flex items-start gap-4 p-6"
								style={{ flexDirection: dir === "rtl" ? "row-reverse" : "row" }}
							>
								<MapPin className="h-6 w-6 text-primary" />
								<div className={dir === "rtl" ? "text-right" : "text-left"}>
									<h3 className="font-bold">{t.contact.info.address.title}</h3>
									<p className="text-muted-foreground">
										{t.contact.info.address.line1}
										<br />
										{t.contact.info.address.line2}
										<br />
										{t.contact.info.address.line3}
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="mt-20">
				<h2 className="text-center text-3xl font-bold">
					{t.contact.faq.title}
				</h2>
				<div className="mt-8 grid gap-4 md:grid-cols-2">
					{faqs.map((faq, index) => (
						<Card key={index}>
							<CardContent className="p-6">
								<h3 className="font-bold">
									{locale === "ar" ? faq.questionAr : faq.question}
								</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									{locale === "ar" ? faq.answerAr : faq.answer}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

const faqs = [
	{
		question: "What areas do you service?",
		answer:
			"We provide security services nationwide, with local offices in major cities. Our remote cybersecurity services are available globally.",
		questionAr: "ما هي المناطق التي تخدمونها؟",
		answerAr:
			"نقدم خدمات الأمن على الصعيد الوطني، مع مكاتب محلية في المدن الرئيسية. خدمات الأمن السيبراني عن بعد متاحة عالميًا.",
	},
	{
		question: "Do you offer 24/7 support?",
		answer:
			"Yes, we provide round-the-clock customer support for all our security services and products.",
		questionAr: "هل تقدمون دعمًا على مدار الساعة؟",
		answerAr:
			"نعم، نقدم دعمًا للعملاء على مدار الساعة لجميع خدماتنا ومنتجاتنا الأمنية.",
	},
	{
		question: "Can you customize security solutions for my specific needs?",
		answer:
			"We specialize in creating tailored security plans based on your unique requirements and budget constraints.",
		questionAr: "هل يمكنكم تخصيص حلول أمنية لاحتياجاتي المحددة؟",
		answerAr:
			"نحن متخصصون في إنشاء خطط أمنية مخصصة بناءً على متطلباتك الفريدة وقيود الميزانية.",
	},
	{
		question: "Do you offer installation services for your security products?",
		answer:
			"Yes, we offer professional installation services for all our security products to ensure they are set up correctly and functioning optimally.",
		questionAr: "هل تقدمون خدمات التركيب لمنتجاتكم الأمنية؟",
		answerAr:
			"نعم، نقدم خدمات تركيب احترافية لجميع منتجاتنا الأمنية لضمان إعدادها بشكل صحيح وعملها على النحو الأمثل.",
	},
];
