import React from 'react';
import { getTodoById } from '../action';
import LinkAtom from '../components/atoms/Link/LinkAtom';
import EditForm from '../components/Molecules/EditForm/EditForm';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    id: string;
  };
}

const SingleTodoPage = async ({ params }: PageProps) => {
  const task = await getTodoById(params.id);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <LinkAtom
          href="/"
          text="← Back"
          className="btn btn-accent rounded-lg shadow transition hover:scale-105"
        />
        <h1 className="text-2xl font-bold text-gray-800">Edit Task</h1>
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
