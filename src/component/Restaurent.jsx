import React from 'react'

import {Card, IconButton,Chip} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Restaurent() {
  return (
    <Card className='m-5 w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] object-cover rounded-t-md' src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <Chip 
            size="small"
            className="absolute left-2 top-2"
            color={true?"success":"error"}
            label={true?"open":"closed"}

            />
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>Indian Fast Food</p>
                    <p className='text-gray-500  text-sm'>Let food be the medicine and medicine be the food.</p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>

            
        </div>
    </Card>
  )
}

export default Restaurent
