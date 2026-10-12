import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/page-header";

export default function OrdersPage() {
  return (
    <>
      <PageHeader
        title="รายการคำสั่งซื้อ"
        description="ดูคำสั่งซื้อหนังสือจากร้านค้าทั้งหมด และสถานะการส่งและการชำระเงิน"
      />
      <ComingSoon message="ตารางคำสั่งซื้อจะแสดงที่นี่ในขั้นถัดไป" />
    </>
  );
}
