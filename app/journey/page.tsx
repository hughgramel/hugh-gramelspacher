'use client';

import Link from 'next/link';

export default function Journey() {
    return (
        <div className="max-w-2xl">
            {/* Header */}
            <h1 className="text-4xl font-light tracking-tight mb-8">
                Journey
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                UW CS student passionate about how technology can reshape learning through startups, entrepreneurship, and building.
            </p>

            {/* Current Focus */}
            <ul className="mb-16 space-y-3 text-lg text-gray-800 leading-relaxed">
                <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2.5 shrink-0"></span>
                    <span>Right now, I&apos;m building a 200+ community centered around social accountability and focusing, where social software augments productivity.</span>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2.5 shrink-0"></span>
                    <span>I&apos;m focused on learning software engineering and improving my process in building high-quality, scalable applications.</span>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2.5 shrink-0"></span>
                    <span>A good week for me is a week where I learn, grow, and live every day to the fullest.</span>
                </li>
            </ul>

            {/* Origins */}
            <section className="mb-16">
                <h2 className="text-2xl font-light tracking-tight mb-4">Origins</h2>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                    <p>
                        When I first came to UW, I originally wanted to become a history teacher. I had a passion for education, and I saw my grandma teach for over 40 years and make a huge impact on my local community.
                    </p>
                    <p>
                        However, once I got to UW, I realized that while I had a unique passion for history, it wasn&apos;t the best way to make the impact I wanted. At the same time, I took my first programming course and realized how much I loved the creative problem-solving involved and the intensity needed to write high-quality, usable code.
                    </p>
                    <p>
                        I felt that was the path for me, and I could use that skill set to connect with my passion for education and learning to make software that could change the world through education.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="mb-16">
                <h2 className="text-2xl font-light tracking-tight mb-8">Timeline</h2>

                <div className="space-y-12">
                    {/* December 2023 */}
                    <div>
                        <div className="text-sm font-semibold text-black uppercase tracking-wide mb-2">
                            December 2023
                        </div>
                        <h3 className="text-xl font-medium text-black mb-3">The Switch</h3>
                        <div className="text-lg text-gray-800 leading-relaxed space-y-3">
                            <p>
                                After intense reflection, I finally realized that I didn&apos;t want to continue getting my history degree. I decided to get into programming because I had always been interested in it.
                            </p>
                            <p>
                                Over winter break, I studied the website for UW CSE 142 and completed all projects, allowing me to register for CSE 122, the second class in the intro series, skipping the basic introduction. At the same time, I set my sights on getting into the Allen School and registered for pre-calc, since I hadn&apos;t taken math in a couple years due to my history degree.
                            </p>
                        </div>
                    </div>

                    {/* March 2024 - February 2025 */}
                    <div>
                        <div className="text-sm font-semibold text-black uppercase tracking-wide mb-2">
                            March 2024 - February 2025
                        </div>
                        <h3 className="text-xl font-medium text-black mb-3">Focused on the Goal</h3>
                        <div className="text-lg text-gray-800 leading-relaxed space-y-3">
                            <p>
                                Between March 2024 and February 2025, I focused entirely on school to maximize my grades and get into the Allen School.
                            </p>
                            <p>
                                At the same time, I was working on personal projects including a{' '}
                                <Link
                                    href="https://github.com/hughgramel/VicAnalyzerProject"
                                    target="_blank"
                                    className="text-black font-medium underline underline-offset-2 hover:text-gray-600"
                                >
                                    save game analyzer
                                </Link>
                                {' '}that I used to provide a gaming community I had been in for many years with an easier way to see population demographics across games with 10-30 players each controlling a country.
                            </p>
                            <p>
                                I was also going through The Odin Project and learning web development.
                            </p>
                        </div>
                    </div>

                    {/* February 2025 */}
                    <div>
                        <div className="text-sm font-semibold text-black uppercase tracking-wide mb-2">
                            February 2025
                        </div>
                        <h3 className="text-xl font-medium text-black mb-3">Into the Allen School</h3>
                        <div className="text-lg text-gray-800 leading-relaxed space-y-3">
                            <p>
                                I got into the Allen School, a year and two months after deciding to switch from history to computer science. I had to take a heavy course load to make up for time lost and graduate on time, as it was a condition of my acceptance.
                            </p>
                            <p>
                                I continued side projects, leaning more into education and productivity:
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li>
                                    <Link
                                        href="https://github.com/hughgramel/uw-web-scraper"
                                        target="_blank"
                                        className="text-black font-medium underline underline-offset-2 hover:text-gray-600"
                                    >
                                        UW Web Scraper
                                    </Link>
                                    : Python tool for extracting UW course offerings
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/hughgramel/age-of-focus"
                                        target="_blank"
                                        className="text-black font-medium underline underline-offset-2 hover:text-gray-600"
                                    >
                                        Age of Focus
                                    </Link>
                                    : Browser-based gamified task manager where you manage a virtual historical country
                                </li>
                                <li>
                                    <Link
                                        href="https://read-fluent.vercel.app/"
                                        target="_blank"
                                        className="text-black font-medium underline underline-offset-2 hover:text-gray-600"
                                    >
                                        ReadFluent
                                    </Link>
                                    : AI-powered language learning app with EPUB support and comprehension stats
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/AmbiraDev/ambira-web"
                                        target="_blank"
                                        className="text-black font-medium underline underline-offset-2 hover:text-gray-600"
                                    >
                                        Ambira
                                    </Link>
                                    : Social productivity tracking using Strava-style accountability
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/hughgramel/study-together-bot"
                                        target="_blank"
                                        className="text-black font-medium underline underline-offset-2 hover:text-gray-600"
                                    >
                                        Study Together Bot
                                    </Link>
                                    : Discord bot used by 200+ UW students
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Looking Ahead */}
            <section className="mb-16">
                <h2 className="text-2xl font-light tracking-tight mb-4">Looking Ahead</h2>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                    <p>
                        Over the next few years, I want to improve my software engineering capabilities and skills, getting into more high-level roles at edtech startups, helping them grow and providing value through my unique insights and abilities.
                    </p>
                    <p>
                        If you&apos;re someone who cares about creative problem-solving and finding unique solutions to unsolved problems, you&apos;ll probably enjoy building with me. I love getting lost in the problem and using my entire set of abilities to find ways to solve them.
                    </p>
                </div>

                <div className="mt-8 space-y-4">
                    <div className="bg-gray-100 rounded-lg p-5">
                        <div className="text-sm font-semibold text-black uppercase tracking-wide mb-2">
                            Current
                        </div>
                        <p className="text-lg text-gray-800">
                            Product Management Intern at <span className="font-medium text-black">Maximal Learning</span>, an early-stage edtech startup looking to revolutionize how college students use software to manage their daily lives and productivity.
                        </p>
                    </div>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        In 2026, I plan on furthering my skills, getting an early career position as a junior software developer, and continuing to create projects that I believe can truly impact people&apos;s lives.
                    </p>
                </div>
            </section>
        </div>
    );
}
