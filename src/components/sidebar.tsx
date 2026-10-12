"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookIcon, ChartIcon, ListIcon, PlusIcon } from "@/components/icons";

const menu = [
  { href: "/", label: "รายการคำสั่งซื้อ", short: "คำสั่งซื้อ", Icon: ListIcon },
  { href: "/orders/new", label: "เพิ่มคำสั่งซื้อ", short: "เพิ่มใหม่", Icon: PlusIcon },
  { href: "/summary", label: "สรุปยอด", short: "สรุปยอด", Icon: ChartIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-border bg-surface md:min-h-screen md:w-64 md:shrink-0 md:border-r md:border-b-0">
      <div className="flex items-center gap-3 px-4 py-4 md:px-6 md:py-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
          <BookIcon className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="font-semibold">สำนักพิมพ์อมตะ</p>
          <p className="text-sm text-muted">ระบบติดตามคำสั่งซื้อ</p>
        </div>
      </div>

      <nav className="grid grid-cols-3 gap-1 px-2 pb-3 md:flex md:flex-col md:px-3">
        {menu.map(({ href, label, short, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-center text-[0.95rem] transition-colors md:flex-row md:gap-3 md:px-3 md:py-2.5 md:text-left md:text-base ${
                active
                  ? "bg-brand-soft font-semibold text-brand"
                  : "text-foreground hover:bg-background"
              }`}
            >
              <Icon className="h-5 w-5" />
              {/* มือถือใช้ชื่อสั้น จะได้ไม่ตกบรรทัด */}
              <span className="md:hidden">{short}</span>
              <span className="hidden md:inline">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
