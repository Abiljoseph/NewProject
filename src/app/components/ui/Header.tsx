
export default function Header() {
    return (
        <header className="bg-[var(--tertiary-color)] text-black p-5 px-15">
            <nav className="flex justify-between align-center">
                <div className="text-2xl font-bold">
                    <a href="/">My Website</a>
                </div>
                <div>
                    <ul className="flex space-x-4 pr-5">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Product</a></li>
                        <li><a href="/contact">Pricing Plans</a></li>
                        <li><a href="">Contact</a></li>
                        <li className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                                    src="https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg"
                                    alt="User profile"
                                />
                                <div className="text-sm">
                                    <div className="font-extrabold">
                                        <svg
                                            className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform font-extrabold"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm">
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}