//This class contains the information of each project

import Cleverchat from '../assets/Images/CC.jpg'
import TheForm from '../assets/Images/Forms.jpg'
import Shopfies from '../assets/Images/Shop.jpg'
import Portfolio from '../assets/Images/Portfolio.jpg'

export const ProjectItems = [
    {
        id: 1,
        name: "CleverChat",
        used: "NodeJS, JavaScript, Heroku, Postman, Android Studio, Java, PostgreSQL",
        date: "Nov 2021 - Dec 2021",
        img: Cleverchat,
        link: "/Cleverchat"
    },
    {
        id: 2,
        name: "Login - Register Forms",
        used: "Html, Css",
        date: "Jan 2022",
        img: TheForm,
        link: "/Form"
    },
    {
        id: 3,
        name: "Shopfies",
        used: "PHP, Html, Css, GCloud(GCP), Bootstrap",
        date: "Nov 2021 - Dec 2021",
        img: Shopfies,
        link: "/Shopfies"
    },
    {
        id: 4,
        name: "Portfolio",
        used: "ReactJS, Styled-component",
        date: "January 2022",
        img: Portfolio,
        link: "/"
    }
]