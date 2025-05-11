import React, { useState } from 'react';

export default function UpworkBlog() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div className="text-center">
      <h2 className="text-green-600 font-bold text-2xl">Upwork Blog</h2>
      <p className="mt-4">Read updates on Upwork’s products, corporate initiatives, and partnerships to get insight into the world’s work marketplace.</p>

      {/* Navbar */}
      <nav className="mt-6">
        <ul className="flex justify-center space-x-8">
          <li>
            <button
              onClick={() => handleSelect('companyNews')}
              className="text-lg font-semibold text-gray-700 hover:text-green-600"
            >
              Company News
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect('productInnovation')}
              className="text-lg font-semibold text-gray-700 hover:text-green-600"
            >
              Product & Innovation
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect('peopleCulture')}
              className="text-lg font-semibold text-gray-700 hover:text-green-600"
            >
              People & Culture
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect('socialImpact')}
              className="text-lg font-semibold text-gray-700 hover:text-green-600"
            >
              Social Impact
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect('researchReports')}
              className="text-lg font-semibold text-gray-700 hover:text-green-600"
            >
              Research & Reports
            </button>
          </li>
        </ul>
      </nav>

      {/* Conditionally render images based on selection */}
      <div className="mt-6">
        {selected === 'companyNews' && (
          <div className="flex justify-center space-x-6">
            {/* First Image and Content */}
            <div className="text-center w-1/3">
              <img
                src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6735d3a8765054f2a1aafff3_upwork-smartsheet-header.png"
                alt="Power Up Your Projects: Smartsheet Vetted Talent Now on Upwork"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-2 text-lg font-semibold">
                Power Up Your Projects: Smartsheet Vetted Talent Now on Upwork
              </p>
              <p className="text-sm text-gray-600">November 14, 2024</p>
            </div>

            {/* Second Image and Content */}
            <div className="text-center w-1/3">
              <img
                src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/65ca5adaba267d5d0e6d8293_Customer%20Zero%20Blog%20Post%20Image.jpg"
                alt="How Upwork Drives Business Growth with a Flexible Workforce"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-2 text-lg font-semibold">
                How Upwork Drives Business Growth with a Flexible Workforce
              </p>
              <p className="text-sm text-gray-600">February 12, 2024</p>
            </div>

            {/* Third Image and Content */}
            <div className="text-center w-1/3">
              <img
                src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/65008048f98a7425e25f8216_WWL-cropped-header.png"
                alt="Work Without Limits 2023 Highlights"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-2 text-lg font-semibold">Work Without Limits 2023 Highlights</p>
              <p className="text-sm text-gray-600">September 12, 2023</p>
            </div>
          </div>
        )}

        {/* Other sections (Product Innovation, People & Culture, etc.) */}
        {selected === 'productInnovation' && (
  <div className="flex justify-center space-x-6 mt-6">
    {/* First Image and Content */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/680028ba0cf966d3211117b1_proactive%20testing%20Blog%20Post%20Image.png"
        alt="The Proactive Mindset for AI Development"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        The Proactive Mindset for AI Development, or: How I Learned to Start Worrying So My AI Model Doesn’t Bomb
      </p>
      <p className="text-sm text-gray-600">April 17, 2025</p>
    </div>

    {/* Second Image and Content */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/67b69665783d750724d26748_SmartAtHome_1277_GiantArtists_Exp08.19.2026-p-1600.jpg"
        alt="Building Safe and Transparent AI Solutions at Upwork"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Building Safe and Transparent AI Solutions at Upwork
      </p>
      <p className="text-sm text-gray-600">February 20, 2025</p>
    </div>

    {/* Third Image and Content */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/67460e7d47a8bd9a0f8c0fa1_Example%20Blog%20Post%20Image.png"
        alt="Upwork Helps Businesses Go Big, Even When They’re Small"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Upwork Helps Businesses Go Big, Even When They’re Small
      </p>
      <p className="text-sm text-gray-600">November 26, 2024</p>
    </div>
  </div>
)}

{selected === 'peopleCulture' && (
  <div className="flex justify-center space-x-6 mt-6">
    {/* First Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/67fead8cdff6f9889788a2e8_Header.png"
        alt="Upwork’s Global Impact in 2024"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Upwork’s Global Impact in 2024
      </p>
      <p className="text-sm text-gray-600">April 17, 2025</p>
    </div>

    {/* Second Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6567ce1e73149d9e8c184fcf_Zoe%CC%88%20Diamadi%20Q%26A%20Blog%20Post%20Image.jpg"
        alt="Q&A With Zoë Diamadi"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Reinventing Work in the Modern Enterprise Era: A Q&A With Upwork’s General Manager of Enterprise Zoë Diamadi
      </p>
      <p className="text-sm text-gray-600">November 30, 2023</p>
    </div>

    {/* Third Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/652fd6b859967a6775f903b6_Erica%20Gessert%20Blog%20Post%20Image.png"
        alt="Q&A With Erica Gessert"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Durable Growth of the World’s Work Marketplace: A Q&A With Upwork’s Chief Financial Officer Erica Gessert
      </p>
      <p className="text-sm text-gray-600">October 18, 2023</p>
    </div>
  </div>
)}

{selected === 'socialImpact' && (
  <div className="flex justify-center space-x-6 mt-6">
    {/* First Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/670d28654522fff5e527a062_upwork-business-plus-helps-hire.jpg"
        alt="Upwork Foundation Grants"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Upwork Foundation Grants $800K to Empower Youth and Close Tomorrow’s Skills Gap
      </p>
      <p className="text-sm text-gray-600">December 19, 2024</p>
    </div>

    {/* Second Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/673b84946528e451f98ee2e3_Green%20Freelancing%20Header%20Image.jpg"
        alt="Green Freelancers"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Green Freelancers on the Rise: Powering Sustainability Initiatives in Business
      </p>
      <p className="text-sm text-gray-600">November 20, 2024</p>
    </div>

    {/* Third Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6686349e8867f252661b6ef8_Upwork-Foundation-Header.jpg"
        alt="How The Upwork Foundation Keeps it Simple"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        How The Upwork Foundation Keeps it Simple
      </p>
      <p className="text-sm text-gray-600">July 8, 2024</p>
    </div>
  </div>
)}

{selected === 'researchReports' && (
  <div className="flex justify-center space-x-6 mt-6">
    {/* First Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/670568dee37f19ea5804b98c_Work%20Innovator%20Research%20Assistant%20Header%20Image.jpg"
        alt="Work Innovator Research Assistant"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Introducing the Work Innovator Research Assistant: AI-Powered Insights for Business Leaders
      </p>
      <p className="text-sm text-gray-600">October 11, 2024</p>
    </div>

    {/* Second Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/65cab108fe8badae601d1640_Gen%20AI%20Impact%20Blog%20Post%20Image.jpg"
        alt="Generative AI Impact"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Studying Generative AI’s Impact on Work
      </p>
      <p className="text-sm text-gray-600">February 13, 2024</p>
    </div>

    {/* Third Card */}
    <div className="text-center w-1/3">
      <img
        src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6541b3432ae590b2ef3b20f8_Upwork_Research.png"
        alt="Upwork Research Institute"
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-lg font-semibold">
        Introducing The Upwork Research Institute: Creating a Blueprint for the Future of Work
      </p>
      <p className="text-sm text-gray-600">November 2, 2023</p>
    </div>
  </div>
)}

      </div>
      <div className="text-left my-6">
  <h2 className="text-2xl font-bold">
    Join the world’s work marketplace
  </h2>
</div>

<div className="flex justify-center items-center gap-8 my-8">
  <img
    src="https://cdn.prod.website-files.com/5ec7d9f13fc8c0ec8a4c6b26/658eb203c7b40fc64165f36f_Find%20Talent.svg"
    alt="Find Talent"
    className="w-80 h-auto"
  />
  <img
    src="https://cdn.prod.website-files.com/5ec7d9f13fc8c0ec8a4c6b26/658eb2033d98b9ecd5133350_Find%20Projects.svg"
    alt="Find Projects"
    className="w-80 h-auto"
  />
</div>


    </div>
  );
}
