import { Outlet } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function ProtectedRoute({ unauthenticatedElement = null }) {
  const { isAuthenticated, isLoadingAuth, isLoadingPublicSettings } = useAuth();

  if (isLoadingAuth || isLoadingPublicSettings) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : unauthenticatedElement;
}
