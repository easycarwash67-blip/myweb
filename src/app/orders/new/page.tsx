import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/page-header";

export default function NewOrderPage() {
  return (
    <>
      <PageHeader
        title="เพิ่มคำสั่งซื้อ"
        description="ฝ่ายขายบันทึกคำสั่งซื้อใหม่จากร้านค้า"
      />
      <ComingSoon message="แบบฟอร์มเพิ่มคำสั่งซื้อจะแสดงที่นี่ในขั้นถัดไป" />
    </>
  );
}
