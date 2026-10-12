import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/page-header";

export default function SummaryPage() {
  return (
    <>
      <PageHeader
        title="สรุปยอด"
        description="ยอดขายรวม และร้านที่ยังไม่ชำระเงิน"
      />
      <ComingSoon message="ตัวเลขสรุปยอดจะแสดงที่นี่ในขั้นถัดไป" />
    </>
  );
}
