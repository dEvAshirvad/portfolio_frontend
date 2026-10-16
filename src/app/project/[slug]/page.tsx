import { getNeighbors, getWork, works } from "@/data/works";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

const rowLink =
  "py-4 border-b border-dashed flex justify-between gap-5 items-baseline focus-visible:outline focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-offset-4 hover:text-muted-foreground";

export function generateStaticParams() {
  return works
    .filter((work) => work.slug)
    .map((work) => ({ slug: work.slug as string }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const work = getWork(params.slug);
  if (!work) return { title: "Ashirvad Satapthy" };
  return { title: `${work.title} — Ashirvad Satapthy` };
}

function liveHost(href: string) {
  try {
    return new URL(href).host;
  } catch {
    return href;
  }
}

export default function ProjectPage({ params }: PageProps) {
  const work = getWork(params.slug);
  if (!work?.slug || !work.link) notFound();

  const { previous, next } = getNeighbors(work.slug);
  const paragraphs = (work.description ?? "").split(/\n\n+/).filter(Boolean);
  const facts = [
    ["Client", work.client],
    ["Budget", work.budget],
    ["Duration", work.duration],
    ["Year", work.year],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]));

  return (
    <div className="pb-32 pt-20 selection:bg-foreground selection:text-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {work.image ? (
            <Image
              src={work.image}
              alt={work.title}
              width={1500}
              height={844}
              priority
              className="md:col-span-5 w-full h-auto"
            />
          ) : null}

          <dl className="md:col-span-5 grid grid-cols-1 md:grid-cols-4 border-t border-dashed mt-10 md:mt-20">
            {facts.map(([label, value]) => (
              <div key={label} className="py-4 border-b border-dashed md:pr-5">
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="mt-2 tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>

          {paragraphs.length > 0 ? (
            <div className="md:col-span-3 md:mt-20 mt-10 space-y-6 text-lg md:text-xl text-muted-foreground leading-snug">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {work.technologies && work.technologies.length > 0 ? (
            <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-5 md:mt-20 mt-10">
              <h2 className="md:col-start-2 text-xl md:text-3xl text-muted-foreground">
                Stack
              </h2>
              <ul className="md:col-start-4 md:col-span-2 border-t border-dashed">
                {work.technologies.map((technology) => (
                  <li key={technology} className="py-4 border-b border-dashed">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {work.href ? (
            <a
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className={`md:col-span-5 md:mt-20 mt-10 ${rowLink}`}
            >
              <span>Visit live</span>
              <span className="text-muted-foreground">
                {liveHost(work.href)}
              </span>
            </a>
          ) : null}

          <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-5 md:mt-20 mt-10">
            {previous?.link ? (
              <Link href={previous.link} className={`md:col-span-2 ${rowLink}`}>
                <span className="text-muted-foreground shrink-0">Previous</span>
                <span className="text-right">{previous.title}</span>
              </Link>
            ) : (
              <div className="hidden md:block md:col-span-2" />
            )}
            {next?.link ? (
              <Link
                href={next.link}
                className={`md:col-span-2 md:col-start-4 ${rowLink}`}
              >
                <span className="text-muted-foreground shrink-0">Next</span>
                <span className="text-right">{next.title}</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
