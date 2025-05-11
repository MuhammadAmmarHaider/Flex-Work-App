import React from 'react';
import { Link } from 'react-router-dom';
export default function Whatsnew() {
  return (
    <div className="p-6">
      <div className="flex space-x-8">
        {/* Upwork Update */}
        <div className="text-center">
          <Link Link to="/upwork-update" className="text-xl font-semibold text-blue-500 hover:text-blue-700">Upwork Update</Link>
          <p className="text-gray-500 mt-2">Check out our latest products, partners, and enhancements.</p>
        </div>

        {/* Release Notes */}
        <div className="text-center">
          <Link to ="/release-notes" className="text-xl font-semibold text-blue-500 hover:text-blue-700">Release Notes</Link>
          <p className="text-gray-500 mt-2">Our latest product news, additions, and improvements.</p>
        </div>

        {/* Blog */}
        <div className="text-center">
        <Link to="/blog" className="text-xl font-semibold text-blue-500 hover:text-blue-700">Blog</Link>
          <p className="text-gray-500 mt-2">News and stories from the world’s work marketplace.</p>
        </div>

        {/* Research Institutes */}
        <div className="text-center">
        <Link to="/research" className="text-xl font-semibold text-blue-500 hover:text-blue-700">Research Institutes</Link>
          <p className="text-gray-500 mt-2">Insights and tools for business leaders navigating a new world of work.</p>
        </div>
      </div>
    </div>
  );
}
