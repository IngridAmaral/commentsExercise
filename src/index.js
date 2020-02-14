import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                name={faker.name.firstName()+' '+faker.name.lastName()} 
                avatar={faker.image.avatar()}
                comment={faker.lorem.sentence()} />
            </ApprovalCard>
            
            <CommentDetail 
              name={faker.name.firstName()+' '+faker.name.lastName()} 
              avatar={faker.image.avatar()}
              comment={faker.lorem.sentence()} />
            <CommentDetail 
              name={faker.name.firstName()+' '+faker.name.lastName()} 
              avatar={faker.image.avatar()}
              comment={faker.lorem.sentence()} />
        </div>
    ) 
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)