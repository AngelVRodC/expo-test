interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface GetUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

interface CreateUserRequest {
  name: string;
  job: string;
}


interface CreateUserResponse {
  id: string;
  name: string;
  job: string;
  createdAt: string;
}
