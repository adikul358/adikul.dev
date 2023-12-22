export async function generateMetadata() {
  return {
    title: "Resume – Aditya Kulshrestha",
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
