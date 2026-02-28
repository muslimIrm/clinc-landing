"use client"
import Image from "next/image"
import Container from "./Container"
import Button from "./Button"
import { useEffect, useState } from "react"
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

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 50){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll",handleScroll)

        return()=> window.removeEventListener("scroll", handleScroll)
    },[])


    return (
        <div className={`w-screen h-18 fixed z-9999 ${isScrolled? "bg-background/70 backdrop-blur-2xl border-b border-primary": "bg-transparent"}`}>
            <Container className="flex items-center justify-between !py-9">
                <div className="flex !gap-1 items-center justify-center">
                    <Image width={52} height={52} src={"/clincLogo.avif"} alt="logo" />
                    <h1 className="text-xl font-bold">صحة</h1>
                </div>
                <div className="flex items-center max-md:hidden !gap-5 justify-center">
                    {
                        navbar && navbar.map((nav: NavType) => (
                            <a key={nav.id} href={nav.link} className="text-lg hover:text-primary hover:underline translate duration-300 cursor-pointer">{nav.title}</a>

                        ))
                    }
                </div>
                <div>
                    <Button title="تواصل معنا" href="#booking"/>
                </div>
            </Container>

        </div>
    )
}


export default Header