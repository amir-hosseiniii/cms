import React, { useState } from 'react';
import ErrorBox from '../Errorbox/ErrorBox';
// import DeleteModal from '../deletemodal/DeleteModal';

export default function Comments() {
  const [showModal, setShowModal] = useState(true); // نمایش اولیه مودال

  return (
    <div>
      <ErrorBox msg={"هیچ کامنتی موجود نیست"} />
      {/* {showModal && <DeleteModal onClose={() => setShowModal(false)} />} */}
    </div>
  );
}
