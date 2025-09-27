import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src='https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903773_1280.jpg' alt=''/>
            <div>
                <p>Pizza</p>
                <p>$ 299</p>
            </div>
        </div>
        <Button variant='contained' className='cursor-not-allowed'>
            PENDING
        </Button>
    </Card>
  )
}
