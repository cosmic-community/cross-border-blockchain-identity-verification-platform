// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// User interface
export interface User extends CosmicObject {
  type: 'users';
  metadata: {
    email: string;
    phone?: string;
    role: UserRole;
    blockchain_hash?: string;
    identity_verified?: boolean;
    document_hash?: string;
    zkp_public_key?: string;
    registration_date?: string;
    last_verification_date?: string;
  };
}

// Organization interface
export interface Organization extends CosmicObject {
  type: 'organizations';
  metadata: {
    country: string;
    industry?: string;
    contact_email: string;
    verification_count?: number;
    status: OrganizationStatus;
    registration_date?: string;
  };
}

// Verification Request interface
export interface VerificationRequest extends CosmicObject {
  type: 'verification-requests';
  metadata: {
    user?: User;
    organization?: Organization;
    status: VerificationStatus;
    blockchain_hash: string;
    request_date: string;
    verification_date?: string;
    zkp_proof?: string;
    smart_contract_address?: string;
  };
}

// Blockchain Log interface
export interface BlockchainLog extends CosmicObject {
  type: 'blockchain-logs';
  metadata: {
    transaction_type: TransactionType;
    user?: User;
    organization?: Organization;
    blockchain_hash: string;
    timestamp: string;
    block_number?: number;
    transaction_id?: string;
  };
}

// Type literals
export type UserRole = 'user' | 'verification-agency' | 'organization';
export type OrganizationStatus = 'active' | 'pending' | 'suspended';
export type VerificationStatus = 'pending' | 'approved' | 'rejected';
export type TransactionType = 'registration' | 'verification' | 'document-upload' | 'status-update';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Form data types
export interface RegistrationFormData {
  email: string;
  phone: string;
  role: UserRole;
  fullName: string;
}

export interface VerificationRequestFormData {
  userId: string;
  organizationId: string;
  purpose: string;
}

// Blockchain types
export interface BlockchainHash {
  hash: string;
  timestamp: string;
  algorithm: 'SHA-256';
}

export interface ZKPProof {
  proof: string;
  publicKey: string;
  verified: boolean;
}

export interface SmartContract {
  address: string;
  status: 'deployed' | 'pending' | 'executed';
  transactionHash: string;
}

// Type guards
export function isUser(obj: CosmicObject): obj is User {
  return obj.type === 'users';
}

export function isOrganization(obj: CosmicObject): obj is Organization {
  return obj.type === 'organizations';
}

export function isVerificationRequest(obj: CosmicObject): obj is VerificationRequest {
  return obj.type === 'verification-requests';
}

export function isBlockchainLog(obj: CosmicObject): obj is BlockchainLog {
  return obj.type === 'blockchain-logs';
}