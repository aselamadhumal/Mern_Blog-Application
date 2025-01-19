import { Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Section */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Asela's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with any email and password or Google.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            {/* Username Field */}
            <div>
              <Label htmlFor="username" value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>
            {/* Email Field */}
            <div>
              <Label htmlFor="email" value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            {/* Password Field */}
            <div>
              <Label htmlFor="password" value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
            {/* Submit Button */}
            <Button gradientDuoTone="purpleToPink" type="submit" className="rounded-full w-full">
              Sign Up
            </Button>
            {/* Sign In Link */}
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
