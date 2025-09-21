import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";

export const metadata: Metadata = {
	title: "how i accidentally joined vercel",
	description:
		"from a random hello at v0 summit to building the future of ai development tools.",
	openGraph: {
		title: "how i accidentally joined vercel",
		description:
			"from a random hello at v0 summit to building the future of ai development tools.",
		url: "https://jos.hn/blog/vercel",
		siteName: "Josh",
		images: [
			{
				url: "/api/og?title=how%20i%20accidentally%20joined%20vercel&description=from%20a%20random%20hello%20at%20v0%20summit%20to%20building%20the%20future%20of%20ai%20development%20tools.",
				width: 1200,
				height: 630,
				alt: "how i accidentally joined vercel",
			},
		],
		locale: "en_US",
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title: "how i accidentally joined vercel",
		description:
			"from a random hello at v0 summit to building the future of ai development tools.",
		images: [
			"/api/og?title=how%20i%20accidentally%20joined%20vercel&description=from%20a%20random%20hello%20at%20v0%20summit%20to%20building%20the%20future%20of%20ai%20development%20tools.",
		],
	},
};

export default function HowIJoinedVercel() {
	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />

			<div className="space-y-12">
				<div className="grid grid-cols-12 gap-16">
					<div className="col-span-3 text-muted-foreground text-sm">
						<Link
							href="/blog"
							className="hover:text-foreground transition-colors"
						>
							← back to blog
						</Link>
					</div>
					<div className="col-span-9">
						<div className="mb-8">
							<h1 className="text-foreground font-medium text-lg mb-2">
								how i accidentally joined vercel
							</h1>
							<div className="text-muted-foreground text-xs">
								Jan 1, 2025 — 12 min read
							</div>
						</div>

						<div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
							<p>
								october 2024. i'm scrolling twitter when i see it - v0 summit in
								london. as a student and intern at joinwarp.com, i've been using
								vercel's products daily. next.js, vercel hosting, now v0 for
								rapid prototyping. this event looks incredible.
							</p>

							<p>
								problem: it's sold out. completely full. but something tells me
								to try anyway. i slide into g's dms: "hey, i'm a student and
								intern at warp, huge fan of what you're building. any chance
								there's still a way to attend the summit?"
							</p>

							<p>his reply: "don't worry, come."</p>

							<p>
								november 2024. london. somehow i'm here. the energy is electric
								- developers everywhere talking about ai, the future, and this
								crazy tool called v0 that can generate ui components from simple
								prompts.
							</p>

							<p>
								i'm walking around, trying to absorb everything, when i spot
								him. guillermo rauch. the ceo of vercel. just... standing there,
								talking to people like a normal human. my brain goes: "should i?
								shouldn't i? what's the worst that could happen?"
							</p>

							<p>
								so i walk up. "hey g, i'm josh. love what you're building with
								v0." what i expected: a polite nod, maybe a thanks, then he
								moves on to someone important. what actually happened: we start
								talking. really talking.
							</p>

							<p>
								he asks what i think about v0. not in a "testing the intern"
								way, but genuinely curious. i tell him about the rough edges
								i've noticed, the features that could make it better, the
								developer experience improvements that keep me up at night
								thinking about.
							</p>

							<p>"interesting," he says. "keep the feedback coming."</p>

							<p>
								then life happens. my twitter account gets suspended. one day
								it's there, the next - gone. no explanation, no warning. just
								digital silence. weeks pass. i'm thinking about that
								conversation, wondering if g even remembers the random intern
								from london.
							</p>

							<p>plot twist: he's been looking for me.</p>

							<p>
								i create a new twitter account - @nishimiya (yes, after the
								anime character, don't judge). first dm i send: "hey, it's me.
								josh from the summit." his reply comes fast: "i've been looking
								for your twitter. what happened?"
							</p>

							<p>
								we pick up exactly where we left off. more conversations about
								v0, about ai, about developer tools. i'm sharing ideas, he's
								actually listening. then one day, out of nowhere:
							</p>

							<p>"why don't you join vercel?"</p>

							<p>
								wait, what? me? the guy who accidentally got his twitter
								suspended? join vercel? the company behind next.js, the platform
								powering half the modern web?
							</p>

							<p>
								things move fast after that. interviews, technical challenges,
								more conversations. i'm shipping small things, sharing bigger
								ideas, trying to prove i'm not just another person with opinions
								but someone who can actually build.
							</p>

							<p>
								then it happens. the offer. "vercel... this is huge." i'm
								joining the ai sdk team. not just using the tools, but helping
								build them. helping shape the future of how developers work with
								ai.
							</p>

							<p>
								but here's where it gets fun. i set myself a mission: earn the
								vercel twitter badge. that little checkmark that says "this
								person works here and ships things that matter."
							</p>

							<p>
								every day: "g, can i have the badge yet?"
								<br />
								every day: "not yet" or subject change or "let's see what you
								ship first."
							</p>

							<p>
								i don't stop asking. not because i'm annoying (okay, maybe a
								little), but because i treat it like a metric. proof that i'm
								delivering work that actually matters. the badge isn't the goal
								- it's the scoreboard.
							</p>

							<p>
								late nights with lars and nico. code reviews that turn into
								architecture discussions. tests that break, apis that evolve,
								designs that shift. we're building ai sdk v5 and it's not
								glamorous work - it's the kind of deep, technical
								problem-solving that most people never see.
							</p>

							<p>
								but that's the point. making it simpler for developers. faster
								to get started. more reliable when it matters. every line of
								code is a decision about how millions of developers will build
								the next generation of ai applications.
							</p>

							<p>
								then g drops the bomb: "come to sf. meet the team. build with
								us. come to my office every day." wait, what? this is really
								happening.
							</p>

							<p>
								my trip is planned: sunday to friday. simple, clean,
								professional. but then the team mentions this thing - a yc
								hackathon on friday/saturday. 24 hours hosted by dedaluslabs.ai.
								"can i go?" i ask, half expecting a no.
							</p>

							<p>g and my manager dan: "sure, we'll extend your trip."</p>

							<p>
								they're paying extra fees. for me. to stay for a hackathon. i'm
								amazed. this company really cares about community, about
								supporting developers, about doing the right thing even when it
								costs them money.
							</p>

							<p>
								plot twist: i'm not just attending - i'm a judge. but that's not
								all. i become the snack boy, rolling around with a shopping
								trolley, giving people snacks and v0 credits. (boss, if you're
								reading this, don't kill me - i did it for the community!)
							</p>

							<p>
								three jobs in one day: judge, snack distributor, v0 evangelist.
								living my best life.
							</p>

							<p>
								saturday. judgment day. i ask g if he wants to come check out
								the hackathon. he surprises me - he actually shows up. loads of
								people get to meet the ceo of vercel. it's incredible watching
								him interact with the community.
							</p>

							<p>
								but before he arrives, my phone buzzes. notification. i look
								down and see: "you have been invited to the vercel organization
								on twitter"
							</p>

							<p>OMG I GOT THE BADGE.</p>

							<p>
								(yes, i called my girlfriend screaming. yes, she thought
								something was wrong. no, she didn't understand why a twitter
								badge made me lose my mind.)
							</p>

							<p>
								the hackathon ends. g leaves. i'm packing up when he asks:
								"when's your flight back?" "tomorrow night," i say. "come to my
								place tomorrow. let's have lunch."
							</p>

							<p>
								sunday. g's place. the vercel crew shows up. we're talking about
								ideas, plans, the future. it feels like family. just chilling
								together on a sunday, no agenda, no pressure. just good people
								building cool things.
							</p>

							<p>
								then it's time. everyone starts leaving. i book my uber back to
								london. sitting in that car, watching san francisco disappear, i
								know this was the best experience of my life.
							</p>

							<p>
								sometimes the best opportunities come from the most unexpected
								places. a random hello at a conference. a suspended twitter
								account. a ceo who actually listens to feedback from interns.
								and sometimes, they lead to sunday lunches that feel like home.
							</p>

							<p>
								moral of the story? show up. speak up. keep building. and maybe,
								just maybe, you'll accidentally find yourself exactly where
								you're supposed to be.
							</p>

							<p className="text-xs text-muted-foreground/70 italic pt-4">
								g, thank you. not just g, but vercel - thank you. ✓
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
