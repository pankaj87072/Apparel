import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import ApparelRecyclingMVP from '../ApparelRecyclingMVP';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();  // Initialize navigate for page redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch('/user/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
    if (resp.ok) {
      setIsLoggedIn(false);
      alert("Login successful!");
    } else if (resp.status === 400) {
      alert("Enter correct details");
    } else {
      alert("Wrong email or password, try again!");
    }
  };

  const handleRegister = () => {
    navigate('/signup');  // Redirect to the SignUpPage
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Sign Up Button */}
            <div className="text-center mt-4">
              <button
                onClick={handleRegister}  // Redirect to sign-up page
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                Don't have an account? Sign Up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ApparelRecyclingMVP />
      )}
    </div>
  );
}

export default LoginPage;