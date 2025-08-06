import { assets } from '../assets/assets';

const Sidebar = () => {
    return (
        <div className="w-[25%] h-full p-2 flex flex-col gap-4 text-white">
            {/* Navigation Section */}
            <div className="bg-[#121212] p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-6 cursor-pointer hover:text-white/80">
                    <img src={assets.home_icon} alt="Home" className="w-6 h-6" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:text-white/80">
                    <img src={assets.search_icon} alt="Search" className="w-6 h-6" />
                    <p className="font-bold">Search</p>
                </div>
            </div>

            {/* Library Section */}
            <div className="bg-[#121212] rounded-lg flex-1 flex flex-col">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className='w-6 h-6' src={assets.stack_icon} alt="Library" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={assets.plus_icon} alt="Add" className="w-5 h-5 cursor-pointer hover:scale-110" />
                    </div>
                </div>
                
                <div className="p-4 bg-[#242424] mx-2 rounded-lg mb-2">
                    <h2 className="font-semibold mb-1">Create your first playlist</h2>
                    <p className="text-sm text-gray-300 mb-3">It's easy, we'll help you</p>
                    <button className='px-4 py-1.5 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition-transform'>
                        Create playlist
                    </button>
                </div>
                
                <div className="p-4 bg-[#242424] mx-2 rounded-lg mb-2">
                    <h2 className="font-semibold mb-1">Let's find some podcasts to follow</h2>
                    <p className="text-sm text-gray-300 mb-3">We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition-transform'>
                        Browse podcasts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;