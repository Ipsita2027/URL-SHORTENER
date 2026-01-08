import {useSelector} from "react-redux";
import UrlForm from "../components/UrlForm";
import { motion } from "framer-motion";

function Dashboard() {
  const {user}=useSelector((state)=>state.auth)
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          URL Shortener
        </h1>

        {/* Two-column layout */}
        <div className="flex gap-6 items-stretch">
          
          {/* Left: Form */}
          <div className="w-1/2">
            <UrlForm />
          </div>

          {/* Right: Scrollable URL list */}
          <div className="w-1/2 border-l pl-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              Your URLs
            </h2>

            {/* Scroll container */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              {user?.length ? (
                user.map((url) => (
                  <motion.div
                    key={url.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 bg-gray-50 rounded-md shadow-sm border border-border/40 hover:shadow-md transition-shadow"
                  >
                    <p className="text-sm text-gray-600 truncate">
                      {url.clicks}
                    </p>
                    <a
                      href={`http://localhost:4000/${url.short_url}`}
                      className="text-blue-600 text-sm font-medium"
                    >
                      {url.short_url}
                    </a>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">
                  No URLs created yet
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
