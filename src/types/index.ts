export interface AuthContextType {
  isAuthenticated: boolean;
  role: string;
  isLoading: boolean;
  login: (token: string, expiryTime: string, userRole: string) => void;
  logout: () => void;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

export interface Organization {
  orgId: string;
  orgName: string;
  organizationId?: string;
  organizationName?: string;
  serviceUrl?: string;
  clientId?: string;
  clientSecret?: string;
  grantType?: string;
  authenticationUrl?: string;
  publicDid?: string;
}

export interface User {
  id: string;
  userId?: string;
  username: string;
  email: string;
  foundationID: string;
  statusId: number;
  verifierRole: {
    id: string;
    role: string;
  };
}

export interface Role {
  id: string;
  role: string;
}

export interface Schema {
  schemaId: string;
  schemaName: string;
  version: string;
  attributeNames: string[];
}

export interface ProofTemplate {
  id: string;
  templateId: string;
  name: string;
  version: string;
  description: string;
  verifierRoleIds: string[];
  payload: {
    schemas: Schema[];
  };
}

export interface FormData {
  [key: string]: any;
}

export interface TableColumn {
  id: string;
  header: string;
  accessorKey?: string;
  cell?: (info: any) => React.ReactNode;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface SidebarProps {
  onToggle: (collapsed: boolean) => void;
}

export interface TopNavbarProps {
  title: string;
  isSidebarCollapsed: boolean;
}

export interface BottomNavbarProps {
  isSidebarCollapsed: boolean;
}

export interface TableComponentProps {
  columns: TableColumn[];
  data: any[];
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AddOrganizationModalProps extends ModalProps {
  organization: Organization | null;
  onSuccess: () => void;
}

export interface WebHookModalProps extends ModalProps {
  organization: Organization;
  onSuccess: () => void;
}

export interface AddSchemaModalProps extends ModalProps {
  saveSchema: (schemaData: any) => void;
  existingSchemas?: Schema[];
}

export interface MainModalProps extends ModalProps {
  onSubmit: (data: any) => void;
  register: any;
  handleSubmit: any;
  errors: any;
  schemas: Schema[];
  openSchemaModal: () => void;
  deleteSchemaRow: (schemaId: string, attribute: string) => void;
  roles: Role[];
  isEditing: boolean;
  viewMode: boolean;
}