import React from 'react'
import { FaGlobe, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"

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
	{icon, label, link}: {icon: React.ReactNode, label: string, link: string}
) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className="social-link">
				<div className="w-[24px]">{icon}</div>
				<span>{label}</span>
			</div>
		</a>
	)
}


function Footer() {
	return (
		<footer className="bg-primary-800 text-white/80 mt-auto">
			<div className="flex flex-col max-w-5xl pt-12 pb-6 mx-auto">

				{/* Name with underline */}
				<span className="text-2xl mb-2 font-semibold font-display text-white/80\">
					Aditya Kulshrestha
				</span>
				<div className="w-[60px] h-[4px] bg-white/80 mb-12"></div>

				{/* Footer body */}
				<div className="flex flex-row justify-between items-between">

					{/* Sitemap */}
					<div className="flex flex-col">
						<div className="flex flex-col gap-y-3">
							<SitemapLink label="Home" link="/" />
							<SitemapLink label="Projects" />
							<SitemapLink label="Blog" />
							<SitemapLink label="Resume" link="/Aditya Kulshrestha – Resume.pdf" />
						</div>
					</div>

					{/* Contact Links */}
					<div className="grid grid-cols-2 gap-x-10">
						<div className="flex flex-col gap-y-3 text-white/80 text-sm ">
							<SocialLink label="+91 78408 69129" link="tel:+917840869129" icon={<FaPhone className="scale-x-[-1]" />} />
							<SocialLink label="hello@adikul.dev" link="mailto:hello@adikul.dev" icon={<FaEnvelope />} />
							<SocialLink label="adikul.dev" link="https://adikul.dev" icon={<FaGlobe />} />
						</div>
						<div className="flex flex-col gap-y-3 text-white/80 text-sm ">
							<SocialLink label="/in/adikul358" link="https://linkedin.com/in/adikul358" icon={<FaLinkedin />} />
							<SocialLink label="/adikul358" link="https://github.com/adikul358" icon={<FaGithub />} />
						</div>
					</div>
				</div>

				<span className="mt-24 font-display font-extralight">
					{(new Date()).getFullYear()} © Aditya Kulshrestha
				</span>
			</div>
		</footer>
	)
}

export default Footer