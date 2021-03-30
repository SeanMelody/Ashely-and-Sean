import React, { useEffect, useState } from 'react'


const Messages = () => {
    const [savedMessages, setSavedMessages] = useState([])

    const getMessages = () => {
        console.log("messages")

        fetch(`/api/rsvps`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // Json that response
        })
            .then((response) => response.json())
            // Then get the data
            .then((data) => {
                // Console log the data 
                // console.log(data)

                // Call the set saved books function
                setSavedMessages(data)
                console.log(data)
            })
    }

    useEffect(() => {
        getMessages()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Messages</h1>
            {savedMessages.length ? (
                <div className="container">
                    {savedMessages.map((message) => (
                        <div key={message._id}>
                            <h3>From: {message.name}</h3>
                            <h3>Email: {message.email}</h3>
                            <h3>Message: {message.message}</h3>
                        </div>
                    )
                    )}
                </div>
            ) : (
                // Display this if there are no saved books yet
                <h3>No Messages Yet</h3>
            )
            }
        </div >
    )
}

export default Messages
