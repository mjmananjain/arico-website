import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { copy, navItems, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-glass-950 text-mist-50">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Wordmark className="text-[1.75rem]" />
            <p className="mt-6 max-w-[36ch] text-body text-mist-300">{copy.footer.contact}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4 lg:col-start-9">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body text-mist-300 transition-colors duration-300 ease-standard hover:text-mist-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal and social links to be added once the pages and accounts exist. */}
        <div className="mt-20 border-t border-glass-700 pt-6 text-caption text-mist-300">
          © {siteConfig.name}
        </div>
      </Container>
    </footer>
  );
}
