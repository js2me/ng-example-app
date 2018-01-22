export interface UserModel {
  name: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  organization: {
    org_type: string;
    official_name: string;
    address: string;
    allowed_routes: string;
  };
}
