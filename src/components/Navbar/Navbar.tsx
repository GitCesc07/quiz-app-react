import { useState } from "react";
import { linksNavbar } from "../consts/links-navbar";
import CardQuestions from "../cardQuestions/CardQuestions";

export default function Navbar() {

    const [linkActive, setLinkActive] = useState("");

    return (
        <div>
            <nav className="flex items-center justify-center flex-col md:flex-row gap-y-6 md:gap-x-4 w-full">
                {
                    linksNavbar.map((link) => (
                        <button
                            key={link.textLinks}
                            type="button"
                            className={`text-lg font-bold hover:border-b-2 hover:border-b-blue-500 transition-all duration-150 rounded-b-md px-4 outline-none ${linkActive === link.textLinks && "border-b-2 border-b-blue-500 rounded-md"}`}                            
                            onClick={() => {                                
                                setLinkActive(link.textLinks);
                            }}
                        >
                            {link.textLinks}
                        </button>
                    ))
                }
            </nav>

            {
                linkActive && (
                    <CardQuestions linkActive={linkActive} />
                )
            }
        </div>
    )
}
