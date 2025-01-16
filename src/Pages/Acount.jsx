import React from 'react';
import {Link} from 'react-router';


function Account() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-10">
        <nav className="text-sm text-gray-600 mb-4">
          <a href="#" className="hover:text-blue-500"><Link to="/">Home</Link></a> / <span>My Account</span>
        </nav>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
          <aside className="w-full md:w-1/3 text-gray-700">
            <h3 className="font-semibold mb-4">Manage My Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">Address Book</a>
              </li>
            </ul>

            <h3 className="font-semibold mt-8 mb-4">My Orders</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">All Orders</a>
              </li>
              <li>
                <a href="#" className="hover:underline">My Returns</a>
              </li>
              <li>
                <a href="#" className="hover:underline">My Cancellations</a>
              </li>
            </ul>
          </aside>

          <section className="w-full md:w-2/3">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Edit Your Profile</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Surat, Gujarat"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-gray-700 font-semibold mb-4">Password Changes</h3>
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Account;
