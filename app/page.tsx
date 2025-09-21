import RESUME from "@/data/resume";
import Link from "next/link";
import { Contributions } from "@/components/contributions";
import { unstable_cache } from "next/cache";
import type { Activity } from "@/components/ui/kibo-ui/contribution-graph";
import Header from "@/components/header";

const username = 'dancer';
const getCachedContributions = unstable_cache(
	async () => {
		const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
		const response = await fetch(url);
		const data = (await response.json()) as { total: { [year: string]: number }; contributions: Activity[] };
		const total = data.total[new Date().getFullYear()];
		const TOTAL_SQUARES = 417;

		const sortedData = data.contributions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		return { contributions: sortedData.slice(0, TOTAL_SQUARES), total };
	},
	['github-contributions'],
	{ revalidate: 60 * 60 * 24 },
);

export default async function Home() {
	const { contributions, total } = await getCachedContributions();
	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />

			<div className="space-y-12">
				<div className="grid grid-cols-12 gap-16">
					<div className="col-span-3 text-muted-foreground text-sm">
						About
					</div>
					<div className="col-span-9">
						<p className="text-muted-foreground">
							{RESUME.bio.about}
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-16">
					<div className="col-span-3 text-muted-foreground text-sm">
						Recent GitHub Activity
					</div>
					<div className="col-span-9">
						<Contributions data={contributions} />
					</div>
				</div>

				<div className="grid grid-cols-12 gap-16">
					<div className="col-span-3 text-muted-foreground text-sm">
						Experience
					</div>
					<div className="col-span-9">
						<div className="space-y-8">
							{RESUME.experience.map((experience) => (
								<div key={experience.company}>
									<div className="mb-3">
										<Link 
											href={experience.company_website}
											target="_blank"
											className="text-foreground font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
										>
											{experience.company}
										</Link>
										<span className="text-muted-foreground ml-2">{experience.role}</span>
									</div>
									<div className="text-muted-foreground leading-relaxed mb-3">
										{experience.company === "Vercel" 
											? "Building next-generation web applications and AI developer tools. Currently helping build the AI SDK and focused on developer experience."
											: "Leveraging AI to intelligently process PDFs, receipts, and financial documents. Building machine learning systems that extract, understand, and automate complex document workflows."
										}
									</div>
									<div className="text-muted-foreground text-xs">
										{experience.company === "Vercel" 
											? "Jun 2025 to Present — London / SF"
											: "Oct 2024 to Mar 2025 — Remote"
										}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-16">
					<div className="col-span-3 text-muted-foreground text-sm">
						Education
					</div>
					<div className="col-span-9">
						<div className="flex justify-between">
							<div>
								<div className="mb-2">
									<span className="text-foreground font-medium">MDX University</span>
								</div>
								<div className="text-muted-foreground">
									BSc in Computer Science
								</div>
							</div>
							<div className="text-muted-foreground">
								2024-2026
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-16">
					<div className="col-span-3 text-muted-foreground text-sm">
						Skills
					</div>
					<div className="col-span-9">
						<div className="text-muted-foreground leading-relaxed">
							Full-stack development; React & Next.js; TypeScript & JavaScript;
							Node.js & Python; PostgreSQL & MongoDB; Docker & AWS; Git & CI/CD
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-16">
					<div className="col-span-3 text-muted-foreground text-sm">
						Interests
					</div>
					<div className="col-span-9">
						<div className="text-muted-foreground leading-relaxed">
							Open source development; Web performance & optimization; Developer experience & tooling; Design systems & accessibility; AI/ML applications; Distributed systems
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}