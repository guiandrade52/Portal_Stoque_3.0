/**
 * Action types
 */
export enum TasksTypes {
  LOAD_REQUEST = '@Tasks/LOAD_REQUEST',
  LOAD_SUCCESS = '@Tasks/LOAD_SUCCESS',
  LOAD_FAILURE = '@Tasks/LOAD_FAILURE',
  SELECT_TASK = '@Tasks/SELECT_TASK',
}

/**
 * Data types
 */

export interface Rat {
  Causa: string;
  DataFinal: string;
  DataInicio: string;
  Defeito: string;
  ExecutionId: number;
  NumeroVisita: number;
  Solucao: string;
}

export interface Cit {
  ExecutionId: number;
  DataInicio: string;
  DataFinal: string;
}

export interface Solucao {
  ActivitId: number;
  DataFinal: string;
  DataInicio: string;
  ExecutionId: number;
  SolucaoAplicada: string;
}

export interface Task {
  Anexos?: [];
  Bairro?: string;
  Cep?: string;
  Cidade?: string;
  Cit?: Cit;
  Classificacao?: string;
  ClienteAt?: string;
  Complemento?: string;
  Contato?: string;
  DataCr?: string;
  DataTr?: string;
  DataTs?: string;
  Descricao?: string;
  Email?: string;
  Estado?: string;
  ExecutionId?: number;
  GrupoServico?: string;
  Logradouro?: string;
  Numero?: string;
  Origem?: string;
  Produto?: string;
  Rats?: Rat[];
  Responsavel?: string;
  Serie?: string;
  Servico?: string;
  Situacao?: string;
  Solucao?: string;
  Telefone?: string;
  TipoOcorrencia?: string;
  UserPortal?: string;
  idSituacao: number;
}

export interface Data {
  tasks: Task[];
  totalOcor: number;
  totalPages: number;
}

/**
 * State Type
 */
export interface TasksState {
  readonly data: Data;
  readonly loading: boolean;
  readonly error: boolean;
  readonly selected: Task;
}
