import UserInfo from './UserInfo';
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {

        // Today date
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                      <div className="flex flex-row items-center gap-2 h-auto">

                            <div className="h-10 w-10 flex items-center justify-center bg-blue-500 rounded">
                                < HiShoppingCart className='h-8 w-8' />
                            </div>
                            
                            <div className='flex flex-col'>
                                <h2 className='text-2xl mb-0'>বাজার দর</h2>
                                <p>{date}</p>
                            </div>
                            
                        </div>

                    {/* User Sign and Profile */}
                    <div>
                        <UserInfo />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;