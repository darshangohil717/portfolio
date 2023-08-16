import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="w-full sticky top-0">
                <header className="flex w-full h-[100px] bg-[#5e72e4] justify-center items-center ">
                    <nav>
                        <div>
                            <Link className="m-2 text-white" to={'/'}><span className="text-white">Home</span></Link>
                            <span className="text-white"><Link className="m-2" to={'/'}>About Us</Link></span>
                            <span className="text-white"><Link className="m-2" to={'/'}>Contact Us</Link></span>
                        </div>
                    </nav>
                </header>

            </div>
        </>
    )
}

export default Header;