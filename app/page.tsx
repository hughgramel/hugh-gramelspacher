import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-light tracking-tight mb-8">About</h1>

      {/* Mobile: image on top */}
      <div className="md:hidden flex justify-center mb-6">
        <Image
          src="/home-photo.jpg"
          alt="Hugh Gramelspacher"
          width={280}
          height={280}
          className="rounded-xl object-cover"
          priority
        />
      </div>

      <div className="block">
        <div className="relative float-right ml-8 mb-2 w-[280px] hidden md:block">
          <Image
            src="/home-photo.jpg"
            alt="Hugh Gramelspacher"
            width={280}
            height={280}
            className="rounded-xl object-cover"
            priority
          />
        </div>
        <div className="text-lg leading-relaxed text-gray-800 space-y-6">
          <p>
            I&apos;m a CS student at the University of Washington interested in software, startups, and the way technology changes how people learn, work, and make decisions.
          </p>
          <p>
            I came to UW planning to become a history teacher. My grandmother taught for more than 40 years, and I grew up around the idea that a good teacher can change the direction of someone&apos;s life. After taking my first programming course, I found a different way into the same impulse: building tools that help people understand, create, or do something they couldn&apos;t do before.
          </p>
          <p>
            Most of my time now goes toward building software, reading, and exploring ideas around education, language, history, and entrepreneurship. I like projects that combine clear thinking with practical execution.
          </p>
          <p>
            Outside of work, I read historical literature, build side projects, watch movies, and play strategy games about history, politics, and economic systems.
          </p>

          <div className="pt-4 flex flex-col items-start gap-4 text-gray-500 text-sm md:text-base clear-both">


            <div className="flex items-center space-x-6">
              <Link
                href="https://www.linkedin.com/in/hugh-gramelspacher"
                target="_blank"
                className="hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="https://github.com/hughgramel"
                target="_blank"
                className="hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </Link>
              <a
                href="mailto:hughgramelspacher@gmail.com"
                className="hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
