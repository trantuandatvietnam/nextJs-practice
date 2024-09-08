"use server";

export async function submitForm(myName: string, formData: FormData) {
  const rawFormData = Object.fromEntries(formData);
  console.log("rawFormData", rawFormData);
  console.log("myName", myName);
}

export async function processPayment({
  cardNumber,
  expiryDate,
  cvv,
  amount,
}: any) {
  // Xử lý thanh toán trên server, sử dụng thông tin thẻ tín dụng đã được mã hóa
  try {
    // Ví dụ xử lý với một API thanh toán giả lập
    const paymentGatewayResponse = (await fakePaymentGateway({
      cardNumber,
      expiryDate,
      cvv,
      amount,
    })) as any;

    if (paymentGatewayResponse.success) {
      console.log("Payment successful:", paymentGatewayResponse);
      return { success: true, message: "Payment processed successfully" };
    } else {
      console.log("Payment failed:", paymentGatewayResponse.error);
      return { success: false, message: "Payment failed" };
    }
  } catch (error) {
    console.log("Error processing payment:", error);
    return { success: false, message: "Payment error" };
  }
}

// Hàm giả lập xử lý thanh toán với một cổng thanh toán (thay thế bằng API thực tế)
async function fakePaymentGateway({
  cardNumber,
  expiryDate,
  cvv,
  amount,
}: any) {
  // Logic để xử lý thanh toán
  // Ở đây là giả lập phản hồi thành công từ cổng thanh toán
  return { success: true };
}
