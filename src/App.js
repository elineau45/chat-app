import React from 'react';
import Contact from './components/Contact';
import PropTypes from 'prop-types';

// function App() {
//   return (
//     <div className="App">
//       <Contact name="Meghan Martin"
//         online={false}
//         avatar="https://randomuser.me/api/portraits/women/47.jpg" />

//       <Contact name="Billie Black"
//         online={false}
//         avatar="https://randomuser.me/api/portraits/women/3.jpg" />

//       <Contact name="Mattie Ray"
//         online={true}
//         avatar="https://randomuser.me/api/portraits/women/20.jpg" />
//     </div>
//   );
// }

const allcontacts = [{
  id: 1,
  name: "Meghan Martin",
  online: false,
  avatar: "https://randomuser.me/api/portraits/women/47.jpg",
},
{
  id: 2,
  name: "Billie Black",
  online: false,
  avatar: "https://randomuser.me/api/portraits/women/3.jpg",
},
{
  id: 3,
  name: "Mattie Ray",
  online: true,
  avatar: "https://randomuser.me/api/portraits/women/20.jpg",
}]

function App() {
  return (
    <div className="App">
      {allcontacts.map((contact) => (<Contact key={contact.id} contact={contact} />))}
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default App;