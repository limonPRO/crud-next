import React from 'react'
import AddItems from './AddItems'
import Allitems from './Allitems'
import UpdateItems from './UpdateItems'

function Items() {
  return (
    <div>

        <h1>crud items</h1>

        <div>
            <AddItems/>
        </div>
        <div>
            <Allitems/>
        </div>
        <div>
            {/* <UpdateItems/> */}
        </div>
    </div>
  )
}

export default Items