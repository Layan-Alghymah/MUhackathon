import Image from "next/image";
import { siteConfig, navLinks, contact } from "@/data/site";
import { organizer } from "@/data/partners";
import { toArabicDigits } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { RegisterButton } from "@/components/ui/CtaButtons";

export function Footer() {
  const year = toArabicDigits(new Date().getFullYear());
  const hasContact = Boolean(
    contact.email || contact.phone || contact.inquiriesGroupUrl,
  );

  return (
    <footer className="mt-24 border-t border-border bg-surface-alt">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        {/* نبذة + منظّم */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="relative block size-14 overflow-hidden rounded-xl bg-white ring-1 ring-border">
              <Image
                src={organizer.logo}
                alt={`شعار ${organizer.name}`}
                fill
                sizes="56px"
                className="object-contain p-1.5"
              />
            </span>
            <div>
              <div className="text-sm font-bold">{siteConfig.name}</div>
              <div className="text-xs text-muted-foreground">
                تنظيم {siteConfig.organizer}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        {/* روابط سريعة */}
        <nav aria-label="روابط سريعة" className="md:col-span-3">
          <h3 className="text-sm font-bold">روابط سريعة</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* تواصل (يظهر فقط عند توفره) + CTA */}
        <div className="md:col-span-4">
          {hasContact && (
            <>
              <h3 className="text-sm font-bold">التواصل</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Icon name="Mail" className="size-4" />
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Icon name="Phone" className="size-4" />
                    {toArabicDigits(contact.phone)}
                  </a>
                )}
                {contact.inquiriesGroupUrl && (
                  <a
                    href={contact.inquiriesGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Icon name="MessageCircle" className="size-4" />
                    مجموعة الاستفسارات
                  </a>
                )}
              </div>
            </>
          )}
          <div className={hasContact ? "mt-5" : ""}>
            <h3 className="mb-4 text-sm font-bold">انضم إلى الهاكثون</h3>
            <RegisterButton size="md" />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-start">
          <p>
            © {year} {siteConfig.organizer}. جميع الحقوق محفوظة.
          </p>
          <p>{siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
