import React from 'react';


const all_article = () => {
  return (
    <>
    <div className='box-border'>
      <div className='p-2 max-w-5xl my-4 mx-auto'>
        <div className='flex mt-4 mb-12 justify-between items-center'>
          <a className='text-5xl font-bold'>Articles</a>
        </div>
        
        {/* article1 */}
        <div className="grid grid-cols-2 gap-32 mb-5">
            <div className="flex flex-col rounded-lg overflow-hidden border-2 shadow-2xl cursor-pointer">
              <img src="/images/garbage1.jpg" alt="garbage1" className="w-full h-full object-cover" />
              <div className="p-4">
                {/* title */}
                <h2 className="m-0 text-2xl font-bold">Waste Management in Sri Lanka: Challenges and Opportunities</h2>
                {/* summary */}
                <p className="m-0 text-base leading-normal">Most of the developing countries face the problem of managing waste properly. In 2012, cities world over, generated 1.3 billion tons of solid waste per year, amounting to a footprint of 1.2 kilograms per person, per day needless to state that with rapid population growth and urbanization, the municipal waste generation is expected to increase to 2.2 billion tons (MT) by 2025.</p>
                {/* author */}
                <div className="flex justify-between items-center mt-4 text-xs">
                  <a className="no-underline text-black">Lal Mervin Dharmasiri</a>
                  <time className="text-gray-500">2022-01-06 16:45</time>
                </div>
              </div>
            </div>
          
          {/* article2 */}
          
            <div className="flex flex-col rounded-lg overflow-hidden border-2 shadow-2xl cursor-pointer">
              <img src="/images/garbage2.jpg" alt="garbage2" className="w-full h-full object-cover" />
              <div className="p-4">
                {/* title */}
                <h2 className="m-0 text-2xl font-bold">Municipal Solid Waste Management Practices and Challenges in the Southeastern Coastal Cities of Sri Lanka</h2>
                {/* summary */}
                <p className="m-0 text-base leading-normal">Municipal solid waste management (MSWM) has become a major challenge in Sri Lanka for post-conflict development activities. Many urban areas are facing severe problems in managing 10 to 50 metric tons of waste per day.</p>
                {/* author */}
                <div className="flex justify-between items-center mt-4 text-xs">
                  <a className="no-underline text-black">Abdul Majeed Aslam Saja</a>
                  <time className="text-gray-500">2021-04-20 08.00</time>
                </div>
              </div>
            </div>
          
        </div>

        {/* article3 */}
        <div className="grid grid-cols-2 gap-32 mb-5 mt-16 ">
            <div className="flex flex-col rounded-lg overflow-hidden border-2 shadow-2xl cursor-pointer">
              <img src="/images/garbage3.jpg" alt="garbage3" className="w-full object-cover" />
              <div className="p-4">
                {/* title */}
                <h2 className="m-0 text-2xl font-bold">Innovative and collaborative: The future of plastic waste management in Sri Lanka</h2>
                {/* summary */}
                <p className="m-0 text-base leading-normal">The global production of plastic is currently estimated to be around 300 million tons per year, while plastic pollution in the marine environment alone is estimated to be around 9.5 million tons, with a staggering 1.5 million tons ending up in the ocean annually (Primary Microplastics in the Oceans, 2017).</p>
                {/* author */}
                <div className="flex justify-between items-center mt-4 text-xs">
                  <a className="no-underline text-black">J.K.Harischandra</a>
                  <time className="text-gray-500">2018-01-24 21.35</time>
                </div>
              </div>
            </div> 

          {/* article4 */}
          <div className="flex flex-col rounded-lg overflow-hidden border-2 shadow-2xl cursor-pointer">
              <img src="/images/garbage4.jpg" alt="garbage4" className="w-full h-full object-cover" />
              <div className="p-4">
                {/* title */}
                <h2 className="m-0 text-2xl font-bold">Has Colombo solved its garbage problem?</h2>
                {/* summary */}
                <p className="m-0 text-base leading-normal">Despite a number of concerns, ( check out my earlier blog for details ) the proposed development of a sanitary landfill site at Aruwakkalu close to Puttalam up on the west coast is going ahead and Colombo will have a short term solution at least to its garbage problem.The site at Aruwakkalu ( a disused limestone quarry) will cover 45 acres to begin with but could be could be expanded further if need arose.</p>
                {/* author */}
                <div className="flex justify-between items-center mt-4 text-xs">
                  <a className="no-underline text-black">Philbrighty</a>
                  <time className="text-gray-500">2018-06-29 13:15</time>
                </div>
              </div>
            </div>
        </div>

        {/* article5 */}
        <div className="grid grid-cols-2 gap-32 mb-5 mt-16">
          
            <div className="flex flex-col rounded-lg overflow-hidden border-2 shadow-2xl cursor-pointer">
              <img src="/images/garbage5.jpg" alt="garbage5" className="w-full object-cover" />
              <div className="p-4">
                {/* title */}
                <h2 className="m-0 text-2xl font-bold">GARBAGE DUMPING IN ENVIRONMENTALLY SENSITIVE AREAS</h2>
                {/* summary */}
                <p className="m-0 text-base leading-normal">Environmental Foundation (Guarantee) Limited filed a Fundamental Rights application in the Supreme Court (SC (Ref) No. 243/2017 pending support) objecting to the illegal disposal of solid waste in the Muthurajawela sanctuary, the Kotikawatta Garbage Disposal Site and several other locations, on the 14th of July 2017.</p>
                {/* author */}
                <div className="flex justify-between items-center mt-4 text-xs">
                  <a className="no-underline text-black">Chandra Gunathilake</a>
                  <time className="text-gray-500">2022-07-06 09:00</time>
                </div>
              </div>
            </div>

          {/* article6 */}
            <div className="flex flex-col rounded-lg overflow-hidden border-2 shadow-2xl cursor-pointer">
              <img src="/images/garbage6.jpg" alt="garbage6" className="w-full h-full object-cover" />
              <div className="p-4">
                {/* title */}
                <h2 className="m-0 text-2xl font-bold">Garbage disposal at Aruwakkalu, a hot mess</h2>
                {/* summary */}
                <p className="m-0 text-base leading-normal">Amidst an Appeal Court order to the heads of Wanathavilluwa Pradeshiya Sabha to allow the disposal of Colombo Municipal Council’s (CMC) garbage at the Aruwakkalu garbage dump without obstruction, its chairman vowed to “closely monitor the site”.The CMC was forced to transport about 600MT of garbage (roughly 200MT of non-recyclable and 400MT degradable) to the Rs. 19 billion Aruwakkalu sanitary landfill site.</p>
                {/* author */}
                <div className="flex justify-between items-center mt-4 text-xs">
                  <a className="no-underline text-black">Aanya Wipulasena</a>
                  <time className="text-gray-500">2019-08-11 11:45</time>
                </div>
              </div>
            </div>
        </div>
    
      </div>
    </div>
    </>
  )
}

export default all_article
