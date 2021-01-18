import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; texto: string }>()
);

export const borar = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()
);

export const togleAll = createAction(
  '[TODO] togleAll Todo',
  props<{ completado: boolean }>()
);
