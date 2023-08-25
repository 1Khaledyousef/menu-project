import food1 from './component/imges/1.png'
import food2 from './component/imges/2.png'
import food3 from './component/imges/3.png'

export const items = [
    { id: Math.random(), title: 'وجبه فطار', description: 'وصف الفطار', price: '100 $', category: 'فطار', img:"1.png"  },
    { id: Math.random(), title: 'وجبه غدا', description: 'وصف الفطار', price: '80 $', category: 'غدا', img:"2.png"   },
    { id: Math.random(), title: 'وجبه عشاء', description: 'وصف الفطار', price: '40 $', category: 'عشاء',img:"3.png"  },
    { id: Math.random(), title: 'وجبه غدا ممتاز', description: 'وصف الفطار', price: '30 $', category: 'غدا', img:"1.png"   },
    { id: Math.random(), title: 'وجبه عشاء درجه اولى', description: 'وصف الفطار', price: '50 $', category: 'عشاء', img:"2.png"   },
    { id: Math.random(), title: 'وجبه فطار', description: 'وصف الفطار', price: '50 $', category: 'فطار', img:"3.png" },
    { id: Math.random(), title: 'وجبه سناك', description: 'وصف الفطار', price: '50 $', category: 'سناك', img:"1.png"  }]



//     <Row  className='d-block'>
//         {itemdata.length>=1?(items.map(()=>{return(
// <Col>
//         <Card className="d-flex flex-row  mx-3 my-3" style={{ backgroundColor: '#F8F8F8' }}>
//                                 <Card.Img className="img-item" variant="top"    />
//                                 <Card.Body>
//                                     <Card.Title className="d-flex justify-content-between">
//                                         <div className="item-title">xxxxxxxx</div>
//                                         <div className="item-price">$$</div>
//                                     </Card.Title>
//                                     <Card.Text className="py-2">
//                                         <div className="item-description">xx xxx xxx xxx xxx x x xx xx x x  x xxx xx x</div>
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//         </Col>
//         )})):<h3>not fiund</h3>}
         
//     </Row>


// {
//     allcategory.length >= 1 ? (allcategory.map((cat) => {
//         return (
//             <div className=' categorybuttons justify-content-center text-center'>

//                 <Button onClick={() => onFilter(cat)} className='btn-search mx-2' >{cat}</Button>
//             </div>

//         )
//     })) : <h3> no actegory</h3>
// }