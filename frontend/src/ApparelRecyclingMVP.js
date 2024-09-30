import React, { useState, useEffect } from 'react';

const ApparelRecyclingMVP = () => {
  const [submissions, setSubmissions] = useState([]);
  const [formData, setFormData] = useState({
    itemType: '',
    condition: '',
    size: '',
    color: '',
    preferredMethod: ''
  });
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissions([{ ...formData, id: Date.now() }, ...submissions]);
    setFormData({
      itemType: '',
      condition: '',
      size: '',
      color: '',
      preferredMethod: ''
    });
    setShowAlert(true);
    const data = await fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_type: formData.itemType,
        color: formData.color,
        size: formData.size,
        condition: formData.condition,
        preferred: formData.preferredMethod,
      })
    });
    if (data.ok) console.log("working fine");
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const deleteSubmission = (id) => {
    setSubmissions(submissions.filter(submission => submission.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-600">
          Apparel Recycling Platform
        </h1>
        
        {showAlert && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded shadow-md transition-opacity duration-300">
            Your item has been submitted for recycling!
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemType">
              Item Type
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="itemType"
              type="text"
              name="itemType"
              value={formData.itemType}
              onChange={handleInputChange}
              required
              placeholder="e.g., T-shirt, Jeans, Dress"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condition">
              Condition
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleInputChange}
              required
            >
              <option value="">Select condition</option>
              <option value="new">New</option>
              <option value="gently-used">Gently Used</option>
              <option value="worn">Worn</option>
              <option value="damaged">Damaged</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
              Size
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="size"
              type="text"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              required
              placeholder="e.g., S, M, L, XL, 32, 34"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
              Color
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="color"
              type="text"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              required
              placeholder="e.g., Red, Blue, Green"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredMethod">
              Preferred Method
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredMethod"
              name="preferredMethod"
              value={formData.preferredMethod}
              onChange={handleInputChange}
              required
            >
              <option value="">Select method</option>
              <option value="recycle">Recycle</option>
              <option value="donate">Donate</option>
              <option value="dispose">Proper Disposal</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Submit Item
            </button>
          </div>
        </form>

        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Your Submissions</h2>
          {submissions.length === 0 ? (
            <p className="text-gray-600">No submissions yet.</p>
          ) : (
            <ul className="space-y-3">
              {submissions.map((submission) => (
                <li key={submission.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                  <span className="text-gray-800">
                    {submission.itemType} - {submission.condition} - {submission.preferredMethod}
                  </span>
                  <button
                    onClick={() => deleteSubmission(submission.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-blue-100 rounded-lg p-6 shadow-lg">
          <h2 
            className="text-2xl font-bold mb-3 flex items-center cursor-pointer text-blue-600"
            onClick={() => setIsInfoOpen(!isInfoOpen)}
          >
            <span>About Our Process</span>
            <svg 
              className={`ml-2 h-6 w-6 transform transition-transform duration-200 ${isInfoOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </h2>
          {isInfoOpen && (
            <p className="text-gray-700 mt-2 leading-relaxed">
              We ensure that your unused or worn-out apparel is handled responsibly. 
              Depending on the condition, items are either recycled, donated to those in need, 
              or disposed of in an environmentally friendly manner. Our process involves 
              sorting items, determining their best use, and partnering with local organizations 
              to maximize the positive impact of your contributions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApparelRecyclingMVP;