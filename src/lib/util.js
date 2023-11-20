
export const groupProject = (originalArray) => {
    const transformedArray = [];
    const categoryMap = new Map();
    originalArray.forEach((item) => {
        const { category, ...rest } = item;
        if (categoryMap.has(category)) {
            categoryMap.get(category).quantity += 1;
        } else {
            const newItem = { ...rest, category, quantity: 1 };
            categoryMap.set(category, newItem);
        }
    });
    categoryMap.forEach((item) => {
        transformedArray.push(item);
    });

    return transformedArray;
};

export const weekly_courses = [
    {
        title: 'Create an attractive product',
        description: 'Transform your product photography',
        image: '../../course-img-5.jpeg',
        caption: 'clock design'
    },
    {
        title: 'User Interface design',
        description: 'Transform your product photography',
        image: '../../cousre-img-2.jpeg',
        caption: 'phone desig'
    },
    {
        title: 'Create beautiful loto art',
        description: 'Transform your product photography',
        image: '../../course-img-4.jpeg',
        caption: 'clock design'
    },
    {
        title: 'How to manage products',
        description: 'Transform your product photography',
        image: '../../course-img-3.avif',
        caption: 'clock design'
    }
]


// div className="w-1/2 flex flex-col">
//                         <div className="flex flex-col mb-6">
//                             <img src="../../course-img-5.jpeg" alt="" className="w-full h-[80px] object-cover" />
//                             <div className="flex flex-col space-y-1">
//                                 <small className="text-[#8a8888] text-[10px] font-normal">clock design</small>
//                                 <h1 className="text-[12px] text-black font-bold leading-4">Create an attractive product photograph</h1>
//                                 <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col pr-10 mb-6">
//                             <img src="../../cousre-img-2.jpeg" alt="" className="w-full h-[80px] object-cover" />
//                             <div className="flex flex-col space-y-1">
//                                 <small className="text-[#8a8888] text-[10px] font-normal">phone design</small>
//                                 <h1 className="text-[12px] text-black font-bold leading-4">User Interface design</h1>
//                                 <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-1/2 pt-10">
//                         <div className="flex flex-col pl-10 mb-6">
//                             <img src="../../course-img-4.jpeg" alt="" className="w-full h-[80px] object-cover" />
//                             <div className="flex flex-col space-y-1">
//                                 <small className="text-[#8a8888] text-[10px] font-normal">coffee design</small>
//                                 <h1 className="text-[12px] text-black font-bold leading-4">Create beautiful loto art</h1>
//                                 <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col mb-6">
//                             <img src="../../course-img-3.avif" alt="" className="w-full h-[80px] object-cover" />
//                             <div className="flex flex-col space-y-1">
//                                 <small className="text-[#8a8888] text-[10px] font-normal">clock design</small>
//                                 <h1 className="text-[12px] text-black font-bold leading-4">Productive class: How to manage products</h1>
//                                 <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
//                             </div>
//                         </div>
//                     </div>