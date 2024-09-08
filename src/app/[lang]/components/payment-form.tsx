"use client";
import { processPayment } from "@/app/action";

// Đây là Client Component

export default function PaymentForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Thu thập dữ liệu từ form
    const formData = new FormData(event.target);
    const cardNumber = formData.get("cardNumber");
    const expiryDate = formData.get("expiryDate");
    const cvv = formData.get("cvv");
    const amount = formData.get("amount");

    // Gọi Server Action để xử lý thanh toán
    const response = await processPayment({
      cardNumber,
      expiryDate,
      cvv,
      amount,
    });

    if (response.success) {
      alert("Thanh toán thành công!");
    } else {
      alert("Thanh toán thất bại. Vui lòng kiểm tra thông tin thẻ của bạn.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="cardNumber" placeholder="Card Number" required />
      <input
        type="text"
        name="expiryDate"
        placeholder="Expiry Date (MM/YY)"
        required
      />
      <input type="text" name="cvv" placeholder="CVV" required />
      <input type="number" name="amount" placeholder="Amount" required />
      <button type="submit">Pay Now</button>
    </form>
  );
}
