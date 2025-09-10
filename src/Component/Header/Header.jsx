import './Header.css'


const InfItem = ({ label, value }) => {
    return (
        <>
            <div className="item">
                <span className="label">{label}:</span> {value}
            </div>
        </>
    )
}

export default function Header() {

    return (
        <>
            <header id='incre'>
                <div className="my-information">
                    <div className="info">
                        <h1>@Chen's Website</h1>
                        <InfItem label="Name" value='Incre' />
                        <InfItem label="Hobby" value='Anime and code' />
                        <InfItem label="Want" value='Engage in CS related work' />
                        <InfItem label="Why CS" value='Because I like it' />
                    </div>
                </div>
                <div className="img-avatar">
                    <img src='/yedou.jpg' alt='Avatar' />

                </div>
            </header>
        </>
    )
}