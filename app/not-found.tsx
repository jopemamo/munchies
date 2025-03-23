export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-xl md:text-display mb-5 md:mb-8">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="bg-black text-white px-6 py-2 rounded-lg">
        Go Home
      </a>
    </div>
  )
}
