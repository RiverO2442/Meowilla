import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Select } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const onLogo = () => {
    navigate(`/`);
  };
  const onMedia = () => {
    navigate(`/`);
  };
  return (
    <div
      className={`"w-full h-auto items-center justify-center"2 ${
        location.pathname === "/login" && "hidden"
      }`}
    >
      <header className=" bg-blue-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <img
                onClick={() => {
                  onLogo();
                }}
                src="/logo.png"
                alt="Logo"
                className="w-auto h-16 min-w-50 cursor-pointer"
              />
            </div>
            <div
              className={`flex gap-2 ${location.pathname !== "/" && "hidden"}`}
            >
              <Input
                size="large"
                placeholder="Search media by name"
                prefix={<SearchOutlined />}
                allowClear
                onChange={(e) => {}}
                onPressEnter={() => {}}
              />
              <Select
                placeholder="Type"
                size="large"
                style={{ width: 120 }}
                onChange={() => {}}
                options={[
                  { value: "all", label: "All" },
                  { value: "image", label: "Image" },
                  { value: "video", label: "Video" },
                ]}
              />
            </div>
            <div className="flex gap-1">
              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a
                  href="/"
                  title=""
                  className="text-base font-medium text-black transition-all duration-200 hover:text-white focus:text-white"
                >
                  <p className="text-white hover:text-blue-900 focus:text-blue-900">
                    Media
                  </p>
                </a>
              </div>
              <a
                href="#"
                title=""
                className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold  transition-all duration-200 bg-blue-500 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700 hover:text-blue-900 focus:text-blue-900"
                role="button"
              >
                <p className="text-white">Login</p>
              </a>
            </div>
          </nav>
          {/* <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-white focus:text-white"
                >
                  Features
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-white focus:text-white"
                >
                  Solutions
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-white focus:text-white"
                >
                  Resources
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-white focus:text-white"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-blue-600 transition-all duration-200 bg-white border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get started now
              </a>
            </div>
          </nav> */}
        </div>
      </header>
    </div>
  );
}
