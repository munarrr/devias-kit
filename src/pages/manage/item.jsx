import React from 'react';

const Item = ({ users }) => {
  return (
    <React.Fragment>
      {users.map((item) => {
        return (
          <thead className='manage__row'>
            <tdbody className='col-3 user__row'>
              <img className='user__avatar' src={item.avatar} alt='avatar' />
              <span className='user__name'>{item.fullName}</span>
            </tdbody>
            <tdbody className='col-3 manage__headers'>{item.userID}</tdbody>
            <tdbody className='col-3 manage__headers'>{item.phone}</tdbody>
            <td className='col-3 manage__headers'>{item.email}</td>
            <tdbody className='col-1 manage__headers user__date'>{item.dateOfRegistry}</tdbody>
          </thead>
        );
      })}
    </React.Fragment>
  );
};

export default Item;
