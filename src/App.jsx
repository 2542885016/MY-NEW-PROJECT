import { useEffect, useState } from 'react'

import {
  Footer,
  MainContents,
  Header,
  TaskInput,
  TaskList,
  QuoteCard,
  KnowledgeCard,
  Messageboard,
  Weather,
  SiderBar,
  MarqueeDemo,
  VideoList
} from './Component';

import { getTasks, saveTasks, CheckMidnightReset } from './utils/storage';

import showConfetti from './utils/confetti'

import '../src/utils/i18n'  // 初始化 语言库

import BlogPage from './pages/BlogPage'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'


//console.log("👀 VideoList loaded");


export default function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const storedTasks = getTasks()
    const shouldReset = CheckMidnightReset()

    if (shouldReset) {
      // ✅ 记录今天日期
      localStorage.setItem('tasks', JSON.stringify([]))  // ✅ 清空任务
      setTasks([])

    } else if (storedTasks && storedTasks.length > 0) {
      const storedTasks = getTasks()
      setTasks(storedTasks)

    }

  }, [])

  // 当任务列表更新时，保存到 localStorage
  useEffect(() => {

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

        <Weather/>

        <section id="to-do-list" className='section'>
          <TaskInput setTasks={setTasks} />
          <TaskList setTasks={setTasks} tasks={tasks}/>

          {/* 添加 Celebrate 按钮 */}
          <button onClick={showConfetti}>Celebrate 🎉</button>
        </section>

        <div className="card">
          <section id="quote" className='section'><QuoteCard /></section>
          <section id="knowledge" className='section'><KnowledgeCard /></section>
          <section id="message" className='section'><Messageboard /></section>
        </div>

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