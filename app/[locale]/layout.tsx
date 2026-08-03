import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import AIAssistant from "@/components/AIAssistant";
import Feedback from "@/components/Feedback";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as "en" | "ne")) {
    notFound();
  }

  const messages = await getMessages({locale});

  console.log("Current locale:", locale);
  console.log("Navigation.home =", messages.Navigation.home);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <AIAssistant />
      {children}
    </NextIntlClientProvider>
  );
}