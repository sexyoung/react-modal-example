import React, { useState } from 'react';

import Modal from 'components/Modal';

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={setShow.bind(this, true)}>
        show modal
      </button>
      {show && (
        <Modal onClose={setShow.bind(this, false)}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci similique excepturi dolorum! Temporibus voluptatem ut asperiores ipsam, ea blanditiis odio aspernatur in quae debitis aliquam! Laboriosam quidem nihil fugiat delectus?
          Dolor, ducimus? Adipisci omnis beatae officiis quis quasi eveniet voluptate, odio tempora, impedit nesciunt ducimus magni neque suscipit aliquam in at autem eum modi, eligendi sunt saepe optio. Repellendus, ipsa?
          Sit molestiae illo eaque est? Sapiente dolores rerum voluptatibus porro quasi debitis, eligendi cum, laudantium laboriosam et quas consequatur molestias aut optio provident error, explicabo exercitationem aliquid architecto dolorum quia?
        </Modal>
      )}
    </div>
  );
}

export default App;
