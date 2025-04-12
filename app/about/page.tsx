"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/utils/translations";

export default function AboutPage() {
	const { locale, dir } = useLocale();
	const t = getTranslations(locale);

	return (
		<div className="container py-12 md:py-16" dir={dir}>
			<div className="mx-auto max-w-4xl text-center">
				<h1 className="text-4xl font-bold">{t.about.title}</h1>
				<p className="mt-4 text-xl text-muted-foreground">{t.about.subtitle}</p>
			</div>

			{/* Company Background */}
			<div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
				<div className="relative aspect-video overflow-hidden rounded-lg">
					<Image
						src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt={t.about.title}
						fill
						className="object-cover"
					/>
				</div>
				<div>
					<h2 className="text-3xl font-bold">{t.about.mission.title}</h2>
					<p className="mt-4 text-muted-foreground">
						{t.about.mission.content1}
					</p>
					<p className="mt-4 text-muted-foreground">
						{t.about.mission.content2}
					</p>
					<p className="mt-4 text-muted-foreground">
						{t.about.mission.content3}
					</p>
				</div>
			</div>

			{/* Core Values */}
			<div className="mt-20">
				<h2 className="text-center text-3xl font-bold">
					{t.about.values.title}
				</h2>
				<div className="mt-8 grid gap-6 sm:grid-cols-3">
					<Card>
						<CardContent className="flex flex-col items-center p-6 text-center">
							<div className="mb-4 rounded-full bg-primary/10 p-3">
								<Shield className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-bold">
								{t.about.values.protection.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{t.about.values.protection.content}
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex flex-col items-center p-6 text-center">
							<div className="mb-4 rounded-full bg-primary/10 p-3">
								<Award className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-bold">
								{t.about.values.excellence.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{t.about.values.excellence.content}
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex flex-col items-center p-6 text-center">
							<div className="mb-4 rounded-full bg-primary/10 p-3">
								<Users className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-bold">
								{t.about.values.integrity.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{t.about.values.integrity.content}
							</p>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Team Section */}
			<div className="mt-20">
				<h2 className="text-center text-3xl font-bold">{t.about.team.title}</h2>
				<p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
					{t.about.team.subtitle}
				</p>
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{teamMembers.map((member, index) => (
						<div key={index} className="text-center">
							<h3 className="mt-4 text-lg font-bold">{member}</h3>
							<p className="text-sm text-muted-foreground">
								{t.about.team.role}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const teamMembers = [
	"Khaled Hany",
	"Hazem AbdelMajeed",
	"Ahmed Ali",
	"AbdelRahman Moustafa",
	"Seba AbdelMoteleb",
	"Mai Mohamed",
];
