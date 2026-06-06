export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between">

          <div>
            <h2 className="text-white text-2xl font-bold">
              ACCADMIX
            </h2>

            <p className="text-gray-500 mt-3">
              Future Ready Education Platform
            </p>
          </div>

          <div className="flex gap-8 text-gray-400 mt-6 md:mt-0">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500">
          © 2025 ACCADMIX. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}