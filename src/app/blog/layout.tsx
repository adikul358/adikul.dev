export async function generateMetadata() {
  return {
    title: "Blog – Aditya Kulshrestha",
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
