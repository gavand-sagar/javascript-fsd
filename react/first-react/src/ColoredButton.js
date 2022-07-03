export default function ColoredButton({ label }) {

    let styleObject = {
        'background-image': 'linear-gradient(to right, rgb(123, 16, 103), rgb(217, 27, 58))',
        'border': 'none',
        'height': '20px',
        'border-radius': '10px',
        'color': 'white',
    }

    return (
        <>
            <button style={styleObject}>{label}</button>
        </>
    )
}