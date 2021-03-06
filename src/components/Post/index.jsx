import React from 'react'
import './styles.css'
import Avatar from '@material-ui/core/Avatar'

function Post({ username, caption, imageUrl}) {
    return (
        <div className='post'>
            <div className='post-header'>
                <Avatar
                className='post-avatar'
                alt='IvyCao'
                src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>
            

            <img className='post-image' src={imageUrl} alt=''/>

            <h4 className='post-text'> <strong>{username}</strong> {caption}</h4>
            
        </div>
    )
}

export default Post
