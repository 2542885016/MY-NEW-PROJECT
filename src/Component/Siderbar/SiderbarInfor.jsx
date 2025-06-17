import React, { useState, useEffect } from 'react'

import './siderbar.css'

import { countdown } from '../../utils/Countdown';


const SiderbarInfor = () => {
    const [greeting, setGreeting] = useState('')
    const [countdownText, setCountdownText] = useState('')

    useEffect(() => {


        const updateGreeting = () => {
            const now = new Date()
            const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
            setGreeting(` Good ${days[now.getDay()]}! `)
        }

        const updateCountdown = () => {
            /* to iterate
            const now = new Date()
            const midnight = new Date()
            midnight.setHours(24, 0, 0, 0)

            const diff = midnight - now
            const hours = Math.floor(diff / (1000 * 60 * 60))
            const minutes = Math.floor(hours / (1000 * 60 * 60) / (1000 * 60))
            */
            setCountdownText(countdown())
        }

        updateGreeting()
        updateCountdown()

        const timer = setInterval(() => {
            updateCountdown()
        }, 1000);

        return () => clearInterval(timer)

    }, [])

    return (
        <>
            <div className="sidebar-info">
                <div className="greeting fade-in">{greeting}</div>
                <div className="countdown fade-in">{countdownText}</div>
            </div>


        </>
    )

}

export default SiderbarInfor