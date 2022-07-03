import { useState } from "react"

export default function ExpandCard({ heading, content }) {

    //css styles approach
    // let [contentStyle, SetContentStyle] = useState({
    //     'display': 'block'
    // })


    let [value, setValue] = useState(true)


    let toggleContent = () => {

        //css styles approach
        // if (contentStyle.display == 'none') {
        //     SetContentStyle({
        //         display: 'block' // visible
        //     })
        // } else {
        //     SetContentStyle({
        //         display: 'none'  //hidden
        //     })
        // }


        // conditional rendering
        if (value == true) {
            setValue(false)
        } else {
            setValue(true)
        }

    }
    return (<>
        <div className="card-container">
            <div onClick={toggleContent} className="heading">
                {heading}
            </div>
            <div className="Content">
                {value && content}
            </div>

            {/* <div style={contentStyle} className="Content">
                {content}
            </div> */}
        </div>
    </>)
}