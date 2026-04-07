export default function QuestionnaireLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Standalone layout — no dashboard navbar
  return <>{children}</>
}
