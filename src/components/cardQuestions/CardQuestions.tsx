import CardQuery from "../CardQuery/CardQuery"
import Title from "../UI/Title"

export default function CardQuestions({ linkActive }: { linkActive: string }) {
    return (
        <div className="w-full mt-6 p-4 flex items-center justify-center flex-col">
            {
                linkActive === "NIIF Pymes" ?
                    (
                        <>
                            <Title title={linkActive} />
                            <CardQuery linkActive={linkActive} />
                        </>
                    )
                    :
                    linkActive === "Derecho Tributario" ?
                        (
                            <>
                                <Title title={linkActive} />
                                <CardQuery linkActive={linkActive} />
                            </>
                        )
                        :
                        linkActive === "Etica Profesional" ?
                            (
                                <>
                                    <Title title={linkActive} />
                                    <CardQuery linkActive={linkActive} />
                                </>
                            )
                            :
                            (null)
            }
        </div>
    )
}
