import axios from "axios";
import { payment_url, razorpay_key_id } from "../utils/Api";
import { useNavigate } from "react-router-dom";

function PaymentButton({orderId}) {
  const navigate = useNavigate();
  const handlePayment = async () => {
    try {
      // Step 1: Create order on backend
      const { data } = await axios.post(`${payment_url}/api/payments/create/${orderId}`, {},{withCredentials:true});
      const {payment} = data;
      console.log("Payment:",payment);
      // Step 2: Razorpay options
      const options = {
        key: razorpay_key_id, // from .env (frontend can use only key_id)
        amount: 100000,
        currency: payment.currency,
        name: "Life",
        description: "Test Transaction",
        order_id: payment.razorpayOrderId,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
          console.log(response);
          try {
            await axios.post(`${payment_url}/api/payments/verify`, {
              razorpayOrderId: razorpay_order_id,
              paymentId: razorpay_payment_id,
              signature: razorpay_signature,
            },{withCredentials:true});
            alert("Payment successful!"); 
          } catch (err) {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handlePayment} style={{ padding: "10px 20px", background: "#3399cc", color: "#fff", border: "none", borderRadius: "5px" }}>
      Pay Now
    </button>
  );
}

export default PaymentButton;