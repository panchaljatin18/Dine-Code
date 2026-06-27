import AuthPage from "@/components/auth/AuthPage";

export const metadata = {
  title: "Sign In | DINECODE Ahmedabad's Luxury Dining Guide",
  description: "Sign in to DINECODE to access luxury dining recommendations, exclusive tables, and restaurant bookings in Ahmedabad.",
};

export default function LoginPage() {
  return <AuthPage initialMode="login" />;
}
