import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    const comments = [0,1,2]
    return (
        <div className='ui container comments'>
            {comments.map(curr => {
                return <ApprovalCard>
                    <CommentDetail 
                    name={faker.name.firstName()} 
                    avatar={faker.image.avatar()}
                    comment={faker.lorem.sentence()} />
                </ApprovalCard>
            })}
        </div>
    ) 
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)