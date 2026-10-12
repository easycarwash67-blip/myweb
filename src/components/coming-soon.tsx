import { InboxIcon } from "@/components/icons";

// กล่องบอกว่าส่วนนี้จะทำในขั้นถัดไป
export default function ComingSoon({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center">
      <InboxIcon className="h-10 w-10 text-muted" />
      <p className="mt-4 text-lg font-medium">ยังไม่มีข้อมูล</p>
      <p className="mt-1 text-muted">{message}</p>
    </div>
  );
}
