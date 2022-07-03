export default function HeadingButton({label}) {
    return (<>
        <h1>{label}</h1>
        <button className="heading-button">{label}</button>
    </>)
}