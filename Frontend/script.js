const app = document.getElementById("app");

const renderWelcomePage = () => {
    app.innerHTML = `
        <div class="bg-gradient-to-br from-blue-300 via-indigo-400 to-purple-500 min-h-screen flex items-center justify-center">
            <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Trip Expense Tracker</h1>
                <p class="text-gray-600 mb-6">Easily manage your trip expenses, create groups, and capture memories with our intuitive platform.</p>
                <div class="flex justify-center space-x-4">
                    <a href="signup.html" class="px-6 py-2 bg-indigo-500 text-white rounded-lg text-lg hover:bg-indigo-600 transition">Sign Up</a>
                    <a href="login.html" class="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg text-lg hover:bg-gray-200 transition">Log In</a>
                </div>
                <div class="mt-8">
                    <img src="/images/trip-illustration.svg" alt="Trip Illustration" class="w-40 mx-auto">
                </div>
            </div>
        </div>
    `;
};

renderWelcomePage();
