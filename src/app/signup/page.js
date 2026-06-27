import AuthPage from "@/components/auth/AuthPage";

export const metadata = {
  title: "Create Account | DINECODE Ahmedabad's Luxury Dining Guide",
  description: "Join DINECODE to find, book, and enjoy the finest dining experiences in Ahmedabad. Sign up for a complimentary membership today.",
};

export default function SignupPage() {
  return <AuthPage initialMode="signup" />;
}
