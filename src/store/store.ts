import { legacy_createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import rootReducer from './root-reducer';


export const store = legacy_createStore(rootReducer, devToolsEnhancer());

export type RootState = ReturnType<typeof rootReducer>;
