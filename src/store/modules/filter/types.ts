/**
 * Action types
 */
export enum FilterTypes {
  CHANGE_FILTER = '@filter/CHANGE_FILTER',
}

/**
 * Data types
 */

export interface Filter {
  search?: string;
  dateInit?: string;
  dateFinal?: string;
  contrato?: number;
  contato?: number;
  serie?: string;
  servico?: number;
  usuarioPortal?: number;
  parceiroAt?: number;
  parceiroAb?: number;
  tamPage: number;
  activePage: number;
}

/**
 * State Type
 */
export interface FilterState {
  readonly data: Filter;
  readonly actived: boolean;
}
