import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {useGlobalContext} from '../contexts/ContextProvider'
import {links} from '../data/dummy'
const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize,currentColor}=useGlobalContext()
  const activeLink=`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg   text-md m-2`
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-gray-200 text-gray-700 text-md dark:hover:text-black hover:bg-light-gray m-2'
 
  const closeSideBar=()=>{
    if(activeMenu && screenSize<900)
    setActiveMenu(false)
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto
     md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={()=>{setActiveMenu(false)}}
          className='items-center gap-3 ml-3 mt-4 flex text-xl 
          font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware/><span>Shoppy</span> </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
                  <button type='button' onClick={()=>{setActiveMenu(prev=>!prev)}} className='text-xl mt-4 p-3 mr-2 rounded-full
                  hover:bg-light-gray block md:hidden'>
                    <MdOutlineCancel/>
                  </button>
            </TooltipComponent>
        </div>
        <div className='mt-10'>
            {
              links.map(item=>{
                return (<div key={item.title} >
                  <p className='text-gray-400 m-3 mt-4 uppercase bg-bl'>
                  {item.title}
                  </p>
                  {item.links.map(link=>{
                    return <NavLink to={`/${link.name}`} key={link.name} onClick={()=>closeSideBar()}
                    style={({isActive})=>({backgroundColor:isActive?currentColor:''})}
                    className={
                      ({isActive})=>{
                    return  isActive?activeLink:normalLink
                    }}>{link.icon} <span className='capitalize'>
                      {link.name}
                    </span>
                    </NavLink>
                  })}
                </div>)
              })
            }
        </div>
      </>)}
     </div>
  )
}

export default Sidebar