export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <search> {children}</search>;
}
