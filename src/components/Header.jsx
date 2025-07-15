

function Header() {
    return (
        <div className="mx-2 my-2 w-full bg-white h-15 font-sans">
            <ul className="flex gap-4 h-[100%] items-center">
                <li className="p-4"><a href="/">About</a></li>
                <li className="p-4"><a href="/">Jobs</a></li>
                <li className="p-4"><a href="">Apprenticeships</a></li>
            </ul>
        </div>
    )
}

export default Header;