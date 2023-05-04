const Footer = () => {
  return (
    <footer className=" bg-black">
      <div className="px-4 divide-y py-6 relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-6 lg:pb-1">
        <div className="md:flex gap-28">
          <div>
            <h2 className="text-white text-2xl font-bold">Chef's Corner</h2>
            <p className="text-white my-5">
              Chef's Corner is a platform that <br /> provides best services and
              try to <br /> innovate new recipes.
            </p>
            <div className="flex gap-5 mb-12">
              <img
                className="h-12"
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt=""
              />
              <img
                className="h-12"
                src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                alt=""
              />
              <img
                className="h-12"
                src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
                alt=""
              />
            </div>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Company</h2>
            <p>About Us</p>
            <p>Work</p>
            <p>Latest</p>
            <p>Chef's Careers</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Product</h2>
            <p>Popular Recipes</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Support</h2>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Be chefs</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Contact</h2>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
            <p>New York City, USA</p>
          </div>
        </div>
        <div className="py-6 text-sm  text-gray-400  flex justify-between">
          <span>© 2023 Chef's Corner. All rights reserved.</span>
          <span>Powered by Chef's Corner</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
