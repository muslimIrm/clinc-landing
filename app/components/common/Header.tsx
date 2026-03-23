"use client"
import Image from "next/image"
import Container from "./Container"
import Button from "./Button"
import { useEffect, useState } from "react"
import Link from "next/link"

import { MdArrowOutward } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";


// import Logo from "/clincLogo.avif"

interface NavType {
    id: number,
    title: string,
    link: string
}

const navbar: NavType[] = [
    {
        id: 0,
        title: "الصفحة الرئيسية",
        link: "#home"
    }, {
        id: 1,
        title: "عنّا",
        link: "#about"
    }, {
        id: 2,
        title: "الخدمات",
        link: "#services"
    }, {
        id: 3,
        title: "الاطباء",
        link: "#doctors"
    }, {
        id: 4,
        title: "اسئلة شائعة",
        link: "#qfa"
    },
]
const Header = ({ isHome = true }: { isHome: boolean }) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <div className={`w-screen h-18 fixed z-9999 ${isScrolled ? "bg-background/70 backdrop-blur-2xl border-b border-primary" : "bg-transparent"}`}>
            <Container className="flex items-center justify-between !py-9">
                <Link href={"/"} className="flex !gap-2 items-center justify-center">
                    <Image width={50} height={50} src={"/clincLogo.avif"} alt="logo" className="rounded-xl"/>
                    <h1 className="text-xl font-bold">صحة</h1>
                </Link>
                {
                    isHome ?
                        <>
                            <div className="flex items-center max-md:hidden !gap-5 justify-center">
                                {
                                    navbar && navbar.map((nav: NavType) => (
                                        <a key={nav.id} href={nav.link} className="text-lg hover:text-primary hover:underline translate duration-300 cursor-pointer">{nav.title}</a>

                                    ))
                                }
                            </div>
                            <div className="flex items-center gap-4!">
                                <Link href="/my-appointment" className="flex flex-col items-center text-primary hover:text-secondary transition-all active:scale-90 hover:scale-110 duration-300">
                                    <FaCalendarAlt className="w-6 h-6" />
                                    <span className="text-[10px] font-bold">مواعيدي</span>
                                </Link>                            
                                <Button title="تواصل معنا" href="#booking" />
                            </div>

                        </>
                        :
                        <div>
                            <Link href="/" className="!px-6 !py-2 max-md:px-4! max-sm:text-sm shadow-md transition-all duration-300  hover:shadow-lg bg-main text-white rounded-3xl text-lg flex !gap-2 items-center group">
                                العودة للصفحة الرئيسية
                                <MdArrowOutward className={` rotate-270 text-xl group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-2 translate duration-300`} />
                            </Link>
                        </div>
                }
            </Container>

        </div>
    )
}


export default Header