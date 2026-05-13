const crypto = require("crypto");
const Payment = require("./payment.model");

exports.paystackWebhook = async (req, res) => {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;

    const hash = crypto
      .createHmac("sha512", secret)
      .update(req.body)
      .digest("hex");

    const signature = req.headers["x-paystack-signature"];

    // Verify request is from Paystack
    if (hash !== signature) {
      return res.status(401).send("Invalid signature");
    }

    const event = JSON.parse(req.body);

    // =========================
    // HANDLE SUCCESS PAYMENT
    // =========================
    if (event.event === "charge.success") {
      const data = event.data;

      const reference = data.reference;

      const payment = await Payment.findOne({
        where: { reference },
      });

      if (!payment) {
        return res.status(404).send("Payment not found");
      }

      // update payment
      payment.status = "paid";
      payment.gatewayResponse = data;
      await payment.save();

      console.log("💰 Payment confirmed:", reference);

      // OPTIONAL: trigger receipt generation
      // await generateReceipt(payment.id)

      return res.status(200).send("OK");
    }

    res.status(200).send("Event ignored");
  } catch (error) {
    console.error(error);
    res.status(500).send("Webhook error");
  }
};
