export async function generateMetadata() {
  return {
    title: "Projects – Aditya Kulshrestha",
  };
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
		<>
			{children}
		</>
  )
}
