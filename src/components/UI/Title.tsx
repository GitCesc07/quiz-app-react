
export default function Title({ title }: { title: string }) {
    return (
        <>
            <h1 className="uppercase font-bold text-xl text-center border-b border-b-gray-400 px-6">{title}</h1>
        </>
    )
}
