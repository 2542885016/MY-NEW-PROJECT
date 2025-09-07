import { useEffect, useState } from 'react'
import Footer from './Component/Footer/Footer'
import MainContents from './Component/Footer/mainContents'

import Header from './Component/Header/Header'


import TaskInput from './Component/Todo_list/TaskInput'

import TaskList from './Component/Todo_list/TaskList'
import Weather from './Component/Weather/Weather'

import showConfetti from './utils/confetti'


import QuoteCard from './Component/Cards/QuoteCard'
import KnowledgeCard from './Component/Cards/KnowledgeCard'
import MessageCard from './Component/Cards/Messageboard'


import { getTasks, saveTasks, CheckMidnightReset} from './utils/storage'

import SiderBar from './Component/Siderbar/Siderbar'

import MarqueeDemo from "./Component/Marquee/Marquee";

import VideoList from './Component/ThoughtVideoCard/VideoList'

import BlogPage from './pages/BlogPage'
import { BrowserRouter as Router } from 'react-router-dom'


import './index.css'


//console.log("👀 VideoList loaded");


export default function App() {
  const [tasks, setTasks] = useState([])


  useEffect(() => {

    const storedTasks = getTasks()

    //console.log("📦 页面加载时，读取到的 localStorage 数据：", localStorage.getItem('tasks'))
    //console.log("📦 读取的任务数据：", storedTasks)


    const shouldReset = CheckMidnightReset()

    //console.log("🕓 是否应该清空任务（跨天）？", shouldReset)/////


    if (shouldReset) {

      //console.log("🌙 新的一天，清空任务")/////

      //updateLastDate()           // ✅ 记录今天日期
      localStorage.setItem('tasks', JSON.stringify([]))  // ✅ 清空任务
      setTasks([])
    } else if (storedTasks && storedTasks.length > 0) {

      // console.log("📦 读取 localStorage 中已有的任务")

      const storedTasks = getTasks()

      // console.log("📋 读取结果：", storedTasks)

      setTasks(storedTasks)
    }

  }, [])


  // 当任务列表更新时，保存到 localStorage
  useEffect(() => {

    console.log('🎯 当前任务列表更新为:', tasks)

    saveTasks(tasks)
  }, [tasks])

  

  return (
    <>
      <MainContents/>
      <Footer/>

      <div id="incre">
        <Header/>
      </div>


      <main className='w-full min-h-screen p-4 flex flex-wrap justify-center gap-4'>

        <div className="card">
          <section id="quote" className='section'><QuoteCard /></section>
          <section id="knowledge" className='section'><KnowledgeCard /></section>
          <section id="message" className='section'><MessageCard /></section>
        </div>

        <section id="to-do-list" className='section'>
          <TaskInput setTasks={setTasks} />
          <TaskList setTasks={setTasks} tasks={tasks}/>

          {/* 添加 Celebrate 按钮 */}
          <button onClick={showConfetti}>Celebrate 🎉</button>
        </section>

        <Weather/>

      </main>

      <section id="marquee" className='section'><MarqueeDemo /></section>


      <div className="p-8" >

        <section id="videolist" className='section'>
          <h1 className="text-2xl font-bold text-center mb-6">
            my recommend something
          </h1>
          <VideoList/>
        </section>
      </div>

      <div className="blog">
        <Router>
          <BlogPage/>
        </Router>
      </div>

      <div className="siderbar">
        <SiderBar/>
      </div>

    </>
  )
  //return要写在export函数里面
}