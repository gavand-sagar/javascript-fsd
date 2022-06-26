export default function Comment({ heading, username, comment }) {
    return (<>

        <div className="comment-container">
            <h1>{heading}</h1>
            <p>
                <span className="off-white">by</span> <span className="text-blue">{username}</span>
            </p>
            <p>{comment}</p>
        </div>

    </>)
}