import React from 'react'
import style from './Message.module.css'


type messageProps = {
    avatar: string,
    name: string,
    messageText: string,
    time: string,
}

function Message(props: messageProps) {
    return (
        <div className={style.wrap}>
            <div className={style.ava}><img src={props.avatar} alt="ava"/></div>
            <div className={style.message_window}>
                <div className={style.corner}></div>
                <div className={style.name}>{props.name}</div>
                <div className={style.messageText}>{props.messageText}<div className={style.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
