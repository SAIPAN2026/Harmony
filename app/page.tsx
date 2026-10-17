import { ProductArt, type ArtKind } from "./ProductArt";

const LINE_ID = "@sai12";
const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;

const features = [
  {
    title: "เครื่องสำอางหลากหลาย",
    text: "ตั้งแต่ลิป รองพื้น ไปจนถึงสกินแคร์ มีให้เลือกครบ ไม่ต้องไปหาหลายร้าน",
    icon: "palette",
  },
  {
    title: "คัดสรรมาอย่างใส่ใจ",
    text: "เลือกสินค้าที่เราลองใช้เองและมั่นใจ เพื่อให้ผิวของคุณได้สิ่งที่ดี",
    icon: "heart",
  },
  {
    title: "ปรึกษาได้เป็นกันเอง",
    text: "ไม่แน่ใจว่าเฉดไหนเหมาะ ทักไลน์มาคุยได้เลย เราช่วยแนะนำแบบเพื่อนสาว",
    icon: "chat",
  },
] as const;

const products: { name: string; detail: string; price: string; art: ArtKind }[] = [
  { name: "ลิปสติก", detail: "สีสวยติดทน หลายเฉด", price: "199 บาท", art: "lipstick" },
  { name: "ลิปทินท์", detail: "ปากฉ่ำ ดูเป็นธรรมชาติ", price: "159 บาท", art: "tint" },
  { name: "คุชชั่น", detail: "ปกปิดเนียน บางเบา", price: "390 บาท", art: "cushion" },
  { name: "อายแชโดว์", detail: "พาเลทโทนอบอุ่น แต่งง่าย", price: "350 บาท", art: "palette" },
  { name: "บลัชออน", detail: "แก้มอมชมพูน่ารัก", price: "250 บาท", art: "blush" },
  { name: "มาสคาร่า", detail: "ขนตางอนยาว ไม่จับตัว", price: "220 บาท", art: "mascara" },
  { name: "เซรั่ม", detail: "ผิวชุ่มชื้น พร้อมแต่งหน้า", price: "450 บาท", art: "serum" },
  { name: "ครีมบำรุง", detail: "บำรุงล้ำลึก อ่อนโยน", price: "390 บาท", art: "cream" },
];

const faqs = [
  {
    q: "สั่งซื้อสินค้าอย่างไร?",
    a: `ทักไลน์ ${LINE_ID} แจ้งสินค้าที่ต้องการ ทางร้านจะสรุปยอดและวิธีชำระเงินให้ค่ะ`,
  },
  {
    q: "ไม่รู้ว่าเฉดไหนเหมาะกับตัวเอง ทำอย่างไรดี?",
    a: "ส่งรูปหรือบอกสีผิวมาทางไลน์ได้เลย ทางร้านยินดีช่วยแนะนำเฉดที่เข้ากับคุณค่ะ",
  },
  {
    q: "มีบริการจัดส่งไหม?",
    a: "มีค่ะ จัดส่งทั่วประเทศ สอบถามค่าส่งและระยะเวลาได้ทางไลน์",
  },
  {
    q: "มาซื้อที่ร้านได้ไหม?",
    a: "ได้ค่ะ ดูที่อยู่และเวลาเปิดร้านได้ในส่วน ‘ติดต่อเรา’ ด้านล่าง",
  },
];

function Icon({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "palette":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.8-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" />
          <circle cx="7.5" cy="11" r="1.2" />
          <circle cx="10.5" cy="7.5" r="1.2" />
          <circle cx="15" cy="7.8" r="1.2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5h16v11H9l-5 4V5Z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-6-5.3-6-11a6 6 0 0 1 12 0c0 5.7-6 11-6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        </svg>
      );
    default:
      return null;
  }
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line px-7 py-3.5 text-lead font-medium text-white shadow-lg shadow-line/25 transition hover:brightness-95 active:scale-[0.98] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s5.9-3.5 8.1-6C21.4 14.2 22 12.7 22 11c0-4.4-4.5-8-10-8Z" />
      </svg>
      ทักไลน์เลย {LINE_ID}
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-2 text-body font-medium text-rose">{eyebrow}</p>
      <h2 className="text-h2 font-medium text-ink">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-petal/50 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-heading text-h3 font-medium text-rose-dark">
            Harmony
          </a>
          <nav className="hidden gap-6 text-ink-soft md:flex">
            <a href="#features" className="hover:text-rose">จุดเด่น</a>
            <a href="#products" className="hover:text-rose">สินค้า</a>
            <a href="#faq" className="hover:text-rose">คำถาม</a>
            <a href="#contact" className="hover:text-rose">ติดต่อเรา</a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blush to-cream">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-petal/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-petal/40 blur-2xl" />
          <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center md:pb-28 md:pt-24">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-ink-soft">
              <Icon name="sparkle" className="h-5 w-5 text-rose" />
              เครื่องสำอางสำหรับคุณผู้หญิง
            </span>
            <h1 className="mx-auto max-w-3xl text-h1 font-medium text-ink">
              สวยในแบบที่เป็นคุณ
              <br />
              <span className="text-rose-dark">กับ Harmony</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lead text-ink-soft">
              รวมเครื่องสำอางหลากหลาย คัดมาให้ผู้หญิงทุกคน พร้อมให้คำแนะนำเป็นกันเองเหมือนเพื่อนสนิท
            </p>
            <div className="mt-8">
              <LineButton className="w-full sm:w-auto" />
            </div>
            <div className="mx-auto mt-12 flex max-w-md items-end justify-center gap-2 sm:gap-6" aria-hidden>
              <ProductArt kind="serum" className="h-20 w-20 sm:h-28 sm:w-28" />
              <ProductArt kind="lipstick" className="h-24 w-24 sm:h-32 sm:w-32" />
              <ProductArt kind="cushion" className="h-20 w-20 sm:h-28 sm:w-28" />
              <ProductArt kind="tint" className="h-16 w-16 sm:h-24 sm:w-24" />
            </div>
          </div>
        </section>

        {/* จุดเด่น */}
        <section id="features" className="scroll-mt-16 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="ทำไมต้อง Harmony" title="เราใส่ใจทุกความสวยของคุณ" />
            <div className="grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-petal/50">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-rose">
                    <Icon name={f.icon} />
                  </div>
                  <h3 className="mb-2 text-h3 font-medium">{f.title}</h3>
                  <p className="text-ink-soft">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* สินค้า */}
        <section id="products" className="scroll-mt-16 bg-blush/60 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="สินค้าของเรา" title="เลือกสิ่งที่ใช่สำหรับคุณ" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {products.map((p, i) => (
                <div
                  key={p.name}
                  className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-petal/50"
                >
                  <div
                    className={`flex aspect-square items-center justify-center ${
                      ["bg-blush", "bg-cream", "bg-petal/40", "bg-blush/50"][i % 4]
                    }`}
                  >
                    <ProductArt kind={p.art} className="h-3/5 w-3/5" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-h3 font-medium">{p.name}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-ink-soft">{p.detail}</p>
                    <p className="mt-2 font-semibold text-rose-dark">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-ink-soft">
              ยังมีสินค้าอีกมาก ทักไลน์มาดูสินค้าทั้งหมดได้เลยค่ะ
            </p>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="scroll-mt-16 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="คำถามที่พบบ่อย" title="มีข้อสงสัย? เรามีคำตอบ" />
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-white px-6 py-4 shadow-sm ring-1 ring-petal/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                    {f.q}
                    <span className="text-h3 text-rose transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="scroll-mt-16 px-4 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-rose to-rose-dark p-8 text-center text-white md:p-12">
            <h2 className="text-h2 font-medium">ติดต่อเรา</h2>
            <p className="mt-2 text-lead text-white/90">อยากได้สินค้าตัวไหน หรืออยากปรึกษา ทักมาได้เลยนะคะ</p>
            <div className="mx-auto mt-8 grid max-w-md gap-4 text-left">
              <div className="flex items-start gap-3 rounded-2xl bg-white/15 p-4">
                <Icon name="pin" className="h-6 w-6 shrink-0" />
                <div>
                  <p className="font-medium">ที่อยู่ร้าน</p>
                  <p className="text-white/90">73/6 หมู่ 6</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white/15 p-4">
                <Icon name="clock" className="h-6 w-6 shrink-0" />
                <div>
                  <p className="font-medium">เวลาเปิดร้าน</p>
                  <p className="text-white/90">ทุกวัน 10:00 – 20:00 น.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <LineButton className="w-full sm:w-auto" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-petal/50 px-4 py-8 text-center text-ink-soft">
        <p className="font-heading text-h3 text-rose-dark">Harmony</p>
        <p className="mt-1">เครื่องสำอางสำหรับคุณผู้หญิง · LINE {LINE_ID}</p>
        <p className="mt-3 text-sm">© 2026 Harmony</p>
      </footer>
    </>
  );
}
