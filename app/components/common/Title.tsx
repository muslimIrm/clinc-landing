

const Title = ({ title }: { title: string }) => {

    return (
        <div className="w-fit h-fit text-center rounded-3xl border border-muted !px-6 !py-1">
            <h1 className="text-black text-[16px]">{title}</h1>
        </div>
    )
}


export default Title