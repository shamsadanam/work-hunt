import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import GoogleAuth from "./GoogleAuth";
import { connect } from "react-redux";

const Header = ({ isSignedIn }) => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-base front-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            {/* <Link
              to="/register"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Register
            </Link> */}
            {/* <Link
              to="/register/applicant"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Register as Applicant
            </Link>
            <Link
              to="/register/recruiter"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Register as Recruiter
            </Link> */}
            <Link
              to="/feeds"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Feeds
            </Link>
            {isSignedIn && (
              <Link
                to="/profile"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Profile
              </Link>
            )}
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact Us
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <GoogleAuth />
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8"></div>
              <div>
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
              <div>
                <Link
                  to="/register/applicant"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Register as Applicant
                </Link>
              </div>
              <div>
                <Link
                  to="/register/recruiter"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Register as Recruiter
                </Link>
              </div>
              <div>
                <Link
                  to="/profile"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Profile
                </Link>
              </div>
              <div className="flex justify-center">
                <GoogleAuth />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, null)(Header);
