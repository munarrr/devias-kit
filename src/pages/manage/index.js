import React from 'react';
import plus from '../../assets/plus-symbol.svg';
import './style.scss';
import Modal from 'react-modal'
import Item from './item';
// import {BtnGoBack} from '../../components/btns/index';
import axios from 'axios';


Modal.setAppElement('#root')
const Manage = () => {
  const [usersData, setUsersData] = React.useState([]);
  const [newUser, setNewUser] = React.useState({
    id: '',
    avatar: '',
    fullName: '',
    userID: '',
    email: '',
    phone: '',
    dateOfRegistry: '',
  });
  const [activeModal, setActiveModal] = React.useState(false);

  const handleClick = () => {
    setActiveModal(true);
  };
 

  const saveData = (event) => {
    setNewUser({
      id: '',
      avatar: event.target.form[1].value,
      fullName: event.target.form[0].value,
      userID: event.target.form[2].value,
      email: event.target.form[4].value,
      phone: event.target.form[3].value,
      dateOfRegistry: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsersData([...usersData, newUser]);
    setNewUser({
      id: '',
      avatar: '',
      fullName: '',
      userID: '',
      email: '',
      phone: '',
      dateOfRegistry: '',
    });
  };

  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);

  return (
    <section className='manage'>
     <Modal 
      isopen={false} 
        onRequestClose={() => {setActiveModal(false)}}
        contentLabel="Minimal Modal Example">

        <div className='modal'>
          <div className="modal__body">
            {/* <BtnGoBack onClick={ClickModal}/> */}
            <h3 className="modal__title">Create a new user</h3>
            <h6 className="modal__suptitle">Add main information about user</h6>
            <form className="modal__form" onSubmit={(event) => handleSubmit(event)}>
              <input
                onChange={(event) => saveData(event)}
                value={newUser.fullName}
                type='text'
                placeholder='?????????????? ?????? ????????????????????????'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.avatar}
                type='text'
                placeholder='?????????????? ???????? ?? ????????????????'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.userID}
                type='text'
                placeholder='?????????????? ID'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.phone}
                type='text'
                placeholder='?????????????? ?????????? ????????????????'
              />
              <input
                onChange={(event) => saveData(event)}
                value={newUser.email}
                type='text'
                placeholder='?????????????? ?????????? ????????????????????????'
              />
              <button>???????????????? ????????????????????????</button>
            </form>
          </div>
        </div>
      </Modal>
      <div className='manage__top'>
        <div className='row'>
          <div className='manage__filter'>Filter</div>
          <label className='manage__search'>
            <input type='text' placeholder='Search users by name, id' />
          </label>
        </div>
        <button onClick={() => handleClick} className='manage__add-user'>
          <img src={plus} alt='plus' />
          ADD USER
        </button>
      </div>
      <table className='manage__users'>
        <tbody>
        <tr className='manage__row'>
         <td className='col-3 manage__headers'>Selected 2 users</td>
         <td className='col-3 manage__headers'>User ID</td>
         <td className='col-3 manage__headers'>Phone Number</td>
         <td  className='col-3 manage__headers'>Email Address</td>
         <td className='col-1 manage__headers'>Account Created</td>
        </tr>
          </tbody>
        <Item users={usersData} />
      </table>
    </section>
  );
};

export default Manage;

{/* <table style={tableStyle}>
  <tbody>
    <tr style={rowStyle}>
      <td style={leftColumnStyle}>Battery</td>
      <td><StatsBar /></td>
    </tr>
  </tbody>
</table> */}
