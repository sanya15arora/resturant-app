import React from 'react'
import "./style.css"
import Menu from "./menuData"
import MenuCard from './MenuCard'
import NavBar from './NavBar'

const uniqueCategory = [
    ...new Set(Menu.map((cur) => {
        return cur.category
    })), "All",
]


const Resturant = () => {
    const [menuData, setMenuData] = React.useState(Menu)
    const [menuList, setMenuList] = React.useState(uniqueCategory)

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Menu)
            return
        }

        const updatedList = Menu.filter((cur) => {
                return cur.category === category
            }
        )

        setMenuData(updatedList)

    }

    return (
        <>
            <NavBar menuList={menuList} filterItem={filterItem}/>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant

