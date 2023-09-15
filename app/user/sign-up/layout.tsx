import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Sign Up',
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
