
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
           <li className="flex items-center space-x-2">
            <img 
              className="w-10 h-10 rounded-full object-cover" 
              src="https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg" 
              alt="Profile"
            />
            <select className="bg-transparent border-none focus:ring-0 text-gray-700">
              <option value="option1">Profile</option>
              <option value="option2">Settings</option>
              <option value="option3">Logout</option>
            </select>
          </li>
          <li><a className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white px-4 py-2 rounded-full">Get Started</a></li>
        </ul>
        </div>
      </nav>
    </header>
  )
}