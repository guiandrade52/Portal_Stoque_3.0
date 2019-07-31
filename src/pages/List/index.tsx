import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadTasksRequest } from '~/store/modules/tasks/actions';
import { ApplicationState } from '~/store';

// Custom components
import { SubHeader, Progressbar } from '~/components';

export default function Dashboard() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: ApplicationState) => state.tasks);
  const filter = useSelector((state: ApplicationState) => state.filter.data);

  useEffect(() => {
    dispatch(loadTasksRequest(filter));
  }, [dispatch, filter]);

  if (tasks.error) {
    return (
      <>
        <SubHeader title="Listar tarefas" Links={[]} />
        <div>Encontramos um erro ao tentar recuperar suas ocorrências</div>
      </>
    );
  }

  if (tasks.loading) {
    return (
      <>
        <SubHeader title="Listar tarefas" Links={[]} />
        <Progressbar size={80} />
      </>
    );
  }

  return (
    <div>
      <SubHeader title="Listar tarefas" Links={[]} />
      Listar ocorrencias
    </div>
  );
}
