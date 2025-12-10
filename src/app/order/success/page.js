export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold text-green-600">
          🎉 Order Successful!
        </h1>
        <p className="text-gray-700 mt-3">
          Your order has been placed and a confirmation email was sent!
        </p>

        <a
          href="/"
          className="mt-6 inline-block bg-yellow-500 text-white px-5 py-3 rounded-lg"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
