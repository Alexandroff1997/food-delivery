import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export interface UserPersistentState {
	jwt: string | null;
}

export interface UserState {
	jwt: string | null;
}

const initialState: UserState = {
	jwt: loadState<UserPersistentState>('userData')?.jwt ?? null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addJwt: (state, action: PayloadAction<string>) => {
			state.jwt = action.payload; 
		},
		logout: (state) => {
			state.jwt = null;
		}
	}
});

export const userActions = userSlice.actions;
export default userSlice.reducer;