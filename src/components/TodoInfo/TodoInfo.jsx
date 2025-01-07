import {UserInfo}  from '../UserInfo'
export const TodoInfo = ({TodoElementInfo}) => {
  const { id , completed , title , user } = TodoElementInfo
  return (
  <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`} key={id}>
    <h2 className="TodoInfo__title">{title}</h2>
    {user ? <UserInfo user={user} /> : ''}

  </article>
)}
