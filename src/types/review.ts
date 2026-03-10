export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}
