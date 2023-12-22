import React from "react"
import { FaGlobe, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import AKLogo from "./AKLogo"
import AKLogotype from "./AKLogotype"
import NAVITEMS from "@/NAVITEMS"

function SitemapLink(
	{label, link}: {label: string, link?: string}
) {
	return (
		<Link href={link || "/" + label.toLowerCase()}>
			<span className="sitemap-link">
				{label}
			</span>
		</Link>
	)
}

function SocialLink(
	{icon, label, link, newTab}: {icon: React.ReactNode, label: string, link: string, newTab?: boolean}
) {
	const newTabProps = newTab ? {target: "_blank", rel: "noopener noreferrer"} : {}
	return (
		<a href={link} {...newTabProps}>
			<div className="social-link">
				<div className="w-[24px]">{icon}</div>
				<span>{label}</span>
			</div>
		</a>
	)
}


function Footer() {
	return (
		<footer className="bg-primary-800/75 text-white/80 mt-auto">
			<div className="flex flex-col page-width pt-12 pb-6">

				{/* Name with underline */}
				<div className="flex flex-row justify-between mb-12 text-white/80">
					<div className="flex flex-col">
						<span className="text-2xl mb-3 font-semibold font-display">
							<AKLogotype />
						</span>
						<div className="w-[60px] h-[4px] bg-white/80"></div>
					</div>
					<span className="text-5xl max-sm:text-4xl max-lg:pr-6 max-sm:pr-0">
						<AKLogo />
					</span>
					
				</div>

				{/* Footer body */}
				<div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-between items-between">

					{/* Sitemap */}
					<div className="flex flex-col gap-y-2">
						<SitemapLink label="Home" link="/" />
						{NAVITEMS.map(({label,link},i) => <SitemapLink label={label} link={link} key={i} />)}
					</div>

					{/* Contact Links */}
					<div className="grid grid-cols-2 sm:gap-x-10 max-sm:grid-cols-1 max-sm:gap-y-3">
						<div className="flex flex-col gap-y-3 text-white/80 text-sm ">
							<SocialLink label="+91 78408 69129" link="tel:+917840869129" icon={<FaPhone className="scale-x-[-1]" />} />
							<SocialLink label="hello@adikul.dev" link="mailto:hello@adikul.dev" icon={<FaEnvelope />} />
							{/* <SocialLink label="adikul.dev" link="https://adikul.dev" icon={<FaGlobe />} /> */}
						</div>
						<div className="flex flex-col gap-y-3 text-white/80 text-sm ">
							<SocialLink label="/in/adikul358" link="https://linkedin.com/in/adikul358" icon={<FaLinkedin />} newTab />
							<SocialLink label="/adikul358" link="https://github.com/adikul358" icon={<FaGithub />} newTab />
						</div>
					</div>
				</div>

				<span className="mt-24 max-sm:mt-12 font-display">
					{(new Date()).getFullYear()} © Aditya Kulshrestha
				</span>
			</div>
		</footer>
	)
}

export default Footer