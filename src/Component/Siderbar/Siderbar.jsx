import React, { useEffect, useState } from 'react'
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import StarIcon from '@mui/icons-material/Star'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import MessageIcon from '@mui/icons-material/Message'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'

import './siderbar.css'
import SiderbarInfor from './SiderbarInfor'

const Siderbar = () => {
    const [open, setOpen] = useState(false)
    const [firstOpen, setFirstOpen] = useState(false)
    const [animate, setAnimate] = useState(false)

    const toggleSiderbar = () => setOpen(prev => !prev)

    useEffect(() => {
        if (open && !firstOpen) {
            setFirstOpen(true)
        }

        if (open) {
            setAnimate(true)
            setTimeout(() => {
                setAnimate(false)
            }, 300) // Duration of the animation
        }
    }, [open])

    const handleNav = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            setOpen(false)
        }
    }

    const menuItems = [
        { label: ' Daily one sentence', id: 'quote', icon: <StarIcon /> },
        { label: ' Knowledge', id: 'knowledge', icon: <LightbulbIcon /> },
        { label: ' Message Board', id: 'message', icon: <MessageIcon /> },
        { label: ' To-Do-List', id: 'to-do-list', icon: <CheckCircleIcon /> },
        { label: ' Marquee-flash', id: 'marquee', icon: <FlashOnIcon /> },
        { label: ' My recommend video', id: 'videolist', icon: <VideoLibraryIcon /> },
    ]



    return (
        <>
            <div
                className={`Siderbar-btn ${open ? 'open' : ''}`}
                onClick={toggleSiderbar}>
                <MenuIcon
                    fontSize="large"
                    sx={{
                        color: open ? '#fff' : 'black',
                        transition: 'color 0.3s ease'
                    }}
                />
            </div>

            <Drawer
                className='drawer'
                anchor='right'
                open={open}
                onClose={toggleSiderbar}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 240,
                        paddingTop: '64px',
                        backgroundColor: '#1e1e2f', // ✅ 深色背景
                        color: '#fff' // ✅ 白色文字
                    }
                }}
                ModalProps={{ keepMounted: true }}
            >
                <div className={animate ? 'sidebar-animated-enter' : ''}>
                    <List>
                        <SiderbarInfor />
                        {menuItems.map((item, index) => (

                            <ListItemButton
                                key={index}
                                onClick={() => {
                                    toggleSiderbar();
                                    handleNav(item.id);
                                }}>
                                {React.cloneElement(item.icon, {
                                    sx: {
                                        color: 'dodgerblue',
                                        fontSize: 26,
                                        marginRight: 1,
                                        transition: 'transform 0.3s ease, color 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.2)',
                                            color: '#fff176',
                                        },
                                    },
                                })}

                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </div>
            </Drawer>
        </>
    )
}

export default Siderbar




/* to iterate over the list of items
                           <ListItemButton>
                               <ListItemText primary='📌 Daily one sentence'></ListItemText>
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText primary='🧠 Knowledge'></ListItemText>
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText primary='💬 Message board'></ListItemText>
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText primary='📝 ToDo list'></ListItemText>
                           </ListItemButton>
                       */