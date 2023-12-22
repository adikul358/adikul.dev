"use client"

import React, { useEffect, useState } from "react"
import { FaRegArrowAltCircleDown } from "react-icons/fa";
// import { pdfjs, Document, Page } from "react-pdf";

function Resume() {

	const RESUMEPATH = process.env.NEXT_PUBLIC_RESUME_PATH || ""
	const RESUMENAME = RESUMEPATH.split("/").reverse()[0]

	// const downRes = () => {
	// 	saveAs(RESUMEPATH, RESUMENAME)
	// }

	// const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);
  // }
	// useEffect(() => {
	// 	pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
	// 	console.log(RESUMEPATH)
	// }, [])

	return (
    <div className="flex flex-col page-width py-12">
			<div className="flex flex-row items-center justify-between mb-8 pb-3 border-b-4 border-primary-700 w-full">
				<h1 className="pb-0 border-0">Resume</h1>
				<a href={RESUMEPATH} download={RESUMENAME}>
					<button className="px-[20px] py-[6px] rounded gap-x-2">
						<span>Download</span>
						<FaRegArrowAltCircleDown />
					</button>
				</a>
			</div>
			{/* <div>
				<Document file={RESUMEPATH} onLoadSuccess={onDocumentLoadSuccess} className="w-full aspect-[0.707]">
					{[...Array(numPages)].map((v,i) => <Page pageNumber={i+1} key={i}  />)}
				</Document>
			</div> */}
			{/* <embed src="/Aditya Kulshrestha – Resume.pdf" type="application/pdf" className="aspect-[0.707]" /> */}

			{/* <iframe src={RESUMEPATH + "#view=fitH"} className="aspect-[0.707]"></iframe> */}

			<img src="/res1.png" alt="resume_1" className="w-full invert border border-black/20" />

		</div>
	)
}

export default Resume