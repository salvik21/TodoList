import React from 'react';
import { getTodoById } from '../action';
import LinkAtom from '../components/atoms/Link/LinkAtom';
import EditForm from '../components/Molecules/EditForm/EditForm';
import { EditPageTitle, BackButton, ErrorMessageTask } from '../../../utils/constants'

export const dynamic = 'force-dynamic';


const SingleTodoPage = async ({ params }: { params: { id: string } }) => {
  const task = await getTodoById(params.id) ;
  if (!task) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800">{ErrorMessageTask}</h2>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <LinkAtom
          href="/"
          text={BackButton}
          className="btn btn-accent rounded-lg shadow transition hover:scale-105"
        />
        <h1 className="text-2xl font-bold text-gray-800">{EditPageTitle}</h1>
      </div>

      <div className="
        [&_input]:border-2 
        [&_input]:border-accent 
        [&_input]:rounded-xl 
        [&_input]:bg-accent/10
        [&_input]:focus:ring-2 
        [&_input]:focus:ring-accent 
        [&_input]:focus:border-accent
        [&_textarea]:border-2 
        [&_textarea]:border-accent 
        [&_textarea]:rounded-xl 
        [&_textarea]:bg-accent/10
        [&_textarea]:focus:ring-2 
        [&_textarea]:focus:ring-accent 
        [&_textarea]:focus:border-accent
        bg-white rounded-2xl shadow-lg p-8 transition
      ">

        <EditForm task={task} />
      </div>
    </div>
  );
};

export default SingleTodoPage;
