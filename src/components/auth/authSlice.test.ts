import authReducer, { loginStart, loginSuccess, loginFailure, logout } from './authSlice';
import type { AuthState } from './authTypes';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

describe('authSlice', () => {
  it('should handle loginStart', () => {
    const state = authReducer(initialState, loginStart());
    expect(state.isLoading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle loginSuccess', () => {
    const user = { id: '1', name: 'John', email: 'john@test.com', role: 'editor' as const };
    const state = authReducer(initialState, loginSuccess(user));
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual(user);
  });

  it('should handle loginFailure', () => {
    const state = authReducer(initialState, loginFailure('Invalid credentials'));
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe('Invalid credentials');
  });

  it('should handle logout', () => {
    const loggedInState: AuthState = {
      ...initialState,
      isAuthenticated: true,
      user: { id: '1', name: 'John', email: 'j@t.com', role: 'viewer' },
    };
    const state = authReducer(loggedInState, logout());
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });
});
