'use client';
import { useState } from 'react';
// export const metadata = {
//   title: 'Layout - Plots',
//   description: 'Plots around bangalore',
// };
import AddNewLayout from './AddNewLayout';
import AllLayouts from './allLayouts';

export default function Dashboard() {
  const [newLayoutModal, setNewLayoutModal] = useState(false);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"></div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <AllLayouts setModal={setNewLayoutModal} />
      </div>
      <AddNewLayout modal={newLayoutModal} setModal={setNewLayoutModal} />
    </div>
  );
}
