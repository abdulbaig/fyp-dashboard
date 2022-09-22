// import React from 'react'
// import './Layout.css'
// import { makeStyles } from '@material-ui/core'
// import { Drawer } from '@material-ui/core'
// import { Typography } from '@material-ui/core'
// import { List } from '@material-ui/core'
// import { ListItem } from '@material-ui/core'
// import { ListItemIcon } from '@material-ui/core'
// import { ListItemText } from '@material-ui/core'
// import { SubjectOutlined } from '@mui/icons-material'
// import { AddCircleOutlineOutlined } from '@mui/icons-material'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Requests } from '../components/Requests'

// const drawerWidth = 240

// const useStyles = makeStyles({
//     page: {
//         background: '#f9f9f9',
//         width: '100%'
//     },

//     drawer: {
//         width: drawerWidth
//     },

//     drawerPaper: {
//         width: drawerWidth
//     },

//     root: {
//         display: 'flex'
//     }
// })

// export const Layout = ({ children }) => {
//     const classes = useStyles()
//     // const navigate = useNavigate();

//     // const handleClick = () => {
//     //     navigate('/Requests');
//     //   };

//     // let navigate = useNavigate();
//     // const [component, setComponent] = useState('AddMarket')
    
//     // {
//     //     component === 'AddMarket' ?
//     //     <AddMarket />
//     //     :
//     //     component === 'account' ?
        
//     //     <Requests />
        
//     // }


 

//     const menuItems = [
//         {
//             text: 'my notes',
//             icon: <SubjectOutlined color="secondary" />,
//             path: '/AddMarket'
            
//         },
//         {
//             text: 'your notes',
//             icon: <AddCircleOutlineOutlined color="secondary" />,
//             path: '/Requests'
            
//         }
//     ]

//   return (
//     <>
//     <div className='Layout-Main'>
//     <div className={classes.root}>
//         <Drawer
//         className={classes.drawer}
//         variant='permanent'
//         anchor='left'
//         classes={{ paper: classes.drawerPaper }}
//         >
//             <div>
//                 <Typography variant="h5">
//                     Dashboard
//                 </Typography>
//             </div>

//         {/* list / links */}

//         <List>
//             {menuItems.map(item => (
//                 <Link to='/Requests'>
//                 <ListItem
//                     button
//                     key={item.text}
                   
//                 >
//                     <ListItemIcon>
//                         {item.icon}
//                     </ListItemIcon>
//                     <ListItemText primary={item.text} />

//                 </ListItem>
//                 </Link>
//             ))}
//         </List>

//         </Drawer>
//         <div className={classes.page}>
//             {/* { children } */}
//             <Requests />
//         </div>
//         </div>
//         </div>
//     </>
//   )
// }
