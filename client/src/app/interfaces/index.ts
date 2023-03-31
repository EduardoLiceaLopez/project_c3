export interface UserData {
    id: number;
    name: string;
    middle_name: string;
    last_name: string;
    curp: string;
    rfc: string;
    phone_number: string;
    email: string;
    user_type_id: number;
  }
  
  export interface User {
    users: UserData[];
  }
  
  export interface UserAccessData {
    id: number;
    user_id: number;
    user_name: string;
    password: string;
    user_role: string;
  }
  
  export interface UserAccess {
    access: UserAccessData[];
  }
  
  export interface UserTypes {
    id: number;
    name: string;
    description: string;
  }
  
  export interface UserType {
    userTypes: UserTypes[];
    types: UserTypes[];
  }

  export interface LoginResponse {
    success: boolean;
    message: string;
    login: {
      username: string;
      email: string;
      role: string;
      token: string;
    };
  }  
  
  