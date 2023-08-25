import React from 'react'
import { Button } from 'react-bootstrap'
export const Category = ({ fillterbycategory, allcategory }) => {

    const onFilter = (cat) => {
        fillterbycategory(cat)
    }
    return (
        <div className=' categorybuttons justify-content-center text-center'>
            {
                allcategory.length >= 1 ? (allcategory.map((cat) => {
                    return (
                        <div className='d-inline-block categorybuttons justify-content-center text-center  '>
                            <Button className='btn-search mx-2' onClick={() => onFilter(cat)}   >{cat}</Button>
                        </div>
                    )
                })) : <h4>لا يوجد تصنيفات لاان</h4>

            }

        </div>
    )
}
