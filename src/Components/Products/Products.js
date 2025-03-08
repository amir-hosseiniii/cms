import React from 'react'
import ErrorBox from '../Errorbox/ErrorBox'
import Addnewproduct from '../Addnewproduct/Addnewproduct'
import Productstable from '../Productstable/Productstable'
export default function Products() {
  return (
    <div>
      <Addnewproduct/>
      <ErrorBox msg={"هیچ محصولی موجود نیست"}/>
      <Productstable/>
    </div>
  )
}
