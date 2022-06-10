import React from 'react'


const UserSettings = ({ fullName, setFullName, email, setEmail, profileImage, setProfileImage, password, setPassword, onFormSubmit }) => {


    return (

        <>
        <form
        onSubmit={onFormSubmit}
        >

        <label htmlFor="fullname">Full name</label>
        <input
        id="fullname"
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        />

        <label 
        htmlFor="email">Email</label>
        <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} 
        />

        {/* <label 
        htmlFor="profile-image">Profile image</label>
        <input
        id="profile-image"
        type="image"
        value={profileImage}
        onChange={(event) => setProfileImage(event.target.value)} 
        /> */}

        <label 
            htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
            />
        </form>

    </>
    )

}


export default UserSettings 